const background = document.querySelector('.content');
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        requestAnimationFrame(() => {
            if (window.scrollY > 0) {
                background.style.backgroundPosition = `100% 0`;
            } else {
                background.style.backgroundPosition = `0 0`;
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});
