import { Dosha, type Technique, TechniqueCategory } from "../types";

export const techniquesData: Technique[] = [
  {
    id: "pranayama-nadi-shodhana",
    sanskritName: "नाड़ी शोधन प्राणायाम",
    name: "Nadi Shodhana Pranayama",
    shortDescription:
      "Alternate nostril breathing that purifies the nadis (energy channels) and calms the nervous system.",
    longDescription:
      "Nadi Shodhana, meaning 'channel purification', is one of the most revered pranayama techniques in the Hatha Yoga Pradipika. This bilateral breathing technique alternates airflow through each nostril, balancing the Ida (lunar, cooling) and Pingala (solar, heating) energy channels. Scientific research confirms it activates the parasympathetic nervous system, lowering cortisol and reducing anxiety. Regular practice synchronises the left and right cerebral hemispheres, enhancing cognitive clarity and emotional equanimity. The Yoga Sutras of Patanjali cite Pranayama as the fourth limb of Ashtanga Yoga, a bridge between outer and inner practice.",
    category: TechniqueCategory.Pranayama,
    difficulty: "Beginner",
    duration: "10–20 minutes",
    doshasAffected: [Dosha.Vata, Dosha.Pitta],
    benefits: [
      "Reduces anxiety and panic responses by activating the vagus nerve",
      "Lowers blood pressure and resting heart rate",
      "Clears the mind and enhances concentration",
      "Balances left and right brain hemispheres",
      "Improves sleep quality and insomnia relief",
      "Purifies the 72,000 energy channels (nadis) described in Tantric texts",
    ],
    steps: [
      "Sit comfortably in Sukhasana or Padmasana. Keep the spine erect.",
      "Rest left hand on left knee in Jnana Mudra (index finger and thumb touching).",
      "Bring right hand to Nasagra Mudra: fold index and middle fingers, use thumb for right nostril, ring finger for left.",
      "Close right nostril with thumb. Inhale slowly through left nostril for 4 counts.",
      "Close both nostrils and retain the breath (Kumbhaka) for 4 counts.",
      "Release thumb, exhale through right nostril for 8 counts.",
      "Inhale through right nostril for 4 counts. Retain for 4 counts.",
      "Exhale through left nostril for 8 counts. This completes one cycle.",
      "Begin with 5 cycles, gradually increasing to 20 over weeks.",
    ],
    historicalContext:
      "Described in the Hatha Yoga Pradipika (15th century CE) by Swami Svatmarama, and referenced in the Gherand Samhita and Shiva Samhita. The concept of Prana regulation dates to the Rigveda (1500 BCE), where the breath was considered the vehicle of consciousness. Patanjali's Yoga Sutras (400 CE) codify Pranayama as essential for dharana (concentration).",
    scientificBacking:
      "Multiple peer-reviewed studies (Journal of Clinical Psychology, 2011; Neurological Sciences, 2013) confirm significant reduction in anxiety, cortisol levels, and blood pressure. EEG studies show increased alpha wave activity post-practice.",
    origin: {
      textName: "Hatha Yoga Pradipika",
      chapter: "Chapter 2, Verse 7–10",
      verse: "Nadi shodhana vishodhane...",
      translation:
        "When the channels of the vital force are purified, the breath easily enters the central channel (Sushumna).",
    },
    contraindications: [
      "Avoid during acute respiratory infections",
      "Those with severe cardiovascular conditions should practice without retention",
      "Pregnant women should omit Kumbhaka",
    ],
    imageKeyword: "pranayama breathing meditation",
    relatedTechniqueIds: ["dhyana-samatha", "mantra-om-chanting"],
  },
  {
    id: "dhyana-samatha",
    sanskritName: "शमथ ध्यान",
    name: "Samatha Dhyana",
    shortDescription:
      "Calm-abiding meditation rooted in Vedic tradition that stills the mind's fluctuations (Chitta Vritti Nirodha).",
    longDescription:
      "Samatha Dhyana (calming meditation) originates in the earliest Vedic texts as a means to achieve Chitta Prasadanam — clarification of consciousness. Patanjali defines the goal of Yoga as 'Yogas chitta vritti nirodhah' — the cessation of mental fluctuations. Samatha practice involves anchoring awareness to a single object (a mantra, flame, or the breath) until sustained attention becomes effortless absorption (Dharana → Dhyana → Samadhi). Neuroscience confirms long-term practitioners show measurable cortical thickening in the prefrontal cortex and reduced amygdala reactivity.",
    category: TechniqueCategory.Dhyana,
    difficulty: "Intermediate",
    duration: "20–45 minutes",
    doshasAffected: [Dosha.Vata, Dosha.Pitta, Dosha.Kapha],
    benefits: [
      "Reduces cortisol and chronic stress hormones",
      "Increases grey matter density in emotional regulation centres",
      "Cultivates Viveka (discrimination) and Vairagya (dispassion)",
      "Dissolves Klesha (mental afflictions): avidya, asmita, raga, dvesha, abhinivesha",
      "Develops sustained single-pointed awareness (Dharana)",
      "Promotes natural sleep cycle restoration",
    ],
    steps: [
      "Choose a quiet space at dawn (Brahma Muhurta, 4–6 AM) for optimal sattvic conditions.",
      "Sit in Padmasana or Siddhasana. Place hands in Dhyana Mudra (palms facing up, right resting on left).",
      "Close eyes and take 3 deep cleansing breaths to release tension.",
      "Set an intention (Sankalpa): 'I am still. I am aware. I am at peace.'",
      "Anchor awareness to the natural breath at the nostrils or the heartbeat.",
      "When the mind wanders (as it will), gently return without judgment — this is the practice.",
      "After 10 minutes, allow awareness to expand from the breath to the body, then the room.",
      "Sit in silence for 5 minutes after formal practice before returning to activity.",
    ],
    historicalContext:
      "Dhyana is the seventh limb of Patanjali's Ashtanga Yoga system. The Chandogya Upanishad (800 BCE) declares: 'Dhyayati eva brahma' — the Brahman meditates. The Mandukya Upanishad maps states of consciousness directly relevant to meditation depth. The Bhagavad Gita (Chapter 6) provides detailed instruction from Krishna to Arjuna on meditation practice.",
    scientificBacking:
      "Harvard Medical School studies (2011, 2015) show 8 weeks of meditation increases cortical thickness in the hippocampus and shrinks the amygdala. Reduces inflammatory biomarkers including IL-6.",
    origin: {
      textName: "Yoga Sutras of Patanjali",
      chapter: "Pada 1, Sutra 2",
      verse: "Yogaś citta-vṛtti-nirodhaḥ",
      translation: "Yoga is the cessation of the fluctuations of the mind.",
    },
    contraindications: [
      "Those with severe dissociative disorders should practice with guidance",
      "Avoid deep meditation while sleep-deprived",
    ],
    imageKeyword: "meditation lotus pose spiritual",
    relatedTechniqueIds: ["pranayama-nadi-shodhana", "mantra-om-chanting"],
  },
  {
    id: "mudra-shambhavi",
    sanskritName: "शाम्भवी मुद्रा",
    name: "Shambhavi Mudra",
    shortDescription:
      "The eyebrow centre gesture that activates the Ajna Chakra (third eye) and induces states of deep inner awareness.",
    longDescription:
      "Shambhavi Mudra, named after Shambhu (a form of Shiva), involves fixing the inner gaze at the Bhrumadhya (the space between the eyebrows), the seat of the Ajna Chakra. This ancient gesture is described in the Hatha Yoga Pradipika as the 'mother of all mudras' due to its power to instantly withdraw awareness from external objects (Pratyahara) and direct it inward. The technique activates the pineal gland and hypothalamus, regulating the stress-response axis. In Tantric traditions, it is the primary means of awakening Kundalini energy from the Muladhara to the Sahasrara chakra.",
    category: TechniqueCategory.Mudra,
    difficulty: "Advanced",
    duration: "5–15 minutes",
    doshasAffected: [Dosha.Vata],
    benefits: [
      "Activates the Ajna Chakra, enhancing intuition and inner clarity",
      "Strengthens the optic nerve and improves concentration",
      "Induces Pratyahara (sense withdrawal) rapidly",
      "Regulates the pineal gland and melatonin secretion",
      "Elevates mood by increasing serotonin synthesis",
      "Awakens dormant Kundalini Shakti when practiced consistently",
    ],
    steps: [
      "Sit in Siddhasana with the spine erect. Establish slow, deep breathing.",
      "Relax the facial muscles completely. Close the mouth and keep the tongue lightly resting.",
      "Open the eyes halfway and turn them upward and inward toward the Bhrumadhya (eyebrow centre).",
      "Hold this inner gaze steady. The eyes may appear slightly crossed — this is normal.",
      "Breathe slowly. Maintain the gaze and feel a warmth or pressure building between the brows.",
      "Hold for 10–30 seconds initially. Return to normal gaze, rest, then repeat.",
      "Practice for 5–10 minutes. Finish with 2 minutes of eyes closed in stillness.",
    ],
    historicalContext:
      "Described in the Hatha Yoga Pradipika (Chapter 4) and Gheranda Samhita (Chapter 3). Referenced as 'Sambhavi' in the Siva Samhita and Tantraloka by Abhinavagupta (10th century CE). The Shat Chakra Nirupana (16th century) describes the Ajna Chakra as the command centre where Guru's grace is received.",
    scientificBacking:
      "Research from Swami Vivekananda Yoga Research Foundation shows Shambhavi practice significantly reduces beta wave activity and increases theta waves associated with deep relaxation and creative insight.",
    origin: {
      textName: "Hatha Yoga Pradipika",
      chapter: "Chapter 4, Verse 36–37",
      verse: "Antarlakṣyam bahirdṛṣṭir nimeṣonmeṣavarjitā",
      translation:
        "With the inner vision fixed upon the inner object and the outer gaze motionless, this is Shambhavi Mudra, kept secret in the Vedas and Tantras.",
    },
    contraindications: [
      "Those with glaucoma or eye conditions should avoid",
      "Do not practice with extreme exhaustion",
      "Epileptics should consult a teacher first",
    ],
    imageKeyword: "mudra hand gesture meditation",
    relatedTechniqueIds: ["dhyana-samatha", "pranayama-nadi-shodhana"],
  },
  {
    id: "mantra-om-chanting",
    sanskritName: "ॐ मन्त्र जप",
    name: "Om Mantra Japa",
    shortDescription:
      "Repetition of the primordial sound 'Om' (Aum), the cosmic vibration at the root of all creation and consciousness.",
    longDescription:
      "The Mandukya Upanishad opens with 'Om iti etat aksaram idam sarvam' — OM is this syllable, all this is OM. The three letters A-U-M represent waking (jagrat), dream (svapna), and deep sleep (sushupti) states, while the resonant silence after represents Turiya, the fourth transcendent state. In Japa (repetitive mantra recitation), the vibrational frequency of Om (approximately 136.1 Hz, aligned with the Earth's frequency) resonates with the Anahata Chakra. Scientific studies confirm chanting Om reduces activity in the limbic system, including the amygdala — the brain's fear and aggression centre.",
    category: TechniqueCategory.MantraChanting,
    difficulty: "Beginner",
    duration: "10–30 minutes",
    doshasAffected: [Dosha.Vata, Dosha.Pitta, Dosha.Kapha],
    benefits: [
      "Deactivates the amygdala, reducing fear and anger responses",
      "Synchronises brainwaves to relaxed alpha and theta states",
      "Vagal stimulation through laryngeal vibration reduces heart rate",
      "Promotes ojas (vital essence) and mental luminosity (sattva)",
      "Clears karmic imprints (samskaras) through vibrational purification",
      "Induces natural states of joy and contentment",
    ],
    steps: [
      "Sit in Sukhasana. Take a Mala (108-bead rosary) in the right hand for counted Japa.",
      "Close your eyes and take 3 slow, deep breaths to settle the mind.",
      "Inhale deeply. As you exhale, chant 'A-U-M' — feel 'A' vibrate in the abdomen, 'U' in the chest, 'M' as a humming resonance in the skull.",
      "Allow the sound to fade into silence. Rest in that silence for a full breath before the next chant.",
      "For silent (Manasika) Japa: visualise the Om symbol while hearing it internally.",
      "Complete 108 repetitions using the Mala, moving one bead per chant.",
      "After practice, sit in stillness for 5 minutes with eyes closed, absorbing the vibrational effect.",
    ],
    historicalContext:
      "Om's significance is established in the Rigveda, Upanishads, and Yoga Sutras. The Taittiriya Upanishad (800 BCE) states that Om is Brahman. Patanjali's Yoga Sutras (1:27) declare Om the symbol of Ishvara (cosmic intelligence). The Chandogya Upanishad (600 BCE) elaborates the metaphysical dimensions of each syllable.",
    scientificBacking:
      "AIIMS (All India Institute of Medical Sciences) studies confirm Om chanting reduces activity in the right amygdala on fMRI scans. Research in the International Journal of Yoga shows significant reductions in anxiety scores after 12 weeks.",
    origin: {
      textName: "Mandukya Upanishad",
      chapter: "Verse 1",
      verse: "Oṃ ityetadakṣaraṃ idaṃ sarvaṃ",
      translation:
        "OM — this syllable is all this. Whatever has been, is, and shall be — all this is OM.",
    },
    contraindications: [
      "No significant contraindications; suitable for all ages",
      "Those with hearing sensitivity may practice silent (Manasika) Japa",
    ],
    imageKeyword: "om symbol chanting Sanskrit",
    relatedTechniqueIds: ["dhyana-samatha", "pranayama-nadi-shodhana"],
  },
  {
    id: "herbal-ashwagandha",
    sanskritName: "अश्वगंधा चिकित्सा",
    name: "Ashwagandha Rasayana",
    shortDescription:
      "The premier Ayurvedic adaptogenic herb that rebuilds ojas (vital essence) and directly counters the effects of chronic stress.",
    longDescription:
      "Ashwagandha (Withania somnifera), meaning 'smell of horse' in Sanskrit, is the cornerstone of Ayurvedic Rasayana (rejuvenation therapy). The Charaka Samhita classifies it as a Medhya Rasayana — a herb that restores mental clarity and fortifies the nervous system (Majja Dhatu). Its active compounds, withanolides, are steroidal lactones that modulate the HPA (hypothalamic-pituitary-adrenal) axis, normalising the stress hormone cortisol. The herb is categorised as Sattvic — promoting clarity, peace, and spiritual awareness in Ayurvedic psychology.",
    category: TechniqueCategory.HerbalRemedies,
    difficulty: "Beginner",
    duration: "Daily, 60–90 day course",
    doshasAffected: [Dosha.Vata, Dosha.Kapha],
    benefits: [
      "Reduces cortisol levels by 30% in clinical trials (300–500mg extract)",
      "Improves VO2 max and physical endurance (Balya action)",
      "Enhances memory and cognitive processing speed",
      "Restores thyroid function in subclinical hypothyroidism",
      "Increases testosterone and reproductive vitality (Vajikara action)",
      "Reduces C-reactive protein, a key inflammation marker",
    ],
    steps: [
      "Source certified organic Ashwagandha root powder (KSM-66 or Sensoril extract for standardised withanolides).",
      "Traditional preparation: Mix 1 tsp root powder in warm cow's milk with ½ tsp ghee and a pinch of cardamom.",
      "Take in the evening, 1–2 hours after dinner, to align with the body's natural cortisol decline.",
      "Alternatively, take 300–500mg standardised extract capsule in the morning with food.",
      "Pair with Brahmi (Bacopa monnieri) for enhanced cognitive benefits.",
      "Maintain a 3-month course for systemic Rasayana effects. Pause for 4 weeks before resuming.",
      "Consult an Ayurvedic Vaidya for personalised dosage based on your Prakriti (constitution).",
    ],
    historicalContext:
      "Described extensively in the Charaka Samhita (Chikitsa Sthana 1:3) and Ashtanga Hridayam. Sushruta classified it among the Balya (strength-promoting) group. Used for over 3,000 years as a Rasayana — a rejuvenative that reverses degeneration and promotes longevity. The Dhanvantari Nighantu (a classical Ayurvedic lexicon) records 14 synonyms for Ashwagandha.",
    scientificBacking:
      "Indian Journal of Psychological Medicine (2012): 300mg twice daily significantly reduced stress and anxiety scores by 44% vs. placebo. Multiple systematic reviews confirm adaptogenic, neuroprotective, and anti-inflammatory properties.",
    origin: {
      textName: "Charaka Samhita",
      chapter: "Chikitsa Sthana 1:3",
      verse: "Ashwagandha balya vrishya...",
      translation:
        "Ashwagandha is strength-promoting, aphrodisiac, and rejuvenating; it removes Vata disorders and promotes ojas.",
    },
    contraindications: [
      "Avoid during pregnancy (uterine stimulant)",
      "Caution with thyroid medications",
      "Avoid with immunosuppressants without physician supervision",
      "Not suitable for high Pitta conditions without formulation adjustment",
    ],
    imageKeyword: "ashwagandha herbs Ayurveda botanicals",
    relatedTechniqueIds: ["herbal-brahmi", "dhyana-samatha"],
  },
  {
    id: "sattvavajaya-pratipaksha",
    sanskritName: "सत्त्ववजय — प्रतिपक्ष भावन",
    name: "Sattvavajaya — Pratipaksha Bhavana",
    shortDescription:
      "Ayurvedic cognitive therapy using cultivation of opposite thoughts to counter krodha (anger) and dvesha (aversion).",
    longDescription:
      "Sattvavajaya (conquest of the mind through Sattva) is Ayurveda's psycho-spiritual therapeutic system, distinct from somatic herbal treatment. The Charaka Samhita defines it as 'restraint of the mind from unwholesome objects through cultivation of Sattva'. Its primary tool is Pratipaksha Bhavana — Patanjali's technique (Yoga Sutras 2:33–34) of consciously cultivating the opposite thought to any disturbing emotion. When Krodha (anger) arises, one cultivates Karuna (compassion). This mirrors modern Cognitive Behavioural Therapy's thought reframing, but is rooted in the Vedic understanding that all mental disturbance begins with Prajnaparadha — the mistake of the intellect.",
    category: TechniqueCategory.Sattvavajaya,
    difficulty: "Intermediate",
    duration: "Ongoing daily practice",
    doshasAffected: [Dosha.Pitta, Dosha.Vata],
    benefits: [
      "Directly counters Krodha (anger) using the Vedic principle of Pratipaksha",
      "Reduces Rajas (overactivity) and increases Sattva (clarity) in the mind",
      "Breaks habitual anger responses encoded in neural pathways",
      "Cultivates Kshama (forgiveness) as a permanent character quality",
      "Aligns with modern DBT (Dialectical Behaviour Therapy) techniques",
      "Transforms the root causes of stress: avidya (ignorance) and asmita (ego-identification)",
    ],
    steps: [
      "Begin by identifying your primary Vikara (mental disturbance): anger, fear, jealousy, or grief.",
      "Journal the trigger, thoughts, and physical sensations associated with the Vikara without judgment.",
      "Identify the underlying Klesa (affliction): is it avidya (misperception), raga (attachment), or dvesha (aversion)?",
      "Apply Pratipaksha Bhavana: consciously generate the opposing quality. For anger, invoke Karuna (compassion). For fear, generate Abhaya (fearlessness).",
      "Visualise the person or situation that triggered you. Now see them through the lens of the opposite quality.",
      "Use a Bhavana Mantra: for anger, repeat 'Sarve bhavantu sukhinah' (May all beings be happy) 21 times.",
      "Daily Satsang: spend time with Sattvic influences — uplifting texts, nature, inspiring company.",
    ],
    historicalContext:
      "Sattvavajaya as a therapeutic category is established in the Charaka Samhita (Sutra Sthana 1:58). Patanjali's Yoga Sutras (2:33) introduce Pratipaksha Bhavana. The Bhagavad Gita (16:1–3) enumerates the Daivi Sampad (divine qualities) as the goal of this practice. The Yoga Vasistha (an extensive text on consciousness) dedicates entire chapters to Sattvavajaya techniques.",
    scientificBacking:
      "Cognitive restructuring (the Western parallel) is extensively validated. Studies in Journal of Positive Psychology confirm deliberate positive emotion cultivation reduces anger reactivity and improves relationship quality.",
    origin: {
      textName: "Charaka Samhita",
      chapter: "Sutra Sthana 1:58",
      verse: "Sattvavajayah punar ahita ebhyo vishayebhyo mano nigrahe",
      translation:
        "Sattvavajaya is the restraint of the mind from unwholesome objects through the strength of the purified Sattva.",
    },
    contraindications: [
      "Should complement, not replace, clinical psychiatric treatment for severe conditions",
      "Trauma-based emotions require professional therapeutic support",
    ],
    imageKeyword: "mindfulness contemplation inner peace",
    relatedTechniqueIds: ["dhyana-samatha", "mantra-om-chanting"],
  },
  {
    id: "herbal-brahmi",
    sanskritName: "ब्राह्मी रसायन",
    name: "Brahmi Rasayana",
    shortDescription:
      "The sacred Ayurvedic brain tonic that enhances memory, reduces anxiety, and restores the mind's natural luminosity.",
    longDescription:
      "Brahmi (Bacopa monnieri), named after Brahma — the cosmic intelligence — is the quintessential Medhya Rasayana (cognitive rejuvenative) in Ayurveda. The Charaka Samhita includes it among the four premier Medhya herbs. Its active bacosides A and B enhance synaptic transmission and support neuroplasticity by upregulating BDNF (Brain-Derived Neurotrophic Factor). It is classified as a Tridoshic herb with particular affinity for Majja Dhatu (nervous tissue), promoting intelligence (Medha), retention (Dhi), and memory (Smriti). In Yoga, it is regarded as a Sattvic herb that directly supports meditation and higher states of awareness.",
    category: TechniqueCategory.HerbalRemedies,
    difficulty: "Beginner",
    duration: "Daily, 12-week course",
    doshasAffected: [Dosha.Vata, Dosha.Pitta, Dosha.Kapha],
    benefits: [
      "Enhances declarative memory and learning speed (backed by 12 clinical trials)",
      "Reduces anxiety via modulation of serotonin and dopamine pathways",
      "Protects neurons from oxidative stress and beta-amyloid accumulation",
      "Improves attention and working memory in children and adults",
      "Promotes Satvika qualities: calmness, clarity, and spiritual receptivity",
      "Synergises with Ashwagandha for comprehensive stress-adaptation",
    ],
    steps: [
      "Source Brahmi ghrita (ghee infused with Brahmi) for the classical preparation.",
      "Take ½ tsp Brahmi ghrita dissolved in warm water or milk in the morning on an empty stomach.",
      "Alternatively, take 300mg standardised Bacopa extract (45% bacosides) twice daily with meals.",
      "Brahmi oil massage (Shirobhyanga): warm the oil and massage into the scalp for 15 minutes before bathing.",
      "Brahmi tea: steep 1 tsp dried Brahmi leaves in hot water for 10 minutes. Add honey when cooled.",
      "Combine with Shatavari for women's nervous system support, or with Shankhapushpi for enhanced memory.",
      "Maintain consistent practice for minimum 12 weeks for measurable cognitive improvement.",
    ],
    historicalContext:
      "Mentioned in the Charaka Samhita, Ashtanga Hridayam, and Sushruta Samhita. The Atharva Veda (1500–1200 BCE) references memory-enhancing herbs used in Brahmacharya (student life) to aid scripture memorisation. The Ayurvedic classic Dhanvantari Nighantu records Brahmi as the primary herb for enhancing Saraswati — the energy of speech, learning, and wisdom.",
    scientificBacking:
      "Neuropsychopharmacology (2002): 12-week Bacopa supplementation significantly improved verbal learning rate, memory consolidation, and information processing speed. Meta-analysis (2014) confirms cognitive-enhancing effects in healthy adults.",
    origin: {
      textName: "Charaka Samhita",
      chapter: "Kalpa Sthana 12:6",
      verse: "Brahmi medhya smritivardhini prajnavardhini...",
      translation:
        "Brahmi enhances intellect, memory, and wisdom; it is the premier tonic for the mind and sense organs.",
    },
    contraindications: [
      "May slow heart rate; caution in bradycardia",
      "Avoid combining with sedative medications without guidance",
      "May cause mild digestive discomfort initially; take with food",
    ],
    imageKeyword: "brahmi herb Ayurveda green leaves",
    relatedTechniqueIds: ["herbal-ashwagandha", "dhyana-samatha"],
  },
];

export const categoryLabels: Record<TechniqueCategory, string> = {
  [TechniqueCategory.Pranayama]: "Pranayama",
  [TechniqueCategory.Dhyana]: "Dhyana",
  [TechniqueCategory.Mudra]: "Mudra",
  [TechniqueCategory.MantraChanting]: "Mantra",
  [TechniqueCategory.HerbalRemedies]: "Herbs",
  [TechniqueCategory.Sattvavajaya]: "Sattvavajaya",
};

export const categoryColors: Record<TechniqueCategory, string> = {
  [TechniqueCategory.Pranayama]: "bg-primary/10 text-primary border-primary/20",
  [TechniqueCategory.Dhyana]: "bg-accent/10 text-accent border-accent/20",
  [TechniqueCategory.Mudra]:
    "bg-secondary/10 text-secondary-foreground border-secondary/20",
  [TechniqueCategory.MantraChanting]:
    "bg-primary/15 text-primary border-primary/25",
  [TechniqueCategory.HerbalRemedies]:
    "bg-accent/15 text-accent border-accent/25",
  [TechniqueCategory.Sattvavajaya]:
    "bg-muted text-muted-foreground border-border",
};
