import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './counter';
import counterReducer from './counterReducer';

const reducer = combineReducers({
    counter: counterReducer,
})

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <Counter />
    </Provider>
, document.getElementById('app'));