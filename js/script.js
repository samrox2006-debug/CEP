// Navegação entre seções
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active de todos
        navItems.forEach(nav => nav.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Adiciona active ao clicado
        item.classList.add('active');
        const sectionId = item.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');

        // Scroll suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Adicionar animação de hover nos exemplos de código
const codeBlocks = document.querySelectorAll('pre');
codeBlocks.forEach(block => {
    block.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.01)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    block.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});