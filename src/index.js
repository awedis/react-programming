import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Modules
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import reducer from './components/redux/reducer';
// import reducer from './components/redux/reducer_2';

// import reducer from './components/redux/reducer_3';
// import reducerA from './components/redux/reducerA';
// import reducerB from './components/redux/reducerB';

// const rootReducer = combineReducers({
//     rA: reducerA,
//     rB: reducerB
// })
// import reducer from './components/redux/reducerMid';

import reducer from './components/store/reducers/reducer';

import thunk from 'redux-thunk';

// when the action is dispatched this will run and first it will capture the action
// cache the action
// const logAction = store => {
//     return next => {
//         return action => {
//             const result = next(action);
//             console.log(`Caught in the middleware ${JSON.stringify(result)}`);
//             return result;
//         }
//     }
// }

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
