document.getElementById("langToggle")?.addEventListener("click", function() {
  const btn = this;
  btn.textContent = btn.textContent === "EN" ? "KO" : "EN";
});
