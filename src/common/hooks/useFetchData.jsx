import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        error instanceof Error && setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export const useFetchLocationById = (url, id) => {
  const { data, loading, error } = useFetchData(url);
  const locationData = data.find((item) => item.id === id);
  return { locationData, loading, error };