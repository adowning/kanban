import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = 'http://localhost:1337';
//  const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  //  mode: "no-cors",  
  //  credentials: "include",
  'Content-Type': 'application/json'
  // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  /*
   * Change the Authorization to any string you like. It can be your pet's name,
   * your middle name, your favorite animal, your superpower of choice...
   * An unique authorization will allow you to have your own environment for cards and tasks
   */
  // Authorization: 'any-string-you-like'
}

let KanbanAPI = {

  addMultipleCards(cards) {
    return fetch(`${API_URL}/cards/createMultiple`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(cards)
    })
      .then((response) => console.log(response.json()))
  },

  fetchCards() {
    return fetch(`${API_URL}/cards`, { 'Content-Type': 'application/json' })
      .then((response) => response.json())
  },

  addCard(card) {
    return fetch(`${API_URL}/cards`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(card)
    })
      .then((response) => response.json())
  },



  updateCard(card, draftCard) {
    return fetch(`${API_URL}/cards/${card.id}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify(draftCard)
    })
  },

  persistCardDrag(cardId, status, index) {
    return fetch(`${API_URL}/cards/${cardId}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({ status, row_order_position: index })
    })
  },

  addTask(cardId, task) {
    return fetch(`${API_URL}/cards/${cardId}/tasks`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(task)
    })
      .then((response) => response.json())
  },

  deleteTask(cardId, task) {
    return fetch(`${API_URL}/cards/${cardId}/tasks/${task.id}`, {
      method: 'delete',
      headers: API_HEADERS
    })
  },

  toggleTask(cardId, task) {
    return fetch(`${API_URL}/cards/${cardId}/tasks/${task.id}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({ done: !task.done })
    })
  }

};

export default KanbanAPI;

