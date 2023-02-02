import axios from 'axios';

async function fetchApi(userUrl) {
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

export default fetchApi;
