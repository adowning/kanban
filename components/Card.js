import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import marked from 'marked';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CheckList from './CheckList';
import CONST from '../constants/constants';
import ActionCreators from '../actions/CardActionCreators';


let titlePropType = (props, propName, componentName) => {
    if(props[propName]) {
        let value = props[propName];
        if(typeof value !== 'string' || value.length > 80) {
            return new Error(
                `${propName} in ${componentName} is longer then 80 characters`
                )
        }
    }
}


const cardDragSpec = {
    beginDrag(props) {
        return {
            id: props.id,
            status: props.status
        }
    },
    endDrag(props) {
        props.persistCardDrag(props);
        //props.cardCallbacks.persistCardDrag(props.id, props.status)
    }
}

const cardDropSpec = {
    hover(props, monitor) {
        const draggedId = monitor.getItem().id;
        if (props.id !== draggedId) {
            props.udpateCardPosition(draggedId, props.id)
        }
    }
}

let collectDrag = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource()
    }
}

let collectDrop = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget()
    }
}


 class Card extends Component {
    toggleDetails() {
        this.props.toggleCardDetails(this.props.id);
    }

    render() {
        const { connectDragSource, connectDropTarget } = this.props;

        let cardDetails;
        let card_style ={
                fontWeight: 'bold',
                borderBottom:  'solid 5px transparent'
        }
        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        }

        if (this.props.showDetails !== false) {
            cardDetails = (
                <div className="card__details">
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
                )
        }

        return connectDropTarget(connectDragSource(
                <div className="card" >
                    <div style={sideColor} />
                    <div className="card__edit">
                        <Link to={'/edit/'+this.props.id}>✎</Link>
                    </div>
                    <div className={this.state.showDetails? "card__title--is-open" : "card__title"}
                    onClick={this.toggleDetails} >
                    {this.props.title}
                    </div>
                    <ReactCSSTransitionGroup transitionName="toggle"
                        transitionEnterTimeout={250}
                        transitionLeaveTimeout={250} >
                    {cardDetails}
                    </ReactCSSTransitionGroup>
                </div>
            ))
    }
}



Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
    cardCallbacks: PropTypes.object,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired
}
const dragHighOrderCard = DragSource(constants.CARD, cardDragSpec, collectDrag)(Card);
const dragDropHighOrderCard = DropTarget(constants.CARD, cardDropSpec, collectDrop)(dragHighOrderCard);

export default dragDropHighOrderCard;

