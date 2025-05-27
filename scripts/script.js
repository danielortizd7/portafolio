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
            distance: 200,
            color: "#00f3ff",
            opacity: 0.9,
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

// Modal functionality
function openModal() {
    const modal = document.getElementById('cvModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('cvModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    animateSkillCards();

    const modal = document.getElementById('cvModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});