import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>
          Bienvenue chez
          <span className={styles.header__name}>SportSee</span>
        </h1>
        <p>
          Pour tester le site :
          <Link className="active" to="/profile/12">
            /profile/12
          </Link>
          ou
          <Link className="active" to="/profile/18">
            /profile/18
          </Link>
        </p>
      </div>
    </section>
  );
}
