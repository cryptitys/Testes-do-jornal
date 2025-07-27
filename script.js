document.addEventListener('DOMContentLoaded', function() {
  // Menu Mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', function() {
    this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Animação de scroll
  const fadeElements = document.querySelectorAll('.highlight-card, .notice-card, .gallery-item');
  
  const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  };
  
  // Verificar na carga inicial
  fadeInOnScroll();
  
  // Verificar durante o scroll
  window.addEventListener('scroll', fadeInOnScroll);

  // Carrossel de depoimentos (exemplo)
  // Pode ser implementado posteriormente se necessário

  // Galeria lightbox (exemplo)
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      // Implementar lightbox aqui
      console.log('Abrir imagem:', this.querySelector('img').src);
    });
  });

  // Atualizar ano do rodapé
  document.querySelector('.footer-bottom').innerHTML += ` &copy; ${new Date().getFullYear()}`;

  // Efeito hover nos cards de destaques
  const highlightCards = document.querySelectorAll('.highlight-card');
  
  highlightCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('img').style.transform = 'scale(1)';
    });
  });
});

// Função para exibir modal de aviso (exemplo)
function showWelcomeModal() {
  const welcomeShown = localStorage.getItem('welcomeShown');
  
  if (!welcomeShown) {
    // Criar e exibir modal
    const modal = document.createElement('div');
    modal.className = 'welcome-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Bem-vindo ao novo portal escolar!</h3>
        <p>Estamos felizes em tê-lo conosco. Explore nossos recursos e fique por dentro de tudo que acontece na escola.</p>
        <button id="closeModal">Entendi</button>
      </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    document.getElementById('closeModal').addEventListener('click', function() {
      localStorage.setItem('welcomeShown', 'true');
      document.body.removeChild(modal);
      document.body.style.overflow = '';
    });
  }
}

// Chamar a função quando a página carregar
window.addEventListener('load', showWelcomeModal);
