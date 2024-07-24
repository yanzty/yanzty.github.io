/* script.js */
document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (window.innerWidth <= 768) {
            document.getElementById('nav-menu').classList.remove('active');
        }
    });
});
