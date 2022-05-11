import api from './Api.js';

const gameKey = 'gameKey';
const gameName = 'RBA-game';

class ScoreList {
  constructor() {
    this.gameKey = gameKey;
    this.gameName = gameName;
    this.gameId = localStorage.getItem(this.gameKey);
    if (this.gameId == null) {
      this.createGame();
    }
  }

  createGame = async () => {
    const response = await api.sendNewGame({ name: this.gameName });
    this.gameId = response.slice(14, 35).trim();
    localStorage.setItem(gameKey, this.gameId);
  };

  addScore = async (user, score) => {
    const newScore = { user, score };
    const result = await api.sendScore(this.gameId, newScore);
    return result === 'Leaderboard score created correctly.';
  };

  getScores = async () => {
    if (this.gameId !== null) {
      return api.getScores(this.gameId);
    }

    return Promise.resolve([]);
  };
}

const scoreList = new ScoreList();

export default scoreList;
