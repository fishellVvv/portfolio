(() => {
  const btn = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!btn || !nav) return;

  const openMenu = () => {
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Cerrar menú");
    nav.hidden = false;
  };
  const closeMenu = () => {
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Abrir menú");
    nav.hidden = true;
  };

  btn.addEventListener("click", () => {
    btn.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  const mq = window.matchMedia("(min-width: 900px)");
  const syncMenu = () => {
    if (mq.matches) {
      nav.hidden = false;
      btn.setAttribute("aria-expanded", "false");
    } else {
      nav.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
  };
  syncMenu();
  mq.addEventListener("change", syncMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
