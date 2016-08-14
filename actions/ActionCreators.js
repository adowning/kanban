import { FETCH_CARDS_SUCCESS,
         FETCH_CARDS_ERROR } from '../constants/constants';
import KanbanAPI from '../api/KanbanAPI';

let ActionCreators = {
    fetchCards() {
        return (dispatch) => {
            dispatch({ type:FETCH_CARDS_SUCCESS });
            KanbanAPI.fetchCards().then(
            (cards) => dispatch({type:FETCH_CARDS_SUCCESS, success:true,cards}),
            (error) => dispatch({type:FETCH_CARDS_ERROR, success:false})
        )
        }
    }

    addCard(card) {


        ret

        let prevState = this.state;

        if (card.id === null) {
            let card = Object.assign({}, card, {id:Date.now()});
        }

        let nextState = update(this.state.cards, { $push: [card] });

        this.setState({cards:nextState});

        fetch(`${API_URL}/cards`, {
            method: 'post' ,
            headers: API_HEADERS ,
            body: JSON.stringify(card)
        }).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Server response wasn't OK");
            }
        }).then((responseData) => {
            card.id = responseData.id
            this.setState({cards:nextState})
        }).catch((error) => {
            this.setState(prevState);
        });
    }

}

export default ActionCreators
