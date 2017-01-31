import {
  RECEIVE_LINEITEMS,
  REQUEST_LINEITEMS

} from '../constants';
import update from 'react-addons-update';
import 'babel-polyfill';

let lineIndex;
let taskIndex;
let orderGUID;

const lines = (state =[], action) => {
  switch (action.type) {

      case RECEIVE_LINEITEMS:
         console.log('asdf')      
         console.log(action.lines)  
      orderGUID = true;
      return action.lines;
   

    default:
      return state;
  }
};

export default lines;

export const getGUID = (state) => state.orderGUID == orderGUID;
// export const linesLoaded = (state, id) => state.find((card) => card.id == id);
// export const getCardIndex = (state, id) => state.findIndex((card)=>card.id == id);

