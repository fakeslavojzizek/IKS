export function ShipFleet() {
  const vessels = [
    {
      name: 'Indian Ocean Dhow',
      type: 'Lateen-rigged Trader',
      era: '200 BCE - Present',
      icon: '⛵',
      capacity: '60-200 tons',
      crew: '15-30 sailors',
      speed: '6-9 knots',
      description: 'The iconic dhow with its distinctive lateen sail dominated Indian Ocean trade for millennia. Indian and Arab merchants used these vessels to harness monsoon winds, making reliable seasonal voyages. These ships connected East Africa, Arabia, India, and Southeast Asia.',
      features: ['Lateen triangular sails', 'Sewn plank construction', 'Monsoon navigation expertise', 'Spice cargo specialists']
    },
    {
      name: 'Chola Navy Warship',
      type: 'War & Escort Vessel',
      era: '900 CE - 1200 CE',
      icon: '🛡️',
      capacity: '100-150 tons',
      crew: '80-120 (including marines)',
      speed: '7-10 knots',
      description: 'The mighty Chola Dynasty maintained a powerful navy that dominated the Bay of Bengal and beyond. These warships protected merchant vessels, conducted naval expeditions to Southeast Asia, and established Chola maritime supremacy. They combined sail and oar power.',
      features: ['Multiple masts', 'Fortified decks', 'Naval archers & marines', 'Ram bow design']
    },
    {
      name: 'Gujarati Trading Vessel',
      type: 'Cargo Ship',
      era: '1000 CE - 1700 CE',
      icon: '🚢',
      capacity: '200-400 tons',
      duration: '30-40 sailors',
      speed: '5-7 knots',
      description: 'Gujarati merchants built sturdy cargo vessels that plied routes to Arabia, East Africa, and Southeast Asia. These ships were known for their capacity and seaworthiness. Surat and Cambay were major shipbuilding centers producing these reliable traders.',
      features: ['Deep cargo holds', 'Square and lateen sails', 'Teak wood construction', 'Weather-resistant design']
    },
    {
      name: 'Bengali River-Sea Craft',
      type: 'Hybrid Vessel',
      era: '300 BCE - 1600 CE',
      icon: '🛶',
      capacity: '50-120 tons',
      crew: '20-35 sailors',
      speed: '4-6 knots',
      description: 'Designed for both river and coastal trade, these Bengali vessels navigated the Ganges delta and ventured into the Bay of Bengal. They carried muslin textiles, rice, and other Bengal products. Their flat-bottomed design allowed river navigation while remaining seaworthy.',
      features: ['Flat bottom design', 'Shallow draft', 'Single or double masts', 'River-to-sea capability']
    },
    {
      name: 'Malabar Spice Carrier',
      type: 'Specialized Trader',
      era: '100 BCE - 1500 CE',
      icon: '🌶️',
      capacity: '80-150 tons',
      crew: '15-25 sailors',
      speed: '5-8 knots',
      description: 'Purpose-built for the pepper trade, these ships from Kerala\'s Malabar Coast transported precious spices to Rome, Arabia, and beyond. They featured specialized storage to preserve spice quality during long voyages and were built from durable teak.',
      features: ['Specialized cargo holds', 'Ventilation systems', 'Teak construction', 'Monsoon-ready rigging']
    },
    {
      name: 'Tamil Trading Junk',
      type: 'Southeast Asian Trader',
      era: '500 CE - 1400 CE',
      icon: '⛴️',
      capacity: '150-300 tons',
      crew: '40-60 sailors',
      speed: '6-9 knots',
      description: 'Tamil merchants developed vessels influenced by both Indian and Chinese shipbuilding. These ships connected South India with Southeast Asian kingdoms, carrying textiles, spices, and religious artifacts. They featured multiple masts and advanced navigation equipment.',
      features: ['Multi-masted design', 'Watertight compartments', 'Chinese-influenced construction', 'Long-distance capability']
    }
  ];

  return (
    <div>
      <div className="ancient-scroll mb-8">
        <h2 className="text-3xl font-bold mb-4 text-amber-900">
          ⛵ Merchant Vessels of Ancient India
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Indian shipbuilding traditions date back thousands of years, producing vessels that were 
          among the most advanced of their time. From the teak-built ships of the Malabar Coast to 
          the mighty warships of the Chola navy, Indian vessels dominated the Indian Ocean trade 
          routes. These ships carried not just cargo, but also ideas, religions, and cultural 
          traditions across the maritime world.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Indian sailors possessed unmatched knowledge of monsoon wind patterns, celestial 
          navigation, and ocean currents. This expertise, combined with sturdy ship construction 
          using teak and other durable woods, made Indian vessels highly sought after. Foreign 
          merchants often preferred to sail on Indian ships rather than risk their own vessels.
        </p>
        <div className="wave-decoration text-center text-2xl">
          🌊 ~ 🌊 ~ 🌊 ~ 🌊 ~ 🌊
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {vessels.map((vessel, index) => (
          <div key={index} className="ancient-card">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex flex-col items-center justify-center">
                <div className="ship-icon mb-3">{vessel.icon}</div>
                <div className="ancient-badge text-center">{vessel.era}</div>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-amber-900 mb-1">
                  {vessel.name}
                </h3>
                <div className="text-lg italic text-amber-700 mb-3">
                  {vessel.type}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="bg-amber-50 p-2 rounded border border-amber-200">
                    <div className="font-bold text-amber-900">Capacity</div>
                    <div>{vessel.capacity}</div>
                  </div>
                  <div className="bg-amber-50 p-2 rounded border border-amber-200">
                    <div className="font-bold text-amber-900">Crew</div>
                    <div>{vessel.crew}</div>
                  </div>
                  <div className="bg-amber-50 p-2 rounded border border-amber-200">
                    <div className="font-bold text-amber-900">Speed</div>
                    <div>{vessel.speed}</div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4 text-gray-800">
                  {vessel.description}
                </p>

                <div>
                  <h4 className="font-bold text-amber-900 mb-2">⚓ Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {vessel.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-amber-700">▸</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="ancient-scroll">
          <h3 className="text-xl font-bold mb-3 text-amber-900">⚓ Navigation Mastery</h3>
          <ul className="ancient-list">
            <li>Celestial navigation using Pole Star and constellations</li>
            <li>Monsoon wind pattern expertise (critical knowledge)</li>
            <li>Ocean current understanding and utilization</li>
            <li>Coastal piloting using landmarks and depth soundings</li>
            <li>Traditional navigation texts (e.g., Yukti Kalpataru)</li>
            <li>Bird release for land detection</li>
          </ul>
        </div>

        <div className="ancient-scroll">
          <h3 className="text-xl font-bold mb-3 text-amber-900">🛠️ Shipbuilding Excellence</h3>
          <ul className="ancient-list">
            <li>Teak wood from Malabar forests (rot-resistant)</li>
            <li>Coconut fiber (coir) rope for rigging</li>
            <li>Advanced joinery without metal fasteners</li>
            <li>Natural caulking with tree resins and oils</li>
            <li>Specialized shipyards in major ports</li>
            <li>Hereditary shipwright guilds preserving techniques</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 ancient-scroll">
        <h3 className="text-xl font-bold mb-4 text-amber-900">🌊 Maritime Traditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-bold text-amber-900 mb-2">Religious Practices</h4>
            <p className="leading-relaxed">
              Before voyages, sailors performed pujas (prayers) to sea deities and sought blessings. 
              Temples in port cities served as landmarks and spiritual centers. Many ships carried 
              sacred texts and icons for protection.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-amber-900 mb-2">Merchant Communities</h4>
            <p className="leading-relaxed">
              Powerful merchant guilds (shrenis) organized trade expeditions, financed voyages, and 
              maintained trade networks. Families specialized in particular routes or commodities 
              across generations.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-amber-900 mb-2">Cultural Exchange</h4>
            <p className="leading-relaxed">
              Indian sailors and merchants established communities throughout Southeast Asia, 
              spreading Hindu and Buddhist culture. Sanskrit became the language of diplomacy and 
              scholarship across the region.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center ancient-scroll">
        <p className="text-lg italic text-amber-900">
          "The sea is the highway of the brave, and Indians have sailed it since time immemorial"
        </p>
        <p className="text-sm mt-2 opacity-75">- Ancient Indian Maritime Tradition</p>
      </div>
    </div>
  );
}