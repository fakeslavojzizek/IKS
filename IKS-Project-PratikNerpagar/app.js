const siteData = {
    "site_overview": {
        "mission": "To document and preserve the intricate stone joinery techniques of Ancient India, inspiring modern craft and informing archaeological conservation.",
        "target_audience": "Historians, architects, conservators, craftspersons, and the curious public."
    },
    "navigation_menu": [
        { id: "home", label: "Home" },
        { id: "techniques", label: "Techniques" },
        { id: "case-studies", label: "Case Studies" },
        { id: "timeline", label: "Timeline" },
        { id: "gallery", label: "Gallery" },
        { id: "glossary", label: "Glossary" },
        { id: "resources", label: "Resources" }
    ],
    "pages": {
        "home": {
            "hero": {
                "headline": "Monuments Without Mortar: The Mastery of Ancient Indian Stonecraft",
                "subhead": "Uncover the precision of traditional Indian masons, whose sophisticated interlocking stone joinery built temples and stepwells that have defied time, gravity, and earthquakes for millennia."
            },
            "intro": "What is stone joinery? Long before modern cements and rebar, ancient Indian architects constructed staggering monumental superstructures using purely physical connections between stone blocks. This is the art and science of stone joinery: using gravity, friction, and meticulously carved interlocking shapesâ€”such as tenons, dovetails, and mortisesâ€”to bind individual blocks into unyielding monolithic entities. \n\nAncient Indian techniques are recognized globally for their exceptional seismic resilience and extraordinary precision. On this platform, we illuminate the profound ingenuity of the subcontinental master masons (shilpis). Here, you will find comprehensive technique pages categorizing historical joint forms, in-depth architectural case studies, a dedicated glossary, and downloadable diagrams for conservationists and students.",
            "quick_links": [
                { "id": "techniques", "label": "Techniques", "description": "Explore detailed breakdowns of historical interlocking joints and dowel implementations." },
                { "id": "case-studies", "label": "Case Studies", "description": "Analyze the structural ingenuity of iconic temples and monumental stepwells." },
                { "id": "resources", "label": "Downloadable Diagrams", "description": "Access our repository of annotated blueprints and structural schematics." }
            ]
        },
        "techniques_overview": {
            "title": "Categorization of Joinery Techniques",
            "body": "The monumental stone architecture of Ancient India relies on a sophisticated vocabulary of lithic connections. Rather than depending on mortar, traditional masons (shilpis) engineered stability through mass, geometry, and friction. Techniques can be broadly classified into interlocking joints, dowels and plugs (often employing iron or alloys), mortise-and-tenon analogues, dovetail-like forms, and highly refined dry-stacking. \n\nInterlocking joints ensure lateral stability, crucial in seismic zones, while heavy dry-stacking leverages the immense downward force of superstructures (shikharas) to lock foundational layers in place. Regional variations are prominent: while the softer sandstones of the North allowed for complex dovetailing and iron clamping, the unyielding granites of the South saw incredible mastery in tight mortise-and-tenon integrations. Materials like basalt and laterite also demanded distinct joinery adaptations.",
            "sidebar": "Traditional Tools & Materials: Master masons worked primarily with sandstone, granite, basalt, and laterite. Their toolkit included iron chisels (tanka), heavy mallets, traditional plumb lines (avalamba), and precise measuring rods. Modern equivalents for study include laser scanners, diamond-tipped masonry tools, and ground-penetrating radar."
        },
        "techniques": [
            {
                "name": "Interlocking Tenons",
                "historical_examples": "Kandariya Mahadeva Temple plinth; numerous Vijayanagara foundational courses.",
                "materials_and_tools": "Hard sandstones, granites. Iron chisels, mallets, leveling water-troughs.",
                "step_by_step": [
                    "Quarry and transport massive stone blocks to the site.",
                    "Rough-dress the bottom face of the stone.",
                    "Carve a protruding tenon into the top face of the foundational block.",
                    "Measure the exact dimensions of the tenon.",
                    "Cut a corresponding mortise (recess) into the bottom of the superior block.",
                    "Hoist the superior block into position using wooden ramps and scaffolding.",
                    "Lower the block so the mortise perfectly houses the tenon.",
                    "Perform fine-dressing in situ to ensure zero-gap abutment.",
                    "Seal edge with a micro-layer of lime paste (optional) for water deterrence."
                ],
                "structural_advantages": "Provides extreme resistance to lateral shear forces, particularly useful during seismic events.",
                "conservation_notes": "Invisible from the exterior; requires GPR or ultrasonic testing to verify joint integrity before any intervention."
            },
            {
                "name": "Iron Clamps and Dowels",
                "historical_examples": "Konark Sun Temple; Khajuraho complex.",
                "materials_and_tools": "Sandstone, Khondalite, forged iron clamps, molten lead.",
                "step_by_step": [
                    "Align two adjacent horizontal stone blocks.",
                    "Carve a double-dovetail or I-shaped channel across the seam of the two blocks.",
                    "Forge an iron cramp matching the channel dimensions.",
                    "Heat lead in a crucible.",
                    "Place the iron cramp into the carved channel.",
                    "Pour molten lead over the cramp to fill any gaps.",
                    "Allow the lead to cool and expand, locking the cramp firmly in the stone.",
                    "Dress the top surface to conceal the joint under the next ashlar course."
                ],
                "structural_advantages": "Ties massive blocks together horizontally, preventing shifting or spreading under the immense weight of the tower.",
                "conservation_notes": "Iron oxidation causes expansion (rust jacking), which cracks the stone."
            },
            {
                "name": "Butterfly Joints",
                "historical_examples": "Hoysaleswara Temple at Halebidu; ancient stepwells in Gujarat.",
                "materials_and_tools": "Chloritic schist, soapstone, precise small chisels.",
                "step_by_step": [
                    "Dress two blocks to fit cleanly edge-to-edge.",
                    "Carve half of a butterfly-shaped slot onto the edge of the first block.",
                    "Carve the corresponding half slot on the adjacent block.",
                    "Push the two blocks tightly together.",
                    "Carve a separate, distinct 'butterfly' key from a harder stone.",
                    "Drive the butterfly key into the combined slot.",
                    "Grind the surface flush so the joint is smooth and continuous."
                ],
                "structural_advantages": "Prevents blocks from pulling apart (tension); commonly used in retaining walls for stepwells holding back tons of earth.",
                "conservation_notes": "Easily replaced if the key breaks, but surrounding stone edges must be carefully monitored for micro-fractures."
            },
            {
                "name": "Dry-Stack Corbelled Domes",
                "historical_examples": "Dilwara Temples; Modhera Sun Temple.",
                "materials_and_tools": "Marble, sandstone. Heavy lifting tackles.",
                "step_by_step": [
                    "Lay a massive, perfectly leveled foundational stone ring.",
                    "Lay the next course of stone slightly cantilevering (projecting) inward.",
                    "Balance the overhanging weight by piling counterweight stones on the exterior.",
                    "Dress the interior face to create a smooth, continuous curve.",
                    "Lay successive cantilevered courses until the opening is narrow.",
                    "Cap the peak with a heavy, single 'padmashila' (capstone) locking the rings via gravity.",
                    "Ensure overall structural balance purely through load distribution."
                ],
                "structural_advantages": "Eliminates the need for mortar and centering frames typical in true Roman arches; excellent compressive strength."
            },
            {
                "name": "Hydraulic Setting and Pozzolanic Mortar",
                "historical_examples": "Nalanda University (Site 3 & Site 12), Bihar.",
                "materials_and_tools": "Carbonated Lime (Hydraulic Lime), Silt-based mud, Surkhi (finely ground brick powder), Organic fibers.",
                "step_by_step": [
                    "Create ultra-thin (2 mm to 4 mm) bed joints of silt-based mud mortar for brick-to-brick joinery.",
                    "Prepare a high lime-content binder (ratio yielding 1:0.4 to 1:0.8 binder-to-aggregate).",
                    "Add Surkhi (brick powder) and organic fibers for tensile reinforcement.",
                    "Apply an inner plaster layer (4-6 mm) for leveling and adhesion to the substrate.",
                    "Apply a coarse outer plaster layer (9-12 mm) over the base for weather resistance."
                ],
                "structural_advantages": "Extremely high density (1.91 g/cc) and tensile strength. Water-resistant hydraulic setting, crucial for preserving structures across 1,600 years.",
                "conservation_notes": "Prone to salt crystallization (sodium chloride) and gypsum formation. Requires matching breathable lime-based conservation mortars."
            }
        ],
        "case_studies": [
            {
                "title": "Kailasa Temple, Ellora",
                "img": "assets/case_studies/kailasa.png",
                "historical_context": "Excavated top-down in the 8th century by Rashtrakuta kings, this represents the ultimate subversion of stone 'joinery'. Instead of adding blocks together, the entire structure was carved from a single living rock outcropping.",
                "specific_joinery": "While technically a monolithic structure lacking traditional masonry joints, the 'joinery' exists conceptually in its rock-cut architectural analogues. Sculptors meticulously replicated wooden joinery formsâ€”joists, beams, and tenonsâ€”purely as aesthetic skeuomorphs.",
                "structural_analysis": "The structural integrity relies wholly on the natural basalt flow. The genius lies in negative-space architectural planning.",
                "conservation_challenges": "Weathering of the porous basalt and micro-fissures in the natural rock bed."
            },
            {
                "title": "Sun Temple, Konark",
                "img": "assets/case_studies/sun_temple.png",
                "historical_context": "Built in the 13th century in Odisha, this monumental chariot-shaped temple pushed the limits of Khondalite stone masonry and iron-tool engineering.",
                "specific_joinery": "Renowned for its massive iron beams, Konark used forged iron to supplement stone joinery. The massive corbelled sanctuaries were held together with extensive networks of double-dovetail iron cramps sealed in lead, keeping the huge ashlar blocks from buckling radially.",
                "structural_analysis": "The temple achieved massive interior space via an elaborate corbelled dome framework supported laterally by iron bindings.",
                "conservation_challenges": "Rust jacking from thousands of iron cramps splitting the salt-laden coastal stone."
            },
            {
                "title": "Rani Ki Vav, Patan",
                "img": "assets/case_studies/rani_ki_vav.png",
                "historical_context": "An 11th-century monumental stepwell in Gujarat, descending seven levels underground.",
                "specific_joinery": "Features complex interlocking stone brackets, butterfly joints, and lap joints to manage the immense inward pressure of the surrounding earth. Every stone acts laterally against its neighbor to form an inward-pressing, self-stabilizing box.",
                "structural_analysis": "Its subterranean nature means it experiences immense lateral soil thrust rather than wind load.",
                "conservation_challenges": "Water table fluctuations and soil pressure shifts require careful monitoring of joint alignment to prevent wall bowing."
            },
            {
                "title": "Nalanda University, Bihar",
                "img": "assets/case_studies/nalanda.png",
                "historical_context": "A 1600-year-old renowned Buddhist University and UNESCO World Heritage site, built primarily of burnt brick masonry.",
                "specific_joinery": "Features highly advanced thin bed jointing (2-4 mm) and sophisticated multilayered plastering using a unique hydraulic lime and surkhi matrix.",
                "structural_analysis": "The binder-to-aggregate ratio is remarkably rich at 1:0.4 to 1:0.8, with mineralogy consisting largely of Calcite (63-84%). Using organic fibers, the masons structurally reinforced the plaster layers to prevent shrinkage cracking.",
                "conservation_challenges": "Surface flaking induced by salt crystallization and gypsum accumulation from weathering, requiring precise chemical replication of the original lime mortar for restoration."
            },
            {
                "title": "Brihadisvara Temple, Thanjavur",
                "img": "assets/case_studies/brihadisvara.png",
                "historical_context": "Completed in 1010 CE by the Chola dynasty, this towering architectural marvel represents the pinnacle of ancient Dravidian architecture.",
                "specific_joinery": "Constructed almost entirely from massive interlocking blocks of granite without any binding mortar. The astonishing precision of the dry-stacked jointing allows the heavy ashlar blocks to sit perfectly flush.",
                "structural_analysis": "The incredible weight of the superstructure (the vimana) creates immense downward compressive force that frictionally locks the interlocking blocks in place, allowing the tower to stand rigid against centuries of monsoons and seismic activity.",
                "conservation_challenges": "Protecting the monolithic stones from acid rain and mitigating structural vibration from modern surrounding infrastructure."
            },
            {
                "title": "Kandariya Mahadeva Temple, Khajuraho",
                "img": "assets/case_studies/kandariya.png",
                "historical_context": "Built symmetrically around 1050 CE by the Chandela dynasty, this temple embodies the zenith of central Indian temple architecture.",
                "specific_joinery": "The soaring vertical spires (shikharas) are supported by extremely complex mortarless interlocking sandstone joints, heavily reinforced with a concealed network of forged iron cramps and horizontal dowels.",
                "structural_analysis": "To achieve such breathtaking verticality without arches or widespread interior columns, the master masons relied on rigorous geometric corbelling and iron-clamping to pull the massive vertical forms inward.",
                "conservation_challenges": "Inert iron oxidation (rust jacking) deep inside the masonry joints causing outward expansion and cracking of the ornate sandstone facade."
            }
        ],
        "timeline": [
            "c. 2600 BCE: Indus Valley Civilization; precise mud-brick masonry, but minimal large-scale stone joinery.",
            "c. 3rd Century BCE: Mauryan Empire; introduction of highly polished, monolithic sandstone pillars without joints.",
            "2nd Century BCE: Early rock-cut architecture (e.g., Lomas Rishi Cave); wood joinery techniques translated into decorative stone skeuomorphs.",
            "5th Century CE: Gupta Period; first widespread use of structural dry-stone temples using simple, massive ashlar masonry.",
            "7th Century CE: Pallava rock-cut rathas at Mahabalipuram; refined simulation of complex joinery.",
            "8th Century CE: Kailasa Temple at Ellora; monolithic architectural achievement defining structural load paths.",
            "10thâ€“11th Century CE: Chandela (Khajuraho) and Solanki (Gujarat); mastery of interlocking sandstones, iron cramping.",
            "11th Century CE: Chola Empire (Thanjavur); mastery of monumental granite mortise and tenon integration without mortar.",
            "13th Century CE: Eastern Ganga (Konark); massive scale structural iron beams supplementing heavy masonry.",
            "16th Century CE: Vijayanagara Empire; highly intricate compound pillars with internal pin-locking systems.",
            "19th Century CE: Colonial-era documentation by the ASI; first modern drafting of these joints.",
            "20thâ€“21st Century CE: Modern conservation era; structural diagnostics, iron-clamp removal, and anastylosis."
        ],
        "glossary": [
            { "term": "Abutment", "definition": "A zero-gap contact point where two large structural stone blocks meet." },
            { "term": "Anastylosis", "definition": "The archaeological reconstruction using original architectural elements." },
            { "term": "Ashlar", "definition": "Finely dressed (cut, worked) stone, either an individual block or the masonry built with such blocks." },
            { "term": "Boss", "definition": "A protruding uncarved block of stone, often used for lifting or as a joinery peg." },
            { "term": "Butterfly Joint", "definition": "A double dovetail joint used to connect two adjacent stone blocks in the same plane." },
            { "term": "Corbelling", "definition": "An architectural technique of stepping parallel courses of stone further inward to create an arch or roof." },
            { "term": "Coursing", "definition": "A continuous horizontal layer of stone units in a given wall or structure." },
            { "term": "Cramp", "definition": "A metal rod or bar, sometimes U-shaped, used to hold stone blocks together horizontally." },
            { "term": "Dowel", "definition": "A cylindrical peg used to join two adjacent sections of material." },
            { "term": "Dressing", "definition": "The process of preparing a raw stone rough block into a dimensioned form with precise flat surfaces." },
            { "term": "Dry-stone", "definition": "A building method where structures are constructed without any mortar to bind them together." },
            { "term": "Interlock", "definition": "To connect or engage stones together such that the geometries prevent movement." },
            { "term": "Mortise", "definition": "A hole or recess cut into a part, designed to receive a corresponding projection (a tenon)." }
        ],
        "gallery": [
            { "caption": "Dry-Stack Granite Joint, Thanjavur", "description": "Close-up of a perfectly abutted dry-stack granite joint â€” zero gap, pure precision.", "img": "assets/gallery/granite_joint.png" },
            { "caption": "Mortise Indentations on a Fallen Pillar", "description": "Erosion revealing the structural mortise indentations carved deep into a fallen sandstone pillar.", "img": "assets/gallery/mortise_pillar.png" },
            { "caption": "Butterfly Stone Key", "description": "An intricately carved butterfly stone key locking two retaining blocks â€” Hoysala mastery.", "img": "assets/gallery/butterfly_joint.png" },
            { "caption": "Iron Chisel Tooling Marks", "description": "Deep iron chisel tooling marks visible on an unpolished plinth block â€” the shilpi's signature.", "img": "assets/gallery/chisel_marks.png" },
            { "caption": "Rusted Iron Cramp Cross-Section", "description": "Cross-section of a damaged block revealing a rusted iron cramp and the rust-jacking cracks.", "img": "assets/gallery/iron_cramp.png" },
            { "caption": "Modern Conservation Work", "description": "Replacing oxidized iron clamps with precision-fitted titanium dowels â€” preserving for millennia.", "img": "assets/gallery/conservation.png" },
            { "caption": "Monumental Lintel via Squared Tenons", "description": "A massive stone lintel suspended via perfectly carved squared tenons above temple columns.", "img": "assets/gallery/lintel_tenons.png" },
            { "caption": "Interior Corbelled Dome Curve", "description": "The continuous, smooth interior curve of a dry-stacked corbelled stone dome â€” no mortar.", "img": "assets/gallery/corbelled_dome.png" }
        ],
        "resources": [
            { "title": "Indian rock-cut architecture", "url": "https://en.wikipedia.org/wiki/Indian_rock-cut_architecture", "description": "Wikipedia article detailing the history and methods of rock-cut architecture, such as the elaborate rock-cut temples seen at Ellora." },
            { "title": "Hindu temple architecture", "url": "https://en.wikipedia.org/wiki/Hindu_temple_architecture", "description": "Comprehensive overview of the evolution, structural elements, and regional variations in Hindu temple construction." },
            { "title": "Ancient Indian architecture", "url": "https://en.wikipedia.org/wiki/Ancient_Indian_architecture", "description": "Covers architectural developments from the Indus Valley Civilization to the medieval period, highlighting major structural typologies." },
            { "title": "Stepwell", "url": "https://en.wikipedia.org/wiki/Stepwell", "description": "Information on the complex subterranean water structures of western India, focusing on structural reinforcement using stone joinery." }
        ]
    }
};

