const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.nav-links');toggle?.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});links?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{links.classList.remove('open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();


/* ---------- 3D photo rotation + smile ---------- */
(function () {
  const stage = document.getElementById('photo3d');
  if (!stage) return;
  const card = stage.querySelector('.photo-card');

  // Smile photo: enabled only if profile-smile.png exists next to profile.png
  const smileImg = stage.querySelector('.photo-smile');
  if (smileImg) {
    const probe = new Image();
    probe.onload = () => { smileImg.hidden = false; stage.classList.add('has-smile'); };
    probe.src = 'profile-smile.png';
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  const MAX_TILT = 16;   // degrees of pointer-driven tilt
  const SWAY = 12;       // degrees of idle left/right sway
  const EASE = 0.08;     // smoothing (lower = softer)

  let hovering = false;
  let px = 0, py = 0;
  let ry = 0, rx = 0;
  let spin = 0, spinTarget = 0;
  let visible = true;
  const start = performance.now();

  stage.addEventListener('pointermove', (e) => {
    const r = stage.getBoundingClientRect();
    px = ((e.clientX - r.left) / r.width) * 2 - 1;
    py = ((e.clientY - r.top) / r.height) * 2 - 1;
    hovering = true;
  });
  stage.addEventListener('pointerleave', () => { hovering = false; stage.classList.remove('is-active'); });
  stage.addEventListener('pointerdown', () => stage.classList.add('is-active'));
  stage.addEventListener('pointerup', () => stage.classList.remove('is-active'));

  // Click, tap, Enter or Space = full 360° spin (and a smile)
  const doSpin = () => {
    spinTarget += 360;
    stage.classList.add('is-smiling');
    setTimeout(() => stage.classList.remove('is-smiling'), 1800);
  };
  stage.addEventListener('click', doSpin);
  stage.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doSpin(); }
  });

  // Pause when scrolled out of view
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }).observe(stage);
  }

  function frame(now) {
    if (visible) {
      const t = (now - start) / 1000;
      const targetY = hovering ? px * MAX_TILT : Math.sin(t * 0.9) * SWAY;
      const targetX = hovering ? -py * MAX_TILT : Math.cos(t * 0.7) * 3;

      ry += (targetY - ry) * EASE;
      rx += (targetX - rx) * EASE;
      spin += (spinTarget - spin) * 0.06;

      card.style.setProperty('--ry', (ry + spin).toFixed(2) + 'deg');
      card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      card.style.setProperty('--rz', (hovering ? 0 : 2) + 'deg');
      card.style.setProperty('--gx', (50 + ry * 2.5) + '%');
      card.style.setProperty('--gy', (35 - rx * 2.5) + '%');
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();