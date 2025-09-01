(() => {
  const KEY = "cookiesConsent";
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;

  const saved = localStorage.getItem(KEY);
  if (!saved) banner.hidden = false;

  document.getElementById("cookie-accept")?.addEventListener("click", () => {
    localStorage.setItem(KEY, "accepted");
    banner.hidden = true;
  });

  document.getElementById("cookie-reject")?.addEventListener("click", () => {
    localStorage.setItem(KEY, "rejected");
    banner.hidden = true;
  });
})();
