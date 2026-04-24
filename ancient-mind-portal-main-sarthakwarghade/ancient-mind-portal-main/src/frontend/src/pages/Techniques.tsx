import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import { useState } from "react";
import { CategoryBadge } from "../components/CategoryBadge";
import { SectionHeading } from "../components/SectionHeading";
import { TechniqueCard } from "../components/TechniqueCard";
import { categoryLabels } from "../data/techniques";
import { useAllTechniques } from "../hooks/useBackend";
import { TechniqueCategory } from "../types";

const ALL = "all";

export default function TechniquesPage() {
  const { data: techniques, isLoading } = useAllTechniques();
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [search, setSearch] = useState("");

  const filtered = (techniques ?? []).filter((t) => {
    const matchesCategory =
      activeCategory === ALL || t.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      t.name.toLowerCase().includes(q) ||
      t.sanskritName.toLowerCase().includes(q) ||
      t.shortDescription.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const allCategories = [ALL, ...Object.values(TechniqueCategory)];

  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <div className="bg-card border-b border-border py-14 pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            sanskrit="षट् विद्याः"
            title="Mind Control Techniques"
            subtitle="A comprehensive library of 7+ authentic methods drawn from the Vedas, Yoga Sutras, Charaka Samhita, and Upanishads."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search techniques..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              data-ocid="techniques.search_input"
              className="w-full pl-9 pr-4 py-2.5 bg-card border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap">
            {allCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  data-ocid={`techniques.filter.${cat.toLowerCase()}`}
                  className={`font-body text-sm px-3.5 py-2 rounded-lg border transition-smooth ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat === ALL
                    ? "All"
                    : categoryLabels[cat as TechniqueCategory]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        {!isLoading && (
          <p className="font-body text-sm text-muted-foreground mb-6">
            Showing{" "}
            <span className="text-foreground font-medium">
              {filtered.length}
            </span>{" "}
            technique{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== ALL && (
              <>
                {" "}
                in{" "}
                <CategoryBadge category={activeCategory as TechniqueCategory} />
              </>
            )}
          </p>
        )}

        {/* Skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => (
              <Skeleton
                key={k}
                className="h-72 rounded-xl"
                data-ocid="techniques.loading_state"
              />
            ))}
          </div>
        )}

        {/* Grid */}
        {!isLoading && filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <TechniqueCard key={t.id} technique={t} index={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && filtered.length === 0 && (
          <div
            className="text-center py-20 bg-card border border-border rounded-xl"
            data-ocid="techniques.empty_state"
          >
            <p className="font-display text-3xl text-muted-foreground mb-3">
              🪷
            </p>
            <h3 className="font-display text-xl text-foreground mb-2">
              No techniques found
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-4">
              Try a different search term or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory(ALL);
              }}
              data-ocid="techniques.clear_filters_button"
              className="font-body text-sm text-primary border border-primary/30 rounded-lg px-4 py-2 hover:bg-primary/5 transition-smooth"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
