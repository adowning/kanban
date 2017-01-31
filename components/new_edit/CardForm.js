import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, Label } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class CardForm extends Component {
    handleChange(field, e) {
        this.props.handleChange(field, e.target.value);
    }

    handleClose(e) {
        e.preventDefault();
        this.props.handleClose();
    }
    handleBackClick(e) {
        e.preventDefault();
        State.getReduxStore().dispatch({ type: 'SHOW_BOARD_PAGE' });
    }
    renderCardTitle(card) {
        // const cardTypeIcon = CardIcon.getCardTypeIcon(this.card.type);
        // const cardTypeIconClassName = CardIcon.getCardTypeIconClassName(this.card.type);
        return (
            <span style={{ fontSize: '30px', color: '#5d5d5d' }}>  {this.props.draftCard.title}</span>
        )
    }

    render() {

        return (
            <div>
                <div className="card big">
                    <div className="CardPage">
                        <i onClick={this.handleBackClick.bind(this)} className="icon-button fa fa-times"></i>
                        <p>{this.renderCardTitle()}</p>
                        <div className="contentArea">
                            <h4>Description <a href="#">Edit</a></h4>
                            <h4>{this.props.draftCard.description}</h4>
                            <h4>Images</h4>

                            <div className="checkLists">
                            </div>
                        </div>

                        <div className="rightSidebar">

                            <List>
                                <Subheader>Add</Subheader>
                                <ListItem primaryText="Labels" leftIcon={<ContentInbox />} />
                                <ListItem primaryText="Due Date" leftIcon={<ActionGrade />} />
                                <Subheader>Actions</Subheader>
                                <ListItem primaryText="Move" leftIcon={<ContentInbox />} />
                                <ListItem primaryText="Archive" leftIcon={<ContentSend />} />
                                <ListItem primaryText="Subscribe" leftIcon={<ContentSend />} />
                            </List>
                        </div>
                    </div>
                </div>
                <div className="overlay" onClick={this.handleClose.bind(this)} ></div>
            </div>
        )
    }

}

CardForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    draftCard: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.string,
        color: PropTypes.string
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
}

  /*<Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://localhost:1337/cards/avatar/2"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://localhost:1337/cards/avatar/2" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>*/

                /*<form onSubmit={this.props.handleSubmit.bind(this)}>
                    <input type='text'
                    value={this.props.draftCard.title}
                    onChange={this.handleChange.bind(this, 'title')}
                    placeholder="Title"
                    required={true}
                    autoFocus={true}
                    />
                    <textarea value={this.props.draftCard.description}
                    onChange={this.handleChange.bind(this, 'description')}
                    placeholder="Description"
                    required={true}
                    />
                    <label htmlFor="status">Status</label>
                    <select id="status"
                    value={this.props.draftCard.status}
                    onChange={this.handleChange.bind(this, 'stauts')}>
                     <option value="todo">To Do</option>
                     <option value="in-progress">In Progress</option>
                     <option value="done">Done</option>
                    </select>
                    <br />
                    <label htmlFor="color">Color</label>
                    <input id="color"
                    onChange={this.handleChange.bind(this, 'color')}
                    type="color"
                    defaultValue={this.props.draftCard.color}
                    />
                    <div className='actions'>
                        <button type="submit">{this.props.buttonLabel}</button>
                    </div>
                </form>*/