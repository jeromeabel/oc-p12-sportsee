import styles from './Score.module.scss';

const Score = ({ value }) => {
  return (
    <div className={styles.container}>
      <span>Score</span>

      <div className={styles.score}>
        <span>{value * 100} % </span>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    </div>
  );
};

export default Score;
