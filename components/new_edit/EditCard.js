import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getCard } from '../reducers';
import CardForm from './CardForm';
import ActionCreators from '../actions/ActionCreators';
import 'babel-polyfill';

export default class EditCard extends Component {
    componentDidMount() {
        this.props.createDraft(this.props.card);
    }

    handleChange(field, value) {
        this.props.updateDraft(field, value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateCard(this.props.card, this.props.draft);

        this.props.history.pushState(null,'/');
    }

    handleClose(e) {
        this.props.history.pushState(null, '/')
    }

    render() {
        return (
                <CardForm draftCard={this.props.draft}
                buttonLabel="Edit Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
            )
    }
}

EditCard.propTypes = {
    card: PropTypes.object,
    draft: PropTypes.object,
    createDraft: PropTypes.func.isRequired,
    updateDraft: PropTypes.func.isRequired,
    updateCard: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    draft: state.cardDraft,
    card: getCard(state, ownProps.parmas.card_id)
})

const mapDispatchToProps = (dispatch) => ({
    createDraft: (card) => dispatch(ActionCreators.createDraft(card)),
    updateDraft: (field, value) => dispatch(ActionCreators.updateDraft(field,value)),
    updateCard: (card, draft) => dispatch(ActionCreators.updateCard(card, draft))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditCard);