// ========================================
// DOM ELEMENTS
// ========================================
const appRoot = document.getElementById('app-root');
const navLinksContainer = document.getElementById('nav-links');
const loader = document.getElementById('loader');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navbar = document.getElementById('navbar');

// Particles disabled â€” heritage theme uses clean light background
let mouseX = 0, mouseY = 0;
function animateParticles() {} // no-op

// Mouse tracking (kept for future use but glow is disabled)
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ========================================
// NAVBAR SCROLL DEPTH EFFECT
// ========================================
window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ========================================
// SCROLL REVEAL â€” ENTRANCE FROM DEPTH
// ========================================
function initScrollReveal() {
    // Standard reveal elements
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => observer.observe(el));
    }

    // Timeline items â€” staggered slide-in from left
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length) {
        const tlObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Respect the transition-delay already set inline
                    entry.target.classList.add('visible');
                    tlObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
        timelineItems.forEach(el => tlObserver.observe(el));
    }
}

// ========================================
// 3D TILT EFFECT ON CARDS
// ========================================
function init3DTilt() {
    const tiltCards = document.querySelectorAll('.tilt-3d');
    if (window.matchMedia('(hover: none)').matches) return; // skip on touch

    tiltCards.forEach(card => {
        // Setup 3D transform properties
        card.style.transformStyle = 'preserve-3d';
        card.style.willChange = 'transform';
        
        // Add glare element if it doesn't already exist
        let glare = card.querySelector('.glare');
        if (!glare) {
            glare = document.createElement('div');
            glare.classList.add('glare');
            card.appendChild(glare);
            
            // Ensure card is positioned so glare aligns properly
            if (getComputedStyle(card).position === 'static') {
                card.style.position = 'relative';
            }
        }

        // Apply smooth transition properties for hover enter/leave
        card.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
        Array.from(card.children).forEach(child => {
            if (!child.classList.contains('glare')) {
                child.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
            }
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate exaggerated 3D rotation based on mouse position
            const rotateY = ((x - centerX) / centerX) * 15;
            const rotateX = ((centerY - y) / centerY) * 15;

            // Apply card rotation and slight scale
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            card.style.zIndex = '10';

            // Popping out children in 3D
            Array.from(card.children).forEach(child => {
                if (!child.classList.contains('glare')) {
                    child.style.transform = 'translateZ(50px)'; // 3D pop effect
                }
            });
            
            // Update glare position
            const angle = Math.atan2(y - centerY, x - centerX) * 180 / Math.PI - 90;
            const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            const maxDist = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
            const opacity = Math.min((distance / maxDist) * 0.4, 0.6); // dynamically adjust opacity
            
            glare.style.background = `linear-gradient(${angle}deg, rgba(255,255,255, ${opacity}) 0%, rgba(255,255,255, 0) 80%)`;
            glare.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            // Reset card transform
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.zIndex = '1';

            // Reset children transform
            Array.from(card.children).forEach(child => {
                if (!child.classList.contains('glare')) {
                    child.style.transform = 'translateZ(0px)';
                }
            });
            
            // Hide glare
            if (glare) {
                glare.style.opacity = '0';
            }
        });
    });
}

