/* Show ze menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu Showing */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}

/* Menu Hidden */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    });
}

/* Remove Menu */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    //clicking on each nav__link will remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click', linkAction));

/* Blur Header */
const blurHeader = ()=>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header') 
}
window.addEventListener('scroll', blurHeader)

/* Show Scrollup */
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/* Scroll Reveal Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal('.home__data, .skills')
sr.reveal('.home__img', {delay: 600})
sr.reveal('.home__scroll', {delay: 800})
sr.reveal('.project__card', {interval:100})
sr.reveal('.about__content', {origin: 'right'})
