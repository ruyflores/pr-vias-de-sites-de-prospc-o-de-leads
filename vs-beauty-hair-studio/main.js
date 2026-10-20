// VS Beauty Hair Studio: interações do esqueleto
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof window.gsap !== 'undefined';

  // Header ganha linha ao rolar
  const header = document.querySelector('[data-header]');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Momento orquestrado: o fio se desenha e o título sobe linha a linha
  if (hasGsap && !reduceMotion) {
    document.documentElement.classList.add('js-motion');
    const path = document.querySelector('.strand path');
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.hero-title .line > span', { yPercent: 110, duration: 1, stagger: 0.12 })
      .to(path, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, '-=0.6')
      .from('.hero-sub, .hero-actions', { opacity: 0, y: 14, duration: 0.7, stagger: 0.1 }, '-=1.1')
      .from('.hero-media .ph', { opacity: 0, y: 40, duration: 1.1, stagger: 0.15 }, 0.2);

    // Parallax leve nas imagens do hero
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.hero-media .ph-small', {
        yPercent: -12, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      });
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' })
      });
    }
  }

  // Antes e depois
  const compare = document.querySelector('[data-compare]');
  if (compare) {
    const range = compare.querySelector('input');
    range.addEventListener('input', () => compare.style.setProperty('--pos', range.value + '%'));
  }

  // Carrossel de depoimentos: anterior/próximo/pausar, para no hover/foco
  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const slides = [...carousel.querySelectorAll('.quote')];
    const label = carousel.querySelector('[data-count-label]');
    const pauseBtn = carousel.querySelector('[data-pause]');
    let index = 0;
    let timer = null;
    let userPaused = reduceMotion;

    const show = (i) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle('is-active', n === index));
      label.textContent = `${index + 1} / ${slides.length}`;
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => { if (!userPaused && !timer) timer = setInterval(() => show(index + 1), 6000); };

    carousel.querySelector('[data-prev]').addEventListener('click', () => show(index - 1));
    carousel.querySelector('[data-next]').addEventListener('click', () => show(index + 1));
    pauseBtn.addEventListener('click', () => {
      userPaused = !userPaused;
      pauseBtn.setAttribute('aria-pressed', String(userPaused));
      pauseBtn.setAttribute('aria-label', userPaused ? 'Retomar rotação' : 'Pausar rotação');
      userPaused ? stop() : start();
    });
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    carousel.addEventListener('focusin', stop);
    carousel.addEventListener('focusout', start);
    start();
  }

  // Horário: destaca hoje e diz se está aberto (fuso de Brasília)
  const hours = { 0: [9, 14], 1: [9, 17], 2: [9, 17], 3: [9, 20], 4: [9, 20], 5: [9, 20], 6: [9, 20] };
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  const day = now.getDay();
  const row = document.querySelector(`[data-hours] tr[data-day="${day}"]`);
  if (row) row.classList.add('is-today');
  const openNow = document.querySelector('[data-open-now]');
  if (openNow) {
    const h = now.getHours() + now.getMinutes() / 60;
    const [o, c] = hours[day];
    openNow.innerHTML = h >= o && h < c
      ? `<strong>Aberto agora</strong>, fecha às ${c}:00`
      : `Fechado agora. Abre às 0${hours[h >= c ? (day + 1) % 7 : day][0]}:00`;
  }
})();
