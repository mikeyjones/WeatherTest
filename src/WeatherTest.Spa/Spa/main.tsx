import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import storeConfig from './storeConfig';
import { ApplicationState }  from './store';
import routes from './routes';

const initialState = (window as any).initialReduxState as ApplicationState;
const store = storeConfig(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history } children={ routes } />
    </Provider>,
    document.getElementById('react-app')
);