import { useFetchData } from '../../hooks/useFetchData';

import { useParams } from 'react-router';

import Loader from '../../components/Loader/Loader';
import styles from './User.module.scss';
import Score from '../../components/Score/Score';
import KeyData from '../../components/KeyData/KeyData';

export default function User() {
  const params = useParams();
  const dataURL = `http://localhost:3000/user/${params.id}`;
  const { data, error, loading } = useFetchData(dataURL);
  let userData;
  if (!loading) userData = data.data;
  if (!loading && !error) console.log('USER DATA : ', userData);

  return (
    <section className={styles.container}>
      {loading && !error && <Loader />}
      {!loading && !error && (
        <>
          <div className={styles.header}>
            <h1>
              Bonjour{' '}
              <span className={styles.header__name}>
                {userData.userInfos.firstName}
              </span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>

          <div className={styles.body}>
            <section className={styles.body__left}>
              <div>ACTIVITY</div>
              <div>
                <div>SESSION</div>
                <div>PERFORMANCE</div>
                <div>
                  <Score value={userData.score || userData.todayScore} />
                </div>
              </div>
            </section>
            <section className={styles.body__right}>
              <KeyData data={userData.keyData} />
            </section>
          </div>
        </>
      )}
    </section>
  );
}
