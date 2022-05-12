import scoreList from './ScoreList.js';

class Leaderboard {
  setup = async () => {
    this.showScores();
    this.setupRefreshButton();
    this.setupSubmitButton();
  };

  addScore = async () => {
    const self = this;
    const userElement = document.querySelector('#user-name');
    const scoreElement = document.querySelector('#user-score');
    const user = userElement.value;
    const score = scoreElement.value;

    if (user !== null && score !== null && user.trim() !== '' && score.trim() !== '') {
      userElement.value = '';
      scoreElement.value = '';
      await scoreList.addScore(user, parseInt(score, 10));
      self.showScores();
    }
  };

  #numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  showScore = async (ulElement, score) => {
    const formated = this.#numberWithCommas(score.score);
    ulElement.innerHTML += `<li><span>${score.user}</span><span>${formated}</span></li>`;
  };

  showScores = async () => {
    const ulElement = document.querySelector('#scores');
    ulElement.innerHTML = '';
    const list = await scoreList.getScores();
    list.sort((a, b) => b.score - a.score + a.user.localeCompare(b.user));
    list.forEach((score) => this.showScore(ulElement, score));
  };

  setupRefreshButton = async () => {
    document.querySelector('#refresh').addEventListener('click', this.showScores);
  };

  setupSubmitButton = async () => {
    document.querySelector('#submit').addEventListener('click', this.addScore);
  };
}

const leaderboard = new Leaderboard();

export default leaderboard;
