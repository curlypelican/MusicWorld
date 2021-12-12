document.querySelector('.hero-btn').addEventListener('click', () => {
    if (!document.querySelector('.hero-btn').parentElement.classList.contains('active')) {
        document.querySelector('.hero-btn').parentElement.classList.add('active');
        setTimeout(() => {
            document.querySelector('.hero-btn').parentElement.classList.remove('active');
        }, 1500);
    }
});

