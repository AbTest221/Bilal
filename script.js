// ---------- BALLOONS ----------
(function spawnBalloons() {
  const container = document.getElementById('balloons');
  const colors = ['#ff6fa5', '#a78bfa', '#ffcb6b', '#ff9ec8', '#7dd3fc'];
  const count = window.innerWidth < 600 ? 8 : 14;

  for (let i = 0; i < count; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    const color = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.background = `radial-gradient(circle at 30% 30%, ${color}dd, ${color})`;
    balloon.style.left = Math.random() * 100 + 'vw';
    const duration = 14 + Math.random() * 10;
    balloon.style.animationDuration = duration + 's';
    balloon.style.animationDelay = -(Math.random() * duration) + 's';
    const scale = 0.7 + Math.random() * 0.6;
    balloon.style.transform = `scale(${scale})`;
    container.appendChild(balloon);
  }
})();

// ---------- CONFETTI (canvas) ----------
(function confetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const colors = ['#ff6fa5', '#ffcb6b', '#a78bfa', '#ff9ec8', '#fff8f0'];
  const pieces = [];
  const total = window.innerWidth < 600 ? 60 : 110;

  for (let i = 0; i < total; i++) {
    pieces.push({
      x: Math.random() * w,
      y: -Math.random() * h,
      size: 5 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: 1 + Math.random() * 2.5,
      speedX: (Math.random() - 0.5) * 1.5,
      rotation: Math.random() * 360,
      spin: (Math.random() - 0.5) * 8,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    pieces.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.01);
      p.rotation += p.spin;

      if (p.y > h + 20) {
        p.y = -20;
        p.x = Math.random() * w;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    draw();
  }
})();

// ---------- LIGHTBOX ----------
(function lightbox() {
  const items = document.querySelectorAll('.gallery-item img');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  items.forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lb.classList.add('active');
    });
  });

  function close() {
    lb.classList.remove('active');
    lbImg.src = '';
  }

  closeBtn.addEventListener('click', close);
  lb.addEventListener('click', (e) => {
    if (e.target === lb) close();
  });
})();

// ---------- PAUSE OTHER VIDEOS WHEN ONE PLAYS ----------
(function videoManager() {
  const videos = document.querySelectorAll('video');
  videos.forEach(v => {
    v.addEventListener('play', () => {
      videos.forEach(other => {
        if (other !== v) other.pause();
      });
    });
  });
})();
