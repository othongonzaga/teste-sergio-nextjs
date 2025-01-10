"use client";
import dynamic from 'next/dynamic';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import styles from './styles.module.css';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function MapsPage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <Sidebar />
        <div className={styles.mapWrapper}>
          <Map />
        </div>
      </div>
    </div>
  );
}
