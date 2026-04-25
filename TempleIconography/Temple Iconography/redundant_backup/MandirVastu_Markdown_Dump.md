# MandirVastu Site Code Dump

## FILE: index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="MandirVastu — Decoding the sacred architecture of India. Explore the iconographic language of Hindu temples: Garbhagriha, Shikhara, Gopuram, Vastu Purusha Mandala, and more.">
  <title>MandirVastu — The Iconography of Indian Temples</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* ── Navbar ── */
    #navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background-color: rgba(14,7,0,0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--gold);
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      transform: translateY(-100%); animation: slideDownNav 0.8s forwards;
      transition: background-color 0.3s ease;
    }
    #navbar.scrolled { background-color: rgba(6,3,0,0.98); }
    @keyframes slideDownNav { to { transform: translateY(0); } }
    .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 2rem; }
    .logo { display: flex; align-items: center; gap: 0.6rem; font-size: 1.55rem; font-weight: 700; color: var(--gold); }
    .logo-icon { width: 28px; height: 28px; flex-shrink: 0; }
    .logo-tagline { font-size: 0.7rem; color: var(--gold-light); letter-spacing: 1.5px; text-transform: uppercase; font-family: var(--font-dm); font-weight: 400; margin-left: 0.2rem; opacity: 0.8; }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; padding: 0; margin: 0; }
    .nav-links a { font-size: 0.95rem; font-weight: 500; letter-spacing: 1px; color: var(--ivory); position: relative; text-transform: uppercase; }
    .nav-links a::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 1px; background: var(--gold); transition: width 0.3s ease; }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
    .nav-links a:hover, .nav-links a.active { color: var(--gold-light); }
    .nav-right { display: flex; align-items: center; gap: 2rem; }
    .hamburger { display: none; flex-direction: column; gap: 6px; cursor: pointer; }
    .hamburger span { width: 28px; height: 2px; background: var(--ivory); transition: 0.3s; }

    /* ── Hero ── */
    #hero { height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; overflow: hidden; }
    .hero-bg {
      position: absolute; inset: 0; z-index: 1;
      background: radial-gradient(circle at center bottom, rgba(200,134,10,0.18) 0%, transparent 60%),
                  radial-gradient(ellipse at center, rgba(14,7,0,0.4) 0%, var(--bg-deep) 100%);
    }
    .mandala-bg {
      position: absolute; top: 50%; left: 50%; width: 140vh; height: 140vh;
      transform: translate(-50%,-50%); opacity: 0.08; z-index: 1;
      animation: rotateMandala 60s linear infinite;
      stroke: var(--gold); fill: none; stroke-width: 0.5;
    }
    @keyframes rotateMandala { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
    .hero-content { position: relative; z-index: 2; max-width: 950px; padding: 2rem; margin-top: 2rem; }
    .hero-content h1 { font-size: clamp(3rem, 6vw, 4.5rem); margin-bottom: 1.5rem; line-height: 1.1; letter-spacing: 3px; color: var(--ivory); }
    .hero-content p { font-size: clamp(1.05rem, 2vw, 1.35rem); color: var(--gold-light); line-height: 1.7; margin-bottom: 3rem; max-width: 780px; margin-left: auto; margin-right: auto; font-family: var(--font-cormorant); }
    .hero-ctas { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }
    .btn { padding: 0.9rem 2.2rem; border-radius: 100px; font-weight: 600; font-size: 1rem; letter-spacing: 0.5px; transition: var(--transition); display: inline-block; cursor: pointer; }
    .btn-gold { background: var(--gold); color: var(--bg-deep); border: 2px solid var(--gold); }
    .btn-gold:hover { background: var(--gold-light); border-color: var(--gold-light); box-shadow: 0 0 20px rgba(200,134,10,0.5); transform: translateY(-2px); }
    .btn-ghost { border: 2px solid var(--gold); color: var(--ivory); background: transparent; }
    .btn-ghost:hover { background: rgba(200,134,10,0.1); border-color: var(--gold-light); color: var(--gold-light); transform: translateY(-2px); }
    .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); z-index: 2; animation: bounce 2s infinite; cursor: pointer; opacity: 0.8; }
    .scroll-indicator svg { color: var(--gold); width: 28px; height: 28px; }
    @keyframes bounce { 0%,20%,50%,80%,100% { transform: translateY(0) translateX(-50%); } 40% { transform: translateY(-15px) translateX(-50%); } 60% { transform: translateY(-7px) translateX(-50%); } }
    .fade-up-seq { opacity: 0; transform: translateY(40px); }
    .fade-up-seq.animate { animation: fadeUpAnim 0.8s cubic-bezier(0.2,0.8,0.2,1) forwards; }
    .delay-1 { animation-delay: 0.2s; }
    .delay-2 { animation-delay: 0.5s; }
    .delay-3 { animation-delay: 0.8s; }
    .delay-4 { animation-delay: 1.2s; }
    @keyframes fadeUpAnim { to { opacity: 1; transform: translateY(0); } }

    /* ── Section Global ── */
    .section-padding { padding: 8rem 2rem; max-width: 1300px; margin: 0 auto; }
    section h2 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; color: var(--ivory); letter-spacing: 1px; }
    .heading-underline { width: 80px; height: 2px; background: var(--gold); margin: 0 auto 3rem; }
    .scroll-fade { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
    .scroll-fade.visible { opacity: 1; transform: translateY(0); }

    /* ── Elements / Card Grid ── */
    #elements { background-color: var(--bg-deep); }
    .filter-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-bottom: 4rem; }
    .filter-btn {
      padding: 0.6rem 1.6rem; border-radius: 100px; background: var(--bg-card);
      border: 1px solid var(--gold); color: var(--ivory); font-size: 0.95rem; font-weight: 500;
      letter-spacing: 0.5px; transition: var(--transition); cursor: pointer;
    }
    .filter-btn:hover { background: rgba(200,134,10,0.15); }
    .filter-btn.active { background: var(--gold); color: var(--bg-deep); border-color: var(--gold); font-weight: 700; box-shadow: 0 0 15px rgba(200,134,10,0.2); }
    .grid-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
    .card {
      background: var(--bg-card); border-radius: 8px; border: 1px solid rgba(200,134,10,0.15);
      overflow: hidden; transition: var(--transition); display: flex; flex-direction: column; cursor: pointer;
    }
    .card:hover { transform: translateY(-8px); box-shadow: 0 0 25px rgba(200,134,10,0.15); border-color: var(--gold); }
    .card.hidden { display: none; }
    .card.fade-in { animation: cardFadeIn 0.4s forwards; }
    @keyframes cardFadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
    .card-symbol-area {
      width: 100%; height: 220px; display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
    }
    .card-devanagari {
      font-size: 6rem; color: rgba(255,255,255,0.12); font-family: var(--font-cinzel);
      transition: transform 0.5s ease, color 0.5s ease; line-height: 1; user-select: none;
    }
    .card:hover .card-devanagari { transform: scale(1.1); color: rgba(255,255,255,0.25); }
    .card-symbol-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to bottom, transparent 50%, var(--bg-card) 100%);
    }
    .category-badge {
      position: absolute; top: 1rem; right: 1rem; padding: 0.35rem 1rem; border-radius: 100px;
      font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
      color: var(--ivory); z-index: 2; border: 1px solid rgba(255,255,255,0.15);
    }
    .badge-arch { background: rgba(139,26,26,0.8); }
    .badge-sculpt { background: rgba(45,90,61,0.8); }
    .badge-geo { background: rgba(123,63,0,0.8); }
    .card-content { padding: 1.8rem; display: flex; flex-direction: column; flex-grow: 1; border-top: 1px solid rgba(200,134,10,0.1); }
    .card-content h3 { font-size: 1.5rem; margin-bottom: 0.4rem; color: var(--ivory); }
    .style-tag { font-size: 0.78rem; color: rgba(200,134,10,0.7); text-transform: uppercase; letter-spacing: 1px; font-family: var(--font-dm); margin-bottom: 0.6rem; }
    .sanskrit { color: var(--gold-light); font-size: 1.1rem; margin-bottom: 1rem; font-style: italic; opacity: 0.9; }
    .meaning { font-size: 0.97rem; color: var(--ivory-muted); line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1; font-family: var(--font-dm); }
    .view-link { font-size: 0.9rem; font-weight: 600; color: var(--gold); letter-spacing: 0.5px; text-transform: uppercase; display: inline-block; align-self: flex-start; border-bottom: 1px solid transparent; padding-bottom: 2px; transition: var(--transition); }
    .card:hover .view-link { border-bottom-color: var(--gold); color: var(--gold-light); }

    /* ── Stats Banner ── */
    #stats {
      background: linear-gradient(rgba(14,7,0,0.93), rgba(14,7,0,0.93)), url('https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1600&q=80') center/cover fixed;
      border-top: 1px solid rgba(200,134,10,0.3); border-bottom: 1px solid rgba(200,134,10,0.3);
      padding: 6rem 2rem; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 3rem; text-align: center;
    }
    .stat-item { display: flex; flex-direction: column; align-items: center; }
    .stat-num-wrapper { font-size: 4rem; font-weight: 700; color: var(--gold); display: flex; align-items: baseline; justify-content: center; margin-bottom: 0.5rem; text-shadow: 0 0 20px rgba(200,134,10,0.2); font-family: var(--font-cinzel); }
    .stat-label { font-size: 1rem; color: var(--gold-light); text-transform: uppercase; letter-spacing: 3px; font-weight: 500; font-family: var(--font-dm); }

    /* ── About / Temple Map Section ── */
    #about { padding: 9rem 2rem; }
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; max-width: 1200px; margin: 0 auto; }
    .about-grid h2 { font-size: clamp(2rem, 3.5vw, 3rem); margin-bottom: 2rem; text-align: left; }
    .about-grid p { font-size: 1.18rem; line-height: 1.85; color: var(--ivory-muted); margin-bottom: 1.5rem; font-family: var(--font-cormorant); }
    .about-grid p:last-of-type { margin-bottom: 2.5rem; }
    .temple-diagram-wrap { position: relative; width: 100%; display: flex; justify-content: center; }
    .temple-svg { width: 100%; max-width: 440px; filter: drop-shadow(0 0 30px rgba(200,134,10,0.12)); }

    /* ── Footer ── */
    .footer { border-top: 1px solid rgba(200,134,10,0.3); background: var(--bg-card); padding: 5rem 2rem 3rem; text-align: center; }
    .footer-logo { font-size: 2rem; color: var(--gold); margin-bottom: 2.5rem; display: inline-block; font-family: var(--font-cinzel); }
    .footer-nav { display: flex; justify-content: center; gap: 3rem; margin-bottom: 2.5rem; font-weight: 600; font-size: 1.05rem; }
    .footer-nav a { text-transform: uppercase; letter-spacing: 2px; }
    .footer-nav a:hover { color: var(--gold); }
    .footer-tags { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3.5rem; }
    .footer-tags span { font-size: 0.85rem; padding: 0.4rem 1.2rem; border: 1px solid rgba(200,134,10,0.4); border-radius: 100px; color: var(--gold-light); background: rgba(14,7,0,0.5); text-transform: uppercase; letter-spacing: 1px; }
    .footer-credit { font-size: 0.95rem; color: rgba(184,169,138,0.6); letter-spacing: 1px; }

    /* ── How to Use ── */
    .howto-section { max-width: 1400px; margin: 6rem auto; padding: 0 2rem; }
    .steps-row { display: flex; align-items: flex-start; gap: 0; position: relative; margin-top: 3rem; }
    .steps-row::before {
      content: ''; position: absolute; top: 28px; left: calc(16.66% + 20px); right: calc(16.66% + 20px);
      height: 1px; background: linear-gradient(90deg, var(--gold), rgba(200,134,10,0.3), var(--gold));
    }
    .step-item { flex: 1; text-align: center; padding: 0 1.5rem; position: relative; }
    .step-num {
      width: 56px; height: 56px; border-radius: 50%; border: 2px solid var(--gold);
      display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;
      font-size: 16px; font-weight: 700; color: var(--gold); font-family: var(--font-dm);
      background: var(--bg-deep); letter-spacing: 1px;
    }
    .step-title { font-size: 20px; color: var(--ivory); font-family: var(--font-cinzel); margin-bottom: 0.8rem; }
    .step-desc { font-size: 16px; color: var(--ivory-muted); line-height: 1.7; font-family: var(--font-cormorant); }

    /* ── FAQ ── */
    .faq-section { max-width: 860px; margin: 6rem auto; padding: 0 2rem; }
    .faq-list { display: flex; flex-direction: column; gap: 0; }
    .faq-item {
      border-bottom: 1px solid rgba(255,255,255,0.08); overflow: hidden;
      border-left: 0px solid var(--gold); transition: border-left-width 0.3s, background 0.3s;
    }
    .faq-item.open { border-left-width: 4px; background: rgba(200,134,10,0.05); }
    .faq-trigger {
      width: 100%; display: flex; justify-content: space-between; align-items: center;
      padding: 1.3rem 1.5rem; cursor: pointer; background: none; border: none; text-align: left;
    }
    .faq-q { font-size: 16px; color: var(--ivory); font-family: var(--font-dm); font-weight: 500; }
    .faq-arrow {
      width: 20px; height: 20px; color: var(--gold); flex-shrink: 0; margin-left: 1rem;
      transition: transform 0.3s ease;
    }
    .faq-item.open .faq-arrow { transform: rotate(90deg); }
    .faq-body { max-height: 0; overflow: hidden; transition: max-height 0.45s cubic-bezier(0.4,0,0.2,1); }
    .faq-body p { font-size: 17px; color: var(--ivory-muted); line-height: 1.85; font-family: var(--font-cormorant); padding: 0 1.5rem 1.5rem; }

    /* ── Responsive ── */

    @media (max-width: 1024px) { .grid-container { grid-template-columns: repeat(2, 1fr); } .about-grid { gap: 3rem; } }
    @media (max-width: 768px) {
      .nav-links { position: fixed; top: 70px; left: 0; right: 0; background: rgba(10,5,0,0.98); flex-direction: column; padding: 2.5rem; text-align: center; transform: translateY(-150%); transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); border-bottom: 1px solid var(--gold); }
      .nav-links.nav-active { transform: translateY(0); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
      .hamburger { display: flex; }
      .hero-content h1 { font-size: 2.8rem; }
      .about-grid { grid-template-columns: 1fr; }
      .temple-diagram-wrap { order: -1; }
      .grid-container { grid-template-columns: 1fr; }
      .stat-num-wrapper { font-size: 3rem; }
      .logo-tagline { display: none; }
    }
  </style>
