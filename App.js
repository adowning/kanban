import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import kanbanStore from './store/kanbanStore';
import KanbanBoard from './components/KanbanBoard';
import EditCard from './components/EditCard';
import NewCard  from './components/NewCard';

render((
    <Provider store={kanbanStore} >
        <Router history={createBrowserHistory()} >
            <Route path="/" component={kanbanBoard} >
                <Route path="new" component={newCard} />
                <Route path="edit/:card_id" component={EditCard} />
            </Route>
        </Router>
    </Provider>
    ), document.getElementById('root'))


//최상위 컴포넌트들과 라우터만 랜더해주고 있음.
