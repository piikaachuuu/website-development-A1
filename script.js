document.addEventListener('DOMContentLoaded', () => {

    // Highlight active nav
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Optional soft pulse animation for image box
    const imageBox = document.querySelector('.image-box');

    if (imageBox) {
        setInterval(() => {
            imageBox.style.transform = "scale(1.03)";
            setTimeout(() => {
                imageBox.style.transform = "scale(1)";
            }, 800);
        }, 2500);
    }

});

document.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }

        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});