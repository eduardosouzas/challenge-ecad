import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ReactTableDefaults } from 'react-table-6';
import { Route, Switch, HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import TableDefaults from './config/table/table';
import Page404 from './views/pages/page404';
import Page500 from './views/pages/page500';
import DefaultLayout from './containers';
import createStore from './store/store';

import 'react-table-6/react-table.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css';
import 'react-toastify/dist/ReactToastify.css';


const store = createStore(window.__INITIAL_STATE__);
Object.assign(ReactTableDefaults, TableDefaults);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ToastContainer autoClose={8000} />
      <HashRouter>
        <Switch>
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    </div>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
