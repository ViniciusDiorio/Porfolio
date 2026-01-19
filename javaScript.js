const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('open');
        navMenu.classList.remove('active');
    });
});

const iconemenu = document.querySelector('.menu-icon');

iconemenu.addEventListener('click', () => {
    iconemenu.classList.toggle('open');
});

window.addEventListener('load', () => {
    const content = document.querySelector('.hero-content');
    const image = document.querySelector('.hero-image');
    
    content.style.opacity = '0';
    content.style.transform = 'translateX(-30px)';
    image.style.opacity = '0';
    image.style.transform = 'scale(0.8)';

    setTimeout(() => {
        content.style.transition = 'all 1s ease-out';
        content.style.opacity = '1';
        content.style.transform = 'translateX(0)';
        
        image.style.transition = 'all 1s ease-out 0.3s';
        image.style.opacity = '1';
        image.style.transform = 'scale(1)';
    }, 100);
});

const btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('mouseover', () => {
    console.log("Mouse sobre o contato!");
});

(function() {
    const menu = document.querySelector('.menu-icon');

    menu.onclick = () => {
        menu.classList.toggle('open');
    }
})();

const observerOptions = {
    threshold: 0.3
};




// Configurações do observador de scroll para a seção de habilidades
const skillsObserverSettings = {
    threshold: 0.2
};

const skillsScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Efeito de cascata: cada card aparece com um pequeno delay
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 50); 
            
            // Para de observar após animar pela primeira vez
            skillsScrollObserver.unobserve(entry.target);
        }
    });
}, skillsObserverSettings);

// Aplica o observer em todos os cards de habilidades
document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.5s ease-out";
    skillsScrollObserver.observe(card);
});










const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

const aboutContainer = document.querySelector('.about-container');
if (aboutContainer) {
    revealOnScroll.observe(aboutContainer);
}

const contactCards = document.querySelectorAll('.contact-card');

const revealContacts = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150); 
        }
    });
}, { threshold: 0.2 });

contactCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    revealContacts.observe(card);
});




/* Animação de scroll para as seções About, Projects */
window.addEventListener('scroll', () => {
    // CORREÇÃO: Todos os seletores devem estar dentro de uma única string, separados por vírgula.
    // Também adicionei o ponto (.) que faltava no 'projects-section'
    const elementos = document.querySelectorAll('.about-section, .skills-section, .projects-section');
    
    elementos.forEach(elemento => {
        const rect = elemento.getBoundingClientRect();
        const alturaJanela = window.innerHeight;
        
        // Verifica se o topo do elemento entrou 20% abaixo do topo da tela
        const estaVisivel = (rect.top < alturaJanela * 0.8) && (rect.bottom > 0);

        if (estaVisivel) {
            elemento.classList.add('show');
        } else {
            elemento.classList.remove('show');
        }
    });
});


