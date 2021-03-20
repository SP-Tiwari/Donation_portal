// Animation Changing according to width
const checkWidthDoAnime = () => {
    // console.log(window.outerWidth);
    if (window.outerWidth <= 768) {
        const dataAos = document.body.querySelectorAll('[data-aos]');
        for (let i = 0; i < dataAos.length; i++) {
            dataAos[i].setAttribute('data-aos', 'fade-up');
        }
    }
}

// Contact Form