</head>
<body>

  <!-- ── Navbar ── -->
  <nav id="navbar" class="dm-sans">
    <div class="nav-container">
      <a href="index.html" class="logo cinzel" style="text-decoration:none;">
        <!-- Temple silhouette icon -->
        <svg class="logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="2" width="4" height="4" rx="1" fill="#C8860A"/>
          <rect x="10" y="5" width="8" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="7" y="7" width="14" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="4" y="9" width="20" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="2" y="11" width="24" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="3" y="13" width="22" height="12" rx="1" fill="none" stroke="#C8860A" stroke-width="1"/>
          <rect x="11" y="17" width="6" height="8" rx="0.5" fill="#C8860A" opacity="0.6"/>
          <rect x="5" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
          <rect x="19" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
        </svg>
        MandirVastu
        <span class="logo-tagline">Decoding the Sacred Architecture of India</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="elements.html">Elements</a></li>
        <li><a href="styles.html">Styles</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
      <div class="nav-right">
        <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
      </div>
    </div>
  </nav>

  <!-- ── Hero Section ── -->
  <section id="hero">
    <div class="hero-bg"></div>

    <!-- Rotating Mandala SVG -->
    <svg class="mandala-bg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <circle cx="400" cy="400" r="390"/><circle cx="400" cy="400" r="340"/><circle cx="400" cy="400" r="290"/><circle cx="400" cy="400" r="240"/><circle cx="400" cy="400" r="190"/><circle cx="400" cy="400" r="140"/><circle cx="400" cy="400" r="90"/><circle cx="400" cy="400" r="40"/>
      <line x1="400" y1="10" x2="400" y2="790"/><line x1="10" y1="400" x2="790" y2="400"/><line x1="124" y1="124" x2="676" y2="676"/><line x1="676" y1="124" x2="124" y2="676"/><line x1="28" y1="256" x2="772" y2="544"/><line x1="28" y1="544" x2="772" y2="256"/><line x1="256" y1="28" x2="544" y2="772"/><line x1="544" y1="28" x2="256" y2="772"/>
      <polygon points="400,30 750,620 50,620"/><polygon points="400,770 750,180 50,180"/>
      <polygon points="400,120 670,555 130,555"/><polygon points="400,680 670,245 130,245"/>
      <g>
        <circle cx="400" cy="10" r="8"/><circle cx="400" cy="790" r="8"/><circle cx="10" cy="400" r="8"/><circle cx="790" cy="400" r="8"/>
        <circle cx="124" cy="124" r="6"/><circle cx="676" cy="124" r="6"/><circle cx="676" cy="676" r="6"/><circle cx="124" cy="676" r="6"/>
      </g>
    </svg>

    <div class="hero-content">
      <p class="dm-sans fade-up-seq delay-1" style="font-size:0.85rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;font-family:var(--font-dm);">MandirVastu · Decoding the Sacred Architecture of India</p>
      <h1 class="cinzel fade-up-seq delay-2">Every Stone Speaks</h1>
      <p class="cormorant fade-up-seq delay-3">Decode 3,000 years of sacred architecture — from the womb-chamber of the Garbhagriha to the sky-piercing Shikhara, every element of an Indian temple is a cosmic statement encoded in stone, proportion, and sacred geometry.</p>
      <div class="hero-ctas fade-up-seq delay-4">
        <a href="elements.html" class="btn btn-gold dm-sans">Explore the Elements →</a>
        <a href="styles.html" class="btn btn-ghost dm-sans">The Three Great Styles</a>
      </div>
    </div>

    <div class="scroll-indicator" onclick="document.getElementById('how-to-use').scrollIntoView({behavior:'smooth'})">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </section>

  <!-- ── How to Use ── -->
  <section class="howto-section scroll-fade" id="how-to-use">
    <h2 class="cinzel" style="text-align:center;">How to Use</h2>
    <div class="heading-underline"></div>
    <div class="steps-row">
      <div class="step-item">
        <div class="step-num dm-sans">01</div>
        <div>
          <div class="step-title cinzel">Browse the Elements</div>
          <p class="step-desc">Explore 48 elements of temple iconography, filtered by type: architecture, sculpture, sacred geometry, or architectural style.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num dm-sans">02</div>
        <div>
          <div class="step-title cinzel">Read the Detail</div>
          <p class="step-desc">Every element has a full scholarly entry: history, symbolism, where it appears, what ancient texts say about it, and specific temple examples.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num dm-sans">03</div>
        <div>
          <div class="step-title cinzel">Visit a Temple</div>
          <p class="step-desc">Use the Case Study entries to understand real temples before or after you visit them. Every stone will mean something different.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Featured Elements Grid ── -->
  <section id="elements">
    <div class="section-padding">
      <div class="scroll-fade" style="text-align:center;">
        <h2 class="cinzel">The Language of Sacred Stone</h2>
        <div class="heading-underline"></div>
        <p class="cormorant" style="font-size:1.2rem;color:var(--ivory-muted);max-width:700px;margin:0 auto 3rem;line-height:1.7;">From the underground foundation matrix to the crowning Kalasha, every tier of an Indian temple encodes a layer of cosmological meaning.</p>
      </div>

      <div class="filter-pills dm-sans scroll-fade">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="Architecture">Architecture</button>
        <button class="filter-btn" data-filter="Sculpture">Sculpture</button>
        <button class="filter-btn" data-filter="Sacred Geometry">Sacred Geometry</button>
      </div>

      <div class="grid-container" id="elements-grid">

        <!-- 1. Garbhagriha -->
        <div class="card" data-category="Architecture" onclick="window.location='detail.html?icon=1'">
          <div class="card-symbol-area" style="background-color:#2a1000;">
            <div class="card-devanagari cinzel">गर्भ</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-arch dm-sans">Architecture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">All Traditions</div>
            <h3 class="cinzel">Garbhagriha</h3>
            <div class="sanskrit cormorant">गर्भगृह · Garbhagṛha</div>
            <p class="meaning">The womb-chamber — innermost sanctum where the deity resides in darkness</p>
            <a href="detail.html?icon=1" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 2. Shikhara -->
        <div class="card" data-category="Architecture" onclick="window.location='detail.html?icon=2'">
          <div class="card-symbol-area" style="background-color:#1a0a00;">
            <div class="card-devanagari cinzel">शिखर</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-arch dm-sans">Architecture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">Nagara Style</div>
            <h3 class="cinzel">Shikhara</h3>
            <div class="sanskrit cormorant">शिखर · Śikhara</div>
            <p class="meaning">Curvilinear mountain-peak tower of North Indian temples; represents Mount Meru</p>
            <a href="detail.html?icon=2" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 3. Gopuram -->
        <div class="card" data-category="Architecture" onclick="window.location='detail.html?icon=4'">
          <div class="card-symbol-area" style="background-color:#3a1500;">
            <div class="card-devanagari cinzel">गोपु</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-arch dm-sans">Architecture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">Dravidian Style</div>
            <h3 class="cinzel">Gopuram</h3>
            <div class="sanskrit cormorant">गोपुरम् · Gopuram</div>
            <p class="meaning">Towering gateway of South Indian temples; covered in painted stucco deities</p>
            <a href="detail.html?icon=4" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 4. Mandapa -->
        <div class="card" data-category="Architecture" onclick="window.location='detail.html?icon=5'">
          <div class="card-symbol-area" style="background-color:#2a1500;">
            <div class="card-devanagari cinzel">मण्डप</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-arch dm-sans">Architecture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">All Traditions</div>
            <h3 class="cinzel">Mandapa</h3>
            <div class="sanskrit cormorant">मण्डप · Maṇḍapa</div>
            <p class="meaning">Pillared congregation hall; represents the material world of the devotee</p>
            <a href="detail.html?icon=5" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 5. Vastu Purusha Mandala -->
        <div class="card" data-category="Sacred Geometry" onclick="window.location='detail.html?icon=27'">
          <div class="card-symbol-area" style="background-color:#1a1000;">
            <div class="card-devanagari cinzel" style="font-size:3.5rem;">वास्तु</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-geo dm-sans">Sacred Geometry</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">All Traditions</div>
            <h3 class="cinzel">Vastu Purusha Mandala</h3>
            <div class="sanskrit cormorant">वास्तु पुरुष मण्डल</div>
            <p class="meaning">The cosmic grid of 64 or 81 squares on which every temple is laid out</p>
            <a href="detail.html?icon=27" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 6. Dvarapala -->
        <div class="card" data-category="Sculpture" onclick="window.location='detail.html?icon=15'">
          <div class="card-symbol-area" style="background-color:#2a0a00;">
            <div class="card-devanagari cinzel">द्वार</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-sculpt dm-sans">Sculpture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">All Traditions</div>
            <h3 class="cinzel">Dvarapala</h3>
            <div class="sanskrit cormorant">द्वारपाल · Dvārapāla</div>
            <p class="meaning">Fierce guardian figures flanking temple entrances and inner sanctum doorways</p>
            <a href="detail.html?icon=15" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 7. Mithuna -->
        <div class="card" data-category="Sculpture" onclick="window.location='detail.html?icon=16'">
          <div class="card-symbol-area" style="background-color:#1a0a0a;">
            <div class="card-devanagari cinzel">मिथुन</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-sculpt dm-sans">Sculpture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">Nagara Style</div>
            <h3 class="cinzel">Mithuna</h3>
            <div class="sanskrit cormorant">मिथुन · Mithuna</div>
            <p class="meaning">Auspicious erotic couples carved at temple thresholds — Khajuraho's defining motif</p>
            <a href="detail.html?icon=16" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 8. Vimana -->
        <div class="card" data-category="Architecture" onclick="window.location='detail.html?icon=3'">
          <div class="card-symbol-area" style="background-color:#2a1000;">
            <div class="card-devanagari cinzel">विमान</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-arch dm-sans">Architecture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">Dravidian Style</div>
            <h3 class="cinzel">Vimana</h3>
            <div class="sanskrit cormorant">विमान · Vimāna</div>
            <p class="meaning">Stepped pyramidal tower over the sanctum in South Indian temples</p>
            <a href="detail.html?icon=3" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 9. Ashtadikpala -->
        <div class="card" data-category="Sculpture" onclick="window.location='detail.html?icon=23'">
          <div class="card-symbol-area" style="background-color:#0a1a2a;">
            <div class="card-devanagari cinzel" style="font-size:3.5rem;">अष्ट</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-sculpt dm-sans">Sculpture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">All Traditions</div>
            <h3 class="cinzel">Ashtadikpala</h3>
            <div class="sanskrit cormorant">अष्टदिक्पाल · Aṣṭadikpāla</div>
            <p class="meaning">The eight directional guardians placed on outer walls to protect the cosmic order</p>
            <a href="detail.html?icon=23" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 10. Kalasha -->
        <div class="card" data-category="Architecture" onclick="window.location='detail.html?icon=8'">
          <div class="card-symbol-area" style="background-color:#2a2000;">
            <div class="card-devanagari cinzel">कलश</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-arch dm-sans">Architecture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">All Traditions</div>
            <h3 class="cinzel">Kalasha</h3>
            <div class="sanskrit cormorant">कलश · Kalaśa</div>
            <p class="meaning">Sacred pot finial at the temple's crown — where heaven and earth meet</p>
            <a href="detail.html?icon=8" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 11. Natya Mandapa -->
        <div class="card" data-category="Architecture" onclick="window.location='detail.html?icon=13'">
          <div class="card-symbol-area" style="background-color:#1a1500;">
            <div class="card-devanagari cinzel" style="font-size:3.5rem;">नाट्य</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-arch dm-sans">Architecture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">Dravidian Style</div>
            <h3 class="cinzel">Natya Mandapa</h3>
            <div class="sanskrit cormorant">नाट्य मण्डप · Nāṭya Maṇḍapa</div>
            <p class="meaning">Dance hall for ritual performance — present at Konark, Chidambaram</p>
            <a href="detail.html?icon=13" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

        <!-- 12. Pradakshina Patha -->
        <div class="card" data-category="Architecture" onclick="window.location='detail.html?icon=7'">
          <div class="card-symbol-area" style="background-color:#0a1a0a;">
            <div class="card-devanagari cinzel" style="font-size:3rem;">प्रद</div>
            <div class="card-symbol-overlay"></div>
            <span class="category-badge badge-arch dm-sans">Architecture</span>
          </div>
          <div class="card-content">
            <div class="style-tag dm-sans">All Traditions</div>
            <h3 class="cinzel">Pradakshina Patha</h3>
            <div class="sanskrit cormorant">प्रदक्षिण पथ · Pradakṣiṇa Patha</div>
            <p class="meaning">Circumambulatory path around the sanctum — the devotee orbits the divine</p>
            <a href="detail.html?icon=7" class="view-link dm-sans" style="text-decoration:none;">Explore →</a>
          </div>
        </div>

      </div><!-- /grid -->
    </div>
  </section>

  <!-- ── Stats Banner ── -->
  <section id="stats">
    <div class="stat-item scroll-fade">
      <div class="stat-num-wrapper cinzel"><span class="counter" data-target="48">0</span></div>
      <div class="stat-label dm-sans">Sacred Elements</div>
    </div>
    <div class="stat-item scroll-fade" style="transition-delay:0.15s;">
      <div class="stat-num-wrapper cinzel"><span class="counter" data-target="3">0</span></div>
      <div class="stat-label dm-sans">Great Styles</div>
    </div>
    <div class="stat-item scroll-fade" style="transition-delay:0.3s;">
      <div class="stat-num-wrapper cinzel"><span class="counter" data-target="3000">0</span></div>
      <div class="stat-label dm-sans">Years of Architecture</div>
    </div>
  </section>

  <!-- ── About / Temple as Cosmic Map ── -->
  <section id="about">
    <div class="about-grid scroll-fade">

      <!-- Left: Temple cross-section SVG -->
      <div class="temple-diagram-wrap">
        <svg class="temple-svg" viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Base platform -->
          <rect x="20" y="390" width="260" height="15" rx="2" stroke="#C8860A" stroke-width="1" fill="rgba(200,134,10,0.05)"/>
          <!-- Adhishthana (plinth tiers) -->
          <rect x="30" y="370" width="240" height="20" rx="1" stroke="#C8860A" stroke-width="0.8" fill="rgba(200,134,10,0.06)"/>
          <rect x="40" y="355" width="220" height="16" rx="1" stroke="#C8860A" stroke-width="0.8" fill="rgba(200,134,10,0.07)"/>
          <!-- Mandapa columns -->
          <rect x="40" y="270" width="8" height="85" rx="1" stroke="#C8860A" stroke-width="0.8" fill="rgba(200,134,10,0.08)"/>
          <rect x="252" y="270" width="8" height="85" rx="1" stroke="#C8860A" stroke-width="0.8" fill="rgba(200,134,10,0.08)"/>
          <rect x="70" y="290" width="6" height="65" rx="1" stroke="#C8860A" stroke-width="0.6" fill="rgba(200,134,10,0.06)"/>
          <rect x="224" y="290" width="6" height="65" rx="1" stroke="#C8860A" stroke-width="0.6" fill="rgba(200,134,10,0.06)"/>
          <!-- Mandapa roof -->
          <rect x="38" y="255" width="224" height="18" rx="2" stroke="#C8860A" stroke-width="1" fill="rgba(200,134,10,0.08)"/>
          <!-- Label: Mandapa -->
          <text x="150" y="300" text-anchor="middle" fill="#C8860A99" font-size="10" font-family="serif" font-style="italic">Maṇḍapa</text>
          <!-- Antarala walls -->
          <rect x="90" y="200" width="120" height="55" rx="1" stroke="#C8860A" stroke-width="0.8" fill="rgba(200,134,10,0.08)"/>
          <text x="150" y="232" text-anchor="middle" fill="#C8860A99" font-size="9" font-family="serif" font-style="italic">Antarāla</text>
          <!-- Garbhagriha walls -->
          <rect x="100" y="130" width="100" height="72" stroke="#C8860A" stroke-width="1.2" fill="rgba(200,134,10,0.12)"/>
          <text x="150" y="173" text-anchor="middle" fill="#C8860Acc" font-size="10" font-family="serif" font-style="italic">Garbhagṛha</text>
          <!-- deity dot -->
          <circle cx="150" cy="158" r="5" fill="#C8860A" opacity="0.8"/>
          <!-- Shikhara tiers -->
          <polygon points="150,30 200,130 100,130" stroke="#C8860A" stroke-width="1" fill="rgba(200,134,10,0.1)"/>
          <polygon points="150,55 192,120 108,120" stroke="#C8860A" stroke-width="0.7" fill="rgba(200,134,10,0.06)"/>
          <polygon points="150,78 185,112 115,112" stroke="#C8860A" stroke-width="0.7" fill="rgba(200,134,10,0.06)"/>
          <!-- Kalasha at top -->
          <circle cx="150" cy="25" r="6" stroke="#C8860A" stroke-width="1.2" fill="rgba(200,134,10,0.3)"/>
          <line x1="150" y1="19" x2="150" y2="10" stroke="#C8860A" stroke-width="1.2"/>
          <circle cx="150" cy="9" r="3" fill="#C8860A" opacity="0.9"/>
          <!-- Labels: Shikhara, Kalasha -->
          <text x="210" y="80" fill="#C8860A88" font-size="9" font-family="serif" font-style="italic">Śikhara</text>
          <line x1="205" y1="78" x2="175" y2="65" stroke="#C8860A55" stroke-width="0.6"/>
          <text x="210" y="26" fill="#C8860A88" font-size="9" font-family="serif" font-style="italic">Kalaśa</text>
          <line x1="208" y1="24" x2="157" y2="17" stroke="#C8860A55" stroke-width="0.6"/>
          <!-- Pradakshina Patha indicator -->
          <path d="M 80 380 Q 30 320 30 250 Q 30 160 80 120" stroke="#C8860A44" stroke-width="0.8" stroke-dasharray="4 3" fill="none"/>
          <path d="M 220 380 Q 270 320 270 250 Q 270 160 220 120" stroke="#C8860A44" stroke-width="0.8" stroke-dasharray="4 3" fill="none"/>
          <text x="14" y="255" fill="#C8860A66" font-size="8" font-family="serif" font-style="italic" transform="rotate(-90,14,255)">Pradakṣiṇā</text>
        </svg>
      </div>

      <!-- Right: Text -->
      <div>
        <h2 class="cinzel text-ivory">The Temple as a Cosmic Map</h2>
        <p class="cormorant">Every Indian temple is a three-dimensional model of the cosmos. The garbhagriha at its heart is the primordial cave — dark, windowless, charged with divine presence. Above it rises the shikhara or vimana, representing Mount Meru, the cosmic axis around which the universe rotates. The devotee's journey from the outer gopuram through successive halls into the dark sanctum re-enacts the soul's movement from the material world toward the divine.</p>
        <p class="cormorant">This spatial theology is not accidental. It is encoded in ancient texts called the Shilpa Shastras and Vastu Shastras, which prescribed every proportion, every placement of image, every orientation of doorway. The temple floor plan is always based on the Vastu Purusha Mandala — a sacred geometric grid that maps the cosmic being onto the earth. The garbhagriha sits at the Brahmasthana, the navel of this grid.</p>
        <p class="cormorant">Every surface of the temple is also an iconographic text. Where a sculpture is placed is as important as what it depicts. Ganga and Yamuna guard the Nagara garbhagriha entrance. Fierce Dvarapalas stand at Dravidian gopuram thresholds. Mithuna couples at doorways signal the auspicious threshold between the outer and inner worlds. The Ashtadikpalas face the eight directions on outer walls, holding the cosmos in place.</p>
        <a href="elements.html" class="btn btn-gold dm-sans">Explore All Elements →</a>
      </div>

    </div>
  </section>

  <!-- ── FAQ Section ── -->
  <section class="faq-section scroll-fade" id="faq">
    <h2 class="cinzel" style="text-align:center;">Frequently Asked Questions</h2>
    <div class="heading-underline"></div>
    <div class="faq-list" id="faq-list">

      <div class="faq-item">
        <button class="faq-trigger dm-sans">
          <span class="faq-q">What does "temple iconography" actually mean?</span>
          <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="faq-body"><p class="cormorant">Temple iconography is the study of the symbolic visual language encoded in the design, structure, and sculpture of sacred buildings. In the Indian context, it means understanding why every part of a temple looks the way it does — why the tower curves that way, why that sculpture appears at that threshold, why the inner sanctum is kept in darkness. The temple is not merely a container for worship; it is itself the primary sacred image, a three-dimensional model of the cosmos built from stone according to precise canonical rules laid down in texts called the Shilpa Shastras and Vastu Shastras.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger dm-sans">
          <span class="faq-q">What is the Vastu Purusha Mandala?</span>
          <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="faq-body"><p class="cormorant">The Vastu Purusha Mandala is the sacred geometric grid on which every Indian temple is designed. It is a square divided into either 64 (8×8) or 81 (9×9) smaller squares, each assigned to a specific deity or cosmic force. The central square — the Brahmasthana — is where the garbhagriha is always placed, because it represents the navel of the cosmic being (Purusha) whose body the temple literally embodies. The outer squares determine where specific guardian deities, planetary figures, and directional gods are placed on the temple's exterior walls. Every proportion and every placement of image is derived from this grid.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger dm-sans">
          <span class="faq-q">What is the difference between a Shikhara and a Vimana?</span>
          <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="faq-body"><p class="cormorant">Both terms refer to the tower that rises above the innermost sanctum of a temple, but they belong to different architectural traditions. The Shikhara is the North Indian term — it describes the curvilinear, mountain-peak shaped tower of Nagara temples, which curves inward as it rises to a point. The Vimana is the South Indian term — it describes the stepped pyramidal tower of Dravidian temples, which rises in progressively smaller storeys to a flat top crowned with a barrel-vaulted capstone. Confusingly, in South India the word "shikhara" refers only to the very top finial element of the vimana, not the whole tower. Both represent Mount Meru, the cosmic axis at the centre of the Hindu universe.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger dm-sans">
          <span class="faq-q">Why are there erotic sculptures on Hindu temples?</span>
          <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="faq-body"><p class="cormorant">The mithuna figures — auspicious erotic couples — found at temple thresholds, most famously at Khajuraho, are not decorative or titillating in intent. They serve as threshold guardians encoding a specific theological idea: that the union of opposites (masculine and feminine, purusha and prakriti) is the generative principle of the cosmos. Placed at doorways, they mark the transition from the outer world of duality into the inner sanctum of undifferentiated divine unity. Some scholars also connect them to tantric traditions that saw the erotic as a vehicle of spiritual liberation. The sculptures disappear entirely as one moves deeper into the temple — they belong to the outermost, most worldly zone.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger dm-sans">
          <span class="faq-q">How were the Shilpa Shastras used?</span>
          <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="faq-body"><p class="cormorant">The Shilpa Shastras are a body of ancient Sanskrit texts prescribing the rules for temple construction — proportions, orientation, iconographic placement, materials, and ritual procedures for consecration. Texts like the Manasara, Mayamata, and Vishvakarma Prakasha were consulted by the Sthapati (master architect-priest) who oversaw temple construction. They prescribed everything from the ideal site (near water, elevated ground) to the precise ratio of every architectural element. Interestingly, the craftsmen who actually carved the stone often could not read Sanskrit, creating a fascinating gap between the theoreticians and the practitioners that scholars like Adam Hardy have studied in detail.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger dm-sans">
          <span class="faq-q">Why does the Brihadeeswarar Temple cast no shadow at noon?</span>
          <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="faq-body"><p class="cormorant">The 216-foot vimana tower of the Brihadeeswarar Temple at Thanjavur, built by Raja Raja Chola I in 1010 CE, is so precisely proportioned and oriented that at solar noon its shadow falls entirely within its own base — appearing to cast no shadow on the ground around it. This was not accidental: the temple is oriented on a precise north-south axis, and its proportional system was calculated to achieve this astronomical effect as a demonstration of divine perfection. The entire building, including its 80-tonne monolithic capstone lifted into place via a kilometres-long earthen ramp, represents the absolute pinnacle of Chola engineering and sacred geometry.</p></div>
      </div>

    </div>
  </section>

  <!-- ── Footer ── -->

  <footer class="footer">
    <div class="footer-logo cinzel">MandirVastu</div>
    <div class="footer-nav dm-sans">
      <a href="index.html">Home</a>
      <a href="elements.html">Elements</a>
      <a href="styles.html">Styles</a>
      <a href="about.html">About</a>
    </div>
    <div class="footer-tags dm-sans">
      <span>Architecture</span><span>Sculpture</span><span>Sacred Geometry</span><span>Case Study</span>
    </div>
    <div class="footer-credit dm-sans">
      MandirVastu · Encyclopedia of Indian Temple Iconography
    </div>
  </footer>

  <!-- ── JavaScript ── -->
  <script>
    // Nav animations on load
    document.querySelectorAll('.fade-up-seq').forEach(el => {
      setTimeout(() => el.classList.add('animate'), 100);
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    });

    // Mobile hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('nav-active'));

    // Scroll-fade IntersectionObserver
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); scrollObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.scroll-fade').forEach(el => scrollObserver.observe(el));

    // Filter pills
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('#elements-grid .card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        cards.forEach(card => {
          const match = filter === 'all' || card.dataset.category === filter;
          if (match) {
            card.classList.remove('hidden');
            card.classList.add('fade-in');
            setTimeout(() => card.classList.remove('fade-in'), 400);
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });

    // Counter animation
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = +el.dataset.target;
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const update = () => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current).toLocaleString();
          if (current < target) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

    // FAQ Accordion
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.faq-trigger');
      if (!trigger) return;
      
      const item = trigger.closest('.faq-item');
      const body = item.querySelector('.faq-body');
      const isOpen = item.classList.contains('open');

      // Close other accordions
      const container = item.parentElement;
      container.querySelectorAll('.faq-item').forEach(it => {
        if (it !== item) {
          it.classList.remove('open');
          const otherBody = it.querySelector('.faq-body');
          if (otherBody) otherBody.style.maxHeight = '0px';
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = '0px';
      } else {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  </script>


</body>
</html>

```

---

## FILE: elements.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Temple Elements — MandirVastu Encyclopedia</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* Elements Page specific styling */
    .elements-hero {
      height: 40vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
      background: radial-gradient(circle at center, rgba(42,21,0,0.85) 0%, var(--bg-deep) 100%);
      position: relative; margin-top: 70px;
      opacity: 0; animation: fadeInHero 0.8s forwards;
    }
    @keyframes fadeInHero { to { opacity: 1; } }
    .elements-hero h1 { font-family: var(--font-cinzel); font-size: 3.5rem; color: var(--gold); margin-bottom: 0.8rem; }
    .elements-hero p { font-family: var(--font-cormorant); font-size: 1.2rem; color: var(--ivory-muted); font-style: italic; max-width: 600px; margin: 0 auto; }

    .filter-bar {
      display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin: 3rem auto 0; max-width: 1200px; padding: 0 2rem;
    }
    .filter-pill {
      background: none; border: 1px solid rgba(200, 134, 10, 0.3); color: var(--ivory-muted);
      padding: 0.6rem 1.4rem; border-radius: 100px; cursor: pointer; transition: 0.3s;
      font-family: var(--font-dm); font-size: 0.85rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;
    }
    .filter-pill:hover { border-color: var(--gold); color: var(--gold); background: rgba(200,134,10,0.05); }
    .filter-pill.active { border-color: var(--gold); color: var(--bg-deep); background: var(--gold); font-weight: 700; box-shadow: 0 4px 15px rgba(200, 134, 10, 0.3); }

    /* Search Bar */
    .search-container {
      max-width: 800px; margin: 2rem auto 0; padding: 0 5%;
      opacity: 0; animation: fadeIn 0.8s forwards 0.3s;
    }
    .search-wrapper {
      position: relative; display: flex; align-items: center;
      background: rgba(255,255,255,0.03); border: 1px solid rgba(200, 134, 10, 0.2);
      border-radius: 100px; padding: 5px 20px; transition: 0.3s;
    }
    .search-wrapper:focus-within { border-color: var(--gold); box-shadow: 0 0 20px rgba(200, 134, 10, 0.2); background: rgba(255,255,255,0.05); }
    .search-icon { color: var(--gold); margin-right: 15px; font-size: 1.2rem; }
    #element-search {
      width: 100%; background: transparent; border: none; outline: none;
      color: var(--ivory); padding: 12px 0; font-family: var(--font-dm); font-size: 1rem;
    }
    #element-search::placeholder { color: var(--ivory-muted); opacity: 0.5; }

    @keyframes fadeIn { to { opacity: 1; } }
    @keyframes slideDown { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes fadeInUpStagger { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

    /* Grid */
    .elements-grid {
      padding: 4rem 5%; max-width: 1600px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;
    }

    /* Fixed Height Card (360px) */
    .element-card {
      height: 360px; background: var(--bg-card); border: 1px solid rgba(200, 134, 10, 0.15);
      border-radius: 8px; overflow: hidden; display: flex; flex-direction: column;
      transition: 0.4s; cursor: pointer; text-decoration: none;
    }
    .element-card:hover { transform: translateY(-8px); border-color: var(--gold); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }

    .element-img { height: 180px; position: relative; overflow: hidden; background: linear-gradient(135deg, #1a1000, #0e0700); }
    .element-img img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; z-index: 2; position: relative; }
    .element-card:hover .element-img img { transform: scale(1.1); }
    .element-img::before { content: '◈'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: var(--font-cinzel); font-size: 2rem; color: var(--gold); opacity: 0.2; z-index: 1; }

    .element-body { padding: 1.2rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
    .element-badge { font-size: 0.7rem; color: var(--gold); letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
    .element-title { font-family: var(--font-cinzel); font-size: 1.3rem; color: var(--ivory); }
    .element-desc { font-size: 0.85rem; color: var(--ivory-muted); line-height: 1.4; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }
    .element-footer { margin-top: auto; font-size: 0.7rem; color: var(--gold-light); font-weight: 700; opacity: 0.7; }

    /* Empty State */
    .empty-state { grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--ivory-muted); display: none; }

    /* ── Navbar ── */
    #navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background-color: rgba(14,7,0,0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--gold);
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      transition: background-color 0.3s ease;
    }
    .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 2rem; }
    .logo { display: flex; align-items: center; gap: 0.6rem; font-size: 1.55rem; font-weight: 700; color: var(--gold); text-decoration: none; }
    .logo-icon { width: 28px; height: 28px; flex-shrink: 0; }
    .logo-tagline { font-size: 0.7rem; color: var(--gold-light); letter-spacing: 1.5px; text-transform: uppercase; font-family: var(--font-dm); font-weight: 400; margin-left: 0.2rem; opacity: 0.8; }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; padding: 0; margin: 0; }
    .nav-links a { font-size: 0.95rem; font-weight: 500; letter-spacing: 1px; color: var(--ivory); position: relative; text-transform: uppercase; text-decoration: none; }
    .nav-links a::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 1px; background: var(--gold); transition: width 0.3s ease; }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
    .nav-links a:hover, .nav-links a.active { color: var(--gold-light); }
    .nav-right { display: flex; align-items: center; gap: 2rem; }
    .hamburger { display: none; flex-direction: column; gap: 6px; cursor: pointer; }
    .hamburger span { width: 28px; height: 2px; background: var(--ivory); transition: 0.3s; }

    /* End Section */
    .page-end { text-align: center; padding: 6rem 2rem; background: var(--bg-deep); border-top: 1px solid rgba(200,134,10,0.1); }
    .end-divider { width: 80px; height: 2px; background: var(--gold); margin: 0 auto 2.5rem; opacity: 0.5; }
    .end-text { font-family: var(--font-cinzel); font-size: 1.4rem; color: var(--gold-light); margin-bottom: 2rem; letter-spacing: 1px; }
  </style>
</head>
<body>

  <!-- ── Navbar ── -->
  <nav id="navbar" class="dm-sans">
    <div class="nav-container">
      <a href="index.html" class="logo cinzel">
        <svg class="logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="2" width="4" height="4" rx="1" fill="#C8860A"/>
          <rect x="10" y="5" width="8" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="7" y="7" width="14" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="4" y="9" width="20" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="2" y="11" width="24" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="3" y="13" width="22" height="12" rx="1" fill="none" stroke="#C8860A" stroke-width="1"/>
          <rect x="11" y="17" width="6" height="8" rx="0.5" fill="#C8860A" opacity="0.6"/>
          <rect x="5" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
          <rect x="19" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
        </svg>
        MandirVastu
        <span class="logo-tagline">Decoding the Sacred Architecture of India</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="elements.html" class="active">Elements</a></li>
        <li><a href="styles.html">Styles</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
      <div class="nav-right">
        <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
      </div>
    </div>
  </nav>

  <header class="elements-hero">
    <div class="fade-up-seq" style="animation: fadeInUp 0.8s forwards;">
      <h1 class="cinzel">Temple Elements</h1>
      <p class="cormorant">Each component of a temple encodes meaning — from structure to symbolism.</p>
    </div>
  </header>

  <div class="search-container">
    <div class="search-wrapper">
      <span class="search-icon">⌕</span>
      <input type="text" id="element-search" placeholder="Search elements (e.g. Shikhara, Mandapa...)" autocomplete="off">
    </div>
  </div>

  <div class="filter-bar" style="animation: slideDown 0.6s forwards 0.2s; opacity: 0;">
    <button class="filter-pill active" data-cat="all">All Elements</button>
    <button class="filter-pill" data-cat="Architecture">Architecture</button>
    <button class="filter-pill" data-cat="Sculpture">Sculpture</button>
    <button class="filter-pill" data-cat="Sacred Geometry">Sacred Geometry</button>
    <button class="filter-pill" data-cat="Case Study">Case Studies</button>
  </div>

  <main class="elements-grid" id="grid">
    <!-- 48 elements will be injected here -->
    <div id="empty-state" class="empty-state">No elements found for this criteria.</div>
  </main>

  <section class="page-end">
    <div class="end-divider"></div>
    <p class="end-text cinzel">Understanding temples begins with observing their parts.</p>
    <a href="styles.html" class="btn btn-ghost">Explore Styles →</a>
  </section>

  <footer class="footer">
    <div class="footer-logo cinzel">MandirVastu</div>
    <div class="footer-nav dm-sans">
      <a href="index.html">Home</a>
      <a href="elements.html">Elements</a>
      <a href="styles.html">Styles</a>
      <a href="about.html">About</a>
    </div>
    <div class="footer-tags dm-sans">
      <span>Architecture</span><span>Sculpture</span><span>Sacred Geometry</span><span>Case Study</span>
    </div>
    <div class="footer-credit dm-sans">MandirVastu · Scholarly Architectural Encyclopedia</div>
  </footer>

  <script src="data.js"></script>
  <script>
    const grid = document.getElementById('grid');
    const searchInput = document.getElementById('element-search');
    const emptyState = document.getElementById('empty-state');
    const pageTitle = document.getElementById('page-title');
    const pills = document.querySelectorAll('.filter-pill');

    console.log("Exploring elements with data:", window.iconData);

    // Get URL Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const styleFilter = urlParams.get('style');

    let currentCategory = 'all';
    let searchQuery = '';

    function renderGrid() {
      if (!window.iconData) {
        console.error("Critical: iconData not loaded");
        grid.innerHTML = '<div class="empty-state" style="display:block">Service unavailable: Data not loaded.</div>';
        return;
      }
      
      const filteredElements = Object.values(window.iconData).filter(item => {
        const catMatch = currentCategory === 'all' || item.category === currentCategory;
        const styleMatch = !styleFilter || item.style === styleFilter || item.style === 'All';
        
        const searchTarget = `${item.name} ${item.description} ${item.sanskrit || ''}`.toLowerCase();
        const searchMatch = !searchQuery || searchTarget.includes(searchQuery.toLowerCase());

        if (styleFilter) {
          return (item.style === styleFilter || item.style === 'All') && searchMatch;
        }
        return catMatch && searchMatch;
      });

      if (styleFilter) {
        pageTitle.textContent = `${styleFilter} Elements`;
      } else if (searchQuery) {
        pageTitle.textContent = `Search: ${searchQuery}`;
      } else {
        pageTitle.textContent = `Temple Elements`;
      }

      grid.innerHTML = '';
      if (filteredElements.length === 0) {
        emptyState.style.display = 'block';
        return;
      }
      emptyState.style.display = 'none';

      filteredElements.forEach((item, index) => {
        const card = document.createElement('a');
        card.href = `detail.html?icon=${item.id}`;
        card.className = 'element-card';
        card.style.animation = `fadeInUpStagger 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`;
        card.style.animationDelay = `${index * 0.04}s`;
        card.style.opacity = '0';

        card.innerHTML = `
          <div class="element-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';">
          </div>
          <div class="element-body">
            <span class="element-badge">${item.category}</span>
            <h3 class="element-title">${item.name}</h3>
            <p class="element-desc">${item.description}</p>
            <div class="element-footer">${item.style} Tradition</div>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderGrid();
    });

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        // Reset style filter if user clicks a category pill
        if (window.location.search) {
          window.history.pushState({}, '', 'elements.html');
          location.reload(); // Simple reload to clear logic
        }
        
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.getAttribute('data-cat');
        renderGrid();
      });
    });

    renderGrid();
  </script>
