import { useState, useEffect } from 'react';
import fetchApi from './fetchApi';
import mockApi from './mockApi';

function useApi(userId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userUrl = new URL(userId, 'http://localhost:3000/user/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await sleep(1000);
        const userData = await fetchApi(userUrl);
        setData(userData);
      } catch (error) {
        error instanceof Error && setError(error.message);
        console.log('⚠️ Fetch error : ', error.message);
        setData(mockApi(userId));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { data, loading, error };
}

function sleep(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default useApi;
