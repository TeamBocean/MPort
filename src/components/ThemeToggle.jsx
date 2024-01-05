import  { useEffect } from 'react';

const ThemeToggle = () => {
  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Set the initial icon state
    if (localStorage.getItem('color-theme') === 'dark' ||
       (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon && themeToggleLightIcon.classList.remove('hidden');
    } else {
      themeToggleDarkIcon && themeToggleDarkIcon.classList.remove('hidden');
    }

    // Define the toggle function
    const toggleTheme = () => {
      const isDarkMode = localStorage.getItem('color-theme') === 'dark' ||
                         (!('color-theme' in localStorage) && document.documentElement.classList.contains('dark'));

      if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }

      themeToggleDarkIcon && themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon && themeToggleLightIcon.classList.toggle('hidden');
    };

    const themeToggleBtn = document.getElementById('theme-toggle');

    // Add event listener for the toggle button
    themeToggleBtn && themeToggleBtn.addEventListener('click', toggleTheme);

    // Clean up event listener
    return () => {
      themeToggleBtn && themeToggleBtn.removeEventListener('click', toggleTheme);
    };
  }, []);

  return (
    <div>
      {/* Make sure to include these elements in your component with the correct IDs */}
      <i id="theme-toggle-dark-icon" className="hidden">Dark Icon</i>
      <i id="theme-toggle-light-icon" className="hidden">Light Icon</i>
      <button id="theme-toggle">Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
