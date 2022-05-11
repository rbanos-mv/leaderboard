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
    //
  };

  showScores = async () => {
    //
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
