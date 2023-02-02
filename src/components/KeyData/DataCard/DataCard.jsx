import styles from './DataCard.module.scss';

const DataCard = ({ title, value, icon }) => {
  let unity = 'g';
  if (value >= 1000) {
    value = Number(`${value / 1000}`).toLocaleString('fr-FR');
    title === 'Calories' ? (unity = 'kCal') : (unity = 'Kg');
  }

  return (
    <div className={styles.container}>
      <img src={`/${icon}.svg`} alt={title} />
      <div className={styles.heading}>
        <h3>
          {value} {unity}
        </h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default DataCard;
