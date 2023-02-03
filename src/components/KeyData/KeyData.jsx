import PropTypes from 'prop-types';

import DataCard from './DataCard/DataCard';
import styles from './KeyData.module.scss';

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
