//! Cursor
document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { 
        const el = document.querySelector('.follow-cursor') 

        window.addEventListener('mousemove', e => { 
        const target = e.target 
        if (!target) return

        if (target.closest('a')) { 
            el.classList.add('follow-cursor_active') 
        } else { 
            el.classList.remove('follow-cursor_active') 
        }

        el.style.left = e.pageX + 'px' 
        el.style.top = e.pageY + 'px' 
        })
    }
    followCursor() 
})

//! Snow
particlesJS("particles-js", {
    particles: {
        number: {
            value: 250,
            density: {
                enable: true,
                value_area: 631.3280775270874
            }
        },
    color: {
        value: "#f08a00",
    },
    shape: {
        type: "circle",
        stroke: {
            width: 0,
            color: "#000000"
        },
        polygon: {
            nb_sides: 5
        },
        image: {
            src: "img/github.svg",
            width: 100,
            height: 100
        }
    },
    opacity: {
        value: 9,
        random: true,
        anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
        }
    },
    size: {
        value: 1.5,
        random: true,
        anim: {
            enable: false,
            speed: 40,
            size_min: 0.4,
            sync: false
        }
    },
    line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
    },
    move: {
        enable: true,
        speed: .3,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
        }
    }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
        onhover: {
            enable: false,
            mode: "bubble"
        },
        onclick: {
            enable: true,
            mode: "repulse"
        },
        resize: true
    },
    modes: {
        grab: {
            distance: 600,
            line_linked: {
                opacity: 0.5
            }
        },
        bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3
        },
        repulse: {
            distance: 200,
            duration: 0.4
        },
        push: {
            particles_nb: 4
        },
        remove: {
            particles_nb: 2
        }
    }
},
retina_detect: true
});

//! Snow Two
particlesJS("particles-jsTwo", {
    particles: {
        number: {
            value: 250,
            density: {
                enable: true,
                value_area: 631.3280775270874
            }
        },
    color: {
        value: "#f08a00",
    },
    shape: {
        type: "circle",
        stroke: {
            width: 0,
            color: "#000000"
        },
        polygon: {
            nb_sides: 5
        },
        image: {
            src: "img/github.svg",
            width: 100,
            height: 100
        }
    },
    opacity: {
        value: 9,
        random: true,
        anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
        }
    },
    size: {
        value: 1.5,
        random: true,
        anim: {
            enable: false,
            speed: 40,
            size_min: 0.4,
            sync: false
        }
    },
    line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
    },
    move: {
        enable: true,
        speed: .3,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
        }
    }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
        onhover: {
            enable: false,
            mode: "bubble"
        },
        onclick: {
            enable: true,
            mode: "repulse"
        },
        resize: true
    },
    modes: {
        grab: {
            distance: 600,
            line_linked: {
                opacity: 0.5
            }
        },
        bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3
        },
        repulse: {
            distance: 200,
            duration: 0.4
        },
        push: {
            particles_nb: 4
        },
        remove: {
            particles_nb: 2
        }
    }
},
retina_detect: true
});


//!Анимация на navLink
TweenMax.staggerFrom(".navLink", 2, {scale:.5, opacity:0, delay: .5, ease:Elastic.easeOut}, .4)


//!Hello исчезающий блок
window.onload = () => {
    setTimeout(() => {
        document.querySelector('.container').classList.remove('animal');
        document.querySelector('.container').classList.add('hide-animal');
    },5000);
}

//!Анимация в блоке About
gsap.fromTo ('#myPhoto', {x: 300, opacity:0}, {x: 0, opacity:1, duration:2, delay: 9.5})
gsap.fromTo ('.containerTwoImg', {x: 300, opacity:0}, {x: 0, opacity:1, duration:2, delay: 9})
gsap.fromTo ('.containerTwoText', {x: -200}, {x: 0, opacity:1, duration:2, delay: 11, ease: "bounce"})
gsap.to('.headerTwo', {rotation: -8, delay: 13.5, ease: "bounce", duration: 3, color: "#f08a00"})


