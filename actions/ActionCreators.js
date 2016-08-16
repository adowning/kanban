import CONST from '../constants/constants';
import KanbanAPI from '../api/KanbanAPI';

let ActionCreators = {

    fetchCards() {
        return (dispatch) => {
            dispatch({ type:CONST.FETCH_CARDS_SUCCESS });
            KanbanAPI.fetchCards().then(
            (cards) => dispatch({type:CONST.FETCH_CARDS_SUCCESS, success:true, cards}),
            (error) => dispatch({type:CONST.FETCH_CARDS_ERROR, success:false, error})
        )
        }
    },

    addCard() {
        return (dispatch) => {
            dispatch({ type:CONST.CREATE_CARD_SUCCESS });
            KanbanAPI.addCard().then(
            (cards) => dispatch({type:CONST.CREATE_CARD_SUCCESS, success:true,cards}),
            (error) => dispatch({type:CONST.CREATE_CARD_ERROR, success:false})
        )
        }
    },

    updateCard(card, draftCard) {
        return (dispatch) => {
            dispatch({ type:CONST.UPDATE_CARD_SUCCESS });
            KanbanAPI.updateCard().then(
                (card)
                )
        }
    },

    updateCardStatus(cardId, listId) {
        return (dispatch) => this._updateCardStatus(dispatch, cardId, listId);
    },

    updateCardPosition(draggedId, id) {

    },

    persistCardDrag(props) {

    },

    toggleCardDetails(id) {

    }

}

export default ActionCreators
