import { React, Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux';

import ActionCreators from '../actions/ActionCreators';
import kanbanStore from '../store/kanbanStore';

class App extends Component {
    componentDidMount() {
        this.props.fetchCards();
    }

}

App.propTypes = {
    fetchCards: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    fetchCards: () => dispatch(ActionCreators.fetchCards())
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

render(
    <Provider store={kanbanStore}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'));
