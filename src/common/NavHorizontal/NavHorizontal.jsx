import styles from './NavHorizontal.module.scss';

export default function NavHorizontal() {
  const navMenu = ['Accueil', 'Profil', 'Réglages', 'Communauté'];
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        <li key="logo-link">
          <a href="#">
            <img
              className={styles.nav__logo}
              src="/logo.svg"
              alt="Logo SportSee"
            />
          </a>
        </li>
        {navMenu.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
