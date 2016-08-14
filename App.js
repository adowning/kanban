import { React, Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux';


class App extends Component {


}

App.propTypes = {

}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

render(
    <Provider store={}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'));
