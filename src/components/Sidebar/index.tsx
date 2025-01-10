"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './styles.module.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />} 
      </button>
    </aside>
  );
}
