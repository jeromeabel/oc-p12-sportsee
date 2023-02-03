import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import styles from './Score.module.scss';

import PropTypes from 'prop-types';

const Score = ({ value }) => {
  const data = [{ score: value }];
  const startAngle = 90;
  const endAngle = startAngle + value * -360;
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <h2>Score</h2>
        <div className={styles.chart__legend}>
          <h3>{value * 100}%</h3>
          <p>
            de votre
            <br />
            objectif
          </p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="85%"
            outerRadius="100%"
            data={data}
            startAngle={startAngle}
            endAngle={endAngle}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            className={styles.chart__shape}
          >
            <RadialBar
              dataKey="score"
              fill="var(--color-primary)"
              stroke-linejoin="round"
              cornerRadius={100}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

Score.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Score;
