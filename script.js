particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#6CE684",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

/////////////REWRITING/////////////





/////////////ANIMATII//////////////
const animatedElement = document.querySelector('.info-text h1');
    observer.observe(animatedElement)
const animated1Element = document.querySelector('.h1-about');
    observer.observe(animated1Element)
const animated2Element = document.querySelector('.h1-features');
    observer.observe(animated2Element)
const animated3Element = document.querySelector('.h1-contact');
    observer.observe(animated3Element)
const animated4Element = document.querySelector('.card');
    observer.observe(animated4Element)
const animated5Element = document.querySelector('.card1');
    observer.observe(animated5Element)
const animated6Element = document.querySelector('.card2');
    observer.observe(animated6Element)
const animated7Element = document.querySelector('.card3');
    observer.observe(animated7Element)
const animated8Element = document.querySelector('.card4');
    observer.observe(animated8Element)
const animated9Element = document.querySelector('.hire-me');
    observer.observe(animated9Element)
const animated10Element = document.querySelector('.footer');
    observer.observe(animated10Element)
