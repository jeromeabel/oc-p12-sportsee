/**
 *
 * @class
 * @classdesc Store and prepare the user's data for charts
 *
 * @constructor
 * @param { Object } data Global container object from the API
 * @param { Object } data.user Main user data from "/" endpoint
 * @param { Object } data.performance Performance data from "/performance" endpoint
 * @param { Object } data.sessions Sessions data from "/average-sessions" endpoint
 * @param { Object } data.activity Activity data from "/activity" endpoint
 *
 * @property { String } firstName The first name of the user
 * @property { Number } score The daily score regarding the goals
 * @property { Array } keyData The nutritions data : proteins, lipids, calories, carbs
 * @property { Array } activity Kilograms and calories data day by day
 * @property { Array } sessions Average lenghts of sessions for the week
 * @property { Array } performance 6 kinds of performance : speed, strenght, cardio, energy, intensity, endurance
 *
 */

class User {
  constructor(data) {
    this.firstName = data.user.userInfos.firstName;
    this.score = data.user.score || data.user.todayScore;
    this.keyData = data.user.keyData;
    this.activity = this.formatActivity(data.activity.sessions);
    this.sessions = this.formatSessions(data.sessions.sessions);
    this.performance = this.formatPerformance(data.performance);
  }

  /**
   * Change the day property of the original array into the number of the day
   * @param { Array } data
   * @returns { Array }
   * @returns { Array.day<Integer> } Day number
   * @returns { Array.kilogram<Integer> } Kilogram value
   * @returns { Array.calories<Integer> } Calories value
   */
  formatActivity(data) {
    return data.map((item) => {
      return {
        ...item, // kilogram & calories
        day: new Date(item.day).getDate(),
      };
    });
  }
  /**
   * Change the day property of the original array into the first letter in French
   * @param { Array } data
   * @returns { Array }
   * @returns { Array.day<String> } Day letter in French
   * @returns { Array.value<Integer> } Length of the session
   */

  formatSessions(data) {
    const dayLettersFR = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return data.map((item, index) => {
      return { day: dayLettersFR[index], value: item.sessionLength };
    });
  }

  /**
   * Create a reversed array with activity names in French and their values
   * @param { Array } data
   * @returns { Array }
   * @returns { Array.kind<String> } Kind of performance
   * @returns { Array.value<Integer> } Value of the kind
   */

  formatPerformance(data) {
    const kindFR = {
      cardio: 'Cardio',
      energy: 'Énergie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    };

    return data.data
      .map((item) => {
        return {
          kind: kindFR[data.kind[item.kind]],
          value: item.value,
        };
      })
      .reverse();
  }
}

export default User;
