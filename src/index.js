import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store'; //3
import { Provider } from'react-redux';
import { loadProducts } from './actionCreators';

//Para pasarle los products al componente ProductList a través del actionCreators
store.dispatch(loadProducts());
//3
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
