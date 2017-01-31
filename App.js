import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from './theme-default';
import kanbanStore from './store/kanbanStore';
import KanbanBoard from './components/KanbanBoard';
import ImportPage from './components/ImportPage';
import EditCard from './components/new_edit/EditCard';
import NewCard  from './components/new_edit/NewCard';


render((
  <MuiThemeProvider muiTheme={ThemeDefault}>
  <Provider store={kanbanStore}>
    <Router history={browserHistory}>
      <Route path="/import" component={ImportPage}></Route>  
      <Route path="/" component={KanbanBoard}>
        <Route path="new" component={NewCard} />
        <Route path="edit/:card_id" component={EditCard} />
      </Route>
    </Router>
  </Provider>
  </MuiThemeProvider>  
), document.getElementById('root'));