</body>
</html>

```

---

## FILE: styles.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Architectural Styles — MandirVastu</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* ── Navbar Sync ── */
    #navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background-color: rgba(14,7,0,0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--gold);
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      transition: background-color 0.3s ease;
    }
    .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 2rem; }
    .logo { display: flex; align-items: center; gap: 0.6rem; font-size: 1.55rem; font-weight: 700; color: var(--gold); text-decoration: none; }
    .logo-icon { width: 28px; height: 28px; flex-shrink: 0; }
    .logo-tagline { font-size: 0.7rem; color: var(--gold-light); letter-spacing: 1.5px; text-transform: uppercase; font-family: var(--font-dm); font-weight: 400; margin-left: 0.2rem; opacity: 0.8; }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; padding: 0; margin: 0; }
    .nav-links a { font-size: 0.95rem; font-weight: 500; letter-spacing: 1px; color: var(--ivory); position: relative; text-transform: uppercase; text-decoration: none; }
    .nav-links a::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 1px; background: var(--gold); transition: width 0.3s ease; }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
    .nav-links a:hover, .nav-links a.active { color: var(--gold-light); }
    .hamburger { display: none; flex-direction: column; gap: 6px; cursor: pointer; }
    .hamburger span { width: 28px; height: 2px; background: var(--ivory); transition: 0.3s; }

    /* ── Hero ── */
    .styles-hero {
      height: 40vh; display: flex; align-items: center; justify-content: center; text-align: center;
      background: radial-gradient(circle at center, rgba(42,21,0,0.85) 0%, var(--bg-deep) 100%);
      position: relative; margin-top: 70px;
    }
    .styles-hero-content { opacity: 0; transform: translateY(20px); animation: fadeUpHero 0.8s forwards; }
    @keyframes fadeUpHero { to { opacity: 1; transform: translateY(0); } }
    .styles-hero h1 { font-family: var(--font-cinzel); font-size: 3.5rem; color: var(--ivory); margin-bottom: 1rem; letter-spacing: 2px; }
    .styles-hero p { font-size: 1.25rem; color: var(--gold-light); font-family: var(--font-cormorant); font-style: italic; opacity: 0.9; }

    /* ── Styles Grid ── */
    .styles-section { padding: 6rem 2rem; max-width: 1400px; margin: 0 auto; }
    .styles-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
    }
    
    .style-card {
      background: var(--bg-card); border-radius: 8px; border: 1px solid rgba(200,134,10,0.15);
      overflow: hidden; transition: 0.3s; cursor: pointer; display: flex; flex-direction: column;
      opacity: 0; transform: translateY(30px);
    }
    .style-card.visible { animation: fadeUpCard 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    @keyframes fadeUpCard { to { opacity: 1; transform: translateY(0); } }
    .style-card:hover { transform: translateY(-5px); border-color: var(--gold); box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
    
    .card-img { height: 180px; width: 100%; overflow: hidden; position: relative; }
    .card-img img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
    .style-card:hover .card-img img { transform: scale(1.05); }

    .card-body { padding: 1.8rem; display: flex; flex-direction: column; flex-grow: 1; }
    .card-body h2 { font-family: var(--font-cinzel); font-size: 1.6rem; color: var(--ivory); margin-bottom: 0.8rem; }
    .card-body .desc { font-size: 1rem; color: var(--ivory-muted); line-height: 1.6; margin-bottom: 1.5rem; font-family: var(--font-cormorant); }

    /* Accordion */
    .style-accordion { border-top: 1px solid rgba(200,134,10,0.15); margin-top: auto; }
    .accordion-header {
      padding: 1rem 0; display: flex; justify-content: space-between; align-items: center;
      color: var(--gold); text-transform: uppercase; font-size: 0.8rem; font-family: var(--font-dm); font-weight: 700; letter-spacing: 1px;
    }
    .accordion-icon { width: 14px; height: 14px; transition: 0.3s; }
    .style-card.expanded .accordion-icon { transform: rotate(180deg); }
    .accordion-content {
      max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .style-card.expanded .accordion-content { max-height: 250px; }
    
    .fact-list { list-style: none; padding: 0 0 1.5rem 0; margin: 0; }
    .fact-list li {
      font-size: 0.9rem; color: var(--ivory); line-height: 1.5; margin-bottom: 0.8rem;
      position: relative; padding-left: 1.2rem; font-family: var(--font-dm);
    }
    .fact-list li::before { content: '◈'; position: absolute; left: 0; color: var(--gold); font-size: 0.7rem; top: 1px; }

    .explore-btn {
      display: inline-block; padding: 0.8rem 1.8rem; background: transparent; border: 1px solid var(--gold);
      color: var(--gold); font-family: var(--font-dm); text-transform: uppercase; font-weight: 700;
      font-size: 0.85rem; border-radius: 4px; transition: 0.3s; text-decoration: none; text-align: center;
      margin-top: 0.5rem;
    }
    .explore-btn:hover { background: var(--gold); color: var(--bg-deep); }

    /* ── End Section ── */
    .styles-end { text-align: center; padding: 8rem 2rem; border-top: 1px solid rgba(200,134,10,0.1); }
    .styles-end p { font-family: var(--font-cinzel); font-size: 1.5rem; color: var(--gold-light); margin-bottom: 2.5rem; letter-spacing: 1px; }

    /* ── Static Footer ── */
    .footer { border-top: 1px solid rgba(200,134,10,0.3); background: var(--bg-card); padding: 5rem 2rem 3rem; text-align: center; }
    .footer-logo { font-size: 2rem; color: var(--gold); margin-bottom: 2.5rem; display: inline-block; font-family: var(--font-cinzel); }
    .footer-nav { display: flex; justify-content: center; gap: 3rem; margin-bottom: 2.5rem; font-weight: 600; font-size: 1.05rem; }
    .footer-nav a { text-transform: uppercase; letter-spacing: 2px; text-decoration: none; color: var(--ivory); }
    .footer-nav a:hover { color: var(--gold); }
    .footer-credit { font-size: 0.95rem; color: rgba(184,169,138,0.6); letter-spacing: 1px; }

    /* ── Responsive ── */
    @media (max-width: 1024px) {
      .styles-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .styles-grid { grid-template-columns: 1fr; }
      .styles-hero h1 { font-size: 2.5rem; }
      .nav-links { position: fixed; top: 70px; left: 0; right: 0; background: rgba(10,5,0,0.98); flex-direction: column; padding: 2.5rem; text-align: center; transform: translateY(-150%); transition: 0.4s; border-bottom: 1px solid var(--gold); }
      .nav-links.nav-active { transform: translateY(0); }
      .hamburger { display: flex; }
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav id="navbar" class="dm-sans">
    <div class="nav-container">
      <a href="index.html" class="logo cinzel">
        <svg class="logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="2" width="4" height="4" rx="1" fill="#C8860A"/>
          <rect x="10" y="5" width="8" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="7" y="7" width="14" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="4" y="9" width="20" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="2" y="11" width="24" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="3" y="13" width="22" height="12" rx="1" fill="none" stroke="#C8860A" stroke-width="1"/>
          <rect x="11" y="17" width="6" height="8" rx="0.5" fill="#C8860A" opacity="0.6"/>
          <rect x="5" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
          <rect x="19" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
        </svg>
        MandirVastu
        <span class="logo-tagline">Decoding the Sacred Architecture of India</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="elements.html">Elements</a></li>
        <li><a href="styles.html" class="active">Styles</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
      <div class="nav-right">
        <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="styles-hero">
    <div class="styles-hero-content">
      <h1 class="cinzel">The Three Great Styles</h1>
      <p class="cormorant">The architectural traditions that define Indian temples</p>
    </div>
  </header>

  <!-- Styles Grid -->
  <main class="styles-section">
    <div class="styles-grid" id="styles-grid">
      <!-- Injected via JS -->
    </div>
  </main>

  <!-- End Section -->
  <section class="styles-end">
    <p class="cinzel">Every temple you see is shaped by these traditions.</p>
    <a href="elements.html" class="btn btn-gold dm-sans" style="text-decoration:none;">Explore the Elements →</a>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-logo cinzel">MandirVastu</div>
    <div class="footer-nav dm-sans">
      <a href="index.html">Home</a>
      <a href="elements.html">Elements</a>
      <a href="styles.html">Styles</a>
      <a href="about.html">About</a>
    </div>
    <div class="footer-tags dm-sans">
      <span>Architecture</span><span>Sculpture</span><span>Sacred Geometry</span><span>Case Study</span>
    </div>
    <div class="footer-credit dm-sans">MandirVastu · Encyclopedia of Indian Temple Iconography</div>
  </footer>

  <script src="data.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const grid = document.getElementById('styles-grid');
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.querySelector('.nav-links');

      hamburger.onclick = () => navLinks.classList.toggle('nav-active');

      const styles = window.styleData;
      if (!styles) return;

      const styleKeys = Object.keys(styles);
      styleKeys.forEach((key, index) => {
        const item = styles[key];
        const card = document.createElement('div');
        card.className = 'style-card visible';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
          <div class="card-img">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="card-body">
            <h2 class="cinzel">${item.name}</h2>
            <p class="desc">${item.description}</p>
            
            <div class="style-accordion">
              <div class="accordion-header">
                <span>Style Essentials</span>
                <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              <div class="accordion-content">
                <ul class="fact-list">
                  ${item.facts.map(f => `<li>${f}</li>`).join('')}
                </ul>
              </div>
            </div>
            
            <a href="elements.html?style=${key}" class="explore-btn" onclick="event.stopPropagation()">Explore ${key} Elements →</a>
          </div>
        `;

        card.onclick = (e) => {
          // If clicked the button, ignore
          if (e.target.closest('.explore-btn')) return;
          card.classList.toggle('expanded');
        };

        grid.appendChild(card);
      });
    });
  </script>
