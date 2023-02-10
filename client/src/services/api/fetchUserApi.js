import axios from 'axios';

/**
 *
 * Calls API with differents endpoints to get user's data
 *
 * @param { Integer } userId Identification number of the user
 *
 * @returns { Object.user<Object>} User informations and nutritions data
 * @returns { Object.activity<Object>} Kilogram and calories day by day
 * @returns { Object.sessions<Object>} Session lenghts day by day
 * @returns { Object.performance<Object>} Values of six kind of performance
 */

async function fetchUserApi(userUrl) {
  const user = await axios.get(userUrl).then((res) => res.data.data);

  const activity = await axios
    .get(userUrl + '/activity')
    .then((res) => res.data.data);

  const sessions = await axios
    .get(userUrl + '/average-sessions')
    .then((res) => res.data.data);

  const performance = await axios
    .get(userUrl + '/performance')
    .then((res) => res.data.data);

  return { user, activity, sessions, performance };
}

export default fetchUserApi;
