import styles from './Profile.module.scss';

export default function Profile() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>
          Bonjour <span className={styles.header__name}>Thomas</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className={styles.body}>
        <section className={styles.body__left}>LEFT</section>
        <section className={styles.body__right}>RIGHT</section>
      </div>
    </section>
  );
}
