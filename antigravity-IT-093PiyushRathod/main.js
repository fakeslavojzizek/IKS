// Intersection Observer for Reveal Animations
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const lightBtn = document.querySelector('button');
lightBtn.addEventListener('click', (e) => {
    createRipple(e);
    isAartiActive = !isAartiActive;

    if (isAartiActive) {
        thaliContainer.classList.add('thali-active');
        aartiInteractiveArea.classList.add('aarti-active');

        lightBtn.textContent = 'Stop Aarti';
        lightBtn.style.background = 'var(--accent-red)';

        aartiStatus.textContent = 'RITUAL ACTIVE • HAR HAR MAHADEV';
        aartiStatus.style.color = 'var(--primary)';

        startParticles();

        aartiAudio.currentTime = 0;
        aartiAudio.play().catch(err => console.warn("Audio file missing: aarti.mp3", err));
    } else {
        thaliContainer.classList.remove('thali-active');
        aartiInteractiveArea.classList.remove('aarti-active');

        lightBtn.textContent = 'Perform Aarti';
        lightBtn.style.background = 'var(--gradient)';

        aartiStatus.textContent = 'READY FOR RITUAL';
        aartiStatus.style.color = 'var(--text-muted)';

        stopParticles();

        aartiAudio.pause();
        aartiAudio.currentTime = 0;
    }
});

// Click Ripple Effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) { ripple.remove(); }
    button.appendChild(circle);
}

// Sparkle Particle Effect
let particleInterval;
function startParticles() {
    const container = document.getElementById('particles-container');
    particleInterval = setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        const x = Math.random() * 100;
        const tx = (Math.random() - 0.5) * 50;
        p.style.left = `${x}%`;
        p.style.bottom = '20%';
        p.style.setProperty('--tx', `${tx}px`);
        p.style.animationDuration = `${Math.random() * 2 + 1}s`;
        container.appendChild(p);
        setTimeout(() => p.remove(), 3000);
    }, 200);
}

function stopParticles() {
    clearInterval(particleInterval);
    document.getElementById('particles-container').innerHTML = '';
}

// Parallax Hero Effect
window.addEventListener('scroll', () => {
    const scrolled = window.window.scrollY;
    document.querySelector('.hero-bg').style.transform = `translateY(${scrolled * 0.4}px)`;
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 2rem';
        nav.style.width = '100%';
        nav.style.top = '0';
        nav.style.borderRadius = '0px';
    } else {
        nav.style.padding = '1rem 2rem';
        nav.style.width = '90%';
        nav.style.top = '20px';
        nav.style.borderRadius = '20px';
    }
});
