"use client";
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import styles from './styles.module.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const isDarkTheme = theme === 'dark';

  return (
    <header className={styles.header}>
      <h1 className={isDarkTheme ? styles.whiteText : ''}>Mapa</h1>
      <button onClick={toggleTheme} className={styles.themeButton}>
        {isDarkTheme ? (
          <Sun size={24} className={styles.icon} />
        ) : (
          <Moon size={24} className={styles.icon} />
        )}
      </button>
    </header>
  );
}
