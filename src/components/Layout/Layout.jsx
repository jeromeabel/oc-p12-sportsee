import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import NavVertical from './NavVertical/NavVertical';

import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__main}>
        <NavVertical />
        <Outlet />
      </main>
    </div>
  );
}
