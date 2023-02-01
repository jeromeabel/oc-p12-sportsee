import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import { useFetchData } from '../../hooks/useFetchData';
import Loader from '../../components/Loader/Loader';
import styles from './Performance.module.scss';

const Performance = ({ id }) => {
  const dataURL = `http://localhost:3000/user/${id}/performance`;
  const { data, error, loading } = useFetchData(dataURL);
  let perfData;
  if (!loading) perfData = data.data.data;
  //if (!loading && !error) console.log(perfData);

  return (
    <section className={styles.chart}>
      {loading && !error && <Loader />}
      {!loading && !error && (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={perfData} outerRadius="80%">
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
      )}
    </section>
  );
};

export default Performance;
