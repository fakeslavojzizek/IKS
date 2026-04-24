export function TradeRoute() {
  const routes = [
    {
      name: 'The Spice Route - India to Rome',
      origin: 'Malabar Coast (India)',
      destination: 'Roman Empire',
      distance: '~4,000 nautical miles',
      duration: '6-12 months',
      ports: ['Muziris', 'Barbaricum', 'Aden', 'Berenice', 'Alexandria'],
      goods: ['Black Pepper, Pearls, Precious Stones, Ivory, Cotton'],
      icon: '🌶️'
    },
    {
      name: 'Chola Maritime Network',
      origin: 'Tamil Nadu',
      destination: 'Southeast Asia & China',
      distance: '~3,000 nautical miles',
      duration: '4-8 months',
      ports: ['Kaveripattinam', 'Nagapattinam', 'Malacca', 'Srivijaya', 'Canton'],
      goods: ['Textiles, Spices, Bronze, Precious Stones, Buddhist Scriptures'],
      icon: '🏛️'
    },
    {
      name: 'Silk Road - Northern Route',
      origin: 'Northern India',
      destination: 'China & Central Asia',
      distance: '~5,000 miles (overland)',
      duration: '12-18 months',
      ports: ['Taxila', 'Peshawar', 'Samarkand', 'Kashgar', "Chang'an"],
      goods: ['Cotton, Spices, Precious Stones, Buddhist Art, Indigo'],
      icon: '🛤️'
    },
    {
      name: 'Arabian Sea Circuit',
      origin: 'Western Indian Ports',
      destination: 'Arabia & East Africa',
      distance: '~2,000 nautical miles',
      duration: '3-6 months',
      ports: ['Surat', 'Bharuch', 'Hormuz', 'Aden', 'Mombasa'],
      goods: ['Cotton Textiles, Indigo, Spices, Precious Stones, Steel'],
      icon: '⛵'
    },
    {
      name: 'Bay of Bengal Trade Network',
      origin: 'Eastern India',
      destination: 'Southeast Asia',
      distance: '~2,500 nautical miles',
      duration: '4-7 months',
      ports: ['Tamralipti', 'Kalinga', 'Pegu', 'Srivijaya', 'Java'],
      goods: ['Textiles, Spices, Gems, Buddhist Relics, Metalwork'],
      icon: '🌊'
    },
    {
      name: 'The Incense Route',
      origin: 'Southern Arabia',
      destination: 'India & Mediterranean',
      distance: '~3,500 miles (combined land & sea)',
      duration: '6-10 months',
      ports: ['Aden', 'Barbaricum', 'Muziris', 'Alexandria', 'Petra'],
      goods: ['Frankincense, Myrrh, Spices, Horses, Pearls'],
      icon: '💎'
    }
  ];

  return (
    <div>
      <div className="ancient-scroll mb-8">
        <h2 className="text-3xl font-bold mb-4 text-amber-900">
          🗺️ Ancient Indian Trade Routes
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Ancient India was the central hub of a vast network of trade routes that connected the 
          East to the West. Indian merchants and sailors mastered the monsoon winds to establish 
          reliable maritime routes across the Indian Ocean, while overland caravans followed the 
          Silk Road through Central Asia. These routes carried not just spices and textiles, but 
          also ideas, religions, and technologies that shaped civilizations across three continents.
        </p>
        <p className="text-lg leading-relaxed">
          The legendary wealth of India - its spices, precious stones, fine textiles, and exotic 
          goods - drew traders from Rome, China, Arabia, and Southeast Asia. Indian ports became 
          cosmopolitan centers where Greek astronomers, Chinese monks, Arab merchants, and Roman 
          traders mingled freely, creating a truly global economy centuries before the modern era.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {routes.map((route, index) => (
          <div key={index} className="ancient-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-5xl">{route.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">
                  {route.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-bold text-amber-800">Origin:</span> {route.origin}
                  </div>
                  <div>
                    <span className="font-bold text-amber-800">Destination:</span> {route.destination}
                  </div>
                  <div>
                    <span className="font-bold text-amber-800">Distance:</span> {route.distance}
                  </div>
                  <div>
                    <span className="font-bold text-amber-800">Duration:</span> {route.duration}
                  </div>
                </div>
              </div>
            </div>

            <div className="route-line"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-bold text-amber-900 mb-2">⚓ Major Ports of Call:</h4>
                <ul className="ancient-list">
                  {route.ports.map((port, idx) => (
                    <li key={idx}>{port}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-900 mb-2">📦 Principal Commodities:</h4>
                <p className="text-sm leading-relaxed p-3 bg-amber-50 rounded border-2 border-amber-200">
                  {route.goods}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 ancient-scroll">
        <h3 className="text-2xl font-bold mb-4 text-amber-900">🧭 Navigation & Travel</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-bold mb-3 text-amber-900">Monsoon Navigation</h4>
            <p className="text-sm leading-relaxed">
              Indian sailors mastered the predictable monsoon wind patterns. The southwest monsoon 
              (June-September) brought ships from the west, while the northeast monsoon 
              (November-February) enabled return voyages. This reliable cycle made Indian Ocean 
              trade efficient and profitable.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 text-amber-900">Overland Caravans</h4>
            <p className="text-sm leading-relaxed">
              The Silk Road connected India to Central Asia and China through mountain passes and 
              desert oases. Caravans of camels and horses carried goods across thousands of miles, 
              stopping at cities like Taxila, Samarkand, and Kashgar. The journey was dangerous but 
              immensely profitable.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 text-amber-900">Trade Infrastructure</h4>
            <p className="text-sm leading-relaxed">
              Indian dynasties built roads, rest houses (dharamshalas), and protected caravansaries. 
              Port cities offered warehouses, banking facilities, and legal frameworks for 
              international commerce. This infrastructure supported a truly global trading system.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="compass-rose mx-auto">
          🧭
        </div>
        <p className="mt-4 italic text-lg text-amber-900">
          "All roads lead to India - the jewel of the ancient world"
        </p>
      </div>
    </div>
  );
}