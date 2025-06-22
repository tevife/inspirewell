"use client";
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Tema {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}