// ========================================
// RENDER FUNCTIONS
// ========================================
function renderHome() {
    const data = siteData.pages.home;
    const overview = siteData.pages.techniques_overview;
    const introParagraphs = data.intro.split('\n\n').map(p => `<p>${p}</p>`).join('');

    // Quick-nav cards
    const cardIcons = ['ðŸ›ï¸', 'ðŸ—ï¸', 'ðŸ“¥'];
    const cardsHtml = data.quick_links.map((q, i) => `
        <div class="glass-card reveal" style="transition-delay: ${i * 0.15}s">
            <div class="card-icon">${cardIcons[i] || 'ðŸ”·'}</div>
            <h3>${q.label}</h3>
            <p>${q.description}</p>
            <br/>
            <a href="#${q.id}" class="btn">Explore &rarr;</a>
        </div>
    `).join('');

    return `
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">${data.hero.headline}</h1>
                <p class="hero-subtitle">${data.hero.subhead}</p>
                <a href="#techniques" class="btn">Discover Techniques &rarr;</a>
            </div>
        </section>

        <section class="home-intro">
            <div class="home-intro-inner">
                <div class="home-intro-text reveal">
                    <p class="section-label">About This Platform</p>
                    <h2 class="heading-underline">What is Stone Joinery?</h2>
                    <br/>
                    ${introParagraphs}
                </div>
                <div class="home-intro-sidebar reveal" style="transition-delay: 0.2s">
                    <h4>Traditional Tools &amp; Materials</h4>
                    <p>${overview.sidebar}</p>
                </div>
            </div>
        </section>

        <section class="quick-links-section">
            <div class="quick-links-inner">
                <div class="section-title-row reveal">
                    <p class="section-label">Explore</p>
                    <h2 style="font-size:2rem; color:var(--text-dark); margin-bottom:0.5rem;">Our Signature Sections</h2>
                    <p style="color:var(--text-muted); max-width:560px;">Navigate through the study of ancient Indian lithic engineering.</p>
                </div>
                <div class="grid-3">
                    ${cardsHtml}
                </div>
            </div>
        </section>
    `;
}

