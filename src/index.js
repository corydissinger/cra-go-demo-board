import React from 'react';
import ReactDOM from 'react-dom';

// Redux boilerplate
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

// More potentially specific imports to this domain
import App from './App';


const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
