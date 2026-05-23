/* =========================================================
   DevCard — Final Build · interactions
   ========================================================= */

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- Theme toggle (persists in localStorage) ---------- */
  const themeBtn = $("#theme-toggle");
  const root = document.body;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    root.classList.add("dark");
  }

  themeBtn?.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      root.classList.contains("dark") ? "dark" : "light",
    );
  });

  /* ---------- Mobile nav ---------- */
  const navToggle = $("#nav-toggle");
  const navLinks = $("#nav-links");

  navToggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  $$("#nav-links a").forEach((link) =>
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }),
  );

  /* ---------- Footer year ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Project filter ---------- */
  const filterBtns = $$(".filter");
  const cards = $$(".projects-grid .card");

  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const f = btn.dataset.filter;
      cards.forEach((card) => {
        const tags = (card.dataset.tags || "").split(/\s+/);
        const show = f === "all" || tags.includes(f);
        card.classList.toggle("hidden", !show);
      });
    }),
  );

  /* ---------- Reveal-on-scroll ---------- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }
})();
