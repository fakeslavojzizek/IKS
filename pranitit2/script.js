/* =============================================
   ERA DATA — Full content per era
   ============================================= */

const ERAS = ['vedic', 'mauryan', 'gupta', 'chola', 'mughal'];


/* ── Era-specific coin data ── */
const COIN_DATA = {
    vedic: [
        {
            symbol: '⊕', label: 'Nishka',
            info: '<strong>Nishka (निष्क)</strong> — Gold ornament/coin used in Vedic trade. Mentioned in the Rigveda as a unit of value given to priests and poets. Represented wealth and royal generosity.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kosala_Karshapana.jpg/500px-Kosala_Karshapana.jpg" alt="Vedic Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        },
        {
            symbol: '◎', label: 'Satamana',
            info: '<strong>Satamana (शतमान)</strong> — A silver punch-marked coin. One of the earliest standardized monetary units in ancient India, equal in weight to 100 rattis (seeds). Used for taxation and trade.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kosala_Karshapana.jpg/500px-Kosala_Karshapana.jpg" alt="Vedic Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        },
        {
            symbol: '☽', label: 'Krishana',
            info: '<strong>Krishana</strong> — Small copper coin unit. Used locally for grain transactions and market dues (Shulka). Reflects the early monetization of agricultural surplus in the Vedic age.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kosala_Karshapana.jpg/500px-Kosala_Karshapana.jpg" alt="Vedic Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        }
    ],
    mauryan: [
        {
            symbol: '🦁', label: 'Pana',
            info: '<strong>Pana (पण)</strong> — The primary silver punch-marked coin of the Mauryan Empire. Kautilya\'s Arthashastra prescribes exact weights and purity. Bore symbols of mountains, peacocks, and suns — state-certified currency.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Hoard_of_mostly_Mauryan_coins.jpg" alt="Mauryan Coin" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">'
        },
        {
            symbol: '☀', label: 'Karshapana',
            info: '<strong>Karshapana</strong> — A large silver coin equivalent to 32 rattis. The Arthashastra describes the royal mint (Rupadarsaka) that controlled its production. Symbol of Mauryan fiscal supremacy.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Hoard_of_mostly_Mauryan_coins.jpg" alt="Mauryan Coin" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">'
        },
        {
            symbol: '🏛', label: 'Mashaka',
            info: '<strong>Mashaka</strong> — Copper coin, 1/16th of a Pana. Used for small market transactions and toll payment at Mauryan checkpoints. State imprint verified quality and prevented counterfeiting.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Hoard_of_mostly_Mauryan_coins.jpg" alt="Mauryan Coin" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">'
        }
    ],
    gupta: [
        {
            symbol: '👑', label: 'Dinaras',
            info: '<strong>Dinaras (Gupta Gold Dinars)</strong> — The finest gold coins of antiquity. Bore images of the emperor with a bow and arrow. Samudragupta\'s coins show him playing the veena — a testament to the Golden Age\'s cultural richness.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/SamudraguptaCoin.png/500px-SamudraguptaCoin.png" alt="Gupta Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        },
        {
            symbol: '⚖', label: 'Rupaka',
            info: '<strong>Rupaka</strong> — Silver coin used by guilds (Shrenis) for self-assessed tax payments. Guilds maintained their own Rupaka standards — a sign of the Gupta era\'s decentralized, trust-based fiscal system.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/SamudraguptaCoin.png/500px-SamudraguptaCoin.png" alt="Gupta Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        },
        {
            symbol: '🌸', label: 'Suvarna',
            info: '<strong>Suvarna</strong> — A gold coin used for large land transactions and copper-plate grants. Gupta land records specify tax payments in Suvarna. Its purity was legendary across South and Southeast Asia.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/SamudraguptaCoin.png/500px-SamudraguptaCoin.png" alt="Gupta Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        }
    ],
    chola: [
        {
            symbol: '⛵', label: 'Kasu',
            info: '<strong>Kasu</strong> — The primary Chola copper coin. Inscribed with the royal tiger emblem. Used to pay the Varigai (professional tax) collected by village assemblies. Found across Southeast Asia, reflecting Chola maritime trade dominance.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Raraja_detail.png" alt="Chola Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        },
        {
            symbol: '🐯', label: 'Kahavanu',
            info: '<strong>Kahavanu</strong> — A gold coin used in high-value temple donations and maritime trade settlements. Bore the prancing tiger — Chola symbol. Port tax (Cuṅkam) at Nagapattinam was collected in Kahavanu.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Raraja_detail.png" alt="Chola Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        },
        {
            symbol: '⚓', label: 'Manjadi',
            info: '<strong>Manjadi</strong> — A tiny gold coin equal to 2 seeds-weight. Used for retail trade and temple tax offerings. The Chola tax on goldsmiths (Tattarvu) was often remitted in Manjadi coins.',
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Raraja_detail.png" alt="Chola Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        }
    ],
    mughal: [
        {
            symbol: '🏰', label: "Akbar's Rupee",
            info: "<strong>Akbar's Silver Rupee</strong> — Standardized by Sher Shah Suri and perfected under Akbar. Weighing 178 grains pure silver, it became the subcontinent's monetary backbone for 300 years — the direct ancestor of the modern Indian Rupee.",
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/India_1862_One_Mohur.jpg/500px-India_1862_One_Mohur.jpg" alt="Mughal Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        },
        {
            symbol: '🌙', label: 'Ilahi Coins',
            info: "<strong>Ilahi Coins</strong> — Akbar's experimental divine-themed coins bearing the inscription 'Allahu Akbar' (God is Great). Issued monthly, each bore the month's name. A fusion of astronomy, theology, and numismatics unique in world history.",
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/India_1862_One_Mohur.jpg/500px-India_1862_One_Mohur.jpg" alt="Mughal Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        },
        {
            symbol: '⚔', label: "Todar Mul's Dam",
            info: "<strong>Dam (Copper)</strong> — The base unit of Mughal taxation. Raja Todar Mal's Zabt system converted all land revenue to Dam equivalents before converting to Rupees via the Dahsala price averages. 40 Dams = 1 Rupee.",
            svgPath: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/India_1862_One_Mohur.jpg/500px-India_1862_One_Mohur.jpg" alt="Mughal Coin" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">'
        }
    ]
};

/* ── Era-specific context banners ── */
const ERA_BANNERS = {
    vedic: {
        svg: `<svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <g class="vedic-banner-grain">
                <line x1="32" y1="10" x2="32" y2="50"/>
                <ellipse cx="28" cy="14" rx="5" ry="9" transform="rotate(-10,28,14)"/>
                <ellipse cx="36" cy="12" rx="5" ry="9" transform="rotate(10,36,12)"/>
                <ellipse cx="32" cy="10" rx="5" ry="9"/>
            </g>
            <path d="M10,54 Q32,48 54,54" stroke-width="1"/>
        </svg>`,
        text: 'The Vedic plough turns the earth — the first tax was one grain in six, a covenant between king and farmer under the sacred sky.'
    },
    mauryan: {
        svg: `<svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle class="mauryan-banner-coin" cx="32" cy="32" r="20" style="transform-origin:32px 32px"/>
            <circle cx="32" cy="32" r="14" style="transform-origin:32px 32px" class="mauryan-banner-coin"/>
            <path d="M32,18 L32,46 M18,32 L46,32" class="mauryan-banner-coin" style="transform-origin:32px 32px"/>
        </svg>`,
        text: "Kautilya's coins roll through trade routes — every punch-mark a guarantee of purity, every toll a pillar of the Mauryan treasury."
    },
    gupta: {
        svg: `<svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <path class="gupta-banner-scroll" d="M8,18 L56,18 Q60,18 60,28 Q60,42 54,42 L8,42 Q2,42 2,32 Q2,18 8,18" style="transform-origin:32px 30px"/>
            <line x1="12" y1="26" x2="48" y2="26"/>
            <line x1="12" y1="32" x2="44" y2="32"/>
            <line x1="12" y1="38" x2="38" y2="38"/>
        </svg>`,
        text: 'The scholar unrolls the copper-plate grant — every line a tax record, every inscription a promise of Gupta transparency.'
    },
    chola: {
        svg: `<svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <path class="chola-banner-wave" d="M4,40 Q16,28 28,34 Q40,40 52,28 Q56,24 60,26"/>
            <path d="M4,48 Q16,36 28,42 Q40,48 52,36 Q56,32 60,34" opacity="0.5"/>
            <path d="M28,8 L40,20 L28,32"/>
        </svg>`,
        text: "Chola ships cross the sea — maritime taxes fueled the world's first democratic fiscal assemblies, inscribed on temple stone."
    },
    mughal: {
        svg: `<svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="10" y1="10" x2="54" y2="10" stroke-width="2"/>
            <path class="mughal-banner-textile" d="M14,10 L14,50 Q22,56 30,50 Q38,56 46,50 Q50,56 54,50 L54,10" style="transform-origin:34px 10px"/>
            <line x1="20" y1="20" x2="48" y2="20"/>
            <path d="M22,32 Q34,26 46,32 Q34,38 22,32"/>
        </svg>`,
        text: "The market stirs at dawn — Mughal textiles sway at bazaar gates, while Todar Mal's jarib measures the earth for the Zabt register."
    }
};

const ERA_DATA = {
    vedic: {
        name: 'Vedic Period', period: '1500–500 BCE', icon: '🕉️',
        color: '#c97b3a', colorDark: '#7a4420',
        tagline: '"Voluntary offerings to the king — the dawn of taxation in Bhārata"',
        mainCharImg: 'images/stand_vedic_1776803766128.png',
        mainCharName: 'Sage Vishvamitra',
        overview: 'The earliest form of Indian taxation emerged during the Vedic period, deeply intertwined with Dharma and religious duty. Taxes were simple, agrarian-based, and largely voluntary — a reflection of the organic bond between ruler and subject. The Rigveda, Atharvaveda, and later Smritis describe a system where the king\'s right to collect revenue was contingent on his duty to protect. The foundational metaphor endures: <em>"A king should tax his people as a bee collects honey from flowers — taking just enough without causing harm."</em>',
        taxTypes: [
            { name: 'Bhaga (भाग)', icon: '🌾', desc: 'The king\'s share — typically <strong>1/6th</strong> of agricultural produce. Considered the primary and most legitimate tax, rooted in the king\'s duty to protect the cultivator.' },
            { name: 'Bali (बलि)', icon: '📜', desc: 'Originally a voluntary religious offering to the gods and the king. Over time it evolved from a voluntary tribute into a more structured, semi-compulsory contribution.' },
            { name: 'Shulka (शुल्क)', icon: '🏪', desc: 'Customs and toll duties collected at trade crossings, river fords, and market gates. Among the <strong>earliest forms of indirect taxation</strong> in Indian civilization.' },
            { name: 'Kara (कर)', icon: '⚖️', desc: 'An irregular or emergency levy imposed during wars, famines, or natural disasters — only when the regular treasury was insufficient to meet crisis needs.' }
        ],
        collectionMethods: 'Tax collection was <strong>personal and community-driven</strong>. The king or his trusted emissaries would visit villages during harvest season. Village headmen (<em>Gramani</em>) served as informal intermediaries, gathering contributions from households. There was no formal bureaucracy — compliance was driven by social duty, religious obligation, and the reciprocal bond of protection between ruler and subject. Taxes were paid overwhelmingly <strong>in kind</strong> — grain, cattle, ghee, and other produce.',
        administration: 'The <strong>Raja (king)</strong> was the supreme fiscal authority, advised by the <em>Sabha</em> (council of elders) and <em>Samiti</em> (tribal assembly). The <strong>Gramani</strong> (village headman) facilitated local collection. The <em>Purohita</em> (royal priest) ensured that taxation adhered to Dharmic principles. There was no specialized tax department — the system relied on social trust, religious norms, and the king\'s personal reputation for fairness.',
        personalities: [
            { name: 'Manu', role: 'Lawmaker & Author of Manusmriti', icon: '📜', desc: 'Codified the earliest taxation principles in Dharmashastra. Prescribed the 1/6th rule and laid out the king\'s duty to tax justly.' },
            { name: 'Brihaspati', role: 'Advisor & Political Economist', icon: '🧠', desc: 'Authored the Brihaspati Sutra — one of the earliest treatises on statecraft, revenue policy, and the ethics of taxation.' },
            { name: 'Yajnavalkya', role: 'Sage & Jurist', icon: '🙏', desc: 'Authored the Yajnavalkya Smriti, which detailed tax exemptions for scholars, the aged, and the infirm — an early concept of progressive taxation.' }
        ],
        pros: [
            'Extremely low tax burden — only ~16.67% of produce',
            'Voluntary and Dharma-driven compliance minimized resentment',
            'Simple system with almost no bureaucratic overhead',
            'Tax ethics (the "bee metaphor") set a timeless philosophical standard',
            'Exemptions for scholars, the disabled, and those in distress'
        ],
        cons: [
            'Lack of formal structure made collection inconsistent',
            'Highly dependent on the individual ruler\'s character and integrity',
            'No formal appeals process or taxpayer rights',
            'Could not scale to support large empires or standing armies',
            'Absence of records made accountability difficult'
        ],
        comparison: [
            { aspect: 'Tax Rate',       ancient: '~1/6th (16.67%) of produce',            modern: '5%–30% (Income Tax slabs)' },
            { aspect: 'Tax Base',       ancient: 'Primarily agricultural produce',         modern: 'Income, goods, services, property, capital gains' },
            { aspect: 'Administration', ancient: 'King + village chieftains; no bureaucracy', modern: 'CBDT, CBIC, GST Council; massive bureaucracy' },
            { aspect: 'Payment Mode',   ancient: 'In kind (grain, cattle, ghee)',          modern: 'Monetary (digital payments, bank transfers)' },
            { aspect: 'Compliance',     ancient: 'Voluntary / Dharma-driven',              modern: 'Mandatory, legally enforced with penalties' },
            { aspect: 'Exemptions',     ancient: 'Brahmins, scholars, disabled',           modern: 'Agriculture income, charitable trusts, startups' },
            { aspect: 'Philosophy',     ancient: '"Tax like a bee — without harming the flower"', modern: 'Revenue maximization for welfare state' },
            { aspect: 'Transparency',   ancient: 'Oral traditions, Vedic hymns',           modern: 'Published Finance Acts, RTI, online portals' }
        ]
    },

    mauryan: {
        name: 'Mauryan Empire', period: '322–185 BCE', icon: '🦁',
        color: '#9a8262', colorDark: '#5c4a32',
        tagline: '"Kautilya\'s Arthashastra — the world\'s first comprehensive treatise on statecraft and taxation"',
        mainCharImg: 'images/chanakya_black_bg_1777060470458.png',
        mainCharName: 'Chanakya (Kautilya)',
        overview: 'The Mauryan Empire, guided by Kautilya\'s <em>Arthashastra</em>, created what is arguably the world\'s first systematic and codified taxation framework. With over <strong>20 distinct tax types</strong>, a professional bureaucracy of auditors and collectors, anti-corruption spy networks, and detailed assessment procedures tied to land quality and crop yields, the Mauryan system was centuries ahead of its time. The Arthashastra is not merely a tax manual — it is a masterclass in governance, prescribing that <em>"the treasury is the foundation of the state."</em>',
        taxTypes: [
            { name: 'Bhaga (Land Revenue)', icon: '🏛️', desc: 'Systematized land tax of <strong>1/6th to 1/4th</strong> of gross produce. The Arthashastra prescribed precise rules for assessment based on land quality, irrigation, and crop type.' },
            { name: 'Shulka (Trade Tax)', icon: '🏪', desc: 'Customs duties and tolls on internal and external trade. Imports were taxed at <strong>~20% ad valorem</strong>. A network of customs officers patrolled highways and border posts.' },
            { name: 'Pranaya (Emergency Tax)', icon: '💰', desc: 'A special levy during national emergencies (wars, famines). Kautilya recommended it be collected <strong>only once</strong> and with the voluntary consent of the people.' },
            { name: 'Vyaji (Transaction Tax)', icon: '📊', desc: 'A surcharge on commercial transactions in state-regulated markets — functionally similar to a modern <strong>sales tax or GST</strong>.' },
            { name: 'Kara & Hiranya', icon: '⛏️', desc: '<em>Kara</em> was a crop tax paid in kind; <em>Hiranya</em> was paid in cash. The state also taxed <strong>mines, forests, and irrigation</strong> facilities as public resources.' },
            { name: 'Visthi (Forced Labor)', icon: '🔨', desc: 'A form of tax paid through compulsory labor on public works — roads, canals, fortifications. <strong>Regulated to prevent exploitation</strong>, with limits on duration.' }
        ],
        collectionMethods: 'The Mauryan state employed a <strong>professional tax bureaucracy</strong> headed by the <em>Samaharta</em> (Chief Revenue Officer). Village-level agents assessed crops and land, recording yields in detailed registers. Tax payments were accepted in both <strong>kind and cash</strong>. A network of <strong>spies (Guptacharas)</strong> monitored collectors for corruption. State auditors (<em>Akshapataladhyaksha</em>) maintained the treasury accounts. Regular <strong>audits</strong> ensured accuracy and prevented fraud.',
        administration: 'The <strong>Samaharta</strong> was the Chief Tax Officer, responsible for assessment and collection policy. The <strong>Sannidhata</strong> (Treasurer) managed the royal treasury. Below them, a hierarchy of provincial and village-level officials ensured collection. The Arthashastra prescribed <strong>40 types of embezzlement</strong> and severe penalties for each — including property confiscation and dismissal. Tax holidays were granted to <strong>new settlements</strong> for 2–5 years to encourage colonization.',
        personalities: [
            { name: 'Chanakya (Kautilya)', role: 'Prime Minister & Author of Arthashastra', icon: '🧠', desc: 'The architect of Mauryan statecraft. His Arthashastra codified 20+ tax types, anti-corruption measures, and the principle that the treasury is the foundation of the state.' },
            { name: 'Chandragupta Maurya', role: 'Founder Emperor', icon: '👑', desc: 'United India under a single fiscal administration. Implemented Kautilya\'s vision of systematic taxation across the vast Mauryan Empire.' },
            { name: 'Emperor Ashoka', role: 'Emperor & Reformer', icon: '☸️', desc: 'After the Kalinga war, reformed the system toward welfare. Used tax revenue for hospitals, roads, wells, and the propagation of Dhamma.' }
        ],
        pros: [
            'World\'s first codified, comprehensive tax framework',
            'Anti-corruption measures with spy networks and severe penalties',
            'Tax holidays for new settlements encouraged expansion',
            'Detailed assessment based on land fertility and crop quality',
            'Multiple revenue streams (20+ types) ensured fiscal stability'
        ],
        cons: [
            'Higher tax rates than the preceding Vedic period (up to 25%)',
            'Forced labor (Visthi) was an oppressive form of taxation',
            'Heavy bureaucracy increased administrative costs',
            'Spy network was invasive and could be misused',
            'Centralized control left little room for local autonomy'
        ],
        comparison: [
            { aspect: 'Tax Rate',       ancient: '1/6th to 1/4th (16%–25%)',                modern: '5%–30% IT + 18% GST' },
            { aspect: 'Tax Types',      ancient: '20+ types: Bhaga, Shulka, Vyaji, etc.',  modern: 'Direct (IT, CT) + Indirect (GST, Customs)' },
            { aspect: 'Administration', ancient: 'Samaharta, auditors, spy network',        modern: 'CBDT, IRS officers, CPC Bengaluru' },
            { aspect: 'Documentation',  ancient: 'Arthashastra — comprehensive manual',     modern: 'Income Tax Act 1961, GST Act 2017' },
            { aspect: 'Anti-Corruption',ancient: 'Severe punishments, spy monitoring',      modern: 'CBI, Lokpal, Whistleblower Act' },
            { aspect: 'Trade Tax',      ancient: '~20% imports, highway toll duties',        modern: 'Customs 0–100%, BCD, IGST' },
            { aspect: 'Tax Holidays',   ancient: 'New settlements exempt 2–5 years',        modern: 'SEZ, Startup India — 3–10 year holidays' },
            { aspect: 'Assessment',     ancient: 'Land fertility, crop type, irrigation',    modern: 'Self-assessment with AI-based audit' }
        ]
    },

    gupta: {
        name: 'Gupta Dynasty', period: '320–550 CE', icon: '👑',
        color: '#b8860b', colorDark: '#6b4e06',
        tagline: '"The Golden Age of India — where minimal taxation produced maximum civilizational achievement"',
        mainCharImg: 'images/stand_gupta_1776803794280.png',
        mainCharName: 'Emperor Samudragupta',
        overview: 'The Gupta period is universally celebrated as India\'s <em>Golden Age</em> — an era when arts, science, literature, and mathematics flourished under remarkably low taxation. The Gupta rulers maintained tax rates at approximately <strong>1/6th of produce</strong>, delegated collection to autonomous trade guilds (<em>Shrenis</em>), and governed with a light touch that Chinese pilgrim <strong>Fa-Hien marveled at</strong> during his visit (399–414 CE). He noted the <em>absence of harsh taxation, capital punishment, and widespread prosperity</em> — a testament to the Gupta fiscal philosophy of restraint.',
        taxTypes: [
            { name: 'Bhaga (Royal Share)', icon: '👑', desc: 'The primary land tax at <strong>1/6th of produce</strong> — among the lowest in the ancient world. This moderate rate fueled unprecedented prosperity and cultural flourishing.' },
            { name: 'Udranga & Uparikara', icon: '🌾', desc: '<em>Udranga</em> was a permanent land tax; <em>Uparikara</em> was an additional cess. Together they formed a structured <strong>two-tier agricultural taxation</strong> system with clear delineation.' },
            { name: 'Vishti (Corvée Labor)', icon: '🏗️', desc: 'Regulated forced labor for public infrastructure. The Gupta administration <strong>limited contributions and provided compensation</strong> for extended service — more humane than Mauryan Visthi.' },
            { name: 'Trade & Guild Taxes', icon: '🎭', desc: 'Taxes on trade guilds (<em>Shrenis</em>) and commercial activities. Guilds enjoyed <strong>significant autonomy</strong> in exchange for regular, self-assessed tax contributions.' }
        ],
        collectionMethods: 'The defining feature of Gupta taxation was its <strong>decentralization</strong>. Trade guilds (<em>Shrenis</em>) and local village bodies (<em>Panchayats</em>) managed their own tax assessment and collection, remitting agreed amounts to the central treasury. This <strong>self-governance model</strong> reduced bureaucratic overhead and corruption. Revenue grants and exemptions were meticulously recorded on <strong>copper-plate inscriptions</strong> — providing legal permanence and transparency.',
        administration: 'The Gupta state practiced <strong>light-touch governance</strong>. The king set broad fiscal policy, but village panchayats and trade guilds had remarkable autonomy in implementation. <strong>Copper-plate land grants</strong> (tamra-patra) served as legal tax documents — some survive to this day. Provincial governors (<em>Uparikas</em>) and district officers (<em>Vishayapatis</em>) provided oversight without micromanagement. The result was a governance model that maximized prosperity through trust.',
        personalities: [
            { name: 'Chandragupta I', role: 'Founder of the Gupta Empire', icon: '👑', desc: 'Established the Gupta dynasty and laid the fiscal foundation — low taxes, guild autonomy, and decentralized governance that fueled the Golden Age.' },
            { name: 'Samudragupta', role: 'Warrior Emperor & Patron of Arts', icon: '⚔️', desc: 'Expanded the empire while maintaining low tax rates. His gold coins — among the finest in the ancient world — reflect Gupta prosperity.' },
            { name: 'Fa-Hien', role: 'Chinese Pilgrim & Witness', icon: '📖', desc: 'Visited India (399–414 CE) and left the most vivid foreign testimony of Gupta prosperity: minimal taxation, no capital punishment, and a thriving society.' }
        ],
        pros: [
            'Among the lowest tax rates in the ancient world (~16.67%)',
            'Decentralized collection reduced bureaucracy and corruption',
            'Self-governing guilds fostered trade and economic growth',
            'Copper-plate records provided transparency and legal permanence',
            'Produced the Golden Age — arts, science, and mathematics flourished'
        ],
        cons: [
            'Decentralization could lead to regional tax inequalities',
            'Limited state revenue capacity for military emergencies',
            'Dependent on voluntary compliance by powerful guilds',
            'Weak central oversight left room for local exploitation',
            'The model struggled to survive as the empire fragmented'
        ],
        comparison: [
            { aspect: 'Tax Rate',        ancient: '1/6th (16.67%) — among the lowest',      modern: '5%–30% + surcharge + cess' },
            { aspect: 'Collection',      ancient: 'Decentralized; guilds self-collected',    modern: 'Centralized e-filing with TDS/TCS' },
            { aspect: 'Governance',      ancient: 'Light-touch; village autonomy',           modern: 'Heavy regulatory framework' },
            { aspect: 'Labor Tax',       ancient: '1 day/month or cash equivalent',          modern: 'No labor tax; income tax on wages' },
            { aspect: 'Foreign Testimony', ancient: 'Fa-Hien praised minimal taxation',     modern: 'India ranked 63rd in Ease of Business' },
            { aspect: 'Records',         ancient: 'Copper-plate inscriptions & grants',      modern: 'Digital PAN-Aadhaar databases' },
            { aspect: 'Economic Result', ancient: 'Golden Age — arts, science flourished',   modern: 'GDP 6–8% but high compliance costs' },
            { aspect: 'Philosophy',      ancient: 'Minimal taxation → maximum prosperity',   modern: 'Progressive taxation for social equity' }
        ]
    },

    chola: {
        name: 'Chola Dynasty', period: '300 BCE–1279 CE', icon: '⛵',
        color: '#a0522d', colorDark: '#5c3317',
        tagline: '"Maritime masters who funded an empire through scientific land surveys, trade, and democratic village governance"',
        mainCharImg: 'images/stand_chola_1776803808758.png',
        mainCharName: 'Rajaraja Chola I',
        overview: 'The Chola dynasty pioneered several taxation innovations that resonate profoundly even today. They conducted <strong>systematic cadastral land surveys</strong> — among the world\'s earliest — to ensure fair agricultural taxation. They levied <strong>professional taxes</strong> (Varigai) based on occupation, a concept that prefigures modern income tax. Most remarkably, the <em>Uttaramerur inscription</em> reveals that Chola village assemblies (<em>Sabha</em> and <em>Ur</em>) managed local tax collection <strong>democratically</strong>, with tax rates publicly inscribed on temple walls — perhaps the earliest experiment in <strong>fiscal transparency</strong>.',
        taxTypes: [
            { name: 'Kadamai (Land Tax)', icon: '🌾', desc: 'The primary revenue source — a share of produce based on <strong>detailed cadastral surveys</strong> that classified land by type, fertility, soil quality, and irrigation access.' },
            { name: 'Varigai (Professional Tax)', icon: '📐', desc: 'An occupational tax on artisans, merchants, and professionals — one of the <strong>earliest recorded forms of professional/income tax</strong>, assessed by trade category.' },
            { name: 'Irai (Water/Irrigation Tax)', icon: '🌊', desc: 'A tribute from subordinate chieftains plus a sophisticated <strong>irrigation management levy</strong> — reflecting the Chola mastery of tank-based agriculture and water engineering.' },
            { name: 'Kudimai (House Tax)', icon: '🏘️', desc: 'A <strong>property tax</strong> on residential holdings — remarkably similar to modern municipal property taxes. Revenue funded village infrastructure and administration.' },
            { name: 'Tattarvu (Gold Tax)', icon: '🛡️', desc: 'Tax on goldsmiths, jewelers, and precious metal transactions — highlighting an early understanding of <strong>luxury taxation</strong> principles and wealth-based assessment.' },
            { name: 'Port & Maritime Duties', icon: '⛵', desc: 'Trade duties at ports like <strong>Nagapattinam and Kaveripattinam</strong> — a massive revenue stream from Southeast Asian trade that funded the Chola navy and cultural expansion.' }
        ],
        collectionMethods: 'The Chola administration was distinguished by its <strong>scientific approach</strong>. Professional surveyors measured and classified every parcel of land, recording soil type, crop suitability, irrigation sources, and annual yield potential. Tax rates were then set proportionally. Village assemblies (<em>Sabha</em> for Brahmin villages, <em>Ur</em> for others) <strong>self-managed</strong> local tax collection and expenditure. Tax rules were <strong>inscribed on temple walls</strong> — a public disclosure mechanism that ensured transparency and prevented arbitrary extraction.',
        administration: 'Local governance was managed by elected <strong>village assemblies</strong> — the <em>Uttaramerur inscription</em> details election procedures, eligibility criteria, and committee structures that are astonishingly democratic. District-level officers (<em>Nattars</em>) provided oversight. A sophisticated <strong>land revenue department</strong> maintained cadastral records. Port authorities managed maritime taxation with separate customs officials. The king set broad policy but trusted local bodies with implementation — a model of <strong>subsidiarity</strong>.',
        personalities: [
            { name: 'Raja Raja Chola I', role: 'Emperor & Revenue Reformer', icon: '👑', desc: 'Commissioned the first systematic land survey of the entire Chola kingdom. Built Brihadeeswarar Temple partly funded by innovative tax structures.' },
            { name: 'Rajendra Chola I', role: 'Emperor & Maritime Conqueror', icon: '⛵', desc: 'Expanded maritime trade and port taxation to Southeast Asia. His naval expeditions to Srivijaya secured lucrative trade routes and customs revenue.' },
            { name: 'Uttaramerur Assembly', role: 'Democratic Village Governance', icon: '🏛️', desc: 'The Uttaramerur inscription (920 CE) documents a village assembly with elected committees for tax collection, auditing, and public works — history\'s earliest fiscal democracy.' }
        ],
        pros: [
            'Scientific land surveys ensured fair, evidence-based assessment',
            'Temple-wall inscriptions pioneered fiscal transparency',
            'Democratic village assemblies prevented arbitrary taxation',
            'Professional tax (Varigai) showed progressive thinking',
            'Maritime trade revenue funded a powerful navy and cultural spread'
        ],
        cons: [
            'Complex multi-layered system could burden small landholders',
            'Village assembly autonomy could enable local power abuses',
            'Revenue over-reliance on maritime trade created vulnerability',
            'Multiple tax types increased compliance complexity',
            'Land surveys were expensive and slow to update'
        ],
        comparison: [
            { aspect: 'Land Survey',     ancient: 'Detailed cadastral surveys',              modern: 'DILRMP digitization, GIS mapping' },
            { aspect: 'Property Tax',    ancient: 'Kudimai — house tax for village admin',    modern: 'Municipal property tax by area/location' },
            { aspect: 'Professional Tax', ancient: 'Varigai — occupation-based',             modern: 'Professional tax (max ₹2,500/yr)' },
            { aspect: 'Local Governance', ancient: 'Village assemblies (Sabha/Ur)',           modern: 'Panchayati Raj; limited fiscal autonomy' },
            { aspect: 'Transparency',    ancient: 'Tax rules inscribed on temple walls',      modern: 'Finance Act, Budget docs, IT website' },
            { aspect: 'Maritime Tax',    ancient: 'Port duties — SE Asian trade',             modern: 'Customs, IGST on imports, SEZ exemptions' },
            { aspect: 'Progressive',     ancient: 'Different rates per profession/land size', modern: 'Progressive income tax & GST tiers' },
            { aspect: 'Water Tax',       ancient: 'Irai — irrigation levy',                   modern: 'Water cess, utility billing' }
        ]
    },

    mughal: {
        name: 'Mughal Empire', period: '1526–1857 CE', icon: '🏰',
        color: '#5f7a5e', colorDark: '#3a4f3a',
        tagline: '"Raja Todar Mal\'s Zabt — the most scientifically advanced medieval revenue system, and a cautionary tale"',
        mainCharImg: 'images/stand_mughal_1776803824624.png',
        mainCharName: 'Emperor Akbar',
        overview: 'The Mughal taxation system, particularly under <strong>Akbar the Great</strong> and his revenue minister <strong>Raja Todar Mal</strong>, represented the pinnacle of pre-modern tax administration. The <em>Zabt</em> system measured every parcel of land, classified it by productivity, and computed tax using a <strong>10-year running average (Dahsala)</strong> of crop prices — a remarkably statistical approach. However, the tax burden was the <strong>highest in Indian history (1/3 to 1/2 of produce)</strong>. The reimposition of the discriminatory <em>Jizya</em> under Aurangzeb, combined with over-taxation, triggered peasant revolts that ultimately <strong>hollowed the empire from within</strong> — a sobering lesson in the Laffer Curve.',
        taxTypes: [
            { name: 'Zabt System', icon: '📊', desc: 'Introduced by <strong>Raja Todar Mal</strong> under Akbar. Land was measured (<em>jarib</em>), classified by productivity into four categories, and taxed based on <strong>historical yield data</strong>.' },
            { name: 'Kharaj (Land Tax)', icon: '🌾', desc: 'The primary revenue at <strong>1/3rd</strong> of gross produce — the highest in Indian history. Under Aurangzeb, effective rates climbed even higher, causing widespread peasant distress.' },
            { name: 'Dahsala System', icon: '📈', desc: 'A refinement using a <strong>10-year running average</strong> of market prices to determine cash equivalents — reducing the impact of annual price volatility. A proto-statistical method.' },
            { name: 'Jizya (Poll Tax)', icon: '💎', desc: 'Tax on non-Muslims. <strong>Akbar abolished it</strong> as part of <em>Sulh-i-Kul</em> (universal peace), but <strong>Aurangzeb reinstated it</strong> — causing deep social resentment and political instability.' },
            { name: 'Octroi & Transit Duties', icon: '🛒', desc: 'Taxes on goods entering cities and crossing checkpoints. While they funded urban infrastructure, they also <strong>impeded internal trade</strong> and raised consumer prices.' },
            { name: 'Mansabdari & Jagirdari', icon: '🏦', desc: 'Revenue assignment system: nobles (<em>Mansabdars</em>) collected taxes from assigned territories (<em>Jagirs</em>) to maintain military contingents. This created powerful <strong>intermediaries</strong>.' }
        ],
        collectionMethods: 'The Zabt system required <strong>precise land measurement</strong> using standardized tools (<em>jarib</em> and <em>tanab</em>). Land was classified into four categories: <em>Polaj</em> (cultivated annually), <em>Parauti</em> (fallow periodically), <em>Chachar</em> (fallow 3–4 years), and <em>Banjar</em> (fallow 5+ years). Cash payment was increasingly encouraged under Akbar — <strong>monetizing the rural economy</strong>. In the Deccan, alternative systems (<em>Nasaq</em> based on village-level assessment, <em>Kankut</em> based on crop estimation) co-existed with Zabt.',
        administration: 'The <strong>Diwan</strong> (Revenue Minister) oversaw fiscal policy at the imperial level. <strong>Mansabdars</strong> — nobles ranked by military and administrative capacity — administered territories and collected revenue. <strong>Amils</strong> (local collectors), <strong>Qanungos</strong> (record keepers), and <strong>Patwaris</strong> (village accountants) formed the field-level administration. However, the <em>Jagirdari system</em> created powerful intermediaries who often <strong>extracted more than the official rate</strong>, weakening the central state.',
        personalities: [
            { name: 'Akbar the Great', role: 'Emperor & Reformer', icon: '👑', desc: 'Abolished the discriminatory Jizya, promoted Sulh-i-Kul (universal peace), and commissioned the Zabt revenue system — the most scientific medieval tax framework.' },
            { name: 'Raja Todar Mal', role: 'Finance Minister & Revenue Architect', icon: '📊', desc: 'Designed the Zabt system with standardized land measurement, four-tier classification, and the Dahsala (10-year price average) — centuries ahead of European tax science.' },
            { name: 'Aurangzeb', role: 'Emperor & Cautionary Figure', icon: '⚔️', desc: 'Reinstated the Jizya, raised tax rates to 50%, and over-centralized revenue — triggering the revolts and fiscal collapse that ended the Mughal Empire.' }
        ],
        pros: [
            'Most scientifically advanced medieval revenue system',
            'Statistical averaging (Dahsala) smoothed price volatility',
            'Detailed land classification ensured differentiated assessment',
            'Monetization of the rural economy under Akbar',
            'Precise record-keeping with standardized measurement'
        ],
        cons: [
            'Highest tax burden in Indian history (33–50% of produce)',
            'Jizya — discriminatory religious taxation',
            'Jagirdars often extracted beyond official rates',
            'Cash collection during droughts caused severe peasant distress',
            'Over-taxation under later Mughals triggered revolts and decline'
        ],
        comparison: [
            { aspect: 'Tax Rate',       ancient: '1/3 to 1/2 (33%–50%) of produce',       modern: '5%–30% (lower effective rates)' },
            { aspect: 'Assessment',     ancient: 'Zabt — 10-year statistical average',      modern: 'Self-assessment with AI-based scrutiny' },
            { aspect: 'Cash/Kind',      ancient: 'Shift to cash under Akbar',               modern: 'Entirely monetary; digital encouraged' },
            { aspect: 'Religious Tax',  ancient: 'Jizya on non-Muslims',                    modern: 'No religious taxation; secular code' },
            { aspect: 'Intermediaries', ancient: 'Jagirdars and Mansabdars',                modern: 'Direct via TDS, advance tax, e-filing' },
            { aspect: 'Uniformity',     ancient: 'Zabt, Nasaq, Kankut varied by region',    modern: 'Uniform GST (One Nation One Tax)' },
            { aspect: 'Over-taxation',  ancient: 'Led to revolts and imperial decline',     modern: 'Compliance costs and angel tax debated' },
            { aspect: 'Innovation',     ancient: 'Dahsala — 10yr statistical averaging',    modern: 'AI/ML fraud detection in CBDT' }
        ]
    }
};

const RANKING_DATA = [
    { era:'gupta',   score:'9.2 / 10', reason:'The Golden Age — lowest taxes (~16.67%), decentralized guild-based collection, maximum prosperity. Fa-Hien\'s firsthand testimony confirms minimal burden and widespread well-being.' },
    { era:'chola',   score:'8.7 / 10', reason:'Pioneered cadastral land surveys, professional taxation, village self-governance, and inscriptional transparency. Maritime trade revenue funded a pan-Asian trading empire.' },
    { era:'mauryan', score:'8.3 / 10', reason:'The Arthashastra created the world\'s first codified tax framework with 20+ types and rigorous anti-corruption measures. Systematic and comprehensive, though rates were higher than the Gupta ideal.' },
    { era:'vedic',   score:'7.5 / 10', reason:'Laid the philosophical foundation — the "bee metaphor" remains the gold standard of tax ethics. Simplicity and voluntary compliance were strengths, but the system lacked structure for scale.' },
    { era:'mughal',  score:'6.4 / 10', reason:'Todar Mal\'s Zabt was scientifically brilliant, but 33–50% burden was crushing. Jizya undermined equity. Over-taxation under later Mughals triggered the revolts that ended the empire.' }
];

/* =============================================
   WHEEL GEOMETRY
   ============================================= */
const OUTER_R = 340, INNER_R = 100;
const SEG_ANGLE = 360 / ERAS.length;
const LABEL_R = 225, ICON_R = 165, PERIOD_R = 268;

/* =============================================
   STATE
   ============================================= */
let currentRotation = 0, previousMouseAngle = 0;
let isDragging = false, hasDragged = false;
let currentEra = null, animationId = null, dragHintHidden = false;
let isWheelMinimized = false;

/* =============================================
   DOM REFS
   ============================================= */
let wheelSection, wheelSvg, rotatorGroup;
let centerIcon, centerName, centerPeriod;
let pointerEraName, dragHint;
let segmentPaths = [], segmentLabels = [];

/* =============================================
   UTILITIES
   ============================================= */
const degToRad = d => d * Math.PI / 180;
const polarToXY = (r, deg) => ({ x: r * Math.cos(degToRad(deg)), y: r * Math.sin(degToRad(deg)) });

function svgEl(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    return el;
}

/* =============================================
   BUILD WHEEL
   ============================================= */
function buildWheel() {
    wheelSvg.innerHTML = '';

    const defs = svgEl('defs', {});
    ERAS.forEach(era => {
        const g = svgEl('radialGradient', { id: `g-${era}`, cx:'30%', cy:'30%', r:'70%' });
        g.appendChild(svgEl('stop', { offset:'0%', 'stop-color': ERA_DATA[era].color }));
        g.appendChild(svgEl('stop', { offset:'100%', 'stop-color': ERA_DATA[era].colorDark }));
        defs.appendChild(g);
    });
    wheelSvg.appendChild(defs);

    wheelSvg.appendChild(svgEl('circle', { cx:0, cy:0, r:OUTER_R+10, class:'wheel-outer-ring' }));

    for (let a = 0; a < 360; a += 6) {
        const p1 = polarToXY(OUTER_R+4, a), p2 = polarToXY(OUTER_R + (a%72===0?18:11), a);
        wheelSvg.appendChild(svgEl('line', { x1:p1.x, y1:p1.y, x2:p2.x, y2:p2.y, class:'wheel-tick', 'stroke-width': a%72===0?'2':'1' }));
    }

    rotatorGroup = svgEl('g', { id:'wheel-rotator' });
    ERAS.forEach((era, i) => {
        const s = i*SEG_ANGLE - SEG_ANGLE/2, e = i*SEG_ANGLE + SEG_ANGLE/2;
        const oS=polarToXY(OUTER_R,s), oE=polarToXY(OUTER_R,e), iE=polarToXY(INNER_R,e), iS=polarToXY(INNER_R,s);
        const d = `M${oS.x} ${oS.y}A${OUTER_R} ${OUTER_R} 0 0 1 ${oE.x} ${oE.y}L${iE.x} ${iE.y}A${INNER_R} ${INNER_R} 0 0 0 ${iS.x} ${iS.y}Z`;
        const path = svgEl('path', { d, fill:`url(#g-${era})`, class:'wheel-segment', 'data-era':era, 'data-index':i });
        path.addEventListener('click', () => { if(!hasDragged) navigateToEra(i); });
        rotatorGroup.appendChild(path);
        segmentPaths.push(path);

        const spS=polarToXY(INNER_R,s), spE=polarToXY(OUTER_R,s);
        rotatorGroup.appendChild(svgEl('line', { x1:spS.x, y1:spS.y, x2:spE.x, y2:spE.y, class:'wheel-spoke' }));

        const mid = i*SEG_ANGLE;
        const iP=polarToXY(ICON_R,mid);
        const icon = svgEl('text', { x:iP.x, y:iP.y, class:'segment-icon', 'data-cx':iP.x, 'data-cy':iP.y });
        icon.textContent = ERA_DATA[era].icon;
        rotatorGroup.appendChild(icon); segmentLabels.push(icon);

        const nP=polarToXY(LABEL_R,mid);
        const name = svgEl('text', { x:nP.x, y:nP.y, class:'segment-label', 'data-cx':nP.x, 'data-cy':nP.y });
        const w = ERA_DATA[era].name.split(' ');
        if(w.length>1){
            const t1=svgEl('tspan',{x:nP.x,dy:'-7'}); t1.textContent=w[0];
            const t2=svgEl('tspan',{x:nP.x,dy:'17'}); t2.textContent=w.slice(1).join(' ');
            name.appendChild(t1); name.appendChild(t2);
        } else { name.textContent = ERA_DATA[era].name; }
        rotatorGroup.appendChild(name); segmentLabels.push(name);

        const pP=polarToXY(PERIOD_R,mid);
        const per = svgEl('text', { x:pP.x, y:pP.y, class:'segment-period', 'data-cx':pP.x, 'data-cy':pP.y });
        per.textContent = ERA_DATA[era].period;
        rotatorGroup.appendChild(per); segmentLabels.push(per);
    });
    wheelSvg.appendChild(rotatorGroup);
    wheelSvg.appendChild(svgEl('circle', { cx:0, cy:0, r:INNER_R+5, class:'wheel-inner-ring' }));
    wheelSvg.appendChild(svgEl('circle', { cx:0, cy:0, r:INNER_R, class:'wheel-hub' }));
    wheelSvg.appendChild(svgEl('circle', { cx:0, cy:0, r:INNER_R-8, class:'wheel-hub-inner' }));
}

/* =============================================
   ROTATION LOGIC
   ============================================= */
function setRotation(a) {
    currentRotation = a;
    rotatorGroup.setAttribute('transform', `rotate(${a})`);
    segmentLabels.forEach(l => {
        const cx=parseFloat(l.getAttribute('data-cx')), cy=parseFloat(l.getAttribute('data-cy'));
        l.setAttribute('transform', `rotate(${-a},${cx},${cy})`);
    });
    const ai = getActiveIndex();
    segmentPaths.forEach((p,i) => p.classList.toggle('active-segment', i===ai));
    pointerEraName.textContent = ERA_DATA[ERAS[ai]].name;
}

function getActiveIndex() {
    let best=0, bestD=Infinity;
    ERAS.forEach((_,i)=>{
        let d = ((i*SEG_ANGLE+currentRotation)%360+360)%360;
        if(d>180) d=360-d;
        if(d<bestD){bestD=d;best=i;}
    });
    return best;
}

function navigateToEra(idx) {
    const target = -idx * SEG_ANGLE;
    let diff = target - currentRotation;
    while(diff>180) diff-=360;
    while(diff<-180) diff+=360;
    animateToRotation(currentRotation + diff);
}

function selectEra(key) {
    if(currentEra===key) return;
    currentEra = key;
    document.body.setAttribute('data-era', key);
    centerIcon.textContent = ERA_DATA[key].icon;
    centerName.textContent = ERA_DATA[key].name;
    centerPeriod.textContent = ERA_DATA[key].period;

    document.getElementById('mini-icon').textContent = ERA_DATA[key].icon;
    document.querySelectorAll('.content-panel').forEach(p=>p.classList.remove('active'));
    renderEraContent(key);
    const panel = document.getElementById('era-content');
    panel.classList.add('active');
    panel.style.animation='none'; panel.offsetHeight; panel.style.animation='';
    window.scrollTo({top:0,behavior:'smooth'});

    // Update era-specific background props
    updateEraProps(key);

    minimizeWheel();
}

/* =============================================
   ERA-SPECIFIC ANIMATED PROPS — SHOW/HIDE
   ============================================= */
function updateEraProps(key) {
    document.querySelectorAll('.era-prop').forEach(el => {
        const eras = el.getAttribute('data-eras') || '';
        const shouldShow = eras.split(',').includes(key);
        el.classList.toggle('visible', shouldShow);
    });
}

/* =============================================
   WHEEL EXPAND / MINIMIZE / HOME
   ============================================= */
function minimizeWheel() {
    if (isWheelMinimized) return;
    isWheelMinimized = true;
    document.body.classList.add('wheel-min');
}

function expandWheel() {
    if (!isWheelMinimized) return;
    isWheelMinimized = false;
    document.body.classList.remove('wheel-min');
}

function goHome() {
    currentEra = null;
    document.body.setAttribute('data-era', 'home');
    centerIcon.textContent = '☸';
    centerName.textContent = 'Home';
    centerPeriod.textContent = 'IKS';

    document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('welcome-screen').classList.add('active');

    // Hide all era props
    document.querySelectorAll('.era-prop').forEach(el => el.classList.remove('visible'));

    // Hide standing character
    const overlay = document.getElementById('character-standing-overlay');
    if(overlay) overlay.classList.remove('show');

    if (isWheelMinimized) {
        isWheelMinimized = false;
        document.body.classList.remove('wheel-min');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =============================================
   RENDER COINS SECTION
   ============================================= */
function renderCoins(key) {
    const coins = COIN_DATA[key];
    if (!coins) return '';
    
    const coinImgMap = {
        'Nishka': 'coin_vedic_1777061891467.png',
        'Satamana': 'coin_vedic_satamana_1777062189883.png',
        'Krishana': 'coin_vedic_krishana_1777062205999.png',
        'Pana': 'coin_mauryan_1777061906142.png',
        'Karshapana': 'coin_mauryan_karshapana_1777062222205.png',
        'Mashaka': 'coin_mauryan_mashaka_1777062237860.png',
        'Dinaras': 'coin_gupta_1777061922325.png',
        'Rupaka': 'coin_gupta_rupaka_1777062256348.png',
        'Suvarna': 'coin_gupta_suvarna_1777062282514.png',
        'Kasu': 'coin_chola_1777061940167.png',
        'Kahavanu': 'coin_chola_kahavanu_1777062297166.png',
        'Manjadi': 'coin_chola_manjadi_1777062316822.png',
        "Akbar's Rupee": 'coin_mughal_1777061956798.png',
        'Ilahi Coins': 'coin_mughal_ilahi_1777062337308.png',
        "Todar Mul's Dam": 'coin_mughal_dam_1777062352172.png'
    };

    return `
    <h2 class="section-heading">Era Coins</h2>
    <div class="coins-section">
        <div class="coins-row">
            ${coins.map((coin, idx) => `
            <div class="coin-item" data-coin-idx="${idx}" data-era-key="${key}" 
                 role="button" tabindex="0" aria-label="${coin.label} coin — click for details">
                <div class="coin-visual" style="animation-delay:${idx * 0.6}s">
                    <img src="images/${coinImgMap[coin.label] || 'coin_mauryan_1777061906142.png'}" alt="${coin.label} Coin" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">
                </div>
                <span class="coin-label">${coin.label}</span>
            </div>`).join('')}
            <div style="flex:1;min-width:140px;padding-left:0.5rem;">
                <p style="font-family:var(--df);font-size:0.88rem;font-style:italic;color:var(--text-secondary);line-height:1.7;">
                    Authentic coin designs from the ${ERA_DATA[key].name}. Hover or click each coin to discover its historical significance.
                </p>
            </div>
        </div>
    </div>`;
}

/* =============================================
   RENDER PERSONALITIES (BASIC CARDS)
   ============================================= */
function renderPersonalities(personalities) {
    return personalities.map((p, i) => `
    <div class="personality-card" style="animation-delay:${0.1 + i*0.15}s">
        <div class="p-info">
            <h4>${p.name}</h4>
            <span class="p-role">${p.role}</span>
            <p>${p.desc}</p>
        </div>
    </div>`).join('');
}

/* =============================================
   RENDER ERA MOTION BANNER
   ============================================= */
function renderBanner(key) {
    const b = ERA_BANNERS[key];
    if (!b) return '';
    return `
    <div class="era-motion-banner">
        ${b.svg}
        <p class="era-motion-label">${b.text}</p>
    </div>`;
}

/* =============================================
   RENDER ERA CONTENT DYNAMICALLY
   ============================================= */
function renderEraContent(key) {
    const e = ERA_DATA[key];
    document.getElementById('era-content').innerHTML = `
    <div class="era-header">
        <div class="era-badge">${e.period}</div>
        <h1 class="era-title">${e.name}</h1>
        <p class="era-tagline">${e.tagline}</p>
    </div>
    <div class="era-body">
        ${renderBanner(key)}

        <h2 class="section-heading">Overview</h2>
        <div class="era-overview">${e.overview}</div>

        ${renderCoins(key)}

        <h2 class="section-heading">Types of Taxes</h2>
        <div class="tax-grid">
            ${e.taxTypes.map(t=>`
            <div class="tax-card">
                <h4>${t.name}</h4>
                <p>${t.desc}</p>
            </div>`).join('')}
        </div>

        <h2 class="section-heading">Methods of Tax Collection</h2>
        <div class="info-section"><p>${e.collectionMethods}</p></div>

        <h2 class="section-heading">Role of Rulers & Administration</h2>
        <div class="info-section"><p>${e.administration}</p></div>

        <h2 class="section-heading">Historical Personalities</h2>
        <div class="personality-grid">
            ${renderPersonalities(e.personalities)}
        </div>

        <h2 class="section-heading">Pros & Cons</h2>
        <div class="proscons-grid">
            <div class="proscons-card pros-card">
                <h4>✦ Strengths</h4>
                <ul>${e.pros.map(p=>`<li>${p}</li>`).join('')}</ul>
            </div>
            <div class="proscons-card cons-card">
                <h4>✦ Weaknesses</h4>
                <ul>${e.cons.map(c=>`<li>${c}</li>`).join('')}</ul>
            </div>
        </div>

        <button class="btn-compare" onclick="openCompareModal('${key}')">⚖️ Compare with Modern Tax System</button>
    </div>`;

    // Bind coin interactions after rendering
    bindCoinInteractions(key);

    // Update standing character overlay
    const overlay = document.getElementById('character-standing-overlay');
    if(overlay) {
        if(e.mainCharImg) {
            overlay.innerHTML = `<img src="${e.mainCharImg}" alt="${e.mainCharName}">`;
            setTimeout(() => { overlay.classList.add('show'); }, 50);
        } else {
            overlay.classList.remove('show');
        }
    }
}



/* =============================================
   COIN TOOLTIP INTERACTIONS
   ============================================= */
function bindCoinInteractions(eraKey) {
    const tooltip = document.getElementById('coin-tooltip');
    const coins = COIN_DATA[eraKey] || [];

    document.querySelectorAll('.coin-item').forEach(item => {
        const idx = parseInt(item.getAttribute('data-coin-idx'));
        const coinData = coins[idx];
        if (!coinData) return;

        const showTip = (e) => {
            tooltip.innerHTML = coinData.info;
            tooltip.classList.add('show');
            positionTooltip(e, tooltip);
        };
        const hideTip = () => {
            tooltip.classList.remove('show');
        };
        const moveTip = (e) => {
            if (tooltip.classList.contains('show')) positionTooltip(e, tooltip);
        };

        item.addEventListener('mouseenter', showTip);
        item.addEventListener('mouseleave', hideTip);
        item.addEventListener('mousemove', moveTip);
        item.addEventListener('click', (e) => {
            if (tooltip.classList.contains('show')) { hideTip(); } else { showTip(e); }
        });
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (tooltip.classList.contains('show')) { hideTip(); } else { showTip(e); }
            }
        });
    });
}

function positionTooltip(e, tooltip) {
    const tw = tooltip.offsetWidth || 240;
    const th = tooltip.offsetHeight || 90;
    let x = e.clientX + 14;
    let y = e.clientY - 10;
    if (x + tw > window.innerWidth - 10) x = e.clientX - tw - 14;
    if (y + th > window.innerHeight - 10) y = e.clientY - th - 10;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}

/* Hide tooltip on outside click */
document.addEventListener('click', (e) => {
    if (!e.target.closest('.coin-item')) {
        document.getElementById('coin-tooltip').classList.remove('show');
    }
});

/* =============================================
   ANIMATION
   ============================================= */
function animateToRotation(target) {
    if(animationId) cancelAnimationFrame(animationId);
    const start=currentRotation, diff=target-start, dur=550, t0=performance.now();
    function frame(now) {
        const t=Math.min((now-t0)/dur,1);
        setRotation(start+diff*(1-Math.pow(1-t,3)));
        if(t<1) animationId=requestAnimationFrame(frame);
        else { animationId=null; setRotation(target); selectEra(ERAS[getActiveIndex()]); }
    }
    animationId=requestAnimationFrame(frame);
}
function snapToNearest() {
    animateToRotation(Math.round(currentRotation/SEG_ANGLE)*SEG_ANGLE);
}

/* =============================================
   INPUT HANDLERS
   ============================================= */
function getWheelCenter(){ const r=wheelSection.getBoundingClientRect(); return {x:r.left+r.width/2, y:r.top+r.height/2}; }
function getMAngle(cx,cy){ const c=getWheelCenter(); return Math.atan2(cy-c.y,cx-c.x)*180/Math.PI; }
function hideDH(){ if(!dragHintHidden){dragHintHidden=true;dragHint.classList.add('hidden');} }

function onMD(e){if(animationId){cancelAnimationFrame(animationId);animationId=null;} isDragging=true;hasDragged=false;previousMouseAngle=getMAngle(e.clientX,e.clientY);wheelSvg.style.cursor='grabbing';e.preventDefault();}
function onMM(e){if(!isDragging)return;const a=getMAngle(e.clientX,e.clientY);let d=a-previousMouseAngle;while(d>180)d-=360;while(d<-180)d+=360;currentRotation+=d;previousMouseAngle=a;setRotation(currentRotation);hasDragged=true;hideDH();}
function onMU(){if(!isDragging)return;isDragging=false;wheelSvg.style.cursor='grab';if(hasDragged)snapToNearest();}

function onTS(e){if(animationId){cancelAnimationFrame(animationId);animationId=null;}const t=e.touches[0];isDragging=true;hasDragged=false;previousMouseAngle=getMAngle(t.clientX,t.clientY);}
function onTM(e){if(!isDragging)return;e.preventDefault();const t=e.touches[0];const a=getMAngle(t.clientX,t.clientY);let d=a-previousMouseAngle;while(d>180)d-=360;while(d<-180)d+=360;currentRotation+=d;previousMouseAngle=a;setRotation(currentRotation);hasDragged=true;hideDH();}
function onTE(){if(!isDragging)return;isDragging=false;if(hasDragged)snapToNearest();}

function onWh(e){e.preventDefault();hideDH();if(animationId){cancelAnimationFrame(animationId);animationId=null;}const s=Math.round(currentRotation/SEG_ANGLE)*SEG_ANGLE;animateToRotation(s+(e.deltaY>0?-SEG_ANGLE:SEG_ANGLE));}

/* =============================================
   PARALLAX EFFECT
   ============================================= */
function initParallax() {
    const scene = document.getElementById('homepage-scene');
    if (!scene) return;

    let ticking = false;
    document.addEventListener('mousemove', (e) => {
        if (document.body.getAttribute('data-era') !== 'home') return;
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const mx = (e.clientX / window.innerWidth - 0.5) * 2;
            const my = (e.clientY / window.innerHeight - 0.5) * 2;

            // Parallax trees
            scene.querySelectorAll('.tree-parallax').forEach((t, i) => {
                const depth = 0.5 + i * 0.2;
                t.style.setProperty('--px', `${mx * depth * 5}px`);
                t.style.setProperty('--py', `${my * depth * 2.5}px`);
            });

            // Sun drifts in opposite direction for nice parallax
            const sun = scene.querySelector('.scene-sun');
            if (sun) {
                sun.style.setProperty('--sun-px', `${mx * -10}px`);
                sun.style.setProperty('--sun-py', `${my * -6}px`);
            }

            // Background decorative elements
            const bgScene = document.getElementById('bg-scene');
            if (bgScene) {
                bgScene.querySelectorAll('.bg-el').forEach((el, i) => {
                    const d = 0.3 + i * 0.15;
                    el.style.transform = `translate(${mx * d * 7}px, ${my * d * 4}px)`;
                });
            }
            ticking = false;
        });
    });
}

/* =============================================
   COMPARISON MODALS
   ============================================= */
function openCompareModal(key) {
    const e=ERA_DATA[key];
    document.getElementById('compare-modal-body').innerHTML = `
        <h2 class="modal-title">⚖️ ${e.name} vs Modern Taxation</h2>
        <p style="text-align:center;color:var(--text-secondary);margin-bottom:1.2rem;font-size:0.85rem;font-family:var(--df);font-style:italic;">${e.period} compared with India's current tax framework</p>
        <table class="compare-table">
            <thead><tr><th>Aspect</th><th>${e.icon} ${e.name}</th><th>🏛️ Modern India</th></tr></thead>
            <tbody>${e.comparison.map(r=>`<tr><td>${r.aspect}</td><td>${r.ancient}</td><td>${r.modern}</td></tr>`).join('')}</tbody>
        </table>`;
    document.getElementById('compare-modal').classList.add('active');
    document.body.style.overflow='hidden';
}
function closeCompareModal(){ document.getElementById('compare-modal').classList.remove('active'); document.body.style.overflow=''; }

function openCompareAll() {
    document.getElementById('compare-all-body').innerHTML = `
        <h2 class="modal-title">📊 All Taxation Systems — Ranked Best to Worst</h2>
        <p style="text-align:center;color:var(--text-secondary);margin-bottom:1.5rem;font-size:0.85rem;font-family:var(--df);font-style:italic;">
            Scored on fairness, administrative sophistication, transparency, economic outcome, and long-term sustainability.
        </p>
        <div class="ranking-list">
            ${RANKING_DATA.map((item,i)=>`
            <div class="ranking-item rank-${i+1}">
                <div class="ranking-number">${i+1}</div>
                <div class="ranking-info">
                    <h3>${ERA_DATA[item.era].icon} ${ERA_DATA[item.era].name}
                        <span style="font-weight:400;color:var(--text-secondary);font-size:0.8rem;">(${ERA_DATA[item.era].period})</span>
                    </h3>
                    <div class="ranking-score">Score: ${item.score}</div>
                    <p>${item.reason}</p>
                </div>
            </div>`).join('')}
        </div>
        <div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:var(--bg-card);border:1px solid var(--bg-card-border);">
            <h3 style="font-family:var(--hf);color:var(--accent);margin-bottom:0.6rem;font-size:0.9rem;">📋 Quick Comparison</h3>
            <table class="compare-table">
                <thead><tr><th>Era</th><th>Tax Rate</th><th>Key Innovation</th><th>Score</th></tr></thead>
                <tbody>
                    <tr><td>👑 Gupta</td><td>~16.67%</td><td>Guild-based decentralized collection</td><td style="color:var(--accent);">9.2</td></tr>
                    <tr><td>⛵ Chola</td><td>Variable</td><td>Cadastral surveys & village self-governance</td><td style="color:var(--accent);">8.7</td></tr>
                    <tr><td>🦁 Mauryan</td><td>16–25%</td><td>Arthashastra — codified tax law</td><td style="color:var(--accent);">8.3</td></tr>
                    <tr><td>🕉️ Vedic</td><td>~16.67%</td><td>Dharmic voluntary compliance</td><td style="color:var(--accent);">7.5</td></tr>
                    <tr><td>🏰 Mughal</td><td>33–50%</td><td>Zabt/Dahsala statistical averaging</td><td style="color:var(--accent);">6.4</td></tr>
                </tbody>
            </table>
        </div>`;
    document.getElementById('compare-all-modal').classList.add('active');
    document.body.style.overflow='hidden';
}
function closeCompareAllModal(){ document.getElementById('compare-all-modal').classList.remove('active'); document.body.style.overflow=''; }
function openModernTax() {
    alert("Modern Tax System content coming soon!");
}
function closeModal(e){ if(e.target.classList.contains('modal-overlay')){e.target.classList.remove('active');document.body.style.overflow='';} }
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){document.querySelectorAll('.modal-overlay.active').forEach(m=>m.classList.remove('active'));document.body.style.overflow='';} });

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
    wheelSection   = document.getElementById('wheel-section');
    wheelSvg       = document.getElementById('wheel-svg');
    centerIcon     = document.getElementById('center-icon');
    centerName     = document.getElementById('center-name');
    centerPeriod   = document.getElementById('center-period');
    pointerEraName = document.getElementById('pointer-era-name');
    dragHint       = document.getElementById('drag-hint');

    buildWheel();
    setRotation(0);

    // Wheel drag/touch/scroll
    wheelSvg.addEventListener('mousedown', onMD);
    document.addEventListener('mousemove', onMM);
    document.addEventListener('mouseup', onMU);
    wheelSvg.addEventListener('touchstart', onTS, {passive:false});
    wheelSvg.addEventListener('touchmove', onTM, {passive:false});
    wheelSvg.addEventListener('touchend', onTE);
    wheelSection.addEventListener('wheel', onWh, {passive:false});

    // Center hub = Home button
    const centerHub = document.getElementById('wheel-center');
    if (centerHub) {
        centerHub.addEventListener('click', (e) => {
            e.stopPropagation();
            goHome();
        });
    }

    // Initialize parallax
    initParallax();
});

