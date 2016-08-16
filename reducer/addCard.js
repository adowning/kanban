import CONST from '../constants/constants'

const addCard =(state = { cards: [] }, action) => {
    switch(action.type) {
        case CONST.CREATE_CARD_SUCCESS :
        return state;
        default:
        return state;
    }
}

export default addCard;
