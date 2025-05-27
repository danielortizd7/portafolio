// Configuración de partículas
const particlesConfig = {
    particles: {
        number: { 
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: { value: "#00f3ff" },
        opacity: { 
            value: 0.7,
            random: false
        },
        size: { 
            value: 3,
            random: true
        },
        move: { 
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00f3ff",
            opacity: 0.4,
            width: 1
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    retina_detect: true
};

// Inicializar partículas
particlesJS("particles-js", particlesConfig);

// Animación de las tarjetas de habilidades
const animateSkillCards = () => {
    const cards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });
};

// Inicializar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    animateSkillCards();
});