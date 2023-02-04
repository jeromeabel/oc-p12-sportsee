import { useParams } from 'react-router';

import useApi from '../../services/api/useApi';
import User from '../../services/helpers/User';

import Loader from '../../components/Loader/Loader';
import Score from '../../components/Score/Score';
import KeyData from '../../components/KeyData/KeyData';
import Sessions from '../../components/Sessions/Sessions';
import Activity from '../../components/Activity/Activity';
import Performance from '../../components/Performance/Performance';

import styles from './Profile.module.scss';

export default function Profile() {
  const userId = useParams().id;
  const { data, error, loading } = useApi(userId);
  let user;
  if (!loading) {
    user = new User(data);
    console.log(data.sessions);
  }

  return (
    <section className={styles.container}>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className={styles.header}>
            <h1>
              Bonjour <span className={styles.header__name}>{user.name}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏. </p>
            <div className={styles.header__infos}>
              {error ? `🛈 Mock` : `✅ API`}
            </div>
          </div>
          <div className={styles.body}>
            <section className={styles.body__left}>
              {/* <div className={styles.body__activity}> */}
              <Activity data={user.activity} />
              {/* </div> */}
              <div className={styles.body__bottom}>
                <Sessions data={user.sessions} />
                <Performance data={user.performance} />
                <Score value={user.score} />
              </div>
            </section>
            <section className={styles.body__right}>
              <KeyData data={user.keyData} />
            </section>
          </div>
        </>
      )}
    </section>
  );
}
