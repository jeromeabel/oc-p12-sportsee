import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Rectangle,
} from 'recharts';
import styles from './Sessions.module.scss';

const Sessions = ({ data }) => {
  return (
    <section className={styles.chart}>
      <div className={styles.chart__title}>Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 30, right: 5, left: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id="gradientLine" x="0" x2="1.0">
              <stop offset="0%" stopColor="white" stopOpacity={0.3} />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#gradientLine)"
            strokeOpacity={1}
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: 'white',
              stroke: 'rgba(255, 255, 255, 0.5)',
              strokeWidth: 10,
              r: 5,
            }}
          />
          <YAxis hide domain={['dataMin -15', 'dataMax + 45']} />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12, fill: 'white' }}
            tickLine={false}
            axisLine={false}
            opacity={0.6}
            interval={0}
          />
          <Tooltip
            cursor={<CustomCursor />}
            content={<CustomTooltip />}
            animationDuration={400}
            wrapperStyle={{ outline: 'none' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Sessions;

const CustomCursor = ({ y, width, height, points }) => {
  return (
    <Rectangle
      fill="black"
      opacity={0.1}
      x={points[0].x}
      y={y}
      width={width}
      height={height + 100}
    />
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <p className={styles.chart__tooltip}>{`${payload[0].value} min`}</p>;
  }
  return null;
};
