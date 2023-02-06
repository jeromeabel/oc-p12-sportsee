import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

import PropTypes from 'prop-types';
import styles from './Performance.module.scss';

/**
 * Render the performance data into a RadarChart
 *
 * @param { Array } data Objects container
 * @param { String } data[].kind The kind of performance
 * @param { Integer } data[].value The value of the performance in %
 */

const Performance = ({ data }) => {
  return (
    <section className={styles.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="70%">
          <PolarGrid stroke="white" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fontSize: 12 }}
            tickLine={false}
            stroke="white"
            dy={4}
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
