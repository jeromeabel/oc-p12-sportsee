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

export default KeyData;