</body>
</html>

```

---

## FILE: detail.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Element Detail — MandirVastu</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* ── Navbar Sync ── */
    #navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background-color: rgba(14,7,0,0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--gold);
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    }
    .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 2rem; }
    .logo { display: flex; align-items: center; gap: 0.6rem; font-size: 1.55rem; font-weight: 700; color: var(--gold); text-decoration: none; }
    .logo-icon { width: 28px; height: 28px; }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; padding: 0; margin: 0; }
    .nav-links a { font-size: 0.95rem; font-weight: 500; letter-spacing: 1px; color: var(--ivory); text-transform: uppercase; text-decoration: none; }
    .nav-links a:hover, .nav-links a.active { color: var(--gold-light); }

    /* ── Detail Hero ── */
    .detail-hero {
      height: 50vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
      background: radial-gradient(circle at center, rgba(42,21,0,0.85) 0%, var(--bg-deep) 100%);
      position: relative; margin-top: 70px; padding: 0 2rem;
    }
    .detail-hero h1 { font-family: var(--font-cinzel); font-size: clamp(2.5rem, 6vw, 4.5rem); color: var(--ivory); margin-bottom: 0.5rem; }
    .sanskrit-title { font-size: 2rem; color: var(--gold); margin-bottom: 1.5rem; opacity: 0.9; }
    .short-desc { font-family: var(--font-cormorant); font-size: 1.3rem; color: var(--gold-light); font-style: italic; max-width: 800px; line-height: 1.4; }

    /* ── Layout ── */
    .detail-main { max-width: 1100px; margin: 0 auto; padding: 6rem 2rem; }
    
    .content-section { margin-bottom: 5rem; opacity: 0; transform: translateY(20px); transition: 0.8s; }
    .content-section.visible { opacity: 1; transform: translateY(0); }
    
    .section-head { font-family: var(--font-cinzel); font-size: 1.8rem; color: var(--gold); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem; }
    .section-head::after { content: ''; height: 1px; background: rgba(200,134,10,0.2); flex: 1; }
    
    .body-text { font-family: var(--font-cormorant); font-size: 1.25rem; color: var(--ivory-muted); line-height: 1.8; }
    .body-text p { margin-bottom: 1.5rem; }

    /* Specific Grid for Placement/Symbolism */
    .feature-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(200,134,10,0.1); padding: 2.5rem; border-radius: 8px; }

    /* Examples List */
    .example-list { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    .example-card { border-left: 3px solid var(--gold); padding: 1rem 1.5rem; background: rgba(200,134,10,0.03); }
    .example-name { font-family: var(--font-cinzel); font-size: 1.2rem; color: var(--ivory); margin-bottom: 0.3rem; }
    .example-loc { font-family: var(--font-dm); font-size: 0.85rem; color: var(--gold-light); text-transform: uppercase; letter-spacing: 1px; }

    /* Did You Know */
    .fact-box {
      margin-top: 6rem; padding: 3rem; background: var(--bg-card); border: 2px solid var(--gold); border-radius: 12px;
      text-align: center; position: relative; overflow: hidden;
    }
    .fact-box::before { content: '◈'; position: absolute; top: -10px; left: 50%; transform: translateX(-50%); font-size: 3rem; color: var(--gold); opacity: 0.1; }
    .fact-label { font-family: var(--font-dm); font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 3px; font-size: 0.9rem; margin-bottom: 1.2rem; display: block; }
    .fact-text { font-family: var(--font-cinzel); font-size: 1.5rem; color: var(--ivory); line-height: 1.5; }

    /* ── Footer ── */
    .footer { border-top: 1px solid rgba(200,134,10,0.3); background: var(--bg-card); padding: 5rem 2rem 3rem; text-align: center; }
    .footer-logo { font-size: 2rem; color: var(--gold); margin-bottom: 2.5rem; display: inline-block; font-family: var(--font-cinzel); }
    .footer-nav { display: flex; justify-content: center; gap: 3rem; margin-bottom: 2.5rem; font-weight: 600; font-size: 1.05rem; }
    .footer-nav a { text-transform: uppercase; letter-spacing: 2px; text-decoration: none; color: var(--ivory); }
    .footer-nav a:hover { color: var(--gold); }
    .footer-credit { font-size: 0.95rem; color: rgba(184,169,138,0.6); letter-spacing: 1px; }

    @media (max-width: 768px) {
      .example-list { grid-template-columns: 1fr; }
      .detail-hero h1 { font-size: 2.8rem; }
      .detail-main { padding: 4rem 1.5rem; }
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav id="navbar" class="dm-sans">
    <div class="nav-container">
      <a href="index.html" class="logo cinzel">
        <svg class="logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="2" width="4" height="4" rx="1" fill="#C8860A"/>
          <rect x="10" y="5" width="8" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="7" y="7" width="14" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="4" y="9" width="20" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="2" y="11" width="24" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="3" y="13" width="22" height="12" rx="1" fill="none" stroke="#C8860A" stroke-width="1"/>
          <rect x="11" y="17" width="6" height="8" rx="0.5" fill="#C8860A" opacity="0.6"/>
          <rect x="5" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
          <rect x="19" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
        </svg>
        MandirVastu
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="elements.html">Elements</a></li>
        <li><a href="styles.html">Styles</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Content -->
  <header class="detail-hero" id="detail-hero">
    <h1 id="el-name">...</h1>
    <div class="sanskrit-title" id="el-sanskrit">...</div>
    <div class="short-desc" id="el-short-desc">...</div>
  </header>

  <main class="detail-main">
    
    <!-- 3. Main Explanation -->
    <section class="content-section">
      <h2 class="section-head">Architectural Analysis</h2>
      <div class="body-text" id="el-detail">
        <!-- Paragraphs injected here -->
      </div>
    </section>

    <!-- 4. Symbolism -->
    <section class="content-section">
      <div class="feature-box">
        <h2 class="section-head">Symbolic Meaning</h2>
        <div class="body-text" id="el-symbolism">
          <!-- Text injected here -->
        </div>
      </div>
    </section>

    <!-- 5. Placement -->
    <section class="content-section">
      <h2 class="section-head">Sacred Placement</h2>
      <div class="body-text" id="el-placement">
        <!-- Text injected here -->
      </div>
    </section>

    <!-- 6. Examples -->
    <section class="content-section">
      <h2 class="section-head">Masterpiece Examples</h2>
      <div class="example-list" id="el-examples">
        <!-- Examples injected here -->
      </div>
    </section>

    <!-- 7. Did You Know -->
    <div class="fact-box">
      <span class="fact-label">Did You Know?</span>
      <div class="fact-text" id="el-fact">...</div>
    </div>

  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-logo cinzel">MandirVastu</div>
    <div class="footer-nav dm-sans">
      <a href="index.html">Home</a>
      <a href="elements.html">Elements</a>
      <a href="styles.html">Styles</a>
      <a href="about.html">About</a>
    </div>
    <div class="footer-tags dm-sans">
      <span>Architecture</span><span>Sculpture</span><span>Sacred Geometry</span><span>Case Study</span>
    </div>
    <div class="footer-credit dm-sans">MandirVastu · Scholarly Architectural Encyclopedia</div>
  </footer>

  <script src="data.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('icon');
      const data = window.iconData[id];

      if (!data) {
        window.location.href = 'elements.html';
        return;
      }

      // Populate Template
      document.title = `${data.name} — MandirVastu`;
      document.getElementById('el-name').innerText = data.name;
      document.getElementById('el-sanskrit').innerText = data.sanskrit || '';
      document.getElementById('el-short-desc').innerText = data.description || '';
      
      // Detail Paragraphs
      const detailContainer = document.getElementById('el-detail');
      const detailText = data.detail || '';
      detailContainer.innerHTML = detailText.split('\n\n').map(p => `<p>${p}</p>`).join('');

      document.getElementById('el-symbolism').innerHTML = `<p>${data.symbolism || ''}</p>`;
      document.getElementById('el-placement').innerHTML = `<p>${data.placement || ''}</p>`;
      
      // Examples
      const exContainer = document.getElementById('el-examples');
      (data.examples || []).forEach(ex => {
        const parts = ex.split(' - ');
        exContainer.innerHTML += `
          <div class="example-card">
            <div class="example-name">${parts[0]}</div>
            <div class="example-loc">${parts[1] || 'India'}</div>
          </div>
        `;
      });

      document.getElementById('el-fact').innerText = data.fact || '';

      // Scroll animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
      }, { threshold: 0.1 });
      document.querySelectorAll('.content-section').forEach(s => observer.observe(s));
    });
  </script>
</body>
</html>

```

