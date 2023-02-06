import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

/**
 *
 * The Home page contains a minimal menu to choose between two users
 *
 */

function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>
          Bienvenue chez
          <span className={styles.header__name}>SportSee</span>
        </h1>
        <p>Connectez-vous au tableau de bord en tant que "Cécilia" ou "Karl"</p>

        <div className={styles.avatars}>
          <Link to="/profile/18" className={styles.avatars__link}>
            <img src="/user18.svg" alt="User 18 avatar" />
            <h2>Cécilia</h2>
          </Link>
          <Link to="/profile/12" className={styles.avatars__link}>
            <img src="/user12.svg" alt="User 12 avatar" />
            <h2>Karl</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