function renderTechniques() {
    const data = siteData.pages.techniques;
    const overview = siteData.pages.techniques_overview;

    const techHtml = data.map((t, i) => {
        const stepsHtml = t.step_by_step.map(step => `<li>${step}</li>`).join('');
        return `
            <div class="technique-card reveal" style="transition-delay: ${i * 0.1}s">
                <div class="technique-header">
                    <div class="technique-number">${i + 1}</div>
                    <h2>${t.name}</h2>
                </div>
                <div class="technique-body">
                    <div class="grid-2">
                        <div>
                            <div style="margin-bottom:1.25rem;">
                                <span class="info-badge">Historical Examples</span>
                                <p style="margin-top:0.4rem;">${t.historical_examples}</p>
                            </div>
                            <div style="margin-bottom:1.25rem;">
                                <span class="info-badge">Materials &amp; Tools</span>
                                <p style="margin-top:0.4rem;">${t.materials_and_tools}</p>
                            </div>
                            <div style="margin-bottom:1.25rem;">
                                <span class="info-badge">Structural Advantages</span>
                                <p style="margin-top:0.4rem;">${t.structural_advantages}</p>
                            </div>
                            ${t.conservation_notes ? `<div class="conservation-note"><p><strong>Conservation Notes:</strong> ${t.conservation_notes}</p></div>` : ''}
                        </div>
                        <div>
                            <p class="section-label" style="margin-bottom:1rem;">Construction Method</p>
                            <ol class="step-list">${stepsHtml}</ol>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <p class="section-label" style="justify-content:center;">Techniques</p>
                <h1>${overview.title}</h1>
                <p>${overview.body.slice(0, 220)}...</p>
            </div>
            <div class="techniques-list">
                ${techHtml}
            </div>
        </div>
    `;
}
function renderCaseStudies() {
    const data = siteData.pages.case_studies;
    const cardsHtml = data.map((c, i) => `
        <div class="case-study-card reveal" style="transition-delay: ${i * 0.12}s; overflow: hidden;">
            ${c.img ? `<img src="${c.img}" alt="${c.title}" style="width: 100%; height: 260px; object-fit: cover; display: block; border-bottom: 2px solid var(--accent); margin-bottom: 1.5rem;" />` : ''}
            <div class="case-study-header" style="${!c.img ? 'padding-top: 1.5rem;' : ''}">
                <h2>${c.title}</h2>
            </div>
            <div class="case-study-body">
                <div class="study-section">
                    <h4>Historical Context</h4>
                    <p>${c.historical_context}</p>
                </div>
                <div class="study-section">
                    <h4>Specific Joinery</h4>
                    <p>${c.specific_joinery}</p>
                </div>
                <div class="study-section">
                    <h4>Structural Analysis</h4>
                    <p>${c.structural_analysis}</p>
                </div>
                <div class="study-section">
                    <h4>Conservation Challenges</h4>
                    <p>${c.conservation_challenges}</p>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <p class="section-label" style="justify-content:center;">Case Studies</p>
                <h1>Monument Case Studies</h1>
                <p>In-depth architectural analysis of the subcontinent's most iconic structural achievements.</p>
            </div>
            <div class="grid-2">
                ${cardsHtml}
            </div>
        </div>
    `;
}

function renderTimeline() {
    const data = siteData.pages.timeline;
    const timelineHtml = data.map((item, i) => {
        const colonIdx = item.indexOf(': ');
        const year = colonIdx !== -1 ? item.slice(0, colonIdx) : item;
        const desc = colonIdx !== -1 ? item.slice(colonIdx + 2) : '';
        const isOdd = i % 2 === 0;

        const card = `
            <div class="timeline-card">
                <h3 style="color:var(--accent); font-family:var(--font-heading); font-size:0.95rem; letter-spacing:1px; text-transform:uppercase;">${year}</h3>
                <p style="color:var(--text-main); font-size:1rem; margin-top:0.5rem; line-height:1.65;">${desc}</p>
            </div>`;
        const spacer = `<div class="timeline-spacer"></div>`;
        const center = `
            <div class="timeline-center">
                <div class="timeline-dot"></div>
                <div class="timeline-connector-dot"></div>
            </div>`;

        // Odd: card | center | spacer  â†’  card on left
        // Even: spacer | center | card  â†’  card on right
        return `
            <div class="timeline-item" style="transition-delay: ${i * 0.08}s">
                ${isOdd ? card + center + spacer : spacer + center + card}
            </div>`;
    }).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <h1>Chronology of Joinery</h1>
                <p>The progression of lithic engineering across the subcontinent over millennia.</p>
            </div>
            <div class="timeline">
                <div class="timeline-arrow"></div>
                ${timelineHtml}
            </div>
        </div>
    `;
}

function renderGallery() {
    const data = siteData.pages.gallery;
    const html = data.map((item, i) => {
        if (item.img) {
            return `
            <div class="gallery-item tilt-3d reveal" style="transition-delay: ${i * 0.08}s; background-image: url('${item.img}');" title="${item.caption}">
                <div class="gallery-overlay">
                    <h4 class="gallery-caption">${item.caption}</h4>
                    <p class="gallery-desc">${item.description}</p>
                </div>
            </div>`;
        } else {
            // Fallback for images that couldn't be generated
            return `
            <div class="gallery-item gallery-item--placeholder tilt-3d reveal" style="transition-delay: ${i * 0.08}s;" title="${item.caption}">
                <div class="gallery-placeholder-icon">â¬¡</div>
                <h4 class="gallery-caption-static">${item.caption}</h4>
                <p class="gallery-desc-static">${item.description}</p>
            </div>`;
        }
    }).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <h1>Visual Archive</h1>
                <p>A curated collection of structural joints, tooling marks, and conservation efforts across the subcontinent.</p>
            </div>
            <div class="gallery-grid">
                ${html}
            </div>
        </div>
    `;
}

function renderGlossary() {
    const data = siteData.pages.glossary;
    const html = data.map((g, i) => `
        <div class="glossary-term reveal" style="transition-delay: ${i * 0.05}s">
            <span class="term-name">${g.term}</span>
            <p>${g.definition}</p>
        </div>
    `).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <p class="section-label" style="justify-content:center;">Glossary</p>
                <h1>Technical Glossary</h1>
                <p>Essential terminology for historic masonry and stone conservation.</p>
            </div>
            <div class="glossary-grid">
                ${html}
            </div>
        </div>
    `;
};

function renderResources() {
    const data = siteData.pages.resources || [];
    const html = data.map((r, i) => `
        <div class="glass-card reveal" style="transition-delay: ${i * 0.05}s; background:var(--surface-light); padding:1.5rem; border-radius:var(--radius); border:1px solid var(--border)">
            <h3 style="margin-bottom: 0.5rem; color:var(--accent);"><a href="${r.url}" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:none;">${r.title} &rarr;</a></h3>
            <p style="color:var(--text-main);">${r.description}</p>
        </div>
    `).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <p class="section-label" style="justify-content:center;">Resources</p>
                <h1>External References</h1>
                <p>Curated Wikipedia articles for further reading on ancient Indian masonry.</p>
            </div>
            <div class="grid-2">
                ${html}
            </div>
        </div>
    `;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    // Priority: ensure the site always unloads the spinner
    setTimeout(() => {
        if (loader) loader.classList.add('hidden');
    }, 1000);

    buildNavigation();
    handleRoute();
});

// Mobile menu toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        if (navLinksContainer) navLinksContainer.classList.toggle('active');
        document.body.style.overflow = (navLinksContainer && navLinksContainer.classList.contains('active')) ? 'hidden' : '';
    });
}

