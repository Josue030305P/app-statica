
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    

    const stats = document.querySelectorAll('.stat-box h2');
    stats.forEach(stat => {
        const target = +stat.innerText.replace(/[^0-9]/g, '');
        const suffix = stat.innerText.replace(/[0-9]/g, '');
        let current = 0;
        
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            stat.innerText = Math.floor(current) + suffix;
        }, 20);
    });
});


document.querySelector('form')?.addEventListener('submit', (e) => {
    const email = document.querySelector('input[type="email"]');
    if (!email.value.includes('@')) {
        e.preventDefault();
        alert('Por favor ingresa un email válido');
        email.focus();
    }
});