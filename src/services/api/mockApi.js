import mockedData from './mock/data';

export default function mockApi(id = 12) {
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
}
