//import { useFetchData } from 'common/hooks/useFetchData';

import { useParams } from 'react-router';
import { USER_MAIN_DATA } from '../../common/hooks/data.js';

import styles from './User.module.scss';

export default function User() {
  //const { data, error, loading } = useFetchData('');

  const params = useParams();

  const userData = USER_MAIN_DATA.filter(
    (data) => data.id === parseInt(params.id)
  )[0];

  console.log('data : ', userData);
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
