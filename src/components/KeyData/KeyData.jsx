import PropTypes from 'prop-types';

import DataCard from './DataCard/DataCard';
import styles from './KeyData.module.scss';

/**
 * Render the key data into a list of cards, where the title are french.
 *
 * @param { Object } data Data container for the four nutritions data
 * @param { Integer } data.calorieCount The value of calories
 * @param { Integer } data.proteinCount The value of proteins
 * @param { Integer } data.carbohydrateCount The value of glucids
 * @param { Integer } data.lipidCount The value of lipids
 */

const KeyData = ({ data }) => {
  return (
    <div className={styles.container}>
      <DataCard
        title="Calories"
        value={data.calorieCount}
        icon="data-calories"
      />
      <DataCard
        title="Protéines"
        value={data.proteinCount}
        icon="data-proteins"
      />
      <DataCard
        title="Glucides"
        value={data.carbohydrateCount}
        icon="data-carbs"
      />
      <DataCard title="Lipides" value={data.lipidCount} icon="data-fat" />
    </div>
  );
};

KeyData.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }),
};

export default KeyData;
