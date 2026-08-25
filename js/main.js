// Courtfolio - basic interactions
document.addEventListener('DOMContentLoaded', function () {
  var t = document.getElementById('langToggle');
  if (t) {
    t.addEventListener('click', function () {
      t.textContent = t.textContent.trim() === 'EN' ? 'KR' : 'EN';
    });
  }
});
