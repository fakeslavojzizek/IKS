/**
 * MandirVastu Encyclopedia Data
 * 48 Elements + 3 Architectural Styles
 * Verified Academic Dataset
 */

window.styleData = {
  "Nagara": {
    "name": "Nagara Style",
    "origin": "North India",
    "period": "5th - 13th Century CE",
    "patronage": "Gupta, Pratihara, Chandela, Solanki",
    "description": "The North Indian architectural tradition is defined by its curvilinear beehive-shaped towers, known as Shikharas, and square plans with rhythmic projections. It emphasizes the concept of the temple as a cosmic mountain range, using fractal geometry to create a sense of infinite verticality and spiritual ascent.",
    "facts": [
      "Characterized by the curvilinear Shikhara crowned with a solar Amalaka disc.",
      "Built upon an elevated stone platform (Jagati) that defines the sacred space.",
      "Typically avoids the massive enclosure walls and gopurams common in the South.",
      "Uses the 'Panchayatana' layout with four subsidiary shrines at the corners."
    ],
    "image": "assets/temples/kandariya_mahadeva.jpg",
    "examples": [
      { "name": "Kandariya Mahadeva", "img": "assets/temples/kandariya_mahadeva.jpg", "loc": "Khajuraho, Madhya Pradesh" },
      { "name": "Sun Temple", "img": "assets/temples/konark_sun.jpg", "loc": "Konark, Odisha" },
      { "name": "Lingaraja Temple", "img": "assets/temples/lingaraja.jpg", "loc": "Bhubaneswar, Odisha" }
    ]
  },
  "Dravidian": {
    "name": "Dravidian Style",
    "origin": "South India",
    "period": "7th - 16th Century CE",
    "patronage": "Pallava, Chola, Pandya, Vijayanagara",
    "description": "The South Indian tradition is distinguished by immense walled complexes and stepped pyramidal towers called Vimanas. This style focuses on the temple as a literal spiritual fortress, featuring monumental gateway towers (Gopurams) that often dwarf the main sanctum and massive pillared halls for communal ritual and performance.",
    "facts": [
      "Features stepped pyramidal Vimanas with multiple stories and a dome-like Stupika.",
      "Monumental Gopurams serve as gateways, marking the transition to sacred space.",
      "Includes large sacred water reservoirs (Pushkarini) for ritual purification baths.",
      "Organized within concentric enclosure walls (Prakaras) creating a temple city."
    ],
    "image": "assets/temples/brihadeeswarar.jpg",
    "examples": [
      { "name": "Brihadeeswarar", "img": "assets/temples/brihadeeswarar.jpg", "loc": "Thanjavur, Tamil Nadu" },
      { "name": "Meenakshi Amman", "img": "assets/temples/meenakshi_amman.jpg", "loc": "Madurai, Tamil Nadu" },
      { "name": "Shore Temple", "img": "assets/temples/shore_temple.jpg", "loc": "Mahabalipuram, Tamil Nadu" }
    ]
  },
  "Vesara": {
    "name": "Vesara Style",
    "origin": "Deccan / Karnataka",
    "period": "11th - 13th Century CE",
    "patronage": "Chalukya, Rashtrakuta, Hoysala",
    "description": "A sophisticated hybrid tradition that emerged in the Deccan, synthesizing the curvilinear Nagara spire with the tiered Dravidian floor structure. It is renowned for its unique star-shaped floor plans and incredibly detailed soapstone carvings that create a lace-like texture on every architectural surface.",
    "facts": [
      "Developed a unique 'Stellated' or star-shaped plan rotating around a center.",
      "Towers combine Nagara's vertical profile with Dravidian's tiered story layering.",
      "Known for highly intricate, mirror-polished lathe-turned pillars and ceilings.",
      "Primarily associated with the Chalukya, Rashtrakuta, and Hoysala dynasties."
    ],
    "image": "assets/temples/hoysaleswara.jpg",
    "examples": [
      { "name": "Hoysaleswara", "img": "assets/temples/hoysaleswara.jpg", "loc": "Halebidu, Karnataka" },
      { "name": "Chennakeshava", "img": "assets/temples/chennakeshava.jpg", "loc": "Belur, Karnataka" },
      { "name": "Virupaksha", "img": "assets/temples/virupaksha.jpg", "loc": "Pattadakal, Karnataka" }
    ]
  }
};

