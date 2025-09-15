import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg transition-colors hover:bg-accent"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      : <Moon className=" h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
    </button>
  );
};

export default ThemeToggle;