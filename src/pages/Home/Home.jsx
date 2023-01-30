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
        <p
          style={{
            backgroundColor: '#0fb',
            padding: '1.5em',
            borderRadius: '1em',
          }}
        >
          <span style={{ fontSize: '35px' }}>⚠️</span> Page en cours de création
          ...
        </p>
        <p>
          Pour tester le site :
          <Link className="active" to="/user/12">
            /user/12
          </Link>
          ou
          <Link className="active" to="/user/18">
            /user/18
          </Link>
        </p>
      </div>
    </section>
  );
}
