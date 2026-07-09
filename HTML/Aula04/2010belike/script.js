/* ============================================================
   ISAAC :: script.js
   Digital clock, visitor counter, scroll effects, welcome modal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loading screen (Windows 2000 style boot) ---------- */
  const loader = document.createElement('div');
  loader.className = 'loading-screen';
  loader.innerHTML = `
    <div style="font-family:Impact,'Arial Black',sans-serif;font-size:28px;letter-spacing:2px;color:#FFCC00;">ISAAC</div>
    <div style="font-size:11px;letter-spacing:2px;">LOADING KNOWLEDGE PORTAL...</div>
    <div class="loading-bar-track"><div class="loading-bar-fill"></div></div>
  `;
  document.body.prepend(loader);
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }, 900);
  });

  /* ---------- Digital clock ---------- */
  function updateClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const timeStr = `${hh}:${mm}:${ss}`;
    const clockEl = document.getElementById('clock');
    const sideClockEl = document.getElementById('sideClock');
    if (clockEl) clockEl.textContent = timeStr;
    if (sideClockEl) sideClockEl.textContent = timeStr;
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* ---------- Visitor counter (animated count-up, persisted per session) ---------- */
  const BASE_COUNT = 24581;
  const sessionBump = Math.floor(Math.random() * 40);
  const finalCount = BASE_COUNT + sessionBump;

  function animateCount(el, target) {
    if (!el) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = String(current).padStart(9, '0');
    }, 20);
  }
  animateCount(document.getElementById('visitorCount'), finalCount);
  animateCount(document.getElementById('sideVisitor'), finalCount);

  /* ---------- Skill bars fill on scroll into view ---------- */
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('filled');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  skillFills.forEach(fill => skillObserver.observe(fill));

  /* ---------- Card reveal animation on scroll ---------- */
  const revealTargets = document.querySelectorAll('.hobby-card, .panel');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'none';
        entry.target.style.opacity = '1';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(0)';
    revealObserver.observe(el);
  });
  // fade-in fallback in case IntersectionObserver misses (e.g. already in view)
  setTimeout(() => {
    document.querySelectorAll('.hobby-card, .panel').forEach(el => {
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = '1';
    });
  }, 50);

  /* ---------- Active nav link highlight on scroll ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  function setActiveLink() {
    let currentId = 'top';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) currentId = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }
  window.addEventListener('scroll', setActiveLink);

  /* ---------- Back to top button ---------- */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Welcome modal ---------- */
  const welcomeModal = document.getElementById('welcomeModal');
  const closeWelcome = document.getElementById('closeWelcome');
  setTimeout(() => {
    if (welcomeModal) welcomeModal.classList.remove('hidden');
  }, 1300);
  if (closeWelcome) {
    closeWelcome.addEventListener('click', () => {
      welcomeModal.classList.add('hidden');
    });
  }
  if (welcomeModal) {
    welcomeModal.addEventListener('click', (e) => {
      if (e.target === welcomeModal) welcomeModal.classList.add('hidden');
    });
  }

  /* ---------- Windows-style folder click feedback ---------- */
  document.querySelectorAll('.win-folder').forEach(folder => {
    folder.addEventListener('click', () => {
      folder.style.background = '#FFE066';
      setTimeout(() => { folder.style.background = ''; }, 250);
    });
  });

});
