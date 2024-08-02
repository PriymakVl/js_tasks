const links = document.querySelectorAll('.menu a');

links.forEach(link => link.onclick = setScrollToSection);


function setScrollToSection(e) {
    e.preventDefault();
    let selector = this.getAttribute('href');
    document.querySelector(selector).scrollIntoView({
        behavior: 'smooth'
    });
}