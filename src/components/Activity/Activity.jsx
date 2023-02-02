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

import { useFetchData } from '../../hooks/useFetchData';
import Loader from '../../components/Loader/Loader';
import styles from './Activity.module.scss';

const data2 = [
  { day: '2020-07-01', dayF: 1, kilogram: 70, calories: 240 },
  { day: '2020-07-02', dayF: 2, kilogram: 69, calories: 220 },
  { day: '2020-07-03', dayF: 3, kilogram: 70, calories: 280 },
  { day: '2020-07-04', dayF: 4, kilogram: 70, calories: 500 },
  { day: '2020-07-05', dayF: 5, kilogram: 69, calories: 160 },
  { day: '2020-07-06', dayF: 6, kilogram: 69, calories: 162 },
  { day: '2020-07-07', dayF: 7, kilogram: 69, calories: 390 },
];

const Activity = ({ id }) => {
  const dataURL = `http://localhost:3000/user/${id}/activity`;
  const { data, error, loading } = useFetchData(dataURL);
  let activityData;
  if (!loading) activityData = data.data.sessions;
  // if (!loading && !error) console.log(JSON.stringify(activityData));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.chart__tooltip}>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kcal`}</p>
        </div>
      );
    }
  };

  return (
    <section className={styles.chart}>
      <div className={styles.chart__title}>Activité quotidienne</div>
      {loading && !error && <Loader />}
      {!loading && !error && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data2}
            barSize={7}
            barGap={8}
            // margin={{ top: 30, bottom: 30, left: 30, right: 30 }}
          >
            <XAxis dataKey="dayF" tickLine={false} stroke="#9B9EAC" dy={7} />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ outline: 'none' }}
              cursor={{ opacity: 0.5, background: '#C4C4C480' }}
            />
            <Legend
              content={renderLegend}
              verticalAlign="top"
              align="right"
              height={50}
            />
            <CartesianGrid vertical={false} strokeDasharray="4" />
            <YAxis yAxisId="left" hide={true} />

            <YAxis
              yAxisId="right"
              // dataKey="kilogram"
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
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId="left"
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="#E60000"
              legendType="circle"
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </section>
  );
};

const renderLegend = (props) => {
  const { payload } = props;

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
export default Activity;
