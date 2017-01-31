import { combineReducers } from 'redux';
import cards, * as fromCards from './cards';
import lines, * as fromLines from './lines';
import cardDraft from './cardDraft';


const rootReducer = combineReducers({
  cards,
  lines,
  cardDraft
});

export default rootReducer;

export const getCard = (state, id) =>
  fromCards.getCard(state.cards, id);
export const getCardIndex = (state, id) =>
  fromCards.getCardIndex(state.cards, id);

