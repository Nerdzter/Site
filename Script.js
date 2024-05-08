// Função para mostrar/esconder o formulário de contato ao clicar no botão Contratar
document.querySelector('.btn-contratar').addEventListener('click', function() {
    const formContato = document.querySelector('.form-contato');
    formContato.classList.toggle('show');
});

// Função para alternar entre os serviços ao clicar nas setas
document.querySelectorAll('.seta-direita').forEach(function(seta) {
    seta.addEventListener('click', function() {
        const services = document.querySelectorAll('.text-wrapper-2');
        const currentService = document.querySelector('.text-wrapper-2.active');

        let nextService;

        if (currentService.nextElementSibling) {
            nextService = currentService.nextElementSibling;
        } else {
            nextService = services[0];
        }

        currentService.classList.remove('active');
        nextService.classList.add('active');
    });
});

document.querySelectorAll('.seta-esquerda').forEach(function(seta) {
    seta.addEventListener('click', function() {
        const services = document.querySelectorAll('.text-wrapper-2');
        const currentService = document.querySelector('.text-wrapper-2.active');

        let prevService;

        if (currentService.previousElementSibling) {
            prevService = currentService.previousElementSibling;
        } else {
            prevService = services[services.length - 1];
        }

        currentService.classList.remove('active');
        prevService.classList.add('active');
    });
});

// Função para rolar suavemente para a seção correspondente ao clicar nos links do menu
document.querySelectorAll('.menu-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
