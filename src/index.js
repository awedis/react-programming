import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Modules
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
// import reducer from './components/redux/reducer';
// import reducer from './components/redux/reducer_2';

// import reducer from './components/redux/reducer_3';
import reducerA from './components/redux/reducerA';
import reducerB from './components/redux/reducerB';

const rootReducer = combineReducers({
    rA: reducerA,
    rB: reducerB
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
