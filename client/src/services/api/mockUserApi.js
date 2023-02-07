import mockedData from './mock/data';

/**
 *
 * Get user's data from a file
 *
 * @param { Integer } userId Identification number of the user
 * @returns { Object.user<Object>} User informations and nutritions data
 * @returns { Object.activity<Object>} Kilogram and calories day by day
 * @returns { Object.sessions<Object>} Session lenghts day by day
 * @returns { Object.performance<Object>} Values of six kind of performance
 *
 */

const mockUserApi = (id = 12) => {
  const userId = parseInt(id);

  const user = mockedData.USER_MAIN_DATA.filter(
    (user) => user.id === userId
  ).shift();
  const activity = mockedData.USER_ACTIVITY.filter(
    (userActivity) => userActivity.userId === userId
  ).shift();
  const sessions = mockedData.USER_AVERAGE_SESSIONS.filter(
    (userActivity) => userActivity.userId === userId
  ).shift();
  const performance = mockedData.USER_PERFORMANCE.filter(
    (userPerformance) => userPerformance.userId === userId
  ).shift();

  console.log('🛈 Using Mocked Data');

  return { user, activity, sessions, performance };
};

export default mockUserApi;
