import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 
                 shadow-lg backdrop-blur-sm hover:scale-110 transition-all duration-300
                 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle dark mode"
    >
      {darkMode ? 
        <FiSun className="w-6 h-6 text-yellow-500" /> : 
        <FiMoon className="w-6 h-6 text-blue-600" />
      }
    </button>
  );
};

export default ThemeToggle;