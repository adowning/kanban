import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CardForm from './CardForm';
import ActionCreators from '../actions/ActionCreators';

 class NewCard extends Component {

    componentWillMount() {
        this.props.createDraft()
    }

    handleChange(field, value) {
        this.props.updateDraft(field, value)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addCard(this.props.draft);
        this.props.history.pushState(null,'/');
    }

    handleClose(e) {
        this.props.history.pushState(null,'/')
    }

    render() {
        return (
                <CardForm draftCard={this.state}
                buttonLabel="Create Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />

            )
    }
}

NewCard.propTypes = {
    draft: PropTypes.object,
    createDraft: PropTypes.func.isRequired,
    updateDraft: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    draft: state.cardDraft
})

const mapDispatchToProps = (dispatch) => ({
    createDraft: () => dispatch(ActionCreators.createDraft()),
    updateDraft: (field, value) => dispatch(ActionCreators.updateDraft(field, value)),
    addCard: (draft) => dispatch(ActionCreators.addCard(draft))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewCard);



