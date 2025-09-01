(() => {
  const toggle = document.querySelector(".theme-toggle");
  const icon = document.getElementById("theme-icon");
  if (!toggle || !icon) return;

  toggle.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    icon.textContent = isDark ? "dark_mode" : "light_mode";
  });
})();
