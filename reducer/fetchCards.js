import { FETCH_CARDS_SUCCESS } from '../constants/constants'

const fetchCards =(state = { cards: [] }, action) => {
    switch(action.type) {
        case: FETCH_CARDS_SUCCESS:
        return action.payload.response
        default:
        return state;
    }
}

export fetchCards;
