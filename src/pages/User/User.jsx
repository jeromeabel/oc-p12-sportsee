import { useParams } from 'react-router';

import { useFetchData } from '../../hooks/useFetchData';
import Loader from '../../components/Loader/Loader';
import Score from '../../components/Score/Score';
import KeyData from '../../components/KeyData/KeyData';
import Sessions from '../../components/Sessions/Sessions';
import Activity from '../../components/Activity/Activity';
import Performance from '../../components/Performance/Performance';

/*
<Activity /> /user/:id/activity
<Sessions />  /user/:id/average-sessions
<Performance />  /user/:id/performance*/

import styles from './User.module.scss';

export default function User() {
  const params = useParams();
  const dataURL = `http://localhost:3000/user/${params.id}`;
  const { data, error, loading } = useFetchData(dataURL);
  let userData;
  if (!loading) userData = data.data;

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
              <div className={styles.body__activity}>
                <Activity id={params.id} />
              </div>
              <div className={styles.body__bottom}>
                <div>
                  <Sessions id={params.id} />
                </div>
                <div>
                  <Performance id={params.id} />
                </div>
                <Score value={userData.score || userData.todayScore} />
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
