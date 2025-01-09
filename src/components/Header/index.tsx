import { useTheme } from '../../contexts/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{ padding: '1rem', backgroundColor: 'var(--component)' }}>
      <h1>Mapa</h1>
      <button onClick={toggleTheme}>
        Alternar para {theme === 'light' ? 'escuro' : 'claro'}
      </button>
    </header>
  );
}