---

## FILE: about.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About — MandirVastu: Temple Iconography of India</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* ── Navbar Sync ── */
    #navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background-color: rgba(14,7,0,0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--gold);
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      transition: background-color 0.3s ease;
    }
    .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 2rem; }
    .logo { display: flex; align-items: center; gap: 0.6rem; font-size: 1.55rem; font-weight: 700; color: var(--gold); text-decoration: none; }
    .logo-icon { width: 28px; height: 28px; flex-shrink: 0; }
    .logo-tagline { font-size: 0.7rem; color: var(--gold-light); letter-spacing: 1.5px; text-transform: uppercase; font-family: var(--font-dm); font-weight: 400; margin-left: 0.2rem; opacity: 0.8; }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; padding: 0; margin: 0; }
    .nav-links a { font-size: 0.95rem; font-weight: 500; letter-spacing: 1px; color: var(--ivory); position: relative; text-transform: uppercase; text-decoration: none; }
    .nav-links a::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 1px; background: var(--gold); transition: width 0.3s ease; }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
    .nav-links a:hover, .nav-links a.active { color: var(--gold-light); }

    /* ── Hero ── */
    .about-hero {
      height: 40vh; display: flex; align-items: center; justify-content: center; text-align: center;
      background: radial-gradient(circle at center, rgba(42,21,0,0.85) 0%, var(--bg-deep) 100%);
      position: relative; margin-top: 70px;
    }
    .about-hero-content { opacity: 0; transform: translateY(20px); animation: fadeUp 0.8s forwards; }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    .about-hero h1 { font-family: var(--font-cinzel); font-size: 3.5rem; color: var(--ivory); margin-bottom: 1rem; letter-spacing: 2px; }
    .about-hero p { font-size: 1.25rem; color: var(--gold-light); font-family: var(--font-cormorant); font-style: italic; opacity: 0.9; }

    /* ── Mission Section ── */
    .mission-section { padding: 8rem 2rem; max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.5fr; gap: 6rem; align-items: center; }
    /* ── Mission Section ── */
    .mission-section { padding: 8rem 2rem; max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.5fr; gap: 6rem; align-items: center; }
    .mission-left { text-align: center; }
    .om-symbol { font-size: 10rem; color: rgba(200,134,10,0.25); opacity: 1; font-family: var(--font-cinzel); filter: drop-shadow(0 0 20px rgba(200,134,10,0.4)); z-index: -1; }
    .mission-right h2 { font-family: var(--font-cinzel); font-size: 2.2rem; color: var(--gold); margin-bottom: 2rem; }
    .mission-right p { font-family: var(--font-cormorant); font-size: 1.2rem; color: var(--ivory-muted); line-height: 1.8; margin-bottom: 1.5rem; }

    /* ── Coverage Grid ── */
    .coverage-section { padding: 8rem 2rem; background: rgba(0,0,0,0.2); }
    .coverage-grid { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; text-align: center; }
    .coverage-item h3 { font-family: var(--font-cinzel); font-size: 1.5rem; color: var(--ivory); margin-bottom: 1rem; }
    .coverage-item p { font-family: var(--font-cormorant); font-size: 1.1rem; color: var(--ivory-muted); line-height: 1.6; }

    /* ── Sources ── */
    .sources-section { padding: 10rem 2rem; background: rgba(0,0,0,0.2); }
    .sources-inner { max-width: 1300px; margin: 0 auto; }
    .sources-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem; }
    .source-item { border-left: 2px solid var(--gold); padding-left: 1.5rem; }
    .source-item .title { font-style: italic; color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.3rem; }
    .source-item .author { font-family: var(--font-dm); font-size: 0.85rem; color: var(--ivory-muted); text-transform: uppercase; letter-spacing: 1px; }

    /* ── Final CTA ── */
    .final-cta { padding: 10rem 2rem; text-align: center; background: radial-gradient(circle at center, rgba(14,7,0,0.4) 0%, var(--bg-deep) 100%); position: relative; border-top: 1px solid var(--gold); }
    .final-cta h2 { font-family: var(--font-cinzel); font-size: 3rem; color: var(--ivory); margin-bottom: 2.5rem; }
    .cta-btns { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }
    .btn { padding: 0.9rem 2.2rem; border-radius: 100px; font-weight: 600; font-size: 1rem; letter-spacing: 0.5px; transition: 0.3s; display: inline-block; cursor: pointer; text-decoration: none; font-family: var(--font-dm); }
    .btn-gold { background: var(--gold); color: var(--bg-deep); border: 2px solid var(--gold); }
    .btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 5px 15px rgba(200,134,10,0.4); }
    .btn-ghost { border: 2px solid var(--gold); color: var(--ivory); background: transparent; }
    .btn-ghost:hover { background: rgba(200,134,10,0.1); transform: translateY(-2px); }

    /* ── Footer ── */
    .footer { border-top: 1px solid rgba(200,134,10,0.3); background: var(--bg-card); padding: 5rem 2rem 3rem; text-align: center; }
    .footer-logo { font-size: 2rem; color: var(--gold); margin-bottom: 2.5rem; display: inline-block; font-family: var(--font-cinzel); }
    .footer-nav { display: flex; justify-content: center; gap: 3rem; margin-bottom: 2.5rem; font-weight: 600; font-size: 1.05rem; }
    .footer-nav a { text-transform: uppercase; letter-spacing: 2px; text-decoration: none; color: var(--ivory); }
    .footer-nav a:hover { color: var(--gold); }

    /* Responsive */
    @media (max-width: 1024px) {
      .mission-section { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
      .coverage-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .coverage-grid, .sources-grid { grid-template-columns: 1fr; }
      .about-hero h1 { font-size: 2.5rem; }
      .mission-om { font-size: 6rem; }
      .final-cta h2 { font-size: 2.2rem; }
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav id="navbar" class="dm-sans">
    <div class="nav-container">
      <a href="index.html" class="logo cinzel">
        <svg class="logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="2" width="4" height="4" rx="1" fill="#C8860A"/>
          <rect x="10" y="5" width="8" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="7" y="7" width="14" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="4" y="9" width="20" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="2" y="11" width="24" height="3" rx="0.5" fill="#C8860A"/>
          <rect x="3" y="13" width="22" height="12" rx="1" fill="none" stroke="#C8860A" stroke-width="1"/>
          <rect x="11" y="17" width="6" height="8" rx="0.5" fill="#C8860A" opacity="0.6"/>
          <rect x="5" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
          <rect x="19" y="17" width="4" height="5" rx="0.5" fill="#C8860A" opacity="0.4"/>
        </svg>
        MandirVastu
        <span class="logo-tagline">Decoding the Sacred Architecture of India</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="elements.html">Elements</a></li>
        <li><a href="styles.html">Styles</a></li>
        <li><a href="about.html" class="active">About</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero -->
  <header class="about-hero">
    <div class="about-hero-content">
      <h1 class="cinzel">About MandirVastu</h1>
      <p>A study of temple architecture, symbolism, and sacred design</p>
    </div>
  </header>

  <!-- Mission -->
  <section class="mission-section">
    <div class="mission-left">
      <div class="om-symbol">ॐ</div>
    </div>
    <div class="mission-right">
      <h2 class="cinzel">Our Mission</h2>
      <p>MandirVastu is a digital encyclopedia dedicated to bridging the gap between ancient sacred geometry and modern understanding. We believe that an Indian temple is not merely a place of worship, but a three-dimensional icon of the cosmos itself.</p>
      <p>Our mission is to provide a scholarly, accessible reference for the 48 core elements of temple iconography. By decoding the symbolic language of the Garbhagriha, the Shikhara, and the Mithuna, we help devotees and travellers see the profound philosophy embedded in every stone.</p>
      <p>Whether you are an architect, a historian, or a spiritual seeker, MandirVastu serves as your guide to the Vastu Purusha Mandala and the rhythmic beauty of Nagara, Dravidian, and Vesara traditions.</p>
    </div>
  </section>

  <!-- Site Coverage -->
  <section class="coverage-section">
    <div class="coverage-grid">
      <div class="coverage-item">
        <h3>Architecture</h3>
        <p>From foundations to finials, we explore the structural anatomy of the temple as a cosmic mountain (Mount Meru).</p>
      </div>
      <div class="coverage-item">
        <h3>Sculpture</h3>
        <p>Decoding the symbolic meaning of guardian figures, celestial dancers, and mythical creatures that protect the sanctum.</p>
      </div>
      <div class="coverage-item">
        <h3>Sacred Geometry</h3>
        <p>Understanding the mathematical grids and proportions (Ayadi) that align the temple with the universal order.</p>
      </div>
    </div>
  </section>

  <!-- Sources -->
  <section class="sources-section">
    <div class="sources-inner">
      <h2 class="cinzel" style="text-align:center; color:var(--gold); margin-bottom: 3rem;">Scholarly Sources</h2>
      <div class="sources-grid">
        <div class="source-item">
          <div class="title">The Hindu Temple (2 Vols)</div>
          <div class="author">Stella Kramrisch</div>
        </div>
        <div class="source-item">
          <div class="title">Indian Temple Architecture: Form and Transformation</div>
          <div class="author">Adam Hardy</div>
        </div>
        <div class="source-item">
          <div class="title">The Penguin Guide to the Monuments of India</div>
          <div class="author">George Michell</div>
        </div>
        <div class="source-item">
          <div class="title">Manasara Shilpa Shastra</div>
          <div class="author">Ancient Sanskrit Text</div>
        </div>
        <div class="source-item">
          <div class="title">Mayamata</div>
          <div class="author">Mayamuni</div>
        </div>
        <div class="source-item">
          <div class="title">Elements of Hindu Iconography</div>
          <div class="author">T.A. Gopinatha Rao</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="final-cta">
    <div class="cta-inner">
      <h2 class="cinzel">Begin Your Journey</h2>
      <div class="cta-btns">
        <a href="elements.html" class="btn btn-gold">Explore the Elements →</a>
        <a href="styles.html" class="btn btn-ghost">Explore Styles →</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-logo cinzel">MandirVastu</div>
    <div class="footer-nav dm-sans">
      <a href="index.html">Home</a>
      <a href="elements.html">Elements</a>
      <a href="styles.html">Styles</a>
      <a href="about.html">About</a>
    </div>
    <div class="footer-tags dm-sans">
      <span>Architecture</span><span>Sculpture</span><span>Sacred Geometry</span><span>Case Study</span>
    </div>
    <div class="footer-credit dm-sans">MandirVastu · Encyclopedia of Indian Temple Iconography</div>
  </footer>


  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // FAQ Accordion
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const body = item.querySelector('.faq-body');
        
        trigger.onclick = () => {
          const isOpen = item.classList.contains('active');
          
          // Close others
          faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-body').style.maxHeight = null;
          });

          if (!isOpen) {
            item.classList.add('active');
            body.style.maxHeight = body.scrollHeight + "px";
          }
        };
      });
    });
  </script>
