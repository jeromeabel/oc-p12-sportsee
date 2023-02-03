import PropTypes from 'prop-types';

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

DataCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default DataCard;
