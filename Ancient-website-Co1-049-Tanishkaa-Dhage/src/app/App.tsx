import { useState } from "react";
import { SeaportCard } from "./components/SeaportCard";
import { TradeRoute } from "./components/TradeRoute";
import { GoodsMarket } from "./components/GoodsMarket";
import { ShipFleet } from "./components/ShipFleet";
import "./styles/ancient.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("dynasties");

  const dynasties = [
    {
      name: "Chola Dynasty",
      region: "Tamil Nadu & Southeast Asia",
      era: "300 BCE - 1279 CE",
      icon: "🏛️",
      description:
        "The Chola Dynasty established one of the most powerful maritime empires in Indian history. Their naval supremacy extended from the Malabar Coast to Southeast Asia. The Cholas controlled crucial sea trade routes and established diplomatic relations with China, Sri Lanka, and the kingdoms of Southeast Asia. Their ports at Kaveripattinam and Nagapattinam were thriving centers of international commerce.",
      goods: ["Spices", "Textiles", "Pearls", "Precious Stones", "Bronze Idols"],
    },
    {
      name: "Mauryan Empire",
      region: "Indian Subcontinent",
      era: "322 BCE - 185 BCE",
      icon: "⚔️",
      description:
        "Under Emperor Ashoka and his predecessors, the Mauryan Empire unified most of the Indian subcontinent and established extensive trade networks. They maintained diplomatic and trade relations with the Hellenistic kingdoms, exchanging goods along both land and sea routes. The empire's road system facilitated internal trade and connected to the Silk Road networks.",
      goods: [
        "Cotton Textiles",
        "Spices",
        "Precious Stones",
        "Ivory",
        "Steel",
      ],
    },
    {
      name: "Maratha Empire",
      region: "Western & Central India",
      era: "1674 CE - 1818 CE",
      icon: "🗡️",
      description:
        "The Maratha Empire controlled key trade routes in western India and established a powerful navy. Their ports at Surat, Mumbai, and along the Konkan coast became important centers for trade with European powers and Arab merchants. The Marathas regulated commerce through their territories and collected taxes from trading caravans and merchant ships.",
      goods: [
        "Cotton",
        "Indigo",
        "Opium",
        "Saltpeter",
        "Spices",
      ],
    },
    {
      name: "Vijayanagara Empire",
      region: "Southern India",
      era: "1336 CE - 1646 CE",
      icon: "🕉️",
      description:
        "The Vijayanagara Empire dominated the spice trade of southern India and controlled strategic ports on both coasts. Their capital was one of the wealthiest cities in the world, attracting merchants from Persia, Portugal, and China. The empire facilitated the export of pepper, cardamom, and precious stones while importing horses from Arabia and Persia.",
      goods: [
        "Pepper",
        "Cardamom",
        "Diamonds",
        "Cotton",
        "Sandalwood",
      ],
    },
    {
      name: "Kushan Empire",
      region: "Northern India & Central Asia",
      era: "30 CE - 375 CE",
      icon: "🏮",
      description:
        "The Kushan Empire controlled crucial segments of the Silk Road, connecting India with China and the Roman Empire. Their position along these trade routes brought immense wealth and cultural exchange. Kushan coins have been found from Rome to China, testament to their extensive trading networks. They facilitated the spread of Buddhism along trade routes while profiting from the silk and spice trade.",
      goods: [
        "Silk",
        "Spices",
        "Precious Stones",
        "Buddhist Artifacts",
        "Textiles",
      ],
    },
  ];

  return (
    <div className="min-h-screen ancient-bg">
      {/* Header */}
      <header className="ancient-header py-12 px-4 border-b-4 border-amber-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <span className="text-5xl">🕉️</span>
            <span className="text-5xl">🏛️</span>
            <span className="text-5xl">⛵</span>
          </div>

          <h1 className="ancient-title text-5xl md:text-6xl mb-4">Ancient Indian Trade & Commerce</h1>

          <p className="text-xl md:text-2xl text-amber-900 max-w-4xl mx-auto font-serif italic">
            Exploring the Great Dynasties and Maritime Trade Routes that Connected India to the World
          </p>

          
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="ancient-nav py-6 px-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab("dynasties")}
              className={`ancient-tab ${activeTab === "dynasties" ? "active" : ""}`}
            >
              👑 Dynasties
            </button>
            <button
              onClick={() => setActiveTab("seaports")}
              className={`ancient-tab ${activeTab === "seaports" ? "active" : ""}`}
            >
              ⚓ Indian Seaports
            </button>
            <button
              onClick={() => setActiveTab("routes")}
              className={`ancient-tab ${activeTab === "routes" ? "active" : ""}`}
            >
              🗺️ Trade Routes
            </button>
            <button
              onClick={() => setActiveTab("goods")}
              className={`ancient-tab ${activeTab === "goods" ? "active" : ""}`}
            >📦 Commodities</button>
            <button
              onClick={() => setActiveTab("ships")}
              className={`ancient-tab ${activeTab === "ships" ? "active" : ""}`}
            >
              ⛵ Merchant Vessels
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === "dynasties" && (
          <div>
            <div className="ancient-scroll mb-12">
              <h2 className="text-4xl font-bold mb-6 text-amber-900 text-center">
                👑 Great Trading Dynasties of Ancient India
              </h2>
              <p className="leading-relaxed mb-4 text-lg">
                Ancient India was home to powerful dynasties that established vast trade networks connecting the subcontinent to Southeast Asia, Central Asia, the Middle East, and beyond. These empires controlled strategic ports, dominated maritime routes, and facilitated the exchange of precious goods that made India legendary across the ancient world. From the Mauryan Empire's connections with Hellenistic kingdoms to the Chola Dynasty's naval dominance in the Indian Ocean, these trading powers shaped global commerce for over two millennia.
              </p>
              <p className="leading-relaxed text-lg">
                Indian merchants, protected and encouraged by these dynasties, carried spices, textiles, precious stones, and cultural knowledge across land and sea. The legendary wealth of India attracted traders from Rome, China, Arabia, and Southeast Asia, making Indian ports among the most cosmopolitan cities of the ancient world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dynasties.map((dynasty, index) => (
                <SeaportCard key={index} {...dynasty} />
              ))}
            </div>

            <div className="mt-12 ancient-scroll">
              <h3 className="text-2xl font-bold mb-4 text-amber-900">
                🌊 India's Maritime Legacy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-amber-900">
                    Strategic Advantages
                  </h4>
                  <ul className="ancient-list">
                    <li>Control of monsoon wind navigation</li>
                    <li>
                      Access to valuable spice-producing regions
                    </li>
                    <li>Position between East and West</li>
                    <li>
                      Advanced shipbuilding techniques
                    </li>
                    <li>Extensive coastline on both seas</li>
                    <li>
                      Cultural and religious influence
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-amber-900">
                    Cultural Exchange
                  </h4>
                  <ul className="ancient-list">
                    <li>Spread of Buddhism to Asia</li>
                    <li>Hindu temple architecture abroad</li>
                    <li>
                      Sanskrit influence on Southeast Asia
                    </li>
                    <li>
                      Indian numerals and mathematics
                    </li>
                    <li>
                      Ayurvedic medicine and knowledge
                    </li>
                    <li>
                      Literary and artistic traditions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "seaports" && (
          <div>
            <div className="ancient-scroll mb-12">
              <h2 className="text-4xl font-bold mb-6 text-amber-900 text-center">
                ⚓ Ancient Indian Seaports
              </h2>
              <p className="leading-relaxed mb-4 text-lg">
                India's strategic location on the Indian Ocean made its ports vital nodes in ancient global trade. These seaports connected the Roman Empire, Arabia, Southeast Asia, and China through monsoon-driven maritime routes. Roman gold flowed into Indian ports in exchange for pepper, pearls, and precious stones, while Chinese silk passed through on its journey westward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SeaportCard
                name="Muziris"
                region="Malabar Coast, Kerala"
                era="100 BCE - 400 CE"
                icon="🌴"
                description="The legendary emporium of the ancient world, Muziris was India's premier spice port. Roman merchants established a permanent presence here, and ships laden with pepper returned to the Mediterranean. The port handled goods from across the Indian Ocean, making it one of the wealthiest trading centers of antiquity."
                goods={["Black Pepper", "Pearls", "Ivory", "Precious Stones", "Textiles"]}
              />
              <SeaportCard
                name="Kaveripattinam"
                region="Chola Kingdom, Tamil Nadu"
                era="300 BCE - 300 CE"
                icon="🏛️"
                description="Capital port of the Chola Dynasty and major center of maritime trade. The city was cosmopolitan, with quarters for foreign merchants from Rome, Greece, and Southeast Asia. It exported cotton textiles, spices, and precious stones while importing horses, wine, and Mediterranean goods."
                goods={["Cotton Textiles", "Spices", "Pearls", "Precious Stones", "Bronze"]}
              />
              <SeaportCard
                name="Barbaricum"
                region="Indus Delta"
                era="100 BCE - 500 CE"
                icon="⚓"
                description="Important port near the mouth of the Indus River, serving as a gateway to northwestern India and Central Asia. It connected maritime trade with overland Silk Road routes. Ships from Arabia and Persia traded here for Indian textiles and spices."
                goods={["Cotton", "Indigo", "Spices", "Grain", "Lapis Lazuli"]}
              />
              <SeaportCard
                name="Surat"
                region="Gujarat"
                era="1500 BCE - Present"
                icon="🕌"
                description="One of India's oldest ports, Surat became a major trading hub under various dynasties. It was the primary port for the Mughal Empire and attracted merchants from across the world. The city was famous for its textile industry and diamond trade."
                goods={["Cotton Textiles", "Silk", "Diamonds", "Indigo", "Saltpeter"]}
              />
              <SeaportCard
                name="Nagapattinam"
                region="Chola Kingdom, Tamil Nadu"
                era="300 CE - 1400 CE"
                icon="🛕"
                description="Major naval base and commercial port of the Chola Dynasty. Buddhist monasteries here hosted monks from China and Southeast Asia. The port served as a launching point for Chola naval expeditions to Sri Lanka and Southeast Asia."
                goods={["Spices", "Pearls", "Coral", "Textiles", "Buddhist Scriptures"]}
              />
              <SeaportCard
                name="Calicut (Kozhikode)"
                region="Malabar Coast, Kerala"
                era="800 CE - Present"
                icon="🌶️"
                description="Known as the 'City of Spices,' Calicut was the most important trading port on the Malabar Coast during the medieval period. Chinese, Arab, and later European merchants all sought the pepper and spices available here. Vasco da Gama landed here in 1498."
                goods={["Pepper", "Ginger", "Cardamom", "Cinnamon", "Textiles"]}
              />
            </div>

            <div className="mt-12 ancient-scroll">
              <h3 className="text-2xl font-bold mb-4 text-amber-900">
                🌊 The Monsoon Trade System
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-amber-900">
                    Southwest Monsoon (June-September)
                  </h4>
                  <ul className="ancient-list">
                    <li>Ships sailed from Arabia and Africa to India</li>
                    <li>
                      Brought merchants seeking pepper and spices
                    </li>
                    <li>Favorable winds for eastward journey</li>
                    <li>
                      Peak trading season in Indian ports
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-amber-900">
                    Northeast Monsoon (November-February)
                  </h4>
                  <ul className="ancient-list">
                    <li>Return journey to Arabia and Africa</li>
                    <li>Ships laden with Indian goods</li>
                    <li>
                      Favorable winds for westward sailing
                    </li>
                    <li>
                      Connection to Mediterranean markets
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "routes" && <TradeRoute />}
        {activeTab === "goods" && <GoodsMarket />}
        {activeTab === "ships" && <ShipFleet />}
      </main>

      {/* Footer */}
      <footer className="ancient-footer mt-16 py-12 px-4 border-t-4 border-amber-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-900">
                Historical Timeline
              </h3>
              <p className="text-sm leading-relaxed">
                This chronicle spans from the Mauryan Empire (322 BCE) through the Chola Dynasty's golden age and the rise of the Maratha and Vijayanagara empires, covering over two millennia of Indian maritime and commercial history.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-900">
                Featured Dynasties
              </h3>
              <ul className="text-sm space-y-2">
                <li>🏛️ Chola Dynasty</li>
                <li>⚔️ Mauryan Empire</li>
                <li>🗡️ Maratha Empire</li>
                <li>🕉️ Vijayanagara Empire</li>
                <li>🏮 Kushan Empire</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-900">
                Legacy
              </h3>
              <p className="text-sm leading-relaxed">
                India's ancient trade networks laid the foundation for globalization. The spice trade attracted explorers from across the world, and Indian merchants established communities from Southeast Asia to East Africa, spreading culture, religion, and knowledge.
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t-2 border-amber-700">
            <div className="flex justify-center gap-6 mb-4 text-3xl">
              <span>🕉️</span>
              <span>⚓</span>
              <span>🏛️</span>
              <span>⛵</span>
              <span>🗺️</span>
            </div>
            <p className="text-sm italic">
              "The wealth of India is proverbial, and the trade routes that connected it to the world shaped the course of history"
            </p>
            <p className="text-xs mt-2 opacity-75">
              Ancient Indian Trade & Commerce
              PROJECT BY:- Aditi,Arya,Tanushri,Tanishkaa,Vaishnavi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}