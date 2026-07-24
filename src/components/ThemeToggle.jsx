import { useEffect, useState } from 'react';
import './ThemeToggle.css';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

/**
 * Interruttore chiaro/scuro. La scelta viene salvata in localStorage e
 * applicata tramite l'attributo data-theme sull'elemento <html>.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro'}
      title={theme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