//! Замена изображения на текст в блоке About и обратно 
const btnAbout = document.querySelector('#btnAbout');
const myPhoto = document.querySelector('#myPhoto');

btnAbout.addEventListener('click', showTextHello);
function showTextHello(e) {
    e.preventDefault();
    let elem = document.getElementById('parHello');
    let style = getComputedStyle(elem);
    if(style.display === 'none') {
        document.getElementById('parHello').style.display = 'block';
        myPhoto.style.display = 'none';
        btnAbout.textContent = 'Back';
        btnAbout.style.color = '#f08a00';
        gsap.fromTo ('#parHello', {x: 300, opacity:0}, {x: 0, opacity:1, duration: 2 , ease: "bounce"});
    }
    else if (style.display !== 'none') {
        document.getElementById('parHello').style.display = 'none';
        myPhoto.style.display = 'block';
        btnAbout.textContent = 'About';
        btnAbout.style.color = '#fcfaf8';
        gsap.fromTo ('#myPhoto', {x: 300, opacity:0}, {x: 0, opacity:1, duration: 2, ease: "bounce"});
    }
}

//!Анимация в Skills
const btnSkills = document.querySelector('#btnSkills');

btnSkills .addEventListener('click', showTextSkills);
function showTextSkills(e) {
    e.preventDefault();
    let elem = document.getElementById('skillsParNone');
    let style = getComputedStyle(elem);
    if(style.display === 'none') {
        document.getElementById('skillsParNone').style.display = 'block';
        btnSkills .textContent = 'Back';
        btnSkills .style.color = '#f08a00';
        gsap.fromTo ('#skillsParNone', {opacity:0}, {opacity:1, duration: 3});
    }
    else if (style.display !== 'none') {
        document.getElementById('skillsParNone').style.display = 'none';
        btnSkills .textContent = 'A little more';
        btnSkills .style.color = '#fcfaf8';
    }
}

//!Анимация на кнопки (пузырьки)
const btnAnimal = document.querySelector(".btnAnimal");

btnAnimal.addEventListener("click", (e) => {
    e.preventDefault;
    btnAnimal.classList.add("animate");
    setTimeout(() => {
        btnAnimal.classList.remove("animate");
    }, 600);
});


const btnAnimalTwo = document.querySelector(".btnAnimalTwo");

btnAnimalTwo.addEventListener("click", (e) => {
    e.preventDefault;
    btnAnimalTwo.classList.add("animate");
    setTimeout(() => {
        btnAnimalTwo.classList.remove("animate");
    }, 600);
});


//!Анимация Contact icon
const instagram = document.querySelector('.instagram');

instagram.addEventListener('mouseover', () => {
    gsap.fromTo(".instagramImg", {y: 0, scale:.95, opacity: .8}, {y: -20, duration: 3, scale:1, opacity: 1, ease: "bounce"})
    gsap.fromTo("#socialI", {color: '#f08a00'}, {color: '#fcfaf8', duration: 9})
})

const telegram = document.querySelector('.telegram');

telegram.addEventListener('mouseover', () => {
    gsap.fromTo(".telegramImg", {y: 0, scale:.95, opacity: .8}, {y: -20, duration: 3, scale:1, opacity: 1, ease: "bounce"})
    gsap.fromTo("#socialT", {color: '#f08a00'}, {color: '#fcfaf8', duration: 9})
})

const ld = document.querySelector('.ld');

ld.addEventListener('mouseover', () => {
    gsap.fromTo(".LdImg", {y: 0, scale:.95, opacity: .8}, {y: -20, duration: 3, scale:1, opacity: 1.2, ease: "bounce"})
    gsap.fromTo("#socialL", {color: '#f08a00'}, {color: '#fcfaf8', duration: 9})
})

const email = document.querySelector('.email');

email.addEventListener('mouseover', () => {
    gsap.fromTo(".emailImg", {y: 0, scale:.95, opacity: .8}, {y: -20, duration: 3, scale:1, opacity: 1.2, ease: "bounce"})
})


