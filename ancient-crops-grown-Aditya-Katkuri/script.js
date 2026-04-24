// Data Store: Easy to expand by adding new objects here
const portfolioData = {
  regions: [
    {
      id: "mesopotamia",
      name: "Mesopotamia",
      shortDesc: "The cradle of civilization between the Tigris and Euphrates.",
      image: "assets/mesopotamia.png",
      heroImage: "assets/mesopotamia.png",
      highlights: ["Wheat", "Barley", "Flax"],
      climate: "Arid with hot summers and sporadic rain. The rivers provided the necessary water through annual flooding.",
      soil: "Alluvial soil deposited by the rivers, extremely fertile and rich in nutrients.",
      water: "Heavily reliant on the Tigris and Euphrates rivers. Developed complex canal systems.",
      techniques: "Invented the seeder plow, utilized crop rotation, and built extensive irrigation canals to manage floodwaters.",
      crops: [
        {
          name: "Emmer Wheat",
          image: "assets/crop_emmer_wheat.png",
          season: "Winter/Spring",
          importance: "Primary staple for bread-making and daily sustenance."
        },
        {
          name: "Barley",
          image: "assets/crop_barley.png",
          season: "Winter/Spring",
          importance: "Used for bread, animal fodder, and brewing early forms of beer."
        },
        {
          name: "Flax",
          image: "assets/crop_flax.png",
          season: "Spring/Summer",
          importance: "Essential for weaving linen textiles and producing linseed oil."
        }
      ]
    },
    {
      id: "mesoamerica",
      name: "Mesoamerica",
      shortDesc: "Rich volcanic soils and diverse altitudes supporting the 'Three Sisters'.",
      image: "assets/mesoamerica.png",
      heroImage: "assets/mesoamerica.png",
      highlights: ["Maize", "Beans", "Squash"],
      climate: "Ranging from tropical lowlands to temperate highlands with distinct wet and dry seasons.",
      soil: "Volcanic ash-enriched soil provided excellent drainage and fertility.",
      water: "Relied on seasonal rainfall and innovative systems like cenotes and terracing.",
      techniques: "Practiced 'Milpa' farming (intercropping), slash-and-burn, and built Chinampas (floating gardens).",
      crops: [
        {
          name: "Maize (Corn)",
          image: "assets/crop_maize.png",
          season: "Summer/Fall",
          importance: "The foundational crop, deeply woven into mythology and diet."
        },
        {
          name: "Beans",
          image: "assets/crop_beans.png",
          season: "Summer",
          importance: "Provided essential protein and fixed nitrogen in the soil."
        },
        {
          name: "Squash",
          image: "assets/crop_squash.png",
          season: "Late Summer/Fall",
          importance: "Broad leaves acted as living mulch, retaining moisture and deterring weeds."
        }
      ]
    },
    {
      id: "yellow-river",
      name: "Yellow River Valley",
      shortDesc: "The loess plateau in ancient China, home to early millet domestication.",
      image: "assets/yellow_river.png",
      heroImage: "assets/yellow_river.png",
      highlights: ["Foxtail Millet", "Soybeans", "Hemp"],
      climate: "Temperate but dry, with cold winters and rainfall concentrated in the summer.",
      soil: "Loess—fine, wind-blown, highly fertile silt that was easy to till.",
      water: "The Yellow River provided water but was prone to devastating, unpredictable floods.",
      techniques: "Developed extensive flood control, terracing, and early iron plows.",
      crops: [
        {
          name: "Foxtail Millet",
          image: "assets/crop_foxtail_millet.png",
          season: "Summer/Autumn",
          importance: "Drought-resistant staple that sustained the earliest Chinese dynasties."
        },
        {
          name: "Soybeans",
          image: "assets/crop_soybeans.png",
          season: "Summer",
          importance: "Crucial protein source and used to replenish soil nitrogen."
        },
        {
          name: "Hemp",
          image: "assets/crop_hemp.png",
          season: "Spring/Summer",
          importance: "Cultivated for strong fibers to make clothing, ropes, and early paper."
        }
      ]
    }
  ]
};

// Initialize app based on current page
document.addEventListener("DOMContentLoaded", () => {
  
  // Set up scroll animations
  setupScrollAnimations();

  // Check which page we are on
  const isRegionPage = document.getElementById("region-content");
  const isHomePage = document.getElementById("regions-container");

  if (isHomePage) {
    renderHomeRegions();
  }

  if (isRegionPage) {
    loadRegionDetails();
  }
});

// Function to render region cards on the home page
function renderHomeRegions() {
  const container = document.getElementById("regions-container");
  if (!container) return;

  const loading = document.getElementById("loading");
  if (loading) loading.style.display = "none";

  container.innerHTML = ""; // Clear loading state

  portfolioData.regions.forEach(region => {
    // Create crop tags HTML
    const tagsHTML = region.highlights.map(tag => `<span class="crop-tag">${tag}</span>`).join('');

    const card = document.createElement("a");
    card.href = `region.html?id=${region.id}`;
    card.className = "region-card fade-in";
    
    card.innerHTML = `
      <div class="region-image">
        <img src="${region.image}" alt="${region.name} agriculture">
      </div>
      <div class="region-content">
        <h3>${region.name}</h3>
        <p>${region.shortDesc}</p>
        <div class="crop-tags">
          ${tagsHTML}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Re-trigger observer for new dynamic elements
  setupScrollAnimations();
}

// Function to load specific region details on region.html
function loadRegionDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const regionId = urlParams.get('id');
  
  const loading = document.getElementById("loading");
  const errorMsg = document.getElementById("error-message");
  const content = document.getElementById("region-content");

  if (!regionId) {
    loading.style.display = "none";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "<h2>Region not specified.</h2><br><a href='index.html' class='btn'>Go Back Home</a>";
    return;
  }

  const region = portfolioData.regions.find(r => r.id === regionId);

  if (!region) {
    loading.style.display = "none";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "<h2>Region not found.</h2><br><a href='index.html' class='btn'>Go Back Home</a>";
    return;
  }

  // Populate Hero
  const hero = document.getElementById("region-hero");
  const heroTitle = document.getElementById("region-title");
  
  // Update background image
  hero.style.backgroundImage = `url('${region.heroImage}')`;
  heroTitle.textContent = region.name;
  
  // Update Page Title
  document.title = `${region.name} - Ancient Crops`;

  // Populate Details
  document.getElementById("detail-climate").textContent = region.climate;
  document.getElementById("detail-soil").textContent = region.soil;
  document.getElementById("detail-water").textContent = region.water;
  document.getElementById("detail-techniques").textContent = region.techniques;

  // Populate Crops
  const cropsContainer = document.getElementById("crops-container");
  region.crops.forEach(crop => {
    const cropCard = document.createElement("div");
    cropCard.className = "crop-card fade-in";
    
    cropCard.innerHTML = `
      <div class="crop-image">
        <img src="${crop.image}" alt="${crop.name}">
      </div>
      <div class="crop-info">
        <h4>${crop.name}</h4>
        <div class="crop-meta">
          <span>Season:</span>
          <span>${crop.season}</span>
        </div>
        <p>${crop.importance}</p>
      </div>
    `;
    cropsContainer.appendChild(cropCard);
  });

  // Show content
  loading.style.display = "none";
  content.style.display = "block";

  // Trigger animations for loaded content
  setupScrollAnimations();
}

// Intersection Observer for scroll animations (fade-in)
function setupScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.fade-in:not(.visible)');
  elements.forEach(el => observer.observe(el));
}
