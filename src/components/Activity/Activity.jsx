import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import PropTypes from 'prop-types';

import styles from './Activity.module.scss';

/**
 * Render the activity details of the user into a BarChart
 *
 * @param { Array.<{ day: Integer, kilogram: Integer, calories: Integer }> } data
 */

const Activity = ({ data }) => {
  /**
   * Render a customized legend for the Barchart
   *
   * @param { Array } payload The source data of the content to be displayed in the legend
   */
  const CustomLegend = ({ payload }) => {
    return (
      <ul className={styles.chart__legend}>
        {payload.map((entry, index) => (
          <li key={`item-${index}`}>
            <span style={{ color: payload[index].color }}>⚫</span>
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  /**
   * Render a customized tooltip for the Barchart
   *
   * @param { Array } payload The source data of the content to be displayed in the legend
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.chart__tooltip}>
          <p>{`${payload[0].value}kg`} </p>
          <p>{`${payload[1].value}kcal`}</p>
        </div>
      );
    }
  };

  return (
    <section className={styles.chart}>
      <div className={styles.chart__title}>Activité quotidienne</div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={7} barGap={8}>
          <XAxis dataKey="day" tickLine={false} stroke="#9B9EAC" dy={7} />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
            cursor={{ opacity: 0.5, background: '#C4C4C480' }}
          />
          <Legend
            content={<CustomLegend />}
            verticalAlign="top"
            align="right"
            height={50}
          />
          <CartesianGrid vertical={false} strokeDasharray="4" />
          <YAxis yAxisId="left" hide={true} />
          <YAxis
            yAxisId="right"
            dataKey="kilogram"
            orientation="right"
            stroke="#9B9EAC"
            tickLine={false}
            axisLine={false}
            dx={30}
            type="number"
            domain={([dataMin, dataMax]) => {
              return [Math.abs(dataMin) - 1, Math.abs(dataMax) + 1];
            }}
            allowDecimals={false}
            interval={0}
          />
          <Bar
            yAxisId="right"
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            legendType="circle"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            yAxisId="left"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            legendType="circle"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

Activity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};

export default Activity;
