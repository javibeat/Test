document.addEventListener('DOMContentLoaded', function () {
  const modeSwitch = document.querySelector('.mode');
  const body = document.body;

  // Function to toggle the theme icon
  function toggleModeIcon() {
    const icon = modeSwitch.querySelector('i');
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.add('fa-moon');
      icon.classList.remove('fa-sun');
    }
  }

  // Event to change the mode and icon
  modeSwitch.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    toggleModeIcon();
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Load the saved theme from local storage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }
  toggleModeIcon();
});