/* Wedding invitation experience (vanilla JS) */

(function () {
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Loading overlay ─────────────────────────────────────────── */
  const loading = document.getElementById("loading");
  function hideLoading() {
    if (!loading) return;
    loading.style.transition = "opacity 400ms ease";
    loading.style.opacity = "0";
    setTimeout(() => { loading.style.display = "none"; }, 420);
  }
  window.addEventListener("load", () => {
    setTimeout(hideLoading, prefersReducedMotion ? 0 : 500);
  });
  setTimeout(hideLoading, 2500);

  /* ── Smooth scrolling ────────────────────────────────────────── */
  const topbar = document.querySelector(".topbar");
  function scrollToHash(hash) {
    if (!hash || hash === "#") return;
    const target = document.querySelector(hash);
    if (!target) return;
    const topbarH = topbar ? topbar.getBoundingClientRect().height : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - topbarH - 10;
    window.scrollTo({ top: Math.max(0, y), behavior: prefersReducedMotion ? "auto" : "smooth" });
  }
  document.addEventListener("click", (e) => {
    const link = e.target && e.target.closest ? e.target.closest("a[href^='#']") : null;
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href.length < 2) return;
    e.preventDefault();
    scrollToHash(href);
    history.pushState(null, "", href);
  }, { passive: false });

  /* ── Reveal on scroll ────────────────────────────────────────── */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ── Invitation book ─────────────────────────────────────────── */
  const book            = document.getElementById("invitationBook");
  const pagesEl         = book ? book.querySelector(".pages") : null;
  const petalsWrap      = book ? book.querySelector("#petals") : null;
  const invitationVideo = document.getElementById("invitationVideo");

  function svgUri(svg) {
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function buildCovers() {
    if (!book) return;
    const leftImg  = book.querySelector('img[data-cover="left"]');
    const rightImg = book.querySelector('img[data-cover="right"]');

    const leftSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fff6ea"/><stop offset="60%" stop-color="#ffdbe8"/><stop offset="100%" stop-color="#eef3ff"/></linearGradient></defs><rect width="900" height="600" fill="url(#bg)"/><rect x="30" y="30" width="840" height="540" rx="28" fill="none" stroke="rgba(185,143,88,0.35)" stroke-width="2"/><circle cx="180" cy="140" r="100" fill="rgba(202,165,106,0.14)"/><circle cx="760" cy="420" r="130" fill="rgba(247,217,225,0.32)"/><path d="M450 170 C510 130,610 135,650 200 C690 265,640 330,450 390 C260 330,210 265,250 200 C290 135,390 130,450 170Z" fill="rgba(255,255,255,0.32)" stroke="rgba(202,165,106,0.7)" stroke-width="4"/><text x="450" y="445" font-family="Georgia,serif" font-size="40" text-anchor="middle" fill="#b98f58" font-weight="700">Naveen &amp; Anjali</text><text x="450" y="485" font-family="Georgia,serif" font-size="20" text-anchor="middle" fill="#6f5f57">Wedding Invitation</text><text x="450" y="520" font-family="Georgia,serif" font-size="15" text-anchor="middle" fill="#caa56a">With love</text></svg>';

    const rightSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600"><defs><linearGradient id="bg2" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#fff6ea"/><stop offset="50%" stop-color="#eef3ff"/><stop offset="100%" stop-color="#ffdbe8"/></linearGradient><linearGradient id="gld" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d9b06f"/><stop offset="50%" stop-color="#f5d98a"/><stop offset="100%" stop-color="#b98f58"/></linearGradient></defs><rect width="900" height="600" fill="url(#bg2)"/><rect x="30" y="30" width="840" height="540" rx="28" fill="none" stroke="rgba(202,165,106,0.35)" stroke-width="2"/><path d="M450 160 C520 115,640 120,680 200 C720 280,660 360,450 430 C240 360,180 280,220 200 C260 120,380 115,450 160Z" fill="rgba(255,255,255,0.40)" stroke="url(#gld)" stroke-width="5"/><text x="450" y="480" font-family="Georgia,serif" font-size="48" text-anchor="middle" fill="#b98f58" font-weight="700">Together</text><text x="450" y="525" font-family="Georgia,serif" font-size="20" text-anchor="middle" fill="#6f5f57">Forever begins</text></svg>';

    if (leftImg)  leftImg.src  = svgUri(leftSvg);
    if (rightImg) rightImg.src = svgUri(rightSvg);
  }

  buildCovers();

  /* Petal shower on open */
  function spawnPetals() {
    if (!petalsWrap || prefersReducedMotion) return;
    petalsWrap.innerHTML = "";
    const w = petalsWrap.getBoundingClientRect().width || 400;
    for (let i = 0; i < 26; i++) {
      const p = document.createElement("div");
      p.className = "petal";
      const size   = 10 + Math.random() * 18;
      const startX = (Math.random() - 0.5) * w * 0.65;
      const drift  = (Math.random() - 0.5) * 160;
      const rot    = (Math.random() * 220 - 110).toFixed(1);
      const dur    = (1.1 + Math.random() * 1.2).toFixed(2) + "s";
      const delay  = (Math.random() * 0.4).toFixed(2) + "s";
      p.style.cssText = "--size:" + size + "px;--start-x:" + startX + "px;--drift:" + drift + "px;--rot:" + rot + "deg;--dur:" + dur + ";--delay:" + delay;
      petalsWrap.appendChild(p);
    }
    setTimeout(() => { if (petalsWrap) petalsWrap.innerHTML = ""; }, 3400);
  }

  function openBook() {
    if (!book) return;
    book.classList.add("is-open");
    book.setAttribute("aria-expanded", "true");
    if (pagesEl) pagesEl.setAttribute("aria-hidden", "false");
    requestAnimationFrame(spawnPetals);
  }

  function closeBook() {
    if (!book) return;
    book.classList.remove("is-open");
    book.setAttribute("aria-expanded", "false");
    if (pagesEl) pagesEl.setAttribute("aria-hidden", "true");
    if (petalsWrap) petalsWrap.innerHTML = "";
    if (invitationVideo && !invitationVideo.paused) invitationVideo.pause();
  }

  function toggleBook() {
    if (!book) return;
    book.classList.contains("is-open") ? closeBook() : openBook();
  }

  if (book) {
    book.addEventListener("click", (e) => {
      /* Let native video controls and the pages area work normally */
      if (e.target && e.target.closest && e.target.closest(".pages")) return;
      toggleBook();
    });
    book.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleBook(); }
    });
  }

  /* ── RSVP personalisation ────────────────────────────────────── */
  const rsvpForm      = document.getElementById("rsvpForm");
  const guestInput    = document.getElementById("guestName");
  const welcomeMsg    = document.getElementById("welcomeMessage");
  const guestNameSpan = document.querySelector(".guest-name");
  let typingTimer     = null;

  function escHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function typeWelcome(text) {
    if (!welcomeMsg) return Promise.resolve();
    if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
    if (prefersReducedMotion) {
      welcomeMsg.innerHTML = escHtml(text).replace(/\n/g, "<br>");
      return Promise.resolve();
    }
    welcomeMsg.innerHTML = "";
    const chars = text.split("");
    return new Promise((resolve) => {
      let i = 0;
      typingTimer = setInterval(() => {
        welcomeMsg.innerHTML = escHtml(chars.slice(0, ++i).join("")).replace(/\n/g, "<br>");
        if (i >= chars.length) { clearInterval(typingTimer); typingTimer = null; resolve(); }
      }, 18);
    });
  }

  if (rsvpForm && guestInput && welcomeMsg) {
    rsvpForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = String(guestInput.value || "").trim();
      if (!name) return;
      if (guestNameSpan) guestNameSpan.textContent = name;
      await typeWelcome("Dear " + name + ",\nYou are invited to celebrate the wedding of Naveen & Anjali.\nWe can't wait to celebrate with you!");
      welcomeMsg.animate(
        [{ transform: "translateY(3px)", opacity: 0.85 }, { transform: "translateY(0)", opacity: 1 }],
        { duration: 520, easing: "cubic-bezier(0.2,0.8,0.2,1)" }
      );
    });
  }

  /* ── Music toggle ────────────────────────────────────────────── */
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic     = document.getElementById("bgMusic");
  const musicLabel  = document.getElementById("musicToggleLabel");

  function setMusicState(playing) {
    if (!musicToggle) return;
    musicToggle.setAttribute("aria-pressed", playing ? "true" : "false");
    if (musicLabel) musicLabel.textContent = playing ? "Pause music" : "Play music";
  }

  if (musicToggle) {
    musicToggle.addEventListener("click", async (e) => {
      e.preventDefault();
      if (!bgMusic) return;
      if (!bgMusic.paused) { bgMusic.pause(); setMusicState(false); return; }
      try { await bgMusic.play(); setMusicState(true); }
      catch { setMusicState(false); }
    });
  }

  /* ── Copy address ────────────────────────────────────────────── */
  const copyBtn = document.getElementById("copyAddressBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const addressEl = document.querySelector(".venue-side__address");
      const addr = addressEl ? addressEl.textContent.trim() : "";
      if (!addr) return;
      try {
        await navigator.clipboard.writeText(addr);
        copyBtn.textContent = "Copied!";
        setTimeout(() => { copyBtn.textContent = "Copy Address"; }, 1200);
      } catch {
        alert("Copy failed — please copy the address manually.");
      }
    });
  }

})();
