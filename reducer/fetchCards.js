import CONST from '../constants/constants'
import update from 'react-addons-update';

const fetchCards =(state = { cards: [] }, action) => {
    switch(action.type) {
        case CONST.FETCH_CARDS_SUCCESS :
        return update(state, {cards:{ $set: action.cards }})
        default:
        return state;
    }
}

export default fetchCards;
