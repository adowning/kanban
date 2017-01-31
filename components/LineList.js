import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import Line from './Line';
import { LINE } from '../constants';
import ActionCreators from '../actions/ActionCreators';
import Immutable from 'immutable';

class LineList extends Component {


  render() {
    // const { connectDropTarget } = this.props;
    let lines = this.props.lines.map((line) => {
      return <Line key={line.id} {...line}/>
    });

    return (
      <div className="list">
        {/*<h1>{this.props.title}</h1>*/}
        {lines}
      </div>
    )
  }
};
LineList.propTypes = {
//   title: PropTypes.string.isRequired,
  lines: PropTypes.arrayOf(PropTypes.object),
//   connectDropTarget: PropTypes.func.isRequired,
//   updateCardStatus: PropTypes.func.isRequired
};

// const DropList = DropTarget(CARD, listTargetSpec, collect)(CardList);


const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => (
//   {
//     updateCardStatus: (cardId, listId) => dispatch(ActionCreators.updateCardStatus(cardId, listId))
//   }
// );

export default connect(mapStateToProps)(LineList);