</body>
</html>

```

---

## FILE: data.js

```javascript
/**
 * MandirVastu Encyclopedia Data
 * 48 Elements + 3 Architectural Styles
 * Verified Academic Dataset
 */

window.styleData = {
  "Nagara": {
    "name": "Nagara Style",
    "origin": "North India",
    "description": "The North Indian architectural tradition is defined by its curvilinear beehive-shaped towers, known as Shikharas, and square plans with rhythmic projections. It emphasizes the concept of the temple as a cosmic mountain range, using fractal geometry to create a sense of infinite verticality and spiritual ascent.",
    "facts": [
      "Characterized by the curvilinear Shikhara crowned with a solar Amalaka disc.",
      "Built upon an elevated stone platform (Jagati) that defines the sacred space.",
      "Typically avoids the massive enclosure walls and gopurams common in the South.",
      "Uses the 'Panchayatana' layout with four subsidiary shrines at the corners."
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg/800px-Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg",
    "examples": ["Khajuraho", "Konark", "Lingaraja", "Modhera"]
  },
  "Dravidian": {
    "name": "Dravidian Style",
    "origin": "South India",
    "description": "The South Indian tradition is distinguished by immense walled complexes and stepped pyramidal towers called Vimanas. This style focuses on the temple as a literal spiritual fortress, featuring monumental gateway towers (Gopurams) that often dwarf the main sanctum and massive pillared halls for communal ritual and performance.",
    "facts": [
      "Features stepped pyramidal Vimanas with multiple stories and a dome-like Stupika.",
      "Monumental Gopurams serve as gateways, marking the transition to sacred space.",
      "Includes large sacred water reservoirs (Pushkarini) for ritual purification baths.",
      "Organized within concentric enclosure walls (Prakaras) creating a temple city."
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Brihadeeswarar_Temple_Thanjavur.jpg/800px-Brihadeeswarar_Temple_Thanjavur.jpg",
    "examples": ["Brihadeeswarar", "Meenakshi Amman", "Srirangam", "Mahabalipuram"]
  },
  "Vesara": {
    "name": "Vesara Style",
    "origin": "Deccan / Karnataka",
    "description": "A sophisticated hybrid tradition that emerged in the Deccan, synthesizing the curvilinear Nagara spire with the tiered Dravidian floor structure. It is renowned for its unique star-shaped floor plans and incredibly detailed soapstone carvings that create a lace-like texture on every architectural surface.",
    "facts": [
      "Developed a unique 'Stellated' or star-shaped plan rotating around a center.",
      "Towers combine Nagara's vertical profile with Dravidian's tiered story layering.",
      "Known for highly intricate, mirror-polished lathe-turned pillars and ceilings.",
      "Primarily associated with the Chalukya, Rashtrakuta, and Hoysala dynasties."
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Hoysaleswara_temple_Halebidu.jpg/800px-Hoysaleswara_temple_Halebidu.jpg",
    "examples": ["Hoysaleswara", "Pattadakal", "Badami", "Belur"]
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
    examples: ["Brihadeeswarar Temple - Thanjavur", "Kandariya Mahadeva - Khajuraho"],
    fact: "In ancient times, only the high priests were allowed to enter the Garbhagriha to maintain its energetic purity.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Hoysaleswara_temple_garbhagriha.jpg/640px-Hoysaleswara_temple_garbhagriha.jpg"
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
    examples: ["Lingaraja Temple - Bhubaneswar", "Kandariya Mahadeva - Khajuraho"],
    fact: "The Shikhara of the Kandariya Mahadeva temple is composed of 84 smaller sub-spires called Urushringas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg/640px-Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg"
  },
  3: {
    id: 3,
    name: "Vimana",
    sanskrit: "विमान",
    category: "Architecture",
    style: "Dravidian",
    description: "The stepped pyramidal tower rising over the sanctum in South India.",
    detail: "The Vimana is the South Indian counterpart to the Shikhara, but its geometry is radically different. Instead of a smooth curve, the Vimana rises in distinct horizontally tiered stories (Talos), each decorated with miniature shrines (Kutus and Shalas). This creates a stepped pyramidal profile that feels stable and monumental.",
    symbolism: "A Vimana represents a celestial chariot or a palace of the gods. Each story of the tower symbolizes a different plane of existence (Loka) in the divine hierarchy.",
    placement: "The main tower rising above the sanctum in Dravidian architecture, distinct from the gateway towers (Gopurams).",
    examples: ["Brihadeeswarar Temple - Thanjavur", "Shore Temple - Mahabalipuram"],
    fact: "The 'Kumbam' (capstone) of the Thanjavur Vimana is carved from a single piece of granite weighing approximately 80 tons.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Brihadeeswarar_Temple_Thanjavur.jpg/640px-Brihadeeswarar_Temple_Thanjavur.jpg"
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
    examples: ["Meenakshi Amman Temple - Madurai", "Sri Ranganathaswamy - Srirangam"],
    fact: "The Rajagopuram at Srirangam is one of the tallest in Asia, reaching a height of 239 feet with 13 tiers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Meenakshi_Amman_Temple_Madurai.jpg/640px-Meenakshi_Amman_Temple_Madurai.jpg"
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
    examples: ["Vittala Temple - Hampi", "Sun Temple - Modhera"],
    fact: "Some Mandapas, like those in the Vittala Temple, feature 'musical pillars' that ring with different notes when tapped.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Vittala_temple_Hampi.jpg/640px-Vittala_temple_Hampi.jpg"
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
    examples: ["Lakshmana Temple - Khajuraho", "Kandariya Mahadeva - Khajuraho"],
    fact: "In some architectural texts, the Antarala is called the 'Sukhanasi' when it is fronted by a large decorative arch.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Khajuraho_Lakshmana_temple.jpg/640px-Khajuraho_Lakshmana_temple.jpg"
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
    examples: ["Kailasa Temple - Ellora", "Angkor Wat - Cambodia"],
    fact: "The word 'Dakshina' means 'right' or 'South'; Pradakshina literally means keeping the right side toward the center.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Angkor_Wat_aerial.jpg/640px-Angkor_Wat_aerial.jpg"
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
    examples: ["Somnath Temple - Gujarat", "Brihadeeswarar Temple - Thanjavur"],
    fact: "Ancient texts specify that the shadow of the Kalasha should never fall on the ground at high noon.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Kalasha_temple_finial.jpg/640px-Kalasha_temple_finial.jpg"
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
    examples: ["Lingaraja Temple - Bhubaneswar", "Sun Temple - Konark"],
    fact: "The word is also associated with 'Amala' which means pure or stainless, reflecting the purity of spiritual enlightenment.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lingaraja_Temple_Bhubaneswar.jpg/640px-Lingaraja_Temple_Bhubaneswar.jpg"
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
    examples: ["Khajuraho temples - Madhya Pradesh", "Sun Temple - Konark"],
    fact: "At Konark, the Jagati is styled as a massive chariot with 24 stone-carved wheels.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Konarka_Temple.jpg/640px-Konarka_Temple.jpg"
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
    examples: ["Sanchi Stupa Gateways - Madhya Pradesh", "Mukteshwar Temple Torana - Odisha"],
    fact: "The word 'Torana' is the root of the word 'throne' in several Indo-European languages via the concept of a royal gateway.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sanchi_northern_gateway.jpg/640px-Sanchi_northern_gateway.jpg"
  },
  12: {
    id: 12,
    name: "Adhisthana",
    sanskrit: "अधिष्ठान",
    category: "Architecture",
    style: "Dravidian",
    description: "The highly articulated stone base of a South Indian temple.",
    detail: "The Adhisthana is the 'foundation' or articulated basement of a Dravidian temple. It is a precise sequence of horizontally layered moldings that follow strict mathematical ratios. Each layer has a specific name and aesthetic function.",
    symbolism: "It signifies the 'basis' or the support of the manifest world. It represents the grounding of spiritual energy into the material plane with mathematical precision.",
    placement: "The sequence of moldings at the very base of the temple walls in South Indian architecture.",
    examples: ["Great Living Chola Temples - Tamil Nadu", "Shore Temple - Mahabalipuram"],
    fact: "The height of the Adhisthana determines the scale of all subsequent architectural parts of the temple.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dhvajastambha_temple.jpg/640px-Dhvajastambha_temple.jpg"
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
    examples: ["Ellora Caves - Maharashtra", "Lingaraja Temple - Odisha"],
    fact: "The Gavaksha motif was the primary way that early Indian architects acknowledged their historical origins in wood and bamboo construction.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sanchi_northern_gateway.jpg/640px-Sanchi_northern_gateway.jpg"
  },
  14: {
    id: 14,
    name: "Pushkarini",
    sanskrit: "पुष्करिणी",
    category: "Architecture",
    style: "Dravidian",
    description: "The sacred temple tank used for ritual baths and purification.",
    detail: "Water is central to Indian ritual, and no temple is complete without its Pushkarini. These are often massive, stone-stepped rectangular reservoirs used for purification before entering the священная (sacred) precinct.",
    symbolism: "It represents the 'primordial waters' of creation. The act of bathing signifies the washing away of mundane attachments and the rebirth of the soul in a purified state.",
    placement: "Usually located near the main entrance or on the eastern side of the temple complex.",
    examples: ["Golden Lily Tank - Madurai", "Hampi Pushkarini - Karnataka"],
    fact: "The water level in some ancient Pushkarinis is maintained through sophisticated underground aqueduct systems that have functioned for centuries.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Srirangam_temple_complex.jpg/640px-Srirangam_temple_complex.jpg"
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
    examples: ["Vaital Deula - Bhubaneswar", "Teli ka Mandir - Gwalior Fort"],
    fact: "The barrel-vault shape was originally designed to mimic ancient wooden halls with bent-bamboo rafters.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lingaraja_Temple_Bhubaneswar.jpg/640px-Lingaraja_Temple_Bhubaneswar.jpg"
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
    examples: ["Jagannath Mandapa - Puri", "Lakshmana Mandapa - Khajuraho"],
    fact: "Phamsana roofs were designed to be extremely durable, often surviving for centuries after the taller spires may have collapsed.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Konarka_Temple.jpg/640px-Konarka_Temple.jpg"
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
    examples: ["Meenakshi Amman - Madurai", "Padmanabhaswamy Temple - Thiruvananthapuram"],
    fact: "In some traditions, the height of the banner mast must be exactly equal to the height of the main spire (Vimana).",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dhvajastambha_temple.jpg/640px-Dhvajastambha_temple.jpg"
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
    examples: ["Hoysaleswara Temple - Halebidu", "Virupaksha Temple - Pattadakal"],
    fact: "The Sukhanasi is often the first place where a pilgrim can see a representation of the god residing inside the lightless sanctum.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hoysaleswara_temple_Halebidu.jpg/640px-Hoysaleswara_temple_Halebidu.jpg"
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
    examples: ["Kailasanathar Temple - Kanchipuram", "Belur Chennakeshava - Karnataka"],
    fact: "At many ancient sites, the Dvarapala figures were the first sculptures to be carved.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dvarapala_Prambanan.jpg/640px-Dvarapala_Prambanan.jpg"
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
    examples: ["Kandariya Mahadeva - Khajuraho", "Konark Sun Temple - Odisha"],
    fact: "In Shilpa Shastra, a temple without Mithuna sculptures is considered incomplete and unprotected.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Khajuraho_mithuna_sculptures.jpg/640px-Khajuraho_mithuna_sculptures.jpg"
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
    examples: ["Khajuraho temples - Madhya Pradesh", "Belur and Halebidu - Karnataka"],
    fact: "Angkor Wat features over 1,700 unique Apsara carvings, each with different styles.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Apsaras_Angkor_Wat.jpg/640px-Apsaras_Angkor_Wat.jpg"
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
    examples: ["Vittala Temple - Hampi", "Meenakshi Amman - Madurai"],
    fact: "Sculptors sometimes carved an entire rolling stone ball inside the open mouth of a Yali.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Vittala_temple_Hampi.jpg/640px-Vittala_temple_Hampi.jpg"
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
    examples: ["Keshava Temple - Belur", "Mavali Torana - Pattadakal"],
    fact: "The Makara is also the zodiac sign represented as Capricorn.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sanchi_northern_gateway.jpg/640px-Sanchi_northern_gateway.jpg"
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
    examples: ["Badami Caves - Karnataka", "Lingaraja Temple - Odisha"],
    fact: "Kirtimukha is also found in Tibetan architecture as the 'Taotie'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hoysaleswara_temple_Halebidu.jpg/640px-Hoysaleswara_temple_Halebidu.jpg"
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
    placement: "Often used as decorative bracket figures (Shorter) between pillars and ceilings.",
    examples: ["Sanchi Stupa - Madhya Pradesh", "Belur Chennakeshava - Karnataka"],
    fact: "The word was originally used for women who gathered flowers from the Shala tree.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lingaraja_Temple_Bhubaneswar.jpg/640px-Lingaraja_Temple_Bhubaneswar.jpg"
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
    examples: ["Kandariya Mahadeva - Khajuraho", "Rajarani Temple - Bhubaneswar"],
    fact: "Classical Sanskrit poetry often provides descriptions that sculptors followed for these forms.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hoysaleswara_temple_Halebidu.jpg/640px-Hoysaleswara_temple_Halebidu.jpg"
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
    examples: ["Lingaraja Temple - Odisha", "Lakshmana Temple - Khajuraho"],
    fact: "In some temples, they are also carved into the ceiling in a circular pattern.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg/640px-Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg"
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
    examples: ["Konark Sun Temple - Odisha", "Kailasa Temple - Ellora"],
    fact: "The Navagraha lintel at Konark is exhibited in its own separate museum at the site.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Konarka_Temple.jpg/640px-Konarka_Temple.jpg"
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
    examples: ["Teli-ka-Mandir - Gwalior", "Deogarh Dashavatara Temple - Uttar Pradesh"],
    fact: "Before river goddesses, sanctum doors were guarded by auspicious couple (Mithuna) figures.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Khajuraho_Lakshmana_temple.jpg/640px-Khajuraho_Lakshmana_temple.jpg"
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
    examples: ["Badami Caves - Karnataka", "Lingaraja Temple - Odisha"],
    fact: "The name literally means 'group' or 'count', and Ganesha is their lord.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Yaksha_figure_Sanchi.jpg/640px-Yaksha_figure_Sanchi.jpg"
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
    examples: ["Kandariya Mahadeva - Khajuraho", "Konark Sun Temple - Odisha"],
    fact: "The word Sardula is a metaphor for 'tiger among men'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Hoysaleswara_temple_Halebidu.jpg/640px-Hoysaleswara_temple_Halebidu.jpg"
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
    examples: ["Kailasa Temple - Ellora", "Chamundi Hill Nandi - Mysuru"],
    fact: "The Nandi at Lepakshi is one of the largest monolithic bulls in the world.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Vittala_temple_Hampi.jpg/640px-Vittala_temple_Hampi.jpg"
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
    examples: ["Vittala Temple Garuda Shrine - Hampi", "Jagannath Temple - Puri"],
    fact: "In myth, his wing flaps create the rhythm of the universe.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dhvajastambha_temple.jpg/640px-Dhvajastambha_temple.jpg"
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
    examples: ["Brihadeeswarar Temple - Thanjavur", "Shore Temple - Mahabalipuram"],
    fact: "At Thanjavur, its shadow is said to never touch the ground during the day.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mahabalipuram_Ratha_Spire.jpg/640px-Mahabalipuram_Ratha_Spire.jpg"
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
    examples: ["Meenakshi Amman - Madurai", "Sri Ranganathaswamy - Srirangam"],
    fact: "Devotees perform prostrations just behind the Bali Pitha before entering.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dhvajastambha_temple.jpg/640px-Dhvajastambha_temple.jpg"
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
    examples: ["Baudhayana Shulba Sutra", "Apastamba Shulba Sutra"],
    fact: "They contain the earliest formulations of geometric transformations and irrational numbers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Vastu_Purusha_Mandala_45.jpg/640px-Vastu_Purusha_Mandala_45.jpg"
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
    examples: ["Vastu Shastra Principles", "Mayamata Text application"],
    fact: "No two temples have the exact same dimensions thanks to this custom system.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Brihadeeswarar_Temple_Thanjavur.jpg/640px-Brihadeeswarar_Temple_Thanjavur.jpg"
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
    examples: ["Ashoka Pillars - Sanchi", "Indra-stambha - Ellora"],
    fact: "The word Stambha is the root of English words like stand and stable.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dhvajastambha_temple.jpg/640px-Dhvajastambha_temple.jpg"
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
    examples: ["Lingaraja Temple - Bhubaneswar", "Jagannath Temple - Puri"],
    fact: "The mathematical curves would meet miles high if extended into the sky.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lingaraja_Temple_Bhubaneswar.jpg/640px-Lingaraja_Temple_Bhubaneswar.jpg"
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
    examples: ["Sun Temple - Konark", "Lingaraja Jagamohana - Bhubaneswar"],
    fact: "At Konark, the Pidha Deula is the only part that has survived fully intact.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Konarka_Temple.jpg/640px-Konarka_Temple.jpg"
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
    examples: ["Vaital Deula - Bhubaneswar", "Varahi Temple - Chaurasi"],
    fact: "Designed specifically for esoteric Tantric rituals needing concentrated geometric space.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lingaraja_Temple_Bhubaneswar.jpg/640px-Lingaraja_Temple_Bhubaneswar.jpg"
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
    examples: ["Chennakeshava Temple - Belur", "Hoysaleswara Temple - Halebidu"],
    fact: "Stones interlock with such geometric precision that no mortar was required.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hoysaleswara_temple_Halebidu.jpg/640px-Hoysaleswara_temple_Halebidu.jpg"
  },
  43: {
    id: 43,
    name: "Brihadeeswarar",
    category: "Case Study",
    style: "Dravidian",
    description: "The 'Big Temple' of Thanjavur, a granite masterpiece of the Chola Empire.",
    detail: "zenith of Chola architecture built by Raja Raja I entirely of hard granite, featuring a Vimana 216 feet high.",
    symbolism: "Means 'Lord of Greatness', manifesting imperial authority and direct connection to the Divine.",
    placement: "Thanjavur, Tamil Nadu. Former Chola capital heart.",
    examples: ["Main Shrine - Thanjavur", "Gangaikonda Cholapuram"],
    fact: "The 216-foot tower stands purely via stone weight and precision fit with no mortar.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Brihadisvara_Temple_Thanjavur_2011.jpg/640px-Brihadisvara_Temple_Thanjavur_2011.jpg"
  },
  44: {
    id: 44,
    name: "Konark Sun Temple",
    category: "Case Study",
    style: "Nagara",
    description: "The colossal stone chariot of the Sun God, featuring twelve pairs of sundial wheels.",
    detail: "Grand Kalinga temple designed as a celestial chariot with 24 carved wheels and seven stone horses.",
    symbolism: "Mappings Celestial Time onto Earthly Space, celebrating the sun as the ultimate life-driver.",
    placement: "Konark, Odisha coastline.",
    examples: ["The Sun Chariot", "Sundial Wheels"],
    fact: "The 24 wheels function as accurate sundials telling time to within two minutes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Konarka_Temple.jpg/640px-Konarka_Temple.jpg"
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
    examples: ["Kandariya Mahadeva", "Lakshmana Temple"],
    fact: "Famed erotic art actually represents less than 10% of the total carvings.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg/640px-Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg"
  },
  46: {
    id: 46,
    name: "Meenakshi Amman",
    category: "Case Study",
    style: "Dravidian",
    description: "A vast temple city complex featuring fourteen sky-scraping gopurams.",
    detail: "Sprawling 14-acre temple city mandala reorganized around dual shrines and colossal color-drenched towers.",
    symbolism: "Means sacred order flourishing in life, walls representing layers of personality.",
    placement: "Madurai, Tamil Nadu urban core.",
    examples: ["South Gopuram", "Hall of Thousand Pillars"],
    fact: "Its thousands of tower figures are hand-repainted every twelve years.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Meenakshi_Amman_Temple_Madurai.jpg/640px-Meenakshi_Amman_Temple_Madurai.jpg"
  },
  47: {
    id: 47,
    name: "Lingaraja Temple",
    category: "Case Study",
    style: "Nagara",
    description: "The quintessential masterpiece of Kalinga (Odisha) architectural maturity.",
    detail: "Synthesis of Rekha and Pidha forms rising to 180 feet, dominating the Bhubaneswar skyline.",
    symbolism: "Means 'King of Lingas', manifesting spiritual power through absolute architectural lines.",
    placement: "Old Temple District, Bhubaneswar, Odisha.",
    examples: ["Main Shrine", "Bindu Sagar"],
    fact: "Spire stones were carved in situ on high bamboo scaffolds.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lingaraja_Temple_Bhubaneswar.jpg/640px-Lingaraja_Temple_Bhubaneswar.jpg"
  },
  48: {
    id: 48,
    name: "Hoysaleswara Temple",
    category: "Case Study",
    style: "Vesara",
    description: "A twin-temple masterpiece featuring a complex stellated plan and soapstone carvings.",
    detail: "Vesara pinnacle in soapstone featuring incredible frieze detail and twin star-shaped shrines.",
    symbolism: "Peak of 'Kala' as devotion, with radial geometry signifying divine diffusion.",
    placement: "Halebidu, Karnataka. Former Hoysala capital.",
    examples: ["Double Stellated Plan", "Epic Narrative Friezes"],
    fact: "Interior pillars are so polished they appear lathe-turned by machines.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Hoysaleswara_temple_Halebidu.jpg/640px-Hoysaleswara_temple_Halebidu.jpg"
  }
};
```

---

## FILE: style.css

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap');

:root {
  --bg-deep: #0e0700;
  --bg-card: #1a1000;
  --gold: #C8860A;
  --gold-light: #E8C87A;
  --ivory: #F5EDD6;
  --ivory-muted: #B8A98A;
  --vermilion: #8B1A1A;
  --sandalwood: #7B3F00;
  --moss: #2D5A3D;
  --dravidian: #A85A32;
  --transition: all 0.3s ease;
  --font-cinzel: 'Cinzel Decorative', serif;
  --font-cormorant: 'Cormorant Garamond', serif;
  --font-dm: 'DM Sans', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-cormorant);
  background-color: var(--bg-deep);
  color: var(--ivory);
  overflow-x: hidden;
}
img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; transition: var(--transition); }
ul { list-style: none; }
button { cursor: pointer; border: none; outline: none; background: transparent; font-family: inherit; transition: var(--transition); }

.cinzel { font-family: var(--font-cinzel); }
.cormorant { font-family: var(--font-cormorant); }
.dm-sans { font-family: var(--font-dm); }

```

---

