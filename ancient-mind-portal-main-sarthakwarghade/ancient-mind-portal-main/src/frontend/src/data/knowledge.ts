import type { AncientText, DoshaDetail } from "../types";

export const ancientTextsData: AncientText[] = [
  {
    id: "rigveda",
    name: "Rigveda",
    sanskritName: "ऋग्वेद",
    year: "c. 1500–1200 BCE",
    description:
      "The oldest of the four Vedas, comprising 1,028 hymns to cosmic forces. It contains the earliest references to Prana (vital force), the nature of consciousness, and the healing power of sacred sound. The Nasadiya Sukta (Hymn of Creation, 10:129) is among humanity's oldest philosophical inquiry into the nature of existence.",
    authors: [
      "Multiple Rishis (seers)",
      "Notably Vishvamitra, Vasishtha, Atri",
    ],
    relevance:
      "Establishes the foundational Vedic understanding of mind-body unity, the healing power of sound (Shabda Brahman), and the primacy of consciousness over matter.",
    teachings: [
      "Prana as the animating force of all life",
      "Sound (mantra) as a tool for consciousness transformation",
      "The indivisibility of microcosm (human) and macrocosm (cosmos)",
      "Agni (sacred fire of awareness) as the catalyst for transformation",
    ],
  },
  {
    id: "upanishads",
    name: "Principal Upanishads",
    sanskritName: "मुख्य उपनिषद्",
    year: "c. 800–200 BCE",
    description:
      "The philosophical crown of Vedic literature — 108 texts recording direct dialogues between Rishis and their students on the nature of Brahman (ultimate reality) and Atman (individual consciousness). The Mandukya, Katha, Chandogya, Brihadaranyaka, and Taittiriya Upanishads form the core curriculum of Vedanta and provide the theoretical foundation for all meditation systems.",
    authors: [
      "Yajnavalkya (Brihadaranyaka)",
      "Uddalaka Aruni (Chandogya)",
      "Nachiketa & Yama dialogue (Katha)",
    ],
    relevance:
      "Provides the metaphysical framework for understanding consciousness, the three states of mind, and the nature of Turiya — the state of pure awareness beyond thought that is the goal of all meditation.",
    teachings: [
      "Tat tvam asi — You are That (Chandogya 6:8:7)",
      "Aham Brahmasmi — I am Brahman (Brihadaranyaka 1:4:10)",
      "The Pancha Kosha (five sheaths of being): Annamaya, Pranamaya, Manomaya, Vijnanamaya, Anandamaya",
      "The four states of consciousness: Jagrat, Svapna, Sushupti, Turiya",
    ],
  },
  {
    id: "yoga-sutras",
    name: "Yoga Sutras of Patanjali",
    sanskritName: "पतञ्जलि योगसूत्र",
    year: "c. 400 CE",
    description:
      "The definitive systematic text on Yoga — 196 aphorisms (sutras) organised into four chapters (Padas) covering the nature of the mind, the practice of Yoga, the powers arising from practice, and liberation. Patanjali synthesises the diverse Yoga traditions that preceded him into a precise, replicable system for the complete transformation of consciousness.",
    authors: ["Maharishi Patanjali"],
    relevance:
      "The operational manual for mind control. Defines Chitta Vritti Nirodha (cessation of mental fluctuations) as the goal of practice and maps the complete eight-limbed path to achieve it.",
    teachings: [
      "Yogas chitta-vritti-nirodhah — Yoga is the cessation of the fluctuations of the mind",
      "Ashtanga Yoga: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi",
      "The Kleshas (afflictions): Avidya, Asmita, Raga, Dvesha, Abhinivesha",
      "Pratipaksha Bhavana — cultivation of the opposite for mental purification",
      "Ishvara Pranidhana — surrender to cosmic intelligence as the fastest path",
    ],
  },
  {
    id: "charaka-samhita",
    name: "Charaka Samhita",
    sanskritName: "चरक संहिता",
    year: "c. 400–200 BCE (redacted)",
    description:
      "The foundational text of Ayurvedic medicine, comprising 120 chapters across 8 sections. Authored by Charaka (redacting the work of Agnivesha, a student of Punarvasu Atreya), it covers the complete science of life — from embryology and diet to psychology and spiritual practice. The Charaka Samhita's treatment of mental health through Sattvavajaya (psychotherapy), Daivavyapashraya (spiritual therapy), and Yuktivyapashraya (rational therapy) is remarkably comprehensive.",
    authors: [
      "Charaka (compiler)",
      "Agnivesha (original author)",
      "Dridhabala (later redactor)",
    ],
    relevance:
      "Establishes Ayurvedic psychiatry (Mano Roga Chikitsa) as a complete science, introducing Sattvavajaya as the world's earliest recorded psychotherapeutic system, along with detailed herbal protocols for mental health.",
    teachings: [
      "Tridosha theory: Vata, Pitta, Kapha as the three biological forces",
      "Prajna-aparadha (mistake of the intellect) as the root cause of disease",
      "Sattvavajaya: mental strength therapy through cultivation of sattva",
      "Medhya Rasayanas: the four cognitive rejuvenatives (Brahmi, Shankhapushpi, Mandukaparni, Guduchi)",
      "Ahara as medicine — specific dietary protocols for each mental imbalance",
    ],
  },
  {
    id: "bhagavad-gita",
    name: "Bhagavad Gita",
    sanskritName: "भगवद्गीता",
    year: "c. 200 BCE",
    description:
      "Embedded within the Mahabharata, the Bhagavad Gita is a 700-verse dialogue between the warrior Arjuna — paralysed by anxiety and moral confusion on the battlefield — and his charioteer Krishna, revealed as the divine intelligence. The text is simultaneously a practical guide to Karma Yoga (action without attachment), Jnana Yoga (wisdom), Bhakti Yoga (devotion), and Raja Yoga (meditation). Chapter 6 contains the most detailed practical instruction on meditation in the Sanskrit tradition.",
    authors: ["Veda Vyasa (attributed)"],
    relevance:
      "Addresses the archetypal human crisis of Arjuna directly: acute anxiety, decision paralysis, and existential despair — offering practical tools for restoring equanimity under extreme pressure.",
    teachings: [
      "Yoga is equanimity (samatvam yoga uchyate — 2:48)",
      "Let right deeds be thy motive, not the fruit which comes from them (2:47)",
      "The mind is the friend of the one who has mastered it, and the enemy of the one who has not (6:6)",
      "Chapter 6: Complete meditation instruction including posture, environment, diet, and stages",
      "The Gunas: Sattva (clarity), Rajas (activity), Tamas (inertia) — the three qualities of all nature",
    ],
  },
  {
    id: "hatha-yoga-pradipika",
    name: "Hatha Yoga Pradipika",
    sanskritName: "हठयोग प्रदीपिका",
    year: "c. 15th century CE",
    description:
      "A comprehensive manual on Hatha Yoga by Swami Svatmarama, covering asanas, pranayamas, mudras, and bandhas. It synthesises earlier tantric and yogic traditions into a practical handbook for bodily and mental purification. The text describes 15 asanas, 8 pranayamas, 10 mudras, and the theory of Kundalini awakening through the central channel (Sushumna Nadi).",
    authors: ["Swami Svatmarama"],
    relevance:
      "The primary technical reference for pranayama, mudra, and physical purification practices (shat kriyas). Provides the theoretical framework for understanding the relationship between physical postures, breath regulation, and mental states.",
    teachings: [
      "Hatha Yoga as the foundation for Raja Yoga and ultimately Samadhi",
      "The 14 principal Nadis (energy channels) and the significance of Sushumna",
      "Kumbhaka (breath retention) as the key to Kundalini awakening",
      "Shambhavi Mudra as the mother of all mudras",
      "Shatkarma (six purification practices): Neti, Dhauti, Nauli, Basti, Kapalabhati, Trataka",
    ],
  },
];

