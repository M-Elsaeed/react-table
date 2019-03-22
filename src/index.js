import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import storeCreator from './store'
const store = storeCreator();
ReactDOM.render(
    <Provider store={store}>
        <HashRouter >
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));

