import { combineReducers } from 'redux';
import { fetchCards } from './fetchCards'

const rootReducer = combineReducers({fetchCards});

export default rootReducer;
