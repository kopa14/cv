(() => {
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.menu-toggle');
  const toTop = document.querySelector('.to-top');
  const t = (key) => (window.i18n ? window.i18n.t(key) : key);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Light / dark theme ---------- */
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  function showTheme(theme) {
    root.dataset.theme = theme;
    const other = theme === 'light' ? 'dark' : 'light';
    if (themeMeta) themeMeta.content = theme === 'light' ? '#f6f8f9' : '#060b14';
    themeButtons.forEach((btn) => {
      // The button shows what you switch TO: a moon in light mode, a sun in dark mode.
      btn.querySelector('use').setAttribute('href', other === 'light' ? '#i-sun' : '#i-moon');
      btn.setAttribute('aria-label', t(other === 'light' ? 'theme.toLight' : 'theme.toDark'));
      const label = btn.querySelector('.theme-label');
      if (label) label.textContent = t(other === 'light' ? 'theme.light' : 'theme.dark');
    });
  }
  themeButtons.forEach((btn) => btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    showTheme(next);
    try { localStorage.setItem('nb-theme', next); } catch (_) { /* ignore */ }
  }));
  document.addEventListener('langchange', () => showTheme(root.dataset.theme || 'dark'));
  showTheme(root.dataset.theme || 'dark');

  /* ---------- Mobile menu ---------- */
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.open'));
    toggle.querySelector('use').setAttribute('href', open ? '#i-x' : '#i-menu');
  }
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });
  document.addEventListener('langchange', () => setMenu(nav.classList.contains('is-open')));
  setMenu(false);   // sets the button's label in the current language on load

  /* ---------- Active nav link (scrollspy) ---------- */
  const links = [...document.querySelectorAll('.nav-links a')];
  const targets = links.map((a) => document.querySelector(a.getAttribute('href')));

  function updateActiveLink() {
    const line = window.innerHeight * 0.35;
    let index = 0;
    targets.forEach((section, i) => {
      if (section && section.getBoundingClientRect().top <= line) index = i;
    });
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) index = targets.length - 1;
    links.forEach((a, i) => {
      a.classList.toggle('is-active', i === index);
      if (i === index) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  /* ---------- Scroll-driven header state ---------- */
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 10);
      toTop.classList.toggle('is-visible', y > 700);
      updateActiveLink();
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Count-up numbers ---------- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        entry.target.querySelectorAll('[data-count]').forEach(animateCount);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Copy email ---------- */
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    const label = btn.querySelector('.copy-label');
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        btn.classList.add('is-copied');
        if (label) label.innerHTML = t('contact.copied');
        setTimeout(() => {
          btn.classList.remove('is-copied');
          if (label) label.innerHTML = t('contact.copy');
        }, 2000);
      } catch (_) {
        window.location.href = `mailto:${btn.dataset.copy}`;
      }
    });
  });

  /* ---------- Flip card: the Charlemagne card flies to the centre and flips to its story ---------- */
  const storyDialog = document.getElementById('story-charlemagne');
  const storyCard = document.getElementById('card-charlemagne');
  if (storyDialog && storyCard && typeof storyDialog.showModal === 'function') {
    const trigger = storyCard.querySelector('.project-link');
    const flip = storyDialog.querySelector('.flip');
    const inner = storyDialog.querySelector('.flip-inner');
    const front = storyDialog.querySelector('.flip-front');
    const back = storyDialog.querySelector('.flip-back');
    const scroller = storyDialog.querySelector('.story-scroll');
    const timing = { duration: 750, easing: 'cubic-bezier(0.2, 0.75, 0.15, 1)', fill: 'forwards' };
    let busy = false;
    let closeRequested = false;
    let opening = false;
    // Animations pause in background tabs; never wait on them longer than their own length.
    const settle = (anims) => Promise.race([
      Promise.all(anims.map((a) => a.finished)).catch(() => {}),
      new Promise((resolve) => setTimeout(resolve, timing.duration + 400)),
    ]);

    const rectOf = (el) => {
      const r = el.getBoundingClientRect();
      return { left: r.left, top: r.top, width: r.width, height: r.height };
    };
    const finalRect = () => {
      const width = Math.min(760, window.innerWidth - 32);
      const height = Math.min(700, window.innerHeight * 0.86, window.innerHeight - 32);
      return { left: (window.innerWidth - width) / 2, top: (window.innerHeight - height) / 2, width, height };
    };
    const px = (r) => ({ left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` });
    const place = (r) => Object.assign(flip.style, px(r));

    // iOS Safari doesn't reliably hide a flipped face (blurred badges bleed through mirrored),
    // so each face is switched off at the halfway point, when the card is edge-on.
    const shown = [{ visibility: 'visible' }, { visibility: 'visible', offset: 0.5 }, { visibility: 'hidden', offset: 0.5 }, { visibility: 'hidden' }];
    const hidden = [{ visibility: 'hidden' }, { visibility: 'hidden', offset: 0.5 }, { visibility: 'visible', offset: 0.5 }, { visibility: 'visible' }];
    const showFace = (showBack) => {
      front.style.visibility = showBack ? 'hidden' : '';
      back.style.visibility = showBack ? '' : 'hidden';
    };

    function lockScroll(lock) {
      const gap = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = lock ? 'hidden' : '';
      document.body.style.paddingRight = lock && gap > 0 ? `${gap}px` : '';
    }

    async function openStory() {
      if (busy || storyDialog.open) return;
      busy = true;
      opening = true;
      closeRequested = false;
      // The front face is a copy of the card exactly as it looks in the grid.
      front.className = 'flip-face flip-front project';
      front.replaceChildren(...storyCard.cloneNode(true).childNodes);
      front.inert = true;   // decorative copy: never focusable

      lockScroll(true);
      const from = rectOf(storyCard);
      const to = finalRect();
      place(from);
      storyDialog.showModal();
      scroller.scrollTop = 0;
      storyCard.style.visibility = 'hidden';
      requestAnimationFrame(() => storyDialog.classList.add('is-open'));

      if (!reduceMotion) {
        const move = flip.animate([px(from), px(to)], timing);
        const turn = inner.animate([{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(180deg)' }], timing);
        const faces = [front.animate(shown, timing), back.animate(hidden, timing)];
        await settle([move, turn]);
        [move, turn, ...faces].forEach((a) => a.cancel());
      }
      place(to);
      inner.style.transform = 'rotateY(180deg)';
      showFace(true);
      busy = false;
      opening = false;
      if (closeRequested) { closeRequested = false; closeStory(); }   // ✕ or Esc pressed mid-flip
    }

    async function closeStory() {
      if (!storyDialog.open) return;
      if (busy) { if (opening) closeRequested = true; return; }   // remember a close asked for mid-flip
      busy = true;
      storyDialog.classList.remove('is-open');
      if (!reduceMotion) {
        const move = flip.animate([px(rectOf(flip)), px(rectOf(storyCard))], timing);
        const turn = inner.animate([{ transform: 'rotateY(180deg)' }, { transform: 'rotateY(0deg)' }], timing);
        const faces = [front.animate(hidden, timing), back.animate(shown, timing)];
        await settle([move, turn]);
        [move, turn, ...faces].forEach((a) => a.cancel());
      }
      inner.style.transform = '';
      showFace(false);
      storyCard.style.visibility = '';
      storyDialog.close();
      lockScroll(false);
      trigger.focus({ preventScroll: true });
      busy = false;
    }

    trigger.addEventListener('click', openStory);
    storyDialog.querySelector('.story-close').addEventListener('click', closeStory);
    storyDialog.addEventListener('cancel', (e) => { e.preventDefault(); closeStory(); });   // Esc key
    storyDialog.addEventListener('click', (e) => { if (e.target === storyDialog) closeStory(); });
    window.addEventListener('resize', () => { if (storyDialog.open && !busy) place(finalRect()); });
  }

  /* ---------- Footer year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
