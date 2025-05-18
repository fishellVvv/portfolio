document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".theme-toggle");
  const icon = document.getElementById("theme-icon");

  toggle.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";

    html.setAttribute("data-theme", isDark ? "light" : "dark");
    icon.textContent = isDark ? "dark_mode" : "light_mode";
  });
});
