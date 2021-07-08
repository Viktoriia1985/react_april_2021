import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";
import {Provider} from 'react-redux';

const initialState = {
    counterValue: 0
};
const counterReducer = (state = initialState, action) => {
    // console.log({action, state})


    switch (action.type) {
        case 'INC': {
            return {...state, counterValue: state.counterValue + 1};
        }
        case 'DEC': {
            return {...state, counterValue: state.counterValue - 1};
        }
        case 'RESET': {
            return {...state, counterValue: 0};
        }
        case 'INC_CUSTOM': {
            console.log(action.payload)
            return {...state, counterValue: state.counterValue + action.payload};
        }
        default:
            return state;
    }
}

const store = createStore(counterReducer);
// console.log(store);
//
// console.log('not from subscribe:', store.getState())
//
// store.subscribe(() => {
//     console.log('from subscribe:', store.getState())
// })
//
// store.dispatch({
//     type: 'INC'
// })
//
// store.dispatch({
//     type: 'INC'
// })
//
// store.dispatch({
//     type: 'INC'
// })


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

