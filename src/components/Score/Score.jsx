import styles from './Score.module.scss';

const Score = ({ value }) => {
  return <div className={styles.container}>SCORE : {value}</div>;
};

export default Score;
