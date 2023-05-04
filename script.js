
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('menu-icon');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('menu-icon');
    navbar.classList.remove('active');
};

let images = Array.from(document.getElementsByClassName('imgCarousel'))
let mainPhoto = document.getElementById('mainPhoto')
let slide = 0;

function updateImage(event){
    let image = event.target
    mainPhoto.src = image.src
}

images.forEach(function(image){
    image.addEventListener("click",updateImage)
});

function mes(){
    alert('Thankyou for the message, we will contact you as soon as I can. THANKYOU');
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .about-container, about-box ,skills-container , skills-box, activities-container, activities-box ,contactform',{ origin: 'bottom'});

const typed = new Typed('.multiple-text', {
    strings: ['BSIT STUDENT', 'ASPIRING WEB DEVELOPER', 'ANIMO LOVER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});