import { useParams } from 'react-router';

import useApi from '../../services/api/useApi';

import Loader from '../../components/Loader/Loader';
import Score from '../../components/Score/Score';
import KeyData from '../../components/KeyData/KeyData';
import Sessions from '../../components/Sessions/Sessions';
import Activity from '../../components/Activity/Activity';
import Performance from '../../components/Performance/Performance';

import styles from './Profile.module.scss';

class User {
  constructor(data) {
    this.name = data.user.userInfos.firstName;
    this.score = data.user.score || data.user.todayScore;
    this.keyData = data.user.keyData;

    this.performance = data.performance.data.map((item) => {
      return { value: item.value, kind: data.performance.kind[item.kind] };
    });

    /*
    0
: 
{value: 80, kind: 'cardio'} = Intensité
1
: 
{value: 120, kind: 'energy'} = Vitesse
2
: 
{value: 140, kind: 'endurance'} = Force
3
: 
{value: 50, kind: 'strength'} = Endurance
4
: 
{value: 200, kind: 'speed'} = Énergie
5
: 
{value: 90, kind: 'intensity'} = Cardio*/
  }
}

export default function Profile() {
  const userId = useParams().id;
  const { data, error, loading } = useApi(userId);
  let user;
  if (!loading && data) {
    user = new User(data);
    console.log(data.sessions);
  }

  return (
    <section className={styles.container}>
      {loading && <Loader />}
      {!loading && !error && (
        <>
          Profile
          <div className={styles.header}>
            <h1>
              Bonjour <span className={styles.header__name}>{user.name}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className={styles.body}>
            <section className={styles.body__left}>
              <div className={styles.body__activity}>
                {/* <Activity id={params.id} /> */}
              </div>
              <div className={styles.body__bottom}>
                {/* <Sessions id={params.id} /> */}
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
