document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch the Database safely (using the database.js import to bypass file:/// CORS)
    let modulesData = [];
    if (window.apiDatabase && window.apiDatabase.modules) {
        modulesData = window.apiDatabase.modules;
    } else {
        console.error("Database connection failed. Check if database.js is loaded.");
        return;
    }

    const galleryGrid = document.getElementById('gallery-grid');
    const sidebarNav = document.getElementById('sidebar-nav');
    
    // 2. Render Engine & 3D Tilt Mechanics
    const renderUI = (dataToRender) => {
        galleryGrid.innerHTML = '';
        sidebarNav.innerHTML = '';
        
        dataToRender.forEach((module, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.style.animationDelay = `${index * 0.1}s`;
            
            item.innerHTML = `
                <div class="image-wrapper">
                    <img src="${module.src}" alt="${module.title}" loading="lazy" class="gallery-img">
                    <div class="overlay">
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </div>
                </div>
                <div class="item-info">
                    <p class="item-category">${module.category}</p>
                    <h3 class="item-title">${module.title}</h3>
                    <p class="item-desc">${module.description}</p>
                </div>
            `;
            
            // Advance 3D Tilt Effect on mousemove
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
                const rotateY = ((x - centerX) / centerX) * 10;
                
                item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateZ(20px)`;
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateZ(0)`;
            });

            const navLink = document.createElement('a');
            navLink.href = "#";
            navLink.textContent = module.title;

            // Navigation Glide Function
            const navigateToModule = (e) => {
                e.preventDefault();
                document.getElementById('main-content').classList.add('page-exiting');
                setTimeout(() => window.location.href = module.url, 600);
            };

            item.addEventListener('click', navigateToModule);
            navLink.addEventListener('click', navigateToModule);
            
            galleryGrid.appendChild(item);
            sidebarNav.appendChild(navLink);
        });
    };

    // Initial render
    renderUI(modulesData);

    /* Search Removed */

    // 4. Dark Mode Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = 'light_mode';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        }
    });

    // 5. Sidebar Menu Controls
    const sidebarMenu = document.getElementById('sidebar-menu');
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');

    openMenuBtn.addEventListener('click', () => sidebarMenu.classList.add('active'));
    closeMenuBtn.addEventListener('click', () => sidebarMenu.classList.remove('active'));

    // AI Widget Removed
});
