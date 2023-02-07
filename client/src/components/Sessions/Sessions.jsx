import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Rectangle,
} from 'recharts';

import PropTypes from 'prop-types';

import styles from './Sessions.module.scss';

/**
 * Render the sessions data into a LineChart
 *
 * @param { Array } data Objects container
 * @param { String } data[].day The first letter of the day in French
 * @param { Integer } data[].value The length of the session in minutes
 */

const Sessions = ({ data }) => {
  /**
   * Render a customized cursor for the Linechart.
   * It displays an big black rectangle with a very light opacity,
   * following the X coordinate of the Cursor (Mouse)
   *
   * @param { Object } props Container of available data for the cursor
   * @param { Number } props.y The Y coordinate of the Chart
   * @param { Integer } props.width The width of the chart
   * @param { Integer } props.height The height of the chart
   * @param { Array } props.points The positions of points
   *
   * */

  const CustomCursor = ({ y, width, height, points }) => {
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        x={points[0].x} // Follow the point selected by the cursor
        y={y}
        width={width}
        height={height + 100} // Enlarge the rectangle to fill the entire area
      />
    );
  };

  /**
   * Render a customized tooltip for the Linechart.
   * It displays an big black rectangle with a very light opacity,
   * following the X coordinate of the Cursor (Mouse)
   *
   * @param { Object } props Container of available data for the tooltip
   * @param { Boolean } props.active State of the tooltip
   * @param { Array<Object> } props.payload Data available for the tooltip. We use the value property of the first element.
   *
   * */

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <p className={styles.chart__tooltip}>{`${payload[0].value} min`}</p>
      );
    }
    return null;
  };

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
            dataKey="value"
            type="monotone"
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

Sessions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default Sessions;
