(function () {
  const savedTheme = localStorage.getItem('medicalStoreTheme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');

  function updateButton() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const dark = document.body.classList.contains('dark-mode');
    btn.innerHTML = dark
      ? '<span class="theme-icon">☀️</span><span>Light Mode</span>'
      : '<span class="theme-icon">🌙</span><span>Dark Mode</span>';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  updateButton();
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('#themeToggle');
    if (!btn) return;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem(
      'medicalStoreTheme',
      document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
    updateButton();
  });
})();
