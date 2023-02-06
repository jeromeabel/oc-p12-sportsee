import { useParams } from 'react-router';

import useUserApi from '../../services/api/useUserApi';
import User from '../../services/helpers/User';

import Loader from '../../components/Loader/Loader';
import Score from '../../components/Score/Score';
import KeyData from '../../components/KeyData/KeyData';
import Sessions from '../../components/Sessions/Sessions';
import Activity from '../../components/Activity/Activity';
import Performance from '../../components/Performance/Performance';

import styles from './Profile.module.scss';

/**
 *
 * The Profile page is a React Component.
 * It is the main part of the application.
 * It takes data from the API or a mocked file when the path is "profile/:id"
 *
 *
 * It renders all the dashboard components : Score, KeyData, Sessions, Activity and Performance
 *
 */

function Profile() {
  // Get user's data
  const userId = useParams().id;
  const { data, error, loading } = useUserApi(userId);
  let user;
  if (!loading) {
    user = new User(data);
  }

  return (
    <section className={styles.container}>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className={styles.header}>
            <h1>
              Bonjour{' '}
              <span className={styles.header__name}>{user.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏. </p>
            <div className={styles.header__infos}>
              {error ? `🛈 Mock` : `✅ API`}
            </div>
          </div>
          <div className={styles.body}>
            <section className={styles.body__left}>
              <Activity data={user.activity} />
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

export default Profile;
