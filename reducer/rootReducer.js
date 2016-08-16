import { combineReducers } from 'redux';
import  fetchCards  from './fetchCards'
import  addCard  from './addCard'

const rootReducer = combineReducers({fetchCards, addCard});

export default rootReducer;
