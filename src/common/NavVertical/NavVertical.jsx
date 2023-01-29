import styles from './NavVertical.module.scss';

export default function NavVertical() {
  const navIcons = ['meditation', 'swimming', 'bike', 'dumbbells'];
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        {navIcons.map((icon, index) => (
          <li key={index} className={styles.nav__icon}>
            <a href="#">
              <img src={`${icon}.svg`} alt={`Icône ${icon}`} />
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.nav__text}>Copyright, SportSee 2023</p>
    </nav>
  );
}
