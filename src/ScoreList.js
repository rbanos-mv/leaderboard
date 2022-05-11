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
    //
  };

  getScores = async () => {
    //
  };
}

const scoreList = new ScoreList();

exports.scoreList = scoreList;
