document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(element => {
        observer.observe(element);
    });

    // Glass Nav scroll effect
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 15, 0.8)';
            nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(10, 10, 15, 0.5)';
            nav.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Interactive Code Editor Typing Effect
    const codeLines = document.querySelectorAll('.mock-editor .line');

    const codeObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            codeLines.forEach((line, index) => {
                line.style.opacity = '0';
                line.style.transform = 'translateY(10px)';
                line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateY(0)';
                }, 500 + (index * 200));
            });
            codeObserver.disconnect();
        }
    }, { threshold: 0.5 });

    const editor = document.querySelector('.mock-editor');
    if (editor) {
        codeObserver.observe(editor);
    }
});
