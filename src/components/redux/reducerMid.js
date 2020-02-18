const initialState = {
    age: 20
}

const reducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type){
        case 'AGE_UP':
            newState.age += action.payload;
            break;
        case 'AGE_DOWN':
            newState.age -= action.payload;
            break;
    }
    return newState;
}

export default reducer;