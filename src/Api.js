const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const scoresUrl = '/scores/';

class Api {
  constructor() {
    this.baseUrl = baseUrl;
  }

  sendNewGame = async (body) => {
    //
  };

  sendScore = async (gameId, body) => {
    //
  };

  getScores = async (gameId) => {
    //
  };
}

const api = new Api();

exports.api = api;
