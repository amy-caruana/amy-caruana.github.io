document.addEventListener('DOMContentLoaded', () => {
  // 1. Grab modal elements
  const modal     = document.getElementById('projectModal');
  const titleEl   = modal.querySelector('.modal-title');
  const imgEl     = modal.querySelector('.modal-img');
  const descEl    = modal.querySelector('.modal-desc');
  const linkEl    = modal.querySelector('.modal-link');
  const closeBtn  = modal.querySelector('.modal-close');
  const modalContent = modal.querySelector('.modal-content');
  
  // 2. Open/close helpers
  function openModal({ title, image, description, url, rect }) {
    titleEl.textContent = title;
    imgEl.src           = image;
    imgEl.alt           = title;
    descEl.textContent  = description;
    linkEl.href         = url || '#';

    // Positioning based on click
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const estimatedModalHeight = 500;

    let topPosition = rect.top + scrollTop;

    if (viewportHeight - rect.top < estimatedModalHeight / 2) {
      topPosition = scrollTop + viewportHeight / 2 - estimatedModalHeight / 2;
    }

    modalContent.style.top = `${topPosition}px`;
    modalContent.style.left = `50%`;
    modalContent.style.transform = `translateX(-50%)`;

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // 3. Wire up closing
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // 4. Wire up project clicks
  document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault(); 

      const title       = item.dataset.title;
      const description = item.dataset.description;
      const image       = item.dataset.image;
      const url         = item.dataset.url;
      const rect        = item.getBoundingClientRect(); // 🔥

      if (!title || !image) {
        console.warn('Missing data- attribute on', item);
        return;
      }

      openModal({ title, description, image, url, rect });
    });
  });
});
