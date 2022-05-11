const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const scoresUrl = '/scores/';

class Api {
  constructor() {
    this.baseUrl = baseUrl;
    this.scoresUrl = scoresUrl;
  }

  sendNewGame = async (body) => fetch(this.baseUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result)
    .catch((error) => {
      throw error;
    });

  sendScore = async (gameId, body) => fetch(`${this.baseUrl + gameId}/scores/`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result)
    .catch((error) => {
      throw error;
    });

  getScores = async (gameId) => fetch(`${this.baseUrl + gameId}/scores/`)
    .then((response) => response.json())
    .then((json) => json.result)
    .catch((error) => {
      throw error;
    });
}

const api = new Api();

exports.api = api;
