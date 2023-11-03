const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('vis');
        } else {
            entry.target.classList.remove('vis');
        }
    });
});

const usynligElementer = document.querySelectorAll('.usynlig');
usynligElementer.forEach((el) => observer.observe(el));