export const doshaData: DoshaDetail[] = [
  {
    name: "Vata",
    description:
      "Vata (वात) is composed of the elements Akasha (space) and Vayu (air). It governs all movement in the body and mind — the flow of breath, nerve impulses, blood circulation, and the movement of thoughts. When balanced, Vata brings creativity, enthusiasm, and a lively mind. Vata is the dosha most easily disturbed in modern life due to constant stimulation, irregular routines, and overstimulation of the nervous system. When imbalanced, Vata generates the anxiety and fear responses that are among the primary causes of anger.",
    qualities: [
      "Light, dry, cold, rough, subtle, mobile, clear",
      "Associated with autumn/early winter season",
      "Active during the Vata times: 2–6 AM and 2–6 PM",
      "Seat in the body: colon, pelvic region, thighs, bones",
    ],
    imbalanceSymptoms: [
      "Anxiety, worry, fear, and panic attacks",
      "Restlessness, scattered thinking, poor concentration",
      "Insomnia and disturbed sleep",
      "Constipation, gas, bloating",
      "Dry skin, cracking joints, muscle spasms",
      "Speaking rapidly, difficulty completing tasks",
    ],
  },
  {
    name: "Pitta",
    description:
      "Pitta (पित्त) is composed of Agni (fire) and Jala (water). It governs all transformation in the body and mind — digestion of food and experiences, metabolism, body temperature, and the processing of emotions. Pitta is the dosha most directly associated with Krodha (anger), as fire is its dominant element. When balanced, Pitta brings intelligence, courage, and sharp discrimination. Imbalanced Pitta manifests as the explosive anger, criticism, and perfectionism that characterise Pitta psychological imbalance.",
    qualities: [
      "Hot, sharp, light, oily, liquid, spreading",
      "Associated with summer season",
      "Active during the Pitta times: 10 AM–2 PM and 10 PM–2 AM",
      "Seat in the body: small intestine, liver, spleen, eyes, skin",
    ],
    imbalanceSymptoms: [
      "Anger, irritability, and explosive temper",
      "Perfectionism and harsh self-criticism",
      "Inflammation, acid reflux, skin rashes",
      "Excessive competitiveness and control",
      "Burning sensations, excessive heat, fever",
      "Impatience and intolerance of inefficiency",
    ],
  },
  {
    name: "Kapha",
    description:
      "Kapha (कफ) is composed of Prithvi (earth) and Jala (water). It governs all structure and stability in the body — lubrication of joints, cellular structure, and the cohesion that holds the body together. In the mind, Kapha governs long-term memory, emotional stability, patience, and love. When balanced, Kapha is the source of endurance, compassion, and groundedness. Imbalanced Kapha manifests as depression, attachment, possessiveness, and the grief-anger response.",
    qualities: [
      "Heavy, slow, cool, oily, smooth, dense, stable",
      "Associated with spring/winter season",
      "Active during the Kapha times: 6–10 AM and 6–10 PM",
      "Seat in the body: chest, lungs, stomach, head, lymph",
    ],
    imbalanceSymptoms: [
      "Depression, grief, and emotional withdrawal",
      "Excessive attachment and possessiveness",
      "Lethargy, oversleeping, resistance to change",
      "Congestion, mucus accumulation, weight gain",
      "Slow metabolism, water retention",
      "Hoarding behaviours and reluctance to let go",
    ],
  },
];
