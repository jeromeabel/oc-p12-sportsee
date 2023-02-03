import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

import PropTypes from 'prop-types';
import styles from './Performance.module.scss';

const Performance = ({ data }) => {
  return (
    <section className={styles.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="80%">
          <PolarGrid stroke="white" radialLines={false} />
          <PolarAngleAxis
            tick={{ fontSize: 12, lineHeight: 20 }}
            tickLine={false}
            stroke="white"
            dataKey="kind"
            dy={5}
          />
          <Radar dataKey="value" fill="#ff0000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
};

Performance.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default Performance;
