/**
 * BORISAgent — Main JavaScript
 */

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Copy bibtex to clipboard
function copyBibtex(btn) {
  const pre = document.getElementById('bibtex-text');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}

// Video hover play (for when real videos are added)
document.querySelectorAll('.video-thumb').forEach(thumb => {
  const video = thumb.querySelector('video');
  if (!video) return;
  thumb.addEventListener('mouseenter', () => video.play());
  thumb.addEventListener('mouseleave', () => video.pause());
});