window.iconData = {
  1: {
    id: 1,
    name: "Garbhagriha",
    sanskrit: "गर्भगृह",
    category: "Architecture",
    style: "All",
    description: "The 'womb-chamber' serves as the lightless inner sanctum where the primary deity resides, symbolizing the cosmic core.",
    detail: "The Garbhagriha is the metaphysical heart of the temple. It is usually a small, dark, and unadorned square chamber that stands in stark contrast to the grand architectural ornamentation of the exterior. This simplicity is intentional, focusing all spiritual energy on the 'Murti' or central icon of the deity.",
    symbolism: "Derived from the Sanskrit words 'Garbha' (womb) and 'Griha' (house), it symbolizes the origin of creation and the spiritual rebirth of the devotee. It is the cave-like center of the cosmic mountain.",
    placement: "Located at the exact center of the temple's ground plan, directly beneath the highest point of the tower.",
    examples: [
      { name: "Lingaraja Shri-Vigraha", loc: "Bhubaneswar, Odisha", img: "assets/temples/garbhagriha_main_v2.jpg" },
      { name: "Kandariya Sanctum", loc: "Khajuraho, Madhya Pradesh", img: "assets/temples/garbhagriha_sanctum.png" }
    ],
    fact: "In ancient times, only the high priests were allowed to enter the Garbhagriha to maintain its energetic purity.",
    image: "assets/icons/garbhagriha_premium_1775986219020.png"
  },
  2: {
    id: 2,
    name: "Shikhara",
    sanskrit: "शिखर",
    category: "Architecture",
    style: "Nagara",
    description: "The curvilinear mountain-peak tower of North Indian temples, representing Mount Meru.",
    detail: "The Shikhara is the defining silhouette of North Indian (Nagara) architecture. Its form is curvilinear, tapering gradually as it rises toward the sky. The exterior is often subdivided into multiple vertical and horizontal layers (Bhumis), creating a fractal-like appearance that suggests infinite complexity.",
    symbolism: "The term 'Shikhara' translates to 'Mountain Peak'. It symbolizes Mount Meru, the center of the universe in Hindu cosmology, and serves as a beacon for the soul's ascent toward liberation.",
    placement: "The superstructure rising directly above the inner sanctum (Garbhagriha) in Northern traditions.",
    examples: [
      { name: "Lingaraja Temple", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" },
      { name: "Kandariya Mahadeva", loc: "Khajuraho, Madhya Pradesh", img: "assets/temples/kandariya_mahadeva.jpg" }
    ],
    fact: "The Shikhara of the Kandariya Mahadeva temple is composed of 84 smaller sub-spires called Urushringas.",
    image: "assets/icons/shikhara_nagara_premium_1775986260647.png"
  },
  3: {
    id: 3,
    name: "Vimana",
    sanskrit: "विमान",
    category: "Architecture",
    style: "Dravidian",
    description: "The stepped pyramidal tower rising over the sanctum in South India.",
    detail: "The Vimana is the South Indian counterpart to the Shikhara, but its geometry is radically different. Instead of a smooth curve, the Vimana rises in distinct horizontally tiered stories (Talas), each decorated with miniature shrines (Kutus and Shalas). This creates a stepped pyramidal profile that feels stable and monumental.",
    symbolism: "A Vimana represents a celestial chariot or a palace of the gods. Each story of the tower symbolizes a different plane of existence (Loka) in the divine hierarchy.",
    placement: "The main tower rising above the sanctum in Dravidian architecture, distinct from the gateway towers (Gopurams).",
    examples: [
      { name: "Brihadeeswarar Temple", loc: "Thanjavur, Tamil Nadu", img: "assets/temples/brihadeeswarar.jpg" },
      { name: "Shore Temple", loc: "Mahabalipuram, Tamil Nadu", img: "assets/temples/shore_temple.jpg" }
    ],
    fact: "The 'Kumbam' (capstone) of the Thanjavur Vimana is carved from a single piece of granite weighing approximately 80 tons.",
    image: "assets/icons/vimana_dravidian_premium_1775986292217.png"
  },
  4: {
    id: 4,
    name: "Gopuram",
    sanskrit: "गोपुरम्",
    category: "Architecture",
    style: "Dravidian",
    description: "The monumental gateway tower of South Indian temple complexes.",
    detail: "Gopurams are the soaring landmarks of the South Indian landscape. These rectangular gateway towers mark the entrance through the massive enclosure walls (Prakaras). Passing through the gate is a ritual act of cleansing the mind before entering the presence of the deity.",
    symbolism: "The Gopuram signifies the transition from the profane world to the sacred precinct. Passing through the gate is a ritual act of cleansing the mind before entering the presence of the deity.",
    placement: "Located at the cardinal points within the concentric enclosure walls surrounding the central shrine.",
    examples: [
      { name: "Meenakshi Amman", loc: "Madurai, Tamil Nadu", img: "assets/temples/meenakshi_amman.jpg" },
      { name: "Sri Ranganathaswamy", loc: "Srirangam, Tamil Nadu", img: "assets/temples/srirangam.jpg" }
    ],
    fact: "The Rajagopuram at Srirangam is one of the tallest in Asia, reaching a height of 239 feet with 13 tiers.",
    image: "assets/icons/gopuram_premium_1775986338545.png"
  },
  5: {
    id: 5,
    name: "Mandapa",
    sanskrit: "मण्डप",
    category: "Architecture",
    style: "All",
    description: "The pillared assembly hall used for public rituals and sacred dance.",
    detail: "The Mandapa is the community space of the temple. Unlike the dark Garbhagriha, the Mandapa is open, airy, and filled with light filtered through rows of carved pillars. It served historically as a venue for religious discourse, music, and the performance of classical dances.",
    symbolism: "It represents the manifestation of the divine word (Shabda) into the social sphere. It is the 'body' of the temple where humans interact with the sacred.",
    placement: "Positioned between the main entrance (Gopuram/Torana) and the inner sanctum, usually on the same primary axis.",
    examples: [
      { name: "Vittala Temple", loc: "Hampi, Karnataka", img: "assets/temples/hoysaleswara.jpg" },
      { name: "Sun Temple", loc: "Modhera, Gujarat", img: "assets/temples/modhera_sun.jpg" }
    ],
    fact: "Some Mandapas, like those in the Vittala Temple, feature 'musical pillars' that ring with different notes when tapped.",
    image: "assets/icons/mandapa_premium_1775986386135.png"
  },
  6: {
    id: 6,
    name: "Antarala",
    sanskrit: "अन्तराल",
    category: "Architecture",
    style: "Nagara",
    description: "A small vestibule linking the assembly hall to the inner sanctum.",
    detail: "The Antarala is the threshold of the most sacred space. It is a narrow, often dimly lit passage that forces the devotee to pause and transition their focus. Architecturally, it serves as the 'neck' of the temple, connecting the broad assembly hall to the focused box of the Garbhagriha.",
    symbolism: "It symbolizes the 'inner path' or the intermediate state of the soul as it moves from the multiplicity of the world to the singularity of the Divine.",
    placement: "The narrow vestibule located between the Mandapa (hall) and the Garbhagriha (sanctum).",
    examples: [
      { name: "Lakshmana Temple", loc: "Khajuraho, Madhya Pradesh", img: "assets/temples/kandariya_mahadeva.jpg" },
      { name: "Kandariya Mahadeva", loc: "Khajuraho, Madhya Pradesh", img: "assets/temples/kandariya_mahadeva.jpg" }
    ],
    fact: "In some architectural texts, the Antarala is called the 'Sukhanasi' when it is fronted by a large decorative arch.",
    image: "assets/icons/antarala_premium_1775986418376.png"
  },
  7: {
    id: 7,
    name: "Pradakshina Patha",
    sanskrit: "प्रदक्षिण पथ",
    category: "Architecture",
    style: "All",
    description: "The ritual circumambulatory path around the temple's sanctum.",
    detail: "Pradakshina is the primary ritual act in an Indian temple. The path allows the devotee to walk in a clockwise direction around the deity, keeping the right side of the body (the side of auspiciousness) toward the sacred center. Walking the path is a form of moving meditation.",
    symbolism: "The clockwise motion symbolizes the soul's orbit around the eternal center (Atman). It reflects the rotation of the planets and the cyclical nature of time (Samsara).",
    placement: "An open or enclosed walkway surrounding the exterior of the Garbhagriha.",
    examples: [
      { name: "Kailasa Temple", loc: "Ellora, Maharashtra", img: "assets/temples/virupaksha.jpg" },
      { name: "Brihadeeswarar Temple", loc: "Thanjavur, Tamil Nadu", img: "assets/temples/brihadeeswarar.jpg" }
    ],
    fact: "The word 'Dakshina' means 'right' or 'South'; Pradakshina literally means keeping the right side toward the center.",
    image: "assets/icons/pradakshina_premium_1775986453686.png"
  },
  8: {
    id: 8,
    name: "Kalasha",
    sanskrit: "कलश",
    category: "Architecture",
    style: "All",
    description: "The sacred pot finial that crowns the very top of the temple spire.",
    detail: "The Kalasha is the highest point of the temple's physical structure. It is a pot-shaped metal or stone finial that sits atop the spire. Often gilded in gold, it catches the first rays of the sun, acting as a spiritual antenna. In many traditions, its installation is the final act of consecrating a temple.",
    symbolism: "Derived from the Vedic 'Kumbha' or water pot, it symbolizes abundance, fertility, and the 'Amrita' (nectar of immortality). It represents the seed from which the temple grows.",
    placement: "The very summit of the temple tower, finishing the vertical axis of the structure.",
    examples: [
      { name: "Somnath Temple", loc: "Veraval, Gujarat", img: "assets/temples/modhera_sun.jpg" },
      { name: "Brihadeeswarar Temple", loc: "Thanjavur, Tamil Nadu", img: "assets/temples/brihadeeswarar.jpg" }
    ],
    fact: "Ancient texts specify that the shadow of the Kalasha should never fall on the ground at high noon.",
    image: "assets/icons/kalasha_premium_1775986485972.png"
  },
  9: {
    id: 9,
    name: "Amalaka",
    sanskrit: "आमलक",
    category: "Architecture",
    style: "Nagara",
    description: "The ribbed, solar stone disc capping the towers of North Indian temples.",
    detail: "The Amalaka is a massive, circular, fluted stone disc that rests at the peak of a Nagara Shikhara. Its name is derived from the 'Amla' or Indian gooseberry fruit. This stone acts as a crowning ring-stone that locks the vertical slabs of the Shikhara into place.",
    symbolism: "It represents the sun or the 'Lotus of the Heart'. Its ribbing is reflective of the solar rays, signifying the radiation of spiritual knowledge from the center to the world.",
    placement: "Located at the absolute summit of the Shikhara tower, just below the Kalasha finial.",
    examples: [
      { name: "Lingaraja Temple", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" },
      { name: "Sun Temple", loc: "Konark, Odisha", img: "assets/temples/konark_sun.jpg" }
    ],
    fact: "The word is also associated with 'Amala' which means pure or stainless, reflecting the purity of spiritual enlightenment.",
    image: "assets/icons/amalaka_premium_icon_1775986531593.png"
  },
  10: {
    id: 10,
    name: "Jagati",
    sanskrit: "जगती",
    category: "Architecture",
    style: "Nagara",
    description: "The massive raised stone platform that supports the entire temple structure.",
    detail: "The Jagati is a high stone platform that elevates the entire sacred precinct above the mundane world. In Nagara architecture, it is expansive, providing a broad space for devotees to walk around the exterior of the shrine. The sides are often decorated with rhythmic moldings.",
    symbolism: "Derived from 'Jagat' (Universe), it represents the manifest world or the horizontal base of the cosmic architecture. Elevating the temple signifies that one is entering a higher state of consciousness.",
    placement: "The primary raised basement or platform upon which North Indian temples are constructed.",
    examples: [
      { name: "Kandariya Mahadeva", loc: "Khajuraho, Madhya Pradesh", img: "assets/temples/kandariya_mahadeva.jpg" },
      { name: "Konark Wheel", loc: "Konark, Odisha", img: "assets/temples/konark_sun.jpg" }
    ],
    fact: "At Konark, the Jagati is styled as a massive chariot with 24 stone-carved wheels.",
    image: "assets/icons/jagati_premium_1775986571224.png"
  },
  11: {
    id: 11,
    name: "Torana",
    sanskrit: "तोरण",
    category: "Architecture",
    style: "All",
    description: "The ornamental, free-standing arched gateway marking a sacred boundary.",
    detail: "The Torana is a free-standing architectural gateway that serves as the ceremonial entrance to a sacred site. It usually consists of two massive vertical pillars supporting horizontal beams. The beams are often lavishly carved with scenes from mythology and nature.",
    symbolism: "It represents the threshold of enlightenment. To pass through a Torana is to leave behind the ego and the mundane world, entering a zone where different laws of reality apply.",
    placement: "Often found as a free-standing gateway at the main entrance of a temple complex or an outer courtyard.",
    examples: [
      { name: "Sanchi Torana", loc: "Sanchi, Madhya Pradesh", img: "assets/icons/torana_premium_gateway_1775986597229.png" },
      { name: "Mukteshwar Torana", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" }
    ],
    fact: "The word 'Torana' is the root of the word 'throne' in several Indo-European languages via the concept of a royal gateway.",
    image: "assets/icons/torana_premium_gateway_1775986597229.png"
  },
  12: {
    id: 12,
    name: "Adhishthana",
    sanskrit: "अधिष्ठान",
    category: "Architecture",
    style: "Dravidian",
    description: "The highly articulated stone base of a South Indian temple.",
    detail: "The Adhisthana is the 'foundation' or articulated basement of a Dravidian temple. It is a precise sequence of horizontally layered moldings that follow strict mathematical ratios. Each layer has a specific name and aesthetic function.",
    symbolism: "It signifies the 'basis' or the support of the manifest world. It represents the grounding of spiritual energy into the material plane with mathematical precision.",
    placement: "The sequence of moldings at the very base of the temple walls in South Indian architecture.",
    examples: [
      { name: "Brihadeeswarar Temple", loc: "Thanjavur, Tamil Nadu", img: "assets/temples/brihadeeswarar.jpg" },
      { name: "Shore Temple", loc: "Mahabalipuram, Tamil Nadu", img: "assets/temples/shore_temple.jpg" }
    ],
    fact: "The height of the Adhisthana determines the scale of all subsequent architectural parts of the temple.",
    image: "assets/icons/adhisthana_premium_base_1775986626833.png"
  },
  13: {
    id: 13,
    name: "Gavaksha",
    sanskrit: "गवाक्ष",
    category: "Architecture",
    style: "All",
    description: "A decorative 'cow-eye' window motif forming the basic unit of temple wall texture.",
    detail: "The Gavaksha (or Chandrashala) is an ovoid or horseshoe-shaped decorative window arch. Originally derived from wooden windows, it migrated into stone as a purely decorative element, often forming a complex honeycomb mesh called 'Jala' on temple towers.",
    symbolism: "Literally 'cow-eye' (Gava + Aksha), it represents the celestial eye or the openings through which the light of the divine shines from the interior of the temple to the world.",
    placement: "Used as a recurring motif on the exterior walls, spires, and niches of almost every classical temple type.",
    examples: [
      { name: "Kailasa Temple", loc: "Ellora, Maharashtra", img: "assets/temples/virupaksha.jpg" },
      { name: "Lingaraja Temple", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" }
    ],
    fact: "The Gavaksha motif was the primary way that early Indian architects acknowledged their historical origins in wood and bamboo construction.",
    image: "assets/icons/gavaksha_premium_motif_1775986667144.png"
  },
  14: {
    id: 14,
    name: "Pushkarini",
    sanskrit: "पुष्करिणी",
    category: "Architecture",
    style: "Dravidian",
    description: "The sacred temple tank used for ritual baths and purification.",
    detail: "Water is central to Indian ritual, and no temple is complete without its Pushkarini. These are often massive, stone-stepped rectangular reservoirs used for purification before entering the sacred precinct.",
    symbolism: "It represents the 'primordial waters' of creation. The act of bathing signifies the washing away of mundane attachments and the rebirth of the soul in a purified state.",
    placement: "Usually located near the main entrance or on the eastern side of the temple complex.",
    examples: [
      { name: "Golden Lily Tank", loc: "Madurai, Tamil Nadu", img: "assets/temples/meenakshi_amman.jpg" },
      { name: "Hampi Pushkarini", loc: "Hampi, Karnataka", img: "assets/temples/hoysaleswara.jpg" }
    ],
    fact: "The water level in some ancient Pushkarinis is maintained through sophisticated underground aqueduct systems that have functioned for centuries.",
    image: "assets/icons/pushkarini_premium_tank_1775986693290.png"
  },
  15: {
    id: 15,
    name: "Valabhi",
    sanskrit: "वलभी",
    category: "Architecture",
    style: "Nagara",
    description: "A vaulted barrel-roof style used primarily for rectangular shrines.",
    detail: "Valabhi refers to a specific roof form resembling a barrel or a wagon-vault. This form is historically significant as it preserves the shape of the earliest rock-cut 'Chaitya' halls.",
    symbolism: "Often associated with the 'Shakti' or feminine divine principle, as the vault mimics the shape of a cave or a protective womb.",
    placement: "The roof-type found on rectangular temples, specifically those dedicated to goddess traditions.",
    examples: [
      { name: "Vaital Deula", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" },
      { name: "Teli ka Mandir", loc: "Gwalior, Madhya Pradesh", img: "assets/temples/virupaksha.jpg" }
    ],
    fact: "The barrel-vault shape was originally designed to mimic ancient wooden halls with bent-bamboo rafters.",
    image: "assets/icons/valabhi_premium_roof_1775986710829.png"
  },
  16: {
    id: 16,
    name: "Phamsana",
    sanskrit: "फम्सना",
    category: "Architecture",
    style: "Nagara",
    description: "A stepped, pyramidal roof used primarily over assembly halls.",
    detail: "The Phamsana is a horizontal architectural counterpart to the vertical Shikhara, consisting of multiple flat rectangular slabs stacked in a receding pyramidal fashion.",
    symbolism: "It represents a 'resting mountain' or a stable platform. Its horizontal emphasis signifies the social and terrestrial aspects of the temple as a meeting house.",
    placement: "The superstructure covering the Mandapa or assembly hall in the Nagara tradition.",
    examples: [
      { name: "Jagannath Mandapa", loc: "Puri, Odisha", img: "assets/temples/real_konark_1.jpg" },
      { name: "Lakshmana Mandapa", loc: "Khajuraho, Madhya Pradesh", img: "assets/temples/kandariya_mahadeva.jpg" }
    ],
    fact: "Phamsana roofs were designed to be extremely durable, often surviving for centuries after the taller spires may have collapsed.",
    image: "assets/icons/phamsana_premium_roof_1775986745329.png"
  },
  17: {
    id: 17,
    name: "Dhvaja Stambha",
    sanskrit: "ध्वजस्तम्भ",
    category: "Architecture",
    style: "Dravidian",
    description: "The tall, metal-encased banner mast marking the temple's active presence.",
    detail: "The Dhvaja Stambha is a tall, slender pillar usually made of stone or wood and encased in metal. It stands on a square pedestal and is crowned by a horizontal bar from which the temple flag is flown.",
    symbolism: "It represents a spiritual beacon or a 'lightning rod' for cosmic energy. It signifies that the temple is 'active' and under the rule of its presiding deity.",
    placement: "Located on the central axis between the outer gateway (Gopuram) and the main hall (Mandapa).",
    examples: [
      { name: "Meenakshi Amman", loc: "Madurai, Tamil Nadu", img: "assets/temples/meenakshi_amman.jpg" },
      { name: "Padmanabhaswamy", loc: "Thiruvananthapuram, Kerala", img: "assets/temples/brihadeeswarar.jpg" }
    ],
    fact: "In some traditions, the height of the banner mast must be exactly equal to the height of the main spire (Vimana).",
    image: "assets/icons/dhvaja_stambha_new.png"
  },
  18: {
    id: 18,
    name: "Sukhanasi",
    sanskrit: "सुखनासी",
    category: "Architecture",
    style: "Vesara",
    description: "The ornamental 'parrot-nose' projection fronting the main tower.",
    detail: "The Sukhanasi is a distinctive feature of Deccan temples. It is an arched architectural projection that emerges from the front face of the tower and extends over the vestibule.",
    symbolism: "Literally 'parrot-nose', it represents the breath or the vital force (Prana) of the temple emanating from the inner sanctum to the exterior world.",
    placement: "The architectural projection on the front face of the tower, directly above the Antarala passage.",
    examples: [
      { name: "Hoysaleswara Temple", loc: "Halebidu, Karnataka", img: "assets/temples/hoysaleswara.jpg" },
      { name: "Virupaksha Temple", loc: "Pattadakal, Karnataka", img: "assets/temples/virupaksha.jpg" }
    ],
    fact: "The Sukhanasi is often the first place where a pilgrim can see a representation of the god residing inside the lightless sanctum.",
    image: "assets/icons/sukhanasi_new.png"
  },
  19: {
    id: 19,
    name: "Dvarapala",
    sanskrit: "द्वारपाल",
    category: "Sculpture",
    style: "All",
    description: "Fierce guardian sculptures stationed at sacred thresholds.",
    detail: "Dvarapalas are the sentinels of the sacred space. These monumental figures stand in pairs on either side of the entrance to the temple or the inner sanctum, commanding respect and alerting the pilgrim to the sanctity of the space.",
    symbolism: "The name literally means 'Door Protector'. Symbolically, these guardians represent the inner obstacles (ego, desire) one must overcome before facing the divine.",
    placement: "Always in pairs, flanking the entrance to the temple or the passage leading into the sanctum.",
    examples: [
      { name: "Kailasanathar", loc: "Kanchipuram, Tamil Nadu", img: "assets/temples/shore_temple.jpg" },
      { name: "Chennakeshava", loc: "Belur, Karnataka", img: "assets/temples/chennakeshava.jpg" }
    ],
    fact: "At many ancient sites, the Dvarapala figures were the first sculptures to be carved.",
    image: "assets/icons/dvarapala_new.png"
  },
  20: {
    id: 20,
    name: "Mithuna",
    sanskrit: "मिथुन",
    category: "Sculpture",
    style: "Nagara",
    description: "Auspicious sculptures of couples symbolizing cosmic union and harmony.",
    detail: "Mithuna sculptures depict couples in various states of harmony and intimacy, symbolizing the non-dual union of Consciousness and Matter. They are displayed prominently on outer walls as auspicious elements.",
    symbolism: "It represents the union of Purusha (Consciousness) and Prakriti (Matter), signifying that the manifest universe is born from divine masculine and feminine principles.",
    placement: "Located on the exterior wall friezes (Janghas), particularly at the junctions (Sandhis).",
    examples: [
      { name: "Kandariya Mahadeva", loc: "Khajuraho, Madhya Pradesh", img: "assets/temples/kandariya_mahadeva.jpg" },
      { name: "Konark Panel", loc: "Konark, Odisha", img: "assets/temples/konark_mithuna.png" }
    ],
    fact: "In Shilpa Shastra, a temple without Mithuna sculptures is considered incomplete and unprotected.",
    image: "assets/icons/mithuna_new.png"
  },
  21: {
    id: 21,
    name: "Apsara",
    sanskrit: "अप्सरा",
    category: "Sculpture",
    style: "All",
    description: "Celestial dancers and nymphs representing beauty and heavenly grace.",
    detail: "Apsaras are celestial dancers depicted in idealized female figures, often performing actions like dancing or playing instruments. They fill the vertical recesses of temple walls, suggesting a celestial entourage.",
    symbolism: "They symbolize refined sensory pleasure (Kama) transformed into spiritual yearning, reflecting the soul's awakening in the presence of the Sacred.",
    placement: "Typically found in the vertical niches and recessed panels of exterior walls.",
    examples: [
      { name: "Chennakeshava Bracket", loc: "Belur, Karnataka", img: "assets/temples/chennakeshava.jpg" },
      { name: "Lakshmana Apsara", loc: "Khajuraho, Madhya Pradesh", img: "assets/icons/apsara_new.png" }
    ],
    fact: "Angkor Wat features over 1,700 unique Apsara carvings, each with different styles.",
    image: "assets/icons/apsara_new.png"
  },
  22: {
    id: 22,
    name: "Vyala (Yali)",
    sanskrit: "व्याल",
    category: "Sculpture",
    style: "Dravidian",
    description: "A composite leonine beast symbolizing supreme strength and cosmic vigor.",
    detail: "The Yali is a fantastic composite creature with a lion's body and varied features. It's often seen rearing on its hind legs to form massive pillars in South Indian halls, symbolizing harnessed raw power.",
    symbolism: "The Yali represents the fierce, protective aspect of the universe (Shakti) and the 'Life-Force' (Prana) protecting the sacred sanctum.",
    placement: "Integral to the pillar designs of Mandapas, particularly in the Vijayanagara and Nayak periods.",
    examples: [
      { name: "Vittala Pillar Yali", loc: "Hampi, Karnataka", img: "assets/temples/hoysaleswara.jpg" },
      { name: "Meenakshi Yali", loc: "Madurai, Tamil Nadu", img: "assets/icons/yali_new.png" }
    ],
    fact: "Sculptors sometimes carved an entire rolling stone ball inside the open mouth of a Yali.",
    image: "assets/icons/yali_new.png"
  },
  23: {
    id: 23,
    name: "Makara",
    sanskrit: "मकर",
    category: "Sculpture",
    style: "All",
    description: "A mythical aquatic hybrid serving as the vehicle of river goddesses.",
    detail: "The Makara is a composite aquatic lord, often acting as the mount for Ganga and Yamuna on temple doorways. It creates a frame of aquatic beauty for the temple portals.",
    symbolism: "It represents the dual nature of water: terrifyingly deep yet life-givingly generative. It signifies the emergence of life and purification.",
    placement: "Found on the lower corners of door frames and terminal points for decorative arches.",
    examples: [
      { name: "Belur Makara", loc: "Belur, Karnataka", img: "assets/temples/chennakeshava.jpg" },
      { name: "Pattadakal Makara", loc: "Pattadakal, Karnataka", img: "assets/icons/makara_new.png" }
    ],
    fact: "The Makara is also the zodiac sign represented as Capricorn.",
    image: "assets/icons/makara_new.png"
  },
  24: {
    id: 24,
    name: "Kirtimukha",
    sanskrit: "कीर्तिमुख",
    category: "Sculpture",
    style: "All",
    description: "The terrifying 'Face of Glory' mask placed at the apex of temple arches.",
    detail: "The Kirtimukha is a stylized mask placed at the top of arches, symbolizing the devouring aspect of Time. Mythologically, it's a creation of Shiva that devoured itself, leaving only its face.",
    symbolism: "Literally 'Face of Glory', it represents the ego-crushing majesty of the Divine and the devouring nature of Time (Kala).",
    placement: "Located at the central apex of almost every architectural arch and niche.",
    examples: [
      { name: "Badami Kirtimukha", loc: "Badami, Karnataka", img: "assets/temples/virupaksha.jpg" },
      { name: "Lingaraja Apex", loc: "Bhubaneswar, Odisha", img: "assets/icons/kirtimukha_new.png" }
    ],
    fact: "Kirtimukha is also found in Tibetan architecture as the 'Taotie'.",
    image: "assets/icons/kirtimukha_new.png"
  },
  25: {
    id: 25,
    name: "Salabhanjika",
    sanskrit: "शालभञ्जिका",
    category: "Sculpture",
    style: "All",
    description: "The tree-nymph motif depicting a woman grasping a fruit-bearing branch.",
    detail: "The Salabhanjika motif depicts a young woman standing under a tree, representing the connection between human life and the natural world. It's a symbol of fertility and abundance.",
    symbolism: "It represents fertility, the abundance of spring, and the soul's awakening in the presence of the Sacred.",
    placement: "Often used as decorative bracket figures (Madanikas) between pillars and ceilings.",
    examples: [
      { name: "Sanchi Salabhanjika", loc: "Sanchi, Madhya Pradesh", img: "assets/icons/salabhanjika_new.png" },
      { name: "Belur Madanika", loc: "Belur, Karnataka", img: "assets/temples/chennakeshava.jpg" }
    ],
    fact: "The word was originally used for women who gathered flowers from the Shala tree.",
    image: "assets/icons/salabhanjika_new.png"
  },
  26: {
    id: 26,
    name: "Surasundari",
    sanskrit: "सुरासुन्दरी",
    category: "Sculpture",
    style: "Nagara",
    description: "Celestial beauties depicted in idealized daily or symbolic activities.",
    detail: "Surasundaris are 'beauties of the heavens' depicted in humanized tasks, representing the refinement of daily life lived in spiritual awareness.",
    symbolism: "Literally 'beautiful woman of the gods', they represent desire transformed into spiritual yearning.",
    placement: "Found predominantly on the exterior wall friezes (Janghas) of Nagara and Vesara temples.",
    examples: [
      { name: "Kandariya Surasundari", loc: "Khajuraho, Madhya Pradesh", img: "assets/icons/surasundari_new.png" },
      { name: "Rajarani Nymph", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" }
    ],
    fact: "Classical Sanskrit poetry often provides descriptions that sculptors followed for these forms.",
    image: "assets/icons/surasundari_new.png"
  },
  27: {
    id: 27,
    name: "Ashtadikpala",
    sanskrit: "अष्टदिक्पाल",
    category: "Sculpture",
    style: "All",
    description: "The eight directional guardians who maintain cosmic order within the temple.",
    detail: "These guardians of the eight directions are placed at their corresponding points on outer walls, each with unique mounts and weapons, stabilizing the temple mandala.",
    symbolism: "They represent the oversight of the universe by divine law. Correct placement ensures the temple is a perfectly oriented cosmic map.",
    placement: "Found on the exterior wall panels at the eight cardinal and ordinal corners.",
    examples: [
      { name: "Lingaraja Guardians", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" },
      { name: "Lakshmana Guardians", loc: "Khajuraho, Madhya Pradesh", img: "assets/icons/ashtadikpala_new.png" }
    ],
    fact: "In some temples, they are also carved into the ceiling in a circular pattern.",
    image: "assets/icons/ashtadikpala_new.png"
  },
  28: {
    id: 28,
    name: "Navagraha",
    sanskrit: "नवग्रह",
    category: "Sculpture",
    style: "All",
    description: "The nine planetary deities governing the cycles of time and destiny.",
    detail: "The Navagrahas represent nine celestial influences, usually shown together on a single lintel. They align the temple's ritual life with the celestial movements.",
    symbolism: "They represent the seizers of Time. Their presence signifies that the temple stands above the reach of planetary karma.",
    placement: "Commonly carved on a single lintel above the entrance to the Garbhagriha or main hall.",
    examples: [
      { name: "Sun Temple", loc: "Konark, Odisha", img: "assets/temples/real_konark_facade.jpg" },
      { name: "Kailasa Panel", loc: "Ellora, Maharashtra", img: "assets/temples/virupaksha.jpg" }
    ],
    fact: "The Navagraha lintel at Konark is exhibited in its own separate museum at the site.",
    image: "assets/icons/navagraha_new.png"
  },
  29: {
    id: 29,
    name: "Ganga & Yamuna",
    sanskrit: "गंगा यमुना",
    category: "Sculpture",
    style: "Nagara",
    description: "Personifications of the sacred rivers guarding the sanctum thresholds.",
    detail: "Personified as the primary guardians of the sanctum door in the North, Ganga and Yamuna on their respective mounts represent purifying the devotee before entering the divine space.",
    symbolism: "They represent the purification of the devotee, acting as a ritual substitute for actual river bathing.",
    placement: "Found at the base of the left and right vertical doorposts of the sanctum entrance.",
    examples: [
      { name: "Teli ka Mandir", loc: "Gwalior, Madhya Pradesh", img: "assets/temples/kandariya_mahadeva.jpg" },
      { name: "Deogarh Gateway", loc: "Deogarh, Uttar Pradesh", img: "assets/icons/ganga_yamuna_new.png" }
    ],
    fact: "Before river goddesses, sanctum doors were guarded by auspicious couple (Mithuna) figures.",
    image: "assets/icons/ganga_yamuna_new.png"
  },
  30: {
    id: 30,
    name: "Gana",
    sanskrit: "गण",
    category: "Sculpture",
    style: "All",
    description: "Boisterous dwarf attendants of Shiva, embodying elemental and playful energy.",
    detail: "Ganas are playful, dwarf attendants of Lord Shiva depicted in horizontal friezes. They provide an earthy humor to the architectural program while signifying elemental forces.",
    symbolism: "They represent primordial, elemental forces tamed by divine order, signifying that even chaos has a place in the cosmic dance.",
    placement: "Located on the basements (Adhisthanas) or terminal pillar points.",
    examples: [
      { name: "Badami Ganas", loc: "Badami, Karnataka", img: "assets/temples/virupaksha.jpg" },
      { name: "Lingaraja Frieze", loc: "Bhubaneswar, Odisha", img: "assets/icons/gana_new.png" }
    ],
    fact: "The name literally means 'group' or 'count', and Ganesha is their lord.",
    image: "assets/icons/gana_new.png"
  },
  31: {
    id: 31,
    name: "Sardula",
    sanskrit: "शार्दूल",
    category: "Sculpture",
    style: "Vesara",
    description: "The mythical tiger-beast representing raw force and royal power.",
    detail: "The Sardula is a fantastic mythical cat representing unbridled power and the protection of the sacred sanctum. It's a dominant motif in the art of the Deccan and Odisha.",
    symbolism: "It represents the 'Rajasic' or active quality, symbolizing the conquest of wild instinct by human courage.",
    placement: "Found in niches and corner junctions of spires and wall panels.",
    examples: [
      { name: "Kandariya Sardula", loc: "Khajuraho, Madhya Pradesh", img: "assets/icons/sardula_new.png" },
      { name: "Konark Sardula", loc: "Konark, Odisha", img: "assets/temples/real_konark_facade.jpg" }
    ],
    fact: "The word Sardula is a metaphor for 'tiger among men'.",
    image: "assets/icons/sardula_new.png"
  },
  32: {
    id: 32,
    name: "Nandi",
    sanskrit: "नन्दी",
    category: "Sculpture",
    style: "All",
    description: "The sacred bull mount of Shiva, symbolizing waiting and stability.",
    detail: "Nandi, the loyal vehicle of Lord Shiva, is depicted as a resting bull, always sitting outside the sanctum looking inward. He symbolizes serene presence and grounded mass.",
    symbolism: "Nandi represents waiting and devotion, signifying the soul's patient expectation for divine grace.",
    placement: "Positioned directly in front of the Shiva sanctum entrance, often in its own pavilion.",
    examples: [
      { name: "Kandariya Nandi", loc: "Khajuraho, Madhya Pradesh", img: "assets/temples/kandariya_mahadeva.jpg" },
      { name: "Mysuru Nandi", loc: "Mysuru, Karnataka", img: "assets/icons/nandi_premium.png" }
    ],
    fact: "The Nandi at Lepakshi is one of the largest monolithic bulls in the world.",
    image: "assets/icons/nandi_premium.png"
  },
  33: {
    id: 33,
    name: "Garuda",
    sanskrit: "गरुड़",
    category: "Sculpture",
    style: "All",
    description: "The divine eagle mount of Vishnu, representing speed and spiritual flight.",
    detail: "Garuda is the half-man, half-eagle mount of Vishnu, shown ready for flight. Most commonly seen on tops of free-standing pillars in front of Vishnu temples.",
    symbolism: "Garuda represents the Vedas and the soul's ability to transcend the mundane world through wisdom.",
    placement: "On free-standing pillars (stambha) or as corner figures on Vishnu spires.",
    examples: [
      { name: "Garuda Shrine", loc: "Hampi, Karnataka", img: "assets/temples/hoysaleswara.jpg" },
      { name: "Jagannath Garuda", loc: "Puri, Odisha", img: "assets/icons/garuda_premium.png" }
    ],
    fact: "In myth, his wing flaps create the rhythm of the universe.",
    image: "assets/icons/garuda_premium.png"
  },
  34: {
    id: 34,
    name: "Stupika",
    sanskrit: "स्तूपिका",
    category: "Architecture",
    style: "Dravidian",
    description: "The dome-shaped finial capping the vimana spire in South India.",
    detail: "The Stupika is the final architectural component of a South Indian Vimana, a crown-like capstone that stabilizes the tiered structure below.",
    symbolism: "It represents the infinite space crowning the cosmic mountain, where all tiered planes meet the divine singularity.",
    placement: "The dome-like stone capping the very top of the Vimana tower.",
    examples: [
      { name: "Brihadeeswarar Cap", loc: "Thanjavur, Tamil Nadu", img: "assets/temples/brihadeeswarar.jpg" },
      { name: "Shore Stupika", loc: "Mahabalipuram, Tamil Nadu", img: "assets/icons/stupika_premium.png" }
    ],
    fact: "At Thanjavur, its shadow is said to never touch the ground during the day.",
    image: "assets/icons/stupika_premium.png"
  },
  35: {
    id: 35,
    name: "Bali Pitha",
    sanskrit: "बलिपीठ",
    category: "Architecture",
    style: "Dravidian",
    description: "The sacrificial altar-stone located near the temple entrance.",
    detail: "A lotus-shaped stone altar where devotees place offerings, representing the symbolic surrender of the ego before entering the sanctum.",
    symbolism: "The name means 'Sacrificial Seat', symbolizing the surrender of worldly desires and the lower self.",
    placement: "On the central axis directly in front of the main temple entrance.",
    examples: [
      { name: "Meenakshi Amman", loc: "Madurai, Tamil Nadu", img: "assets/temples/meenakshi_amman.jpg" },
      { name: "Ranganathaswamy Seat", loc: "Srirangam, Tamil Nadu", img: "assets/icons/balipitha_premium.png" }
    ],
    fact: "Devotees perform prostrations just behind the Bali Pitha before entering.",
    image: "assets/icons/balipitha_premium.png"
  },
  36: {
    id: 36,
    name: "Shulba Sutras",
    sanskrit: "शुल्ब सूत्र",
    category: "Sacred Geometry",
    style: "All",
    description: "Ancient mathematical texts defining the geometric laws of sacred altars.",
    detail: "Texts providing geometric instructions for the measurement and construction of sacred spaces using only rope and stakes, the foundation of all Vastu architecture.",
    symbolism: "They represent the 'Divine Blueprint', ensuring every temple mirrors the mathematical laws of the universe.",
    placement: "Theoretical foundation used by architects to determine plans and elevations.",
    examples: [
      { name: "Fire Altars", loc: "Baudhayana Texts", img: "assets/icons/shulba_sutra_altar_1775985419191.png" },
      { name: "Geometric Study", loc: "Ancient Manuscripts", img: "assets/icons/shulba_sutra_real.png" }
    ],
    fact: "They contain the earliest formulations of geometric transformations and irrational numbers.",
    image: "assets/icons/shulba_sutra_altar_1775985419191.png"
  },
  37: {
    id: 37,
    name: "Ayadi Proportions",
    sanskrit: "आयदि",
    category: "Sacred Geometry",
    style: "Dravidian",
    description: "A system of six formulas ensuring the structure resonates with human energies.",
    detail: "A system of formulas applied to temple dimensions to ensure the building is in auspicious harmony with time and planetary positions.",
    symbolism: "Architectural Astrology that connects a building's geometry with life-rhythms and prosperity.",
    placement: "Used in the design phase to set exact dimensions for foundations and walls.",
    examples: [
      { name: "Vastu Mandala", loc: "Architectural Theory", img: "assets/icons/vastu_purusha_mandala_premium_1775985389504.png" },
      { name: "Mayamata Text", loc: "Scholarly Application", img: "assets/temples/hoysaleswara.jpg" }
    ],
    fact: "No two temples have the exact same dimensions thanks to this custom system.",
    image: "assets/icons/vastu_purusha_mandala_premium_1775985389504.png"
  },
  38: {
    id: 38,
    name: "Stambha Axis",
    sanskrit: "स्तम्भ",
    category: "Sacred Geometry",
    style: "All",
    description: "The invisible vertical cosmic pillar connecting the earth to the heavens.",
    detail: "The invisible central axis running through the sanctum from origin to sky, the backbone of a temple's cosmic orientation.",
    symbolism: "Represents the 'Axis Mundi' or Pillar of Fire, the tree of life at the world's center.",
    placement: "Invisible vertical line through the center of the Garbhagriha and finial.",
    examples: [
      { name: "Ashoka Pillars", loc: "Sanchi, Madhya Pradesh", img: "assets/temples/real_konark_1.jpg" },
      { name: "Indra-stambha", loc: "Ellora, Maharashtra", img: "assets/icons/stambha_axis_real.jpg" }
    ],
    fact: "The word Stambha is the root of English words like stand and stable.",
    image: "assets/icons/dhvaja_stambha_new.png"
  },
  39: {
    id: 39,
    name: "Rekha Deula",
    sanskrit: "रेखा देउल",
    category: "Sacred Geometry",
    style: "Nagara",
    description: "The curvilinear spire geometry characteristic of Kalinga (Odisha) architecture.",
    detail: "A specialized tower form defined by curvilinear lines, generating a smooth paraboloid curve that appears to reach infinite height.",
    symbolism: "Represents the direct, linear ascent of the soul toward the singular point of truth.",
    placement: "Main tower rising over the sanctum in the Kalinga regional style.",
    examples: [
      { name: "Lingaraja Spire", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" },
      { name: "Jagannath Spire", loc: "Puri, Odisha", img: "assets/icons/rekha_deula_premium.png" }
    ],
    fact: "The mathematical curves would meet miles high if extended into the sky.",
    image: "assets/icons/rekha_deula_premium.png"
  },
  40: {
    id: 40,
    name: "Pidha Deula",
    sanskrit: "पीढ़ देउल",
    category: "Sacred Geometry",
    style: "Nagara",
    description: "A stepped pyramidal roof plan formed by horizontally stacked square tiers.",
    detail: "The roof style used for assembly halls in Odisha, contrasting with the vertical spire through horizontal tiered geometry.",
    symbolism: "Represents the Platform of the Sun and the horizontal layers of the manifest world.",
    placement: "Superstructure covering the assembly hall (Jagamohana) in Odisha.",
    examples: [
      { name: "Sun Temple Hall", loc: "Konark, Odisha", img: "assets/temples/konark_sun.jpg" },
      { name: "Lingaraja Hall", loc: "Bhubaneswar, Odisha", img: "assets/icons/pidha_deula_premium.png" }
    ],
    fact: "At Konark, the Pidha Deula is the only part that has survived fully intact.",
    image: "assets/icons/pidha_deula_premium.png"
  },
  41: {
    id: 41,
    name: "Khakhara Deula",
    sanskrit: "खाखरा देउल",
    category: "Sacred Geometry",
    style: "Nagara",
    description: "A rectangular plan topped by a barrel-vaulted roof, uniquely used for goddess shrines.",
    detail: "A rare Odishan temple form specialized for goddess worship, distinguished by its oblong gourd-like roof style.",
    symbolism: "Symbolizes the 'Cave of the Goddess' and the feminine creative principle (Shakti).",
    placement: "Architectural form used for shrines dedicated to Mother Goddesses.",
    examples: [
      { name: "Vaital Deula", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" },
      { name: "Varahi Chaurasi", loc: "Chaurasi, Odisha", img: "assets/icons/khakhara_deula_premium.png" }
    ],
    fact: "Designed specifically for esoteric Tantric rituals needing concentrated geometric space.",
    image: "assets/icons/khakhara_deula_premium.png"
  },
  42: {
    id: 42,
    name: "Stellated Plan",
    sanskrit: "नक्षत्र पीठ",
    category: "Sacred Geometry",
    style: "Vesara",
    description: "The complex star-shaped platform layout achieved by rotating a square.",
    detail: "A peak of Hoysala geometry created by rotating a square layout, resulting in faceted walls with complex shadows.",
    symbolism: "Literally 'Star Seat', symbolizing the radial diffusion of divine light throughout the universe.",
    placement: "Ground layout of platforms and walls in Hoysala temples.",
    examples: [
      { name: "Chennakeshava Plan", loc: "Belur, Karnataka", img: "assets/temples/chennakeshava.jpg" },
      { name: "Hoysaleswara Plan", loc: "Halebidu, Karnataka", img: "assets/icons/stellated_plan_premium.png" }
    ],
    fact: "Stones interlock with such geometric precision that no mortar was required.",
    image: "assets/icons/stellated_plan_premium.png"
  },
  43: {
    id: 43,
    name: "Brihadeeswarar",
    category: "Case Study",
    style: "Dravidian",
    description: "The 'Big Temple' of Thanjavur, a granite masterpiece of the Chola Empire.",
    detail: "The zenith of Chola architecture built by Raja Raja I entirely of hard granite, featuring a Vimana 216 feet high.",
    symbolism: "Means 'Lord of Greatness', manifesting imperial authority and direct connection to the Divine.",
    placement: "Thanjavur, Tamil Nadu. Former Chola capital heart.",
    examples: [
      { name: "Main Vimana", loc: "Thanjavur, Tamil Nadu", img: "assets/temples/brihadeeswarar.jpg" },
      { name: "Chola Sanctum", loc: "Thanjavur, Tamil Nadu", img: "assets/temples/garbhagriha_main_v2.jpg" }
    ],
    fact: "The 216-foot tower stands purely via stone weight and precision fit with no mortar.",
    image: "assets/temples/brihadeeswarar.jpg"
  },
  44: {
    id: 44,
    name: "Konark Sun Temple",
    category: "Case Study",
    style: "Nagara",
    description: "The colossal stone chariot of the Sun God, featuring twelve pairs of sundial wheels.",
    detail: "Grand Kalinga temple designed as a celestial chariot with 24 carved wheels and seven stone horses.",
    symbolism: "Mapping Celestial Time onto Earthly Space, celebrating the sun as the ultimate life-driver.",
    placement: "Konark, Odisha coastline.",
    examples: [
      { name: "The Sun Chariot", loc: "Konark, Odisha", img: "assets/temples/real_konark_1.jpg" },
      { name: "Nata Mandira", loc: "Konark, Odisha", img: "assets/temples/konark_natya_mandapa.png" }
    ],
    fact: "The 24 wheels function as accurate sundials telling time to within two minutes.",
    image: "assets/temples/konark_sun.jpg"
  },
  45: {
    id: 45,
    name: "Khajuraho Group",
    category: "Case Study",
    style: "Nagara",
    description: "A fractal mountain range of stone temples renowned for their vertical spires.",
    detail: "Peak of Central Indian Nagara architecture featuring hundreds of clustered spires mirroring mountain ranges.",
    symbolism: "Represents Mount Kailasa, emphasizing the soul's vertical ascent through experience.",
    placement: "Khajuraho, Madhya Pradesh plateau.",
    examples: [
      { name: "Kandariya Mahadeva", loc: "Khajuraho, Madhya Pradesh", img: "assets/temples/kandariya_mahadeva.jpg" },
      { name: "Khajuraho Apsara", loc: "Khajuraho, Madhya Pradesh", img: "assets/icons/apsara_new.png" }
    ],
    fact: "Famed erotic art actually represents less than 10% of the total carvings.",
    image: "assets/temples/kandariya_mahadeva.jpg"
  },
  46: {
    id: 46,
    name: "Meenakshi Amman",
    category: "Case Study",
    style: "Dravidian",
    description: "A vast temple city complex featuring fourteen sky-scraping gopurams.",
    detail: "Sprawling 14-acre temple city mandala reorganized around dual shrines and colossal color-drenched towers.",
    symbolism: "Signifies sacred order flourishing in life, with walls representing layers of personality.",
    placement: "Madurai, Tamil Nadu urban core.",
    examples: [
      { name: "South Gopuram", loc: "Madurai, Tamil Nadu", img: "assets/temples/meenakshi_amman.jpg" },
      { name: "Golden Lily Tank", loc: "Madurai, Tamil Nadu", img: "assets/temples/hoysaleswara.jpg" }
    ],
    fact: "Its thousands of tower figures are hand-repainted every twelve years.",
    image: "assets/temples/meenakshi_amman.jpg"
  },
  47: {
    id: 47,
    name: "Lingaraja Temple",
    category: "Case Study",
    style: "Nagara",
    description: "The quintessential masterpiece of Kalinga (Odisha) architectural maturity.",
    detail: "Synthesis of Rekha and Pidha forms rising to 180 feet, dominating the Bhubaneswar skyline.",
    symbolism: "Meaning 'King of Lingas', manifesting spiritual power through absolute architectural lines.",
    placement: "Old Temple District, Bhubaneswar, Odisha.",
    examples: [
      { name: "Deula Spire", loc: "Bhubaneswar, Odisha", img: "assets/temples/lingaraja.jpg" },
      { name: "Lingaraja Sanctum", loc: "Bhubaneswar, Odisha", img: "assets/temples/garbhagriha_sanctum.png" }
    ],
    fact: "Spire stones were carved in situ on high bamboo scaffolds.",
    image: "assets/temples/lingaraja.jpg"
  },
  48: {
    id: 48,
    name: "Hoysaleswara Temple",
    category: "Case Study",
    style: "Vesara",
    description: "A twin-temple masterpiece featuring a complex stellated plan and soapstone carvings.",
    detail: "Vesara pinnacle in soapstone featuring incredible frieze detail and twin star-shaped shrines.",
    symbolism: "Peak of 'Kala' (Art as Time) as devotion, with radial geometry signifying divine diffusion.",
    placement: "Halebidu, Karnataka. Former Hoysala capital.",
    examples: [
      { name: "Double Stellated Plan", loc: "Halebidu, Karnataka", img: "assets/temples/hoysaleswara.jpg" },
      { name: "Narrative Friezes", loc: "Belur, Karnataka", img: "assets/temples/chennakeshava.jpg" }
    ],
    fact: "Interior pillars are so polished they appear lathe-turned by machines.",
    image: "assets/temples/hoysaleswara.jpg"
  }
};