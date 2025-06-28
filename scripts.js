// Inicializando o EmailJS com o seu User ID
(function(){
    emailjs.init("F55VGS2_54MMBBuhT"); // Substituído pelo seu User ID
})();

// Seletor do formulário
const contactForm = document.getElementById('contactForm');

// Envio do formulário
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Envia o formulário usando EmailJS
    emailjs.sendForm("service_5vxjoz8", "template_3r3mjjk", contactForm)
        .then(function(response) {
            alert("Obrigado! Sua mensagem foi enviada com sucesso.");
            contactForm.reset(); // Limpa o formulário
        }, function(error) {
            console.error("Erro ao enviar:", error); // Logar o erro no console
            alert("Houve um erro ao enviar sua mensagem. Tente novamente.");
        });
});

// Verificação de rolagem para o botão "Voltar ao topo"
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

// Ação de voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Rolagem suave
    });
});

// Rolagem suave para links de âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alternando a visibilidade do menu de hambúrguer
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.contains('hidden');
    if (isOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'true');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    }
});

// Interação com os cards de serviço
document.querySelectorAll('.service-card-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remover a classe 'active' de todos os cards
        document.querySelectorAll('.service-card-item').forEach(card => {
            if (card !== this) {
                card.classList.remove('active');
                card.querySelector('.service-details').classList.remove('show');
            }
        });

        // Toggle da classe 'active' para expandir o card clicado
        this.classList.toggle('active');
        
        // Toggle da visibilidade dos detalhes do card clicado
        const details = this.querySelector('.service-details');
        details.classList.toggle('show');
    });
});


