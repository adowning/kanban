import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend        from 'react-dnd-html5-backend';
import { connect }         from 'react-redux';

import { Link }    from 'react-router'
import List        from './List';
import ActionCreators from '../actions/ActionCreators'

class KanbanBoard extends Component {
    componentDidMount() {
        //init cards
        this.props.fetchCards();
    }

    render() {
        return (
                <div className="app" >
                     <Link to="/new" className="float-button">+</Link>

                     <List id="todo"
                           title="To Do"
                           cards={this.props.cards.filter(
                                  (card) => card.status === "todo")} />

                     <List id="in-progress"
                           title="In Progress"
                           cards={this.props.cards.filter(
                            (card) => card.status === "in-progress")} />

                     <List id="done"
                           title="Done"
                           cards={this.props.cards.filter(
                            (card) => card.status === "done")} />
                </div>
            )
    }
}

KanbanBoard.propTypes = {
    fetchCards: PropTypes.func.isRequired,
}

const KanbanWithDragDrop = DragDropContext(HTML5Backend)(KanbanBoard)

const mapStateToProps = (state) => ({
    cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
    fetchCards: () => dispatch(ActionCreators.fetchCards())
});

export default connect(mapStateToProps,mapDispatchToProps)(KanbanWithDragDrop)


