import { useState } from 'react';
import styles from './styles.module.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <nav>Menu</nav>}
    </aside>
  );
}
