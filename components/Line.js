import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import marked from 'marked';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { LINE } from '../constants';
import CheckList from './CheckList';
import {Link} from 'react-router';
import ActionCreators from '../actions/ActionCreators';

let titlePropType = (props, propName, componentName) => {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(
        `${propName} in ${componentName} is longer than 80 characters`
      );
    }
  }
};


let collectDrag = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  };
}

let collectDrop = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class Line extends Component {


  render() {
    const { connectDragSource, connectDropTarget } = this.props;

    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    return (
      <div className="line">
        {this.props.id}
        {this.props.description}
      </div>
    );
  }
}
Line.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string
};

// const dragHighOrderCard = DragSource(CARD, cardDragSpec, collectDrag)(Card);
// const dragDropHighOrderCard = DropTarget(CARD, cardDropSpec, collectDrop)(dragHighOrderCard);

const mapDispatchToProps = (dispatch) => (
  {
    persistCardDrag: (props) => dispatch(ActionCreators.persistCardDrag(props)),
    updateCardPosition: (draggedId, id) => dispatch(ActionCreators.updateCardPosition(draggedId, id)),
    toggleCardDetails: (id) => dispatch(ActionCreators.toggleCardDetails(id))
  }
);

export default (Line);

