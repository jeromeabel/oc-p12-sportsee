import { NavLink, Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logoSVG from '/logo.svg';

export default function Header() {
  const navMenu = [
    { name: 'Accueil', link: '/' },
    { name: 'Profil', link: '/user' },
    { name: 'Réglages', link: '/settings' },
    { name: 'Communauté', link: '/communauty' },
  ];
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.header__logo} src={logoSVG} alt="SprtSee logo" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.nav__ul}>
          {navMenu.map((nav, index) => (
            <li key={index} className={styles.nav__link}>
              <NavLink to={nav.link}>{nav.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
/*
  return (
    <header className="container">
      
      <div className={styles.header}>
        <div>
          <Link to="/">
            <img
              className={styles.header__logo}
              src={logoSVG}
              alt="Kasa logo"
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.nav__link}>
              <NavLink to="/" end>
                Accueil
              </NavLink>
            </li>
            <li className={styles.nav__link}>
              <NavLink to="about">À propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


*/
