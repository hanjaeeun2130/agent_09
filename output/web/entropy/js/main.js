/* Entropy — page scripts (no libraries) */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  function reduceMotion() { return reduceMotionQuery.matches; }

  var hasIO = 'IntersectionObserver' in window;

  /* ---------- Helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function formatInt(n) { return n.toLocaleString('ko-KR'); }

  // Returns HTML like "1.27 × 10<sup>30</sup>" for 10^log10
  function sciFromLog10(log10) {
    var exp = Math.floor(log10);
    var mant = Math.pow(10, log10 - exp);
    if (mant >= 9.995) { mant = 1; exp += 1; }
    return mant.toFixed(2) + ' × 10<sup>' + exp + '</sup>';
  }

  // log of n! via summation (n ≤ 100, cached)
  var logFactCache = [0];
  function logFact(n) {
    for (var i = logFactCache.length; i <= n; i++) logFactCache[i] = logFactCache[i - 1] + Math.log(i);
    return logFactCache[n];
  }
  function binomP(n, k) { return Math.exp(logFact(n) - logFact(k) - logFact(n - k) - n * Math.LN2); }

  function formatPercent(p) {
    if (p >= 0.001) return (p * 100).toFixed(p >= 0.1 ? 1 : 2) + '%';
    var log10 = Math.log10(p);
    return sciFromLog10(log10);
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('.menu-toggle');
  var nav = $('#site-nav');
  if (menuBtn && nav) {
    var closeMenu = function () {
      nav.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      $('.visually-hidden', menuBtn).textContent = '메뉴 열기';
    };
    menuBtn.addEventListener('click', function () {
      var open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      $('.visually-hidden', menuBtn).textContent = open ? '메뉴 닫기' : '메뉴 열기';
    });
    $all('a', nav).forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menuBtn.focus(); }
    });
  }

  /* ---------- Scroll progress + dot nav ---------- */
  var progressBar = $('.progress-bar');
  var ticking = false;
  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? window.scrollY / max : 0;
    if (progressBar) progressBar.style.width = (ratio * 100).toFixed(2) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(updateProgress); ticking = true; }
  }, { passive: true });
  updateProgress();

  var dotLinks = $all('.dot-nav a');
  if (hasIO && dotLinks.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        dotLinks.forEach(function (a) {
          var active = a.getAttribute('href') === '#' + id;
          a.classList.toggle('is-active', active);
          if (active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $all('main > section').forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = $all('.reveal');
  if (hasIO && !reduceMotion()) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Second-law statements: dim → bright ---------- */
  var statements = $all('.statement');
  if (hasIO && !reduceMotion()) {
    var stObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('is-active');
      });
    }, { rootMargin: '0px 0px -35% 0px' });
    statements.forEach(function (el) { stObserver.observe(el); });
  } else {
    statements.forEach(function (el) { el.classList.add('is-active'); });
  }

  /* ---------- 1. Particle diffusion hero ---------- */
  (function particles() {
    var canvas = $('#particle-canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var hero = $('#hero');
    var meterFill = $('#meter-fill');
    var meterValue = $('#meter-value');
    var resetBtn = $('#particle-reset');
    var toggleBtn = $('#particle-toggle');

    var W = 0, H = 0, dpr = 1;
    var parts = [];
    var partitionUntil = 0;
    var running = !reduceMotion();
    var visible = true;
    var last = 0;
    var GX = 10, GY = 6;
    var frame = 0;

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = hero.clientWidth; H = hero.clientHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function boxLeft() { return W * (W < 768 ? 0.70 : 0.80); }

    function reset() {
      var n = W < 768 ? 220 : 460;
      parts = [];
      var bx = boxLeft();
      for (var i = 0; i < n; i++) {
        var a = Math.random() * Math.PI * 2;
        var sp = 35 + Math.random() * 70;
        parts.push({
          x: bx + Math.random() * (W - bx),
          y: Math.random() * H,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp,
          r: 1.8 + Math.random() * 2
        });
      }
      partitionUntil = performance.now() + (reduceMotion() ? 0 : 1400);
      draw(performance.now());
      updateMeter();
    }

    function step(dt, now) {
      var wall = now < partitionUntil ? boxLeft() : 0;
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.vx += (Math.random() - 0.5) * 30 * dt;
        p.vy += (Math.random() - 0.5) * 30 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt;
        if (p.x < wall + p.r) { p.x = wall + p.r; p.vx = Math.abs(p.vx); }
        if (p.x > W - p.r) { p.x = W - p.r; p.vx = -Math.abs(p.vx); }
        if (p.y < p.r) { p.y = p.r; p.vy = Math.abs(p.vy); }
        if (p.y > H - p.r) { p.y = H - p.r; p.vy = -Math.abs(p.vy); }
      }
    }

    function draw(now) {
      ctx.clearRect(0, 0, W, H);
      if (now < partitionUntil) {
        var bx = boxLeft();
        ctx.strokeStyle = 'rgba(255,122,61,0.7)';
        ctx.setLineDash([6, 6]);
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(bx, 0); ctx.lineTo(bx, H); ctx.stroke();
        ctx.setLineDash([]);
      }
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        var t = Math.min(1, Math.max(0, 1 - p.x / W));
        var r = Math.round(255 + (124 - 255) * t);
        var g = Math.round(122 + (140 - 122) * t);
        var b = Math.round(61 + (255 - 61) * t);
        ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
    }

    // Spread meter from the Shannon entropy H of particle positions over a coarse grid (0–100%)
    function updateMeter() {
      if (!parts.length) return;
      var cells = new Array(GX * GY);
      for (var c = 0; c < cells.length; c++) cells[c] = 0;
      for (var i = 0; i < parts.length; i++) {
        var gx = Math.min(GX - 1, Math.floor(parts[i].x / W * GX));
        var gy = Math.min(GY - 1, Math.floor(parts[i].y / H * GY));
        cells[gy * GX + gx]++;
      }
      var h = 0, n = parts.length;
      for (var j = 0; j < cells.length; j++) {
        if (cells[j]) { var q = cells[j] / n; h -= q * Math.log(q); }
      }
      // e^H / cells = effective share of the box the particles fill
      var pct = Math.min(100, Math.round(Math.exp(h) / cells.length * 100));
      if (meterFill) meterFill.style.width = pct + '%';
      if (meterValue) meterValue.textContent = pct + '%';
    }

    function loop(now) {
      if (!running || !visible) { last = 0; return; }
      var dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
      last = now;
      step(dt, now);
      draw(now);
      if (++frame % 10 === 0) updateMeter();
      window.requestAnimationFrame(loop);
    }

    function start() { if (running && visible) { last = 0; window.requestAnimationFrame(loop); } }

    function setRunning(on) {
      running = on;
      toggleBtn.textContent = on ? '일시정지' : '재생';
      toggleBtn.setAttribute('aria-pressed', String(!on));
      if (on) start();
    }

    size();
    reset();
    setRunning(running);

    resetBtn.addEventListener('click', function () { reset(); if (!running) setRunning(true); });
    toggleBtn.addEventListener('click', function () { setRunning(!running); });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var oldW = W, oldH = H;
        size();
        parts.forEach(function (p) { p.x = p.x / oldW * W; p.y = p.y / oldH * H; });
        draw(performance.now());
      }, 150);
    });

    if (hasIO) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        start();
      }).observe(hero);
    }
    document.addEventListener('visibilitychange', function () {
      visible = !document.hidden;
      start();
    });
  })();

  /* ---------- 3. Coin microstate counter ---------- */
  (function coins() {
    var slider = $('#coin-count');
    if (!slider) return;
    var out = $('#coin-count-out');
    var tossBtn = $('#coin-toss');
    var tray = $('#coin-tray');
    var hist = $('#histogram');
    var axisMax = $('#axis-max');
    var resultEl = $('#coin-result');
    var resultP = $('#coin-result-p');
    var allHeads = $('#coin-all-heads');
    var half = $('#coin-half');
    var live = $('#coin-live');
    var bars = [];

    function probText(p, n, k) {
      // exact fraction for small N, otherwise approx percent / scientific
      if (n <= 20) {
        var total = Math.pow(2, n);
        var ways = Math.round(p * total);
        return formatInt(ways) + ' / ' + formatInt(total) + ' (' + formatPercent(p) + ')';
      }
      return '약 ' + formatPercent(p);
    }

    function buildHistogram(n) {
      hist.innerHTML = '';
      bars = [];
      var maxP = binomP(n, Math.floor(n / 2));
      for (var k = 0; k <= n; k++) {
        var bar = document.createElement('span');
        bar.className = 'hist-bar';
        bar.style.height = Math.max(0.5, binomP(n, k) / maxP * 100) + '%';
        hist.appendChild(bar);
        bars.push(bar);
      }
      hist.setAttribute('aria-label', '동전 ' + n + '개: 앞면이 절반 근처일 때 막대가 가장 높고, 모두 앞면이나 모두 뒷면 쪽은 거의 0에 가까운 종 모양 분포');
      axisMax.textContent = '앞면 ' + n + '개';
    }

    function update() {
      var n = parseInt(slider.value, 10);
      out.textContent = n;
      buildHistogram(n);
      tray.innerHTML = '';
      tray.setAttribute('aria-label', '아직 던지지 않았어요');
      resultEl.textContent = '아직 안 던졌어요';
      resultP.textContent = '—';
      var log10All = n * Math.log10(2);
      allHeads.innerHTML = n <= 20
        ? '1 / ' + formatInt(Math.pow(2, n)) + ' (' + formatPercent(Math.pow(0.5, n)) + ')'
        : '1 / ' + sciFromLog10(log10All);
      var k = Math.floor(n / 2);
      var ph = binomP(n, k);
      half.innerHTML = (n % 2 === 0 ? '' : '앞면 ' + k + '개: ') + probText(ph, n, k);
    }

    function toss() {
      var n = parseInt(slider.value, 10);
      var heads = 0;
      var frag = document.createDocumentFragment();
      for (var i = 0; i < n; i++) {
        var h = Math.random() < 0.5;
        if (h) heads++;
        var c = document.createElement('span');
        c.className = 'coin ' + (h ? 'coin-h' : 'coin-t');
        c.textContent = h ? '앞' : '뒤';
        frag.appendChild(c);
      }
      tray.innerHTML = '';
      tray.classList.toggle('is-many', n > 30);
      tray.appendChild(frag);
      tray.setAttribute('aria-label', '동전 ' + n + '개 중 앞면 ' + heads + '개, 뒷면 ' + (n - heads) + '개');
      bars.forEach(function (b, idx) { b.classList.toggle('is-current', idx === heads); });
      var p = binomP(n, heads);
      resultEl.textContent = '앞면 ' + heads + '개 · 뒷면 ' + (n - heads) + '개';
      resultP.innerHTML = probText(p, n, heads);
      var dist = Math.abs(heads - n / 2) / n;
      live.textContent = dist < 0.1
        ? '역시 반반 근처가 나왔어요. 이런 “섞인” 결과를 만드는 배치가 압도적으로 많기 때문이에요.'
        : '반반에서 꽤 벗어났네요! 동전 수가 적을 때는 이런 일이 종종 있지만, 동전이 많아질수록 점점 드물어져요.';
    }

    slider.addEventListener('input', update);
    tossBtn.addEventListener('click', toss);
    update();
  })();

  /* ---------- 4. Hot & cold blocks ---------- */
  (function heat() {
    var startBtn = $('#heat-start');
    if (!startBtn) return;
    var blocks = $('#heat-blocks');
    var hotEl = $('#temp-hot');
    var coldEl = $('#temp-cold');
    var anim = null;

    function set(tHot, tCold) {
      hotEl.textContent = Math.round(tHot) + '°C';
      coldEl.textContent = Math.round(tCold) + '°C';
    }

    startBtn.addEventListener('click', function () {
      blocks.classList.add('is-mixed');
      if (anim) cancelAnimationFrame(anim);
      if (reduceMotion()) { set(50, 50); return; }
      var t0 = performance.now(), dur = 3000;
      (function tick(now) {
        var t = Math.min(1, (now - t0) / dur);
        var e = 1 - Math.exp(-4 * t);
        e = e / (1 - Math.exp(-4));
        set(80 - 30 * e, 20 + 30 * e);
        if (t < 1) anim = requestAnimationFrame(tick);
      })(t0);
    });

    $('#heat-reset').addEventListener('click', function () {
      if (anim) cancelAnimationFrame(anim);
      blocks.classList.remove('is-mixed');
      set(80, 20);
    });
  })();

  /* ---------- 6. Biased coin bits ---------- */
  (function bits() {
    var slider = $('#bias');
    if (!slider) return;
    var out = $('#bias-out');
    var val = $('#bits-value');
    var fill = $('#bits-fill');
    var note = $('#bits-note');

    function H(p) {
      if (p <= 0 || p >= 1) return 0;
      return -(p * Math.log2(p) + (1 - p) * Math.log2(1 - p));
    }
    function update() {
      var p = parseInt(slider.value, 10) / 100;
      var h = H(p);
      out.textContent = Math.round(p * 100) + '%';
      val.textContent = h.toFixed(3);
      fill.style.width = (h * 100).toFixed(1) + '%';
      if (p === 0.5) note.textContent = '공정한 동전은 정확히 1비트예요. 결과를 전혀 예측할 수 없으니까요.';
      else if (p === 0 || p === 1) note.textContent = '결과가 100% 정해져 있으면 놀랄 일이 없어요. 정보량은 0비트!';
      else note.textContent = '한쪽으로 기울수록 결과를 맞히기 쉬워지고, 한 번 던질 때 얻는 정보는 1비트보다 작아져요.';
    }
    slider.addEventListener('input', update);
    update();
  })();

  /* ---------- 8. Flip cards ---------- */
  $all('.flip-inner').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
    });
  });

  /* ---------- 8. Quiz ---------- */
  (function quiz() {
    var qs = $all('.quiz-q');
    var scoreEl = $('#quiz-score');
    var correct = 0, answered = 0;
    qs.forEach(function (q) {
      var answer = q.getAttribute('data-answer');
      var opts = $all('.quiz-opt', q);
      opts.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (q.classList.contains('is-answered')) return;
          q.classList.add('is-answered');
          answered++;
          var ok = opt.getAttribute('data-value') === answer;
          if (ok) correct++;
          opts.forEach(function (o) {
            if (o.getAttribute('data-value') === answer) o.classList.add('is-correct');
            else if (o === opt) o.classList.add('is-wrong');
            o.setAttribute('aria-disabled', 'true');
          });
          opt.setAttribute('aria-label', opt.textContent + (ok ? ' — 정답' : ' — 오답'));
          scoreEl.textContent = answered === qs.length
            ? '결과: ' + qs.length + '문제 중 ' + correct + '문제 정답! ' + (correct === qs.length ? '엔트로피 박사네요 🎉' : '위로 올라가 다시 읽어 봐도 좋아요.')
            : qs.length + '문제 중 ' + answered + '문제 풀었어요 (정답 ' + correct + '개)';
        });
      });
    });
  })();
})();
