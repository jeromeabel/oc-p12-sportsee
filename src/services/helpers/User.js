class User {
  constructor(data) {
    this.name = data.user.userInfos.firstName;
    this.score = data.user.score || data.user.todayScore;
    this.keyData = data.user.keyData;

    this.performance = this.formatPerformance(data.performance);
    this.sessions = this.formatSessions(data.sessions.sessions);
    this.activity = this.formatActivity(data.activity.sessions);
  }

  formatActivity(data) {
    return data.map((item) => {
      return {
        ...item, // kilogram & calories
        day: new Date(item.day).getDate(),
      };
    });
  }

  formatSessions(data) {
    const dayLettersFR = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return data.map((item, index) => {
      return { day: dayLettersFR[index], value: item.sessionLength };
    });
  }

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
          value: item.value,
          kind: kindFR[data.kind[item.kind]],
        };
      })
      .reverse();
  }
}

export default User;