function buildNavigation() {
    if (!navLinksContainer) return;
    navLinksContainer.innerHTML = ''; // Clear to prevent duplication
    siteData.navigation_menu.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${item.id}" class="nav-link" data-id="${item.id}">${item.label}</a>`;
        navLinksContainer.appendChild(li);
    });
}

// Router
window.addEventListener('hashchange', () => {
    if (loader) loader.classList.remove('hidden');
    appRoot.style.opacity = 0;

    setTimeout(() => {
        handleRoute();
        if (loader) loader.classList.add('hidden');
        if (navLinksContainer) navLinksContainer.classList.remove('active');
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }, 400);
});

function handleRoute() {
    let hash = window.location.hash.replace('#', '') || 'home';

    // Update active nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.id === hash);
    });

    let htmlBody = '';

    switch (hash) {
        case 'home': htmlBody = renderHome(); break;
        case 'techniques': htmlBody = renderTechniques(); break;
        case 'case-studies': htmlBody = renderCaseStudies(); break;
        case 'timeline': htmlBody = renderTimeline(); break;
        case 'gallery': htmlBody = renderGallery(); break;
        case 'glossary': htmlBody = renderGlossary(); break;
        case 'resources': htmlBody = renderResources(); break;
        default: htmlBody = `<div class="page-container page-header"><h1>Section Not Found</h1></div>`;
    }

    if (appRoot) {
        appRoot.innerHTML = htmlBody;
        // Animate enter
        setTimeout(() => {
            appRoot.style.opacity = 1;
            window.scrollTo(0, 0);
            initScrollReveal();
            init3DTilt();
        }, 60);
    }
}
