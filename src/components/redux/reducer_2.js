const initialState = {
    age: 21,
    history: []
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    // state.history.concat will create copy of the array and than add it

    switch (action.type) {
        case 'AGE_UP':
            return {
                ...state,
                age: state.age + action.payload,
                history: state.history.concat({ id:Math.random() , age: state.age + action.payload })
            }
            break;
        case 'AGE_DOWN':
            return {
                ...state,
                age: state.age - action.payload,
                history: state.history.concat({ id:Math.random() , age: state.age - action.payload})
            }
            break;
        case 'DEL_ITEM':
            return {
                ...state,
                history: state.history.filter(el => el.id !== action.key )
            }
            break;
    }

    return newState;
};

export default reducer;