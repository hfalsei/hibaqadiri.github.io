document.addEventListener('DOMContentLoaded', () => {

    // Custom Cursor
    const dot = document.createElement('div');
    const outline = document.createElement('div');
    dot.className = 'cursor-dot';
    outline.className = 'cursor-outline';
    document.body.appendChild(dot);
    document.body.appendChild(outline);

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        outline.animate({ left: `${x}px`, top: `${y}px` }, { duration: 500, fill: "forwards" });
    });

    const hoverables = document.querySelectorAll('a, .video-card, .cinema-card, .xp-item, .header-cta, .linkedin-btn');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // Lightbox
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `<video class="modal-content" controls autoplay></video>`;
    document.body.appendChild(modal);
    const modalVid = modal.querySelector('video');

    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const src = card.querySelector('video').getAttribute('src');
            modalVid.src = src;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalVid.pause();
        modalVid.src = "";
    });
});