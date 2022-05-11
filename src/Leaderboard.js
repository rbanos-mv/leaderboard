class Leaderboard {
  setup = async () => {
    this.showScores();
    this.setupRefreshButton();
    this.setupSubmitButton();
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
    //
  };
}

const leaderboard = new Leaderboard();

exports.leaderboard = leaderboard;
