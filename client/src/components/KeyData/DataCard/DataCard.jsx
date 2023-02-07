import PropTypes from 'prop-types';

import styles from './DataCard.module.scss';

/**
 * Render a card of key data
 *
 * @param { String } title Title of the card
 * @param { Integer } value The value of the card
 * @param { String } icon The name of the svg icon file withou located in /public
 */

const DataCard = ({ title, value, icon }) => {
  let unity = 'g';

  // Convert value in kilo and french formatting when it is greatest than 1000
  if (value >= 1000) {
    value = Number(`${value / 1000}`).toLocaleString('fr-FR');
    title === 'Calories' ? (unity = 'kCal') : (unity = 'Kg');
  }

  return (
    <div className={styles.container}>
      <img src={`/oc-p12-sportsee/${icon}.svg`} alt={title} />
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
