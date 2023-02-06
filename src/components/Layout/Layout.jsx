import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import NavVertical from './NavVertical/NavVertical';

import styles from './Layout.module.scss';

/**
 * Render the shared Layout between all the pages.
 * It is the main container of components.
 * It displays Navigation Header and Vertical.
 */

function Layout() {
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

export default Layout;
