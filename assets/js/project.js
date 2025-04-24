document.addEventListener('DOMContentLoaded', () => {
    // 1. Grab modal elements
    const modal     = document.getElementById('projectModal');
    const titleEl   = modal.querySelector('.modal-title');
    const imgEl     = modal.querySelector('.modal-img');
    const descEl    = modal.querySelector('.modal-desc');
    const linkEl    = modal.querySelector('.modal-link');
    const closeBtn  = modal.querySelector('.modal-close');
  
    // 2. Open/close helpers
    function openModal({ title, image, description, url }) {
      titleEl.textContent   = title;
      imgEl.src             = image;
      imgEl.alt             = title;
      descEl.textContent    = description;
      linkEl.href           = url || '#';
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // prevent background scroll
    }
    function closeModal() {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  
    // 3. Wire up closing the modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
  
    // 4. Wire up each project-item
    document.querySelectorAll('.project-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault(); // stop the <a> from navigating
  
        // read your data- attributes
        const title       = item.dataset.title;
        const description = item.dataset.description;
        const image       = item.dataset.image;
        const url         = item.dataset.url;
  
        // sanity-check
        if (!title || !image) {
          console.warn('Missing data- attribute on', item);
          return;
        }
  
        openModal({ title, description, image, url });
      });
    });
  });


  item.addEventListener('click', e => {
    e.preventDefault();
  
    const modal = document.getElementById('projectModal');
    const modalContent = modal.querySelector('.modal-content');
  
    const rect = item.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    modalContent.style.top = `${rect.top + scrollTop}px`;
    modalContent.style.left = `${rect.left}px`;
  
    // continue with your existing openModal() logic
  });
  
  