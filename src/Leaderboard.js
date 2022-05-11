import scoreList from './ScoreList.js';

class Leaderboard {
  setup = async () => {
    this.showScores();
    this.setupRefreshButton();
    this.setupSubmitButton();
  };

  addScore = async () => {
    //
  };

  showScore = async (score) => {
    console.log('showScore', score);
  };

  showScores = async () => {
    const list = await scoreList.getScores();
    list.sort((a, b) => b.score - a.score);
    list.forEach((score) => this.showScore(score));
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
