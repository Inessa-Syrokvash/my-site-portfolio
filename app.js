//!Animation portfoloi
gsap.registerPlugin(ScrollTrigger)

if (ScrollTrigger.isTouch !== 1) {


	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'top',
			end: '600',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -150 }, {
			opacity: 1, x: 0, delay: 2,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-250',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
    
	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 150 }, {
			opacity: 1, x: 0, delay: 2,
			scrollTrigger: {
				trigger: item,
				start: '-950',
				end: '-250',
				scrub: true
			}
		})
	})

	let itemsS = gsap.utils.toArray('.gallery__straight .gallery__item')

	itemsS.forEach(item => {
		gsap.fromTo(item, { opacity: 0}, {
			opacity: 1, delay: 2, 
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: '-150',
				scrub: true
			}
		})
	})
	

    //!Анимация Skills
    gsap.fromTo("#js", {opacity: 0, x: 100, scale:.5}, {
        scrollTrigger: ".skills", 
        x: 0, duration: 8, delay: .5, opacity: 1, scale:1, ease:Elastic.easeOut,
        start: 'top',
		end: 'center',
		scrub: true
    });
    gsap.fromTo("#gsap", {opacity: 0, x: 100, scale:.5}, {
        scrollTrigger: ".skills", 
        x: 0, duration: 8, delay: 1.5, opacity: 1, scale:1, ease:Elastic.easeOut,
        start: 'top',
		end: 'center',
		scrub: true
    });
    gsap.fromTo("#html", {opacity: 0, x: 100, scale:.5}, {
        scrollTrigger: ".skills", 
        x: 0, duration: 8, delay: 2.5, opacity: 1, scale:1, ease:Elastic.easeOut,
        start: 'top',
		end: 'center',
		scrub: true
    });
    gsap.fromTo("#css", {opacity: 0, x: 100, scale:.5}, {
        scrollTrigger: ".skills", 
        x: 0, duration: 8, delay: 3.5, opacity: 1, scale:1, ease:Elastic.easeOut,
        start: 'top',
		end: 'center',
		scrub: true
    });
    gsap.fromTo("#api", {opacity: 0, x: 100, scale:.5}, {
        scrollTrigger: ".skills", 
        x: 0, duration: 8, delay: 4.5, opacity: 1, scale:1, ease:Elastic.easeOut,
        start: 'top',
		end: 'center',
		scrub: true
    });
    gsap.fromTo("#bootstrap", {opacity: 0, x: 100, scale:.5}, {
        scrollTrigger: ".skills", 
        x: 0, duration: 8, delay: 5.5, opacity: 1, scale:1, ease:Elastic.easeOut,
        start: 'top',
		end: 'center',
		scrub: true
    });
}
