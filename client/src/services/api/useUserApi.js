import { useState, useEffect } from 'react';
import fetchUserApi from './fetchUserApi';
import mockUserApi from './mockUserApi';
import sleep from '../helpers/sleep';

/**
 * The hook get the user's data from the API or a mock file
 *
 * @param { Integer } userId Identification number of the user
 * @returns { Object.data<Object>} Container object for all data
 * @returns { Object.loading<Boolean>} Loading state
 * @returns { Object.error<String>} Error message
 *
 */

function useUserApi(userId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const userUrl = new URL(userId, 'http://localhost:3000/user/');
  const userUrl = new URL(userId, 'https://sportsee.onrender.com/user/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Wait 1.2 seconds to simulate api calls
        await sleep(1200);

        const userData = await fetchUserApi(userUrl);
        setData(userData);
      } catch (error) {
        error instanceof Error && setError(error.message);
        console.log('⚠️ Fetch error : ', error.message);

        // If the API is not reached, we use the mocked data
        setData(mockUserApi(userId));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { data, loading, error };
}

export default useUserApi;
