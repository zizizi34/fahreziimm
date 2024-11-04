window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { 
        header.classList.add('blur');
    } else {
        header.classList.remove('blur');
    }
});
