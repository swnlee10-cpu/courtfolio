// Courtfolio - basic interactions
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      // Placeholder: later implement full Korean/English content switch
      const current = langToggle.textContent.trim();
      if (current === 'EN') {
        langToggle.textContent = 'KR';
        // Future: switch all data-lang attributes
        console.log('Language switched to English (placeholder)');
      } else {
        langToggle.textContent = 'EN';
        console.log('Language switched to Korean (placeholder)');
      }
    });
  }
});
