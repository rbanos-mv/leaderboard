import scoreList from './ScoreList.js';

class Leaderboard {
  setup = async () => {
    this.showScores();
    this.setupRefreshButton();
    this.setupSubmitButton();
  };

  addScore = async () => {
    const self = this;
    const user = document.querySelector('#user-name').value;
    const score = document.querySelector('#user-score').value;

    if (user !== null && score !== null && user.trim() !== '' && score.trim() !== '') {
      await scoreList.addScore(user, parseInt(score, 10));
      self.showScores();
    }
  };

  showScore = async (ulElement, score) => {
    ulElement.innerHTML += `<li>${score.user}: ${score.score}</li>`;
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
