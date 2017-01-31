import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Link } from 'react-router'
import LineList from './LineList';
import ActionCreators from '../actions/ActionCreators'
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { fetchLineItems } from '../actions/ActionCreators';
import renderIf from '../utils/render-if';

class ImportPage extends Component {
    componentDidMount() {
        //init cards
        // this.props.fetchLineItems()
    }
    constructor(props) {
        super(props);
        this.state = { value: '18580', shouldShow: false, selectedRows: [], selectedLines: [], linesToSend: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._onRowSelection = this._onRowSelection.bind(this)
        this.handleImport = this.handleImport.bind(this)
    }

    getEndpoint() {
        return (
            this.props.endpoint ||
            this.props.auth.getIn(['configure', 'currentEndpointKey']) ||
            this.props.auth.getIn(['configure', 'defaultEndpointKey'])
        );
    }

    handleInput(key, val) {
        this.props.dispatch(loadRugsUpdate(this.getEndpoint(), key, val));
    }

    handleChange(event) {
        console.log(event)
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.shouldShow = true;
        this.props.dispatch(ActionCreators.fetchLineItems(this.state.value))
    }

    handleRowSelect(rows) {
        const selectedLines = [];
        this.props.lines.forEach((line, i) => {
            line.selected = rows.indexOf(i) > -1;
            this.props.selectedLines.push(line);
        });
        //  console.log(selectedFeeds);
        this.setState({ lines: selectedLines }, () => {
            console.log(this.state.lines);
        })
    }    
    //  var result = newArray.slice(0);
    //         if (result == 'none') {
    //             result = [];
    //  }
    //     console.log(result)
    //         this.setState({selectedRows: result})
    //     console.log(this.state.selectedRows)
    // }

    _onRowSelection(key) {
        console.log(key)
        this.state.selectedLines = key;
}
    handleImport(event) {
        event.preventDefault();
        console.log(this.state.selectedLines)
        console.log(this.state.linesToSend)
        this.props.lines.forEach((line, i) => {
            line.selected = this.state.selectedLines.indexOf(i) > -1;
            console.log(line.selected)
            if (line.selected) {
             this.state.linesToSend.push(line);
            }
        });
        this.props.dispatch(ActionCreators.addMultipleCards(this.state.linesToSend))
    }

    render() {

        
        const styles = {
            floatingActionButton: {
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed',
            },
            hidden: {
                display: 'none'
            },
            editButton: {
                fill: grey500
            },
            columns: {
                id: {
                    width: '10%'
                },
                name: {
                    width: '30%'
                },
                price: {
                    width: '40%'
                },
                category: {
                    width: '20%'
                },
                edit: {
                    width: '10%'
                }
            }
        };
        const {
            
            children,
            lines = []
        } = this.props
        
        return (<div>
            {this.state.orderGUID}
            <form onSubmit={this.handleSubmit}>
                <TextField
                    hintText="Name"
                    floatingLabelText="Name"
                    fullWidth={true}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <div style={styles.buttons}>
                    <RaisedButton
                        label="Load"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}
                    />
                </div>
            </form>
            {renderIf(this.state.shouldShow)(    
                <div>
                    <Table selectable={true} multiSelectable={true} onRowSelection={this._onRowSelection}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn style={styles.columns.name}>Title</TableHeaderColumn>
                        <TableHeaderColumn style={styles.columns.price}>Description</TableHeaderColumn>
                        <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody deselectOnClickaway={false}>
                            {lines.map(function (item, i) {
                                return (
                                <TableRow key={i} selected={this.state.selectedRows.indexOf(i) !== -1}>
                                    <TableRowColumn style={styles.columns.name}>{item.title}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.price}>{item.description}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.edit}>
                                        <Link className="button" to="/form">
                                            <FloatingActionButton zDepth={0}
                                                mini={true}
                                                backgroundColor={grey200}
                                                iconStyle={styles.editButton}>
                                                <ContentCreate />
                                            </FloatingActionButton>
                                        </Link>
                                    </TableRowColumn>
                                </TableRow>
                            )}.bind(this))}
                </TableBody>
            </Table >

            
                    <form onSubmit={this.handleImport}>
                        <TextField
                            hintText="Name"
                            floatingLabelText="Name"
                            fullWidth={true}
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <div style={styles.buttons}>
                            <RaisedButton
                                label="Load"
                                style={styles.saveButton}
                                type="submit"
                                primary={true}
                            />
                        </div>
                </form>
                </div>
            )}
              
        </div>
        )
    }
}

ImportPage.propTypes = {
    fetchLineItems: PropTypes.func.isRequired,
    lines: PropTypes.arrayOf(PropTypes.object),
    orderGUID: PropTypes.arrayOf(PropTypes.bool),
    dispatch: PropTypes.func,
    selectedRows: PropTypes.array,
    selectedLines: PropTypes.array
}


const mapStateToProps = (state) => ({
    lines: state.lines,
    linesLoaded: state.linesLoaded,
    orderGUID: state.orderGUID,
    value: state.value,
    selectedLines: []
});

export default connect(mapStateToProps)(ImportPage)


