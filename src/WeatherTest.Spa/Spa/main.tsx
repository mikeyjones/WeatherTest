import './css/main.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import storeConfig from './storeConfig';
import { ApplicationState }  from './store';



const initialState = (window as any).initialReduxState as ApplicationState;
const store = storeConfig(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history } children={ routes } />
    </Provider>,
    document.getElementById('react-app')
);