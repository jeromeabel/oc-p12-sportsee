//import { useFetchData } from 'common/hooks/useFetchData';

import { useParams } from 'react-router';
import { USER_MAIN_DATA } from '../../hooks/data.js.js';

import styles from './Home.module.scss';

export default function Home() {
  //const { data, error, loading } = useFetchData('');

  const paramId = useParams();
  console.log('id : ', paramId);
  const userData = USER_MAIN_DATA.filter((data) => data.id === 12)[0];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>
          Bonjour
          <span className={styles.header__name}>
            {userData.userInfos.firstName}
          </span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className={styles.body}>
        <section className={styles.body__left}></section>
        <section className={styles.body__right}></section>
      </div>
    </section>
  );
}
