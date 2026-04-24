<p align="center">
  <img src="https://img.shields.io/badge/Ancient%20India-Stone%20Joinery-d8a05c?style=for-the-badge&labelColor=0b0c10" alt="Stone Joinery Badge"/>
  <img src="https://img.shields.io/badge/Status-Active-4ade80?style=for-the-badge&labelColor=0b0c10" alt="Status Badge"/>
  <img src="https://img.shields.io/badge/License-MIT-3b82f6?style=for-the-badge&labelColor=0b0c10" alt="License Badge"/>
</p>

<h1 align="center">🏛️ Stone Joinery of Ancient India</h1>

<p align="center">
  <strong>A scholarly-popular web platform documenting the timeless structural ingenuity of Indian subcontinental master masons.</strong>
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 📖 About

**Stone Joinery of Ancient India** is an interactive, single-page web application that explores the sophisticated stone joinery techniques used by ancient Indian architects and masons. From the dry-stacked corbelled domes of the Dilwara Temples to the iron-clamped ashlar courses of Konark, this platform serves as a comprehensive digital resource for:

- **Historians** researching pre-modern structural engineering
- **Architects** drawing inspiration from time-tested techniques
- **Conservators** working on heritage restoration projects
- **Students & the Curious Public** fascinated by India's architectural legacy

> *"Monuments Without Mortar — The Mastery of Ancient Indian Stonecraft"*

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏠 **Dynamic Homepage** | Hero section with animated text reveal, mission overview, and quick-navigation cards |
| 🔧 **Technique Pages** | 5 detailed joinery techniques with step-by-step construction methods, materials, and conservation notes |
| 🏗️ **Case Studies** | In-depth structural analysis of 4 UNESCO-level monuments (Kailasa, Konark, Rani Ki Vav, Nalanda) |
| 📅 **Interactive Timeline** | 12-point chronological journey from 2600 BCE to the modern conservation era |
| 🖼️ **Visual Gallery** | Curated gallery with descriptive captions for stone joint close-ups and conservation work |
| 📚 **Technical Glossary** | 13 essential masonry terms with concise definitions |
| 📱 **Fully Responsive** | Optimized layouts for desktop, tablet, and mobile with touch-friendly interactions |
| 🎨 **Premium Dark UI** | Glassmorphism, cinematic gradients, and smooth micro-animations throughout |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic structure and SEO-optimized markup |
| **CSS3** | Vanilla CSS with CSS custom properties, glassmorphism, responsive breakpoints |
| **JavaScript (ES6+)** | Vanilla JS single-page application with hash-based routing |
| **Google Fonts** | Cinzel (headings) + Inter (body) for premium typography |

> **Zero dependencies. No build tools. No frameworks.** Pure HTML/CSS/JS — just open `index.html` and go.

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No Node.js, npm, or build step required

### Installation

```bash
# Clone the repository
git clone https://github.com/Paradoxai77/IKS-Project.git

# Navigate into the project
cd IKS-Project

# Open in your browser
# Option 1: Double-click index.html
# Option 2: Use VS Code Live Server extension
# Option 3: Use any local server
npx serve .
```

---

## 📁 Project Structure

```
IKS-Project/
├── index.html          # Main HTML entry point (SPA shell)
├── style.css           # Complete stylesheet with responsive design
├── app.js              # Application logic, data, routing & rendering
├── README.md           # Project documentation
└── .vscode/
    └── launch.json     # VS Code debug configuration
```

### Architecture Overview

```
┌─────────────────────────────────────────┐
│              index.html                 │
│  ┌─────────┐  ┌──────────┐  ┌────────┐ │
│  │  Navbar  │  │ #app-root│  │ Footer │ │
│  └─────────┘  └────┬─────┘  └────────┘ │
│                     │                   │
└─────────────────────┼───────────────────┘
                      │
              ┌───────▼───────┐
              │    app.js     │
              │  ┌──────────┐ │
              │  │ siteData │ │  ← All content as structured JSON
              │  ├──────────┤ │
              │  │  Router  │ │  ← Hash-based SPA routing
              │  ├──────────┤ │
              │  │ Renderers│ │  ← Dynamic page generation
              │  └──────────┘ │
              └───────────────┘
```

---

## 📸 Screenshots

### 🖥️ Desktop View
> *Premium dark-mode interface with glassmorphism cards and cinematic typography*

### 📱 Mobile View
> *Fully responsive with animated hamburger menu and stacked layouts*

### 🔧 Techniques Page
> *Detailed step-by-step construction methods with split-panel layout*

### 📅 Timeline
> *Vertical timeline spanning 4,600+ years of Indian lithic engineering*

---

## 📚 Content Sources

This project synthesizes information from:

- **Archaeological Survey of India (ASI)** documentation and field reports
- **ScienceDirect** — *"Ancient mortar technology of the 1600-year-old renowned Buddhist University and UNESCO world heritage site"* ([S2214509525002104](https://www.sciencedirect.com/science/article/pii/S2214509525002104))
- Historical and architectural research on Indian temple construction traditions
- Conservation case studies from UNESCO World Heritage sites

---

## 🎨 Design Philosophy

The interface draws inspiration from the subject matter itself:

- **Color Palette**: Deep slate backgrounds (`#0b0c10`) with warm sandstone gold accents (`#d8a05c`) — evoking the materiality of ancient stone against shadow
- **Typography**: Cinzel serif for monumental headings (echoing carved inscriptions) paired with Inter sans-serif for scholarly readability
- **Glassmorphism**: Semi-transparent card surfaces with backdrop blur, suggesting the layered depth of stone coursework
- **Micro-animations**: Subtle hover lifts, scroll reveals, and transition fades that bring the ancient subject matter to life

---

## 🤝 Contributing

Contributions are welcome! Whether it's adding new techniques, case studies, or improving the design:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/new-technique`)
3. **Commit** your changes (`git commit -m 'Add: Lap joint technique from Hampi'`)
4. **Push** to the branch (`git push origin feature/new-technique`)
5. **Open** a Pull Request

### Ideas for Contributions
- [ ] Add more joinery techniques (lap joints, scarf joints, key-and-socket)
- [ ] Include high-resolution photographs of actual monuments
- [ ] Add a Resources/Downloads page with PDF diagrams
- [ ] Implement a Blog section with long-form articles
- [ ] Add regional map visualization of technique distribution
- [ ] Multi-language support (Hindi, Tamil, Kannada)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Paradoxai77**

- GitHub: [@Paradoxai77](https://github.com/Paradoxai77)

---

<p align="center">
  <em>Built to preserve the immense legacy of Indian subcontinental master masons.</em>
</p>

<p align="center">
  <strong>⭐ Star this repo if you find it useful!</strong>
</p>
