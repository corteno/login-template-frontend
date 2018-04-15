import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AuthService from './utils/AuthService';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import Login from './containers/login';
import App from './containers/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            {AuthService.isLoggedIn()
                ? <Switch>
                    <Route path='/' component={App}/>
                </Switch>

                : <Switch>
                    <Route path='/' component={Login}/>
                </Switch>

            }
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
