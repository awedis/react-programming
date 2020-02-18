import { createStore } from "redux";

const initialState = {
    age: 21
};


const myReducer = (state = initialState, action) => {
    // create copy
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age += 1;
    }
    if(action.type === 'SUBSTRACT'){
        newState.age -= 1;
    }
    if(action.type === 'ADD_TEN'){
        newState.age += action.payload;
    }
    return newState;
}



// we pass the reducer
const store = createStore(myReducer);

// subscribe
// Whenever there is a change in the state automatically runs this function
store.subscribe(() => {
    console.log('state changed' + JSON.stringify(store.getState()));
})

console.log('initial state' + JSON.stringify(store.getState()));

store.dispatch({type: 'ADD'});

store.dispatch({type: 'SUBSTRACT'});

store.dispatch({type: 'ADD_TEN', payload:10});
