
export const loading = () => {
    return {
        type: "LOADING"
    }
}


export const ageUpAsync = (val) => {
    return { type: 'AGE_UP', payload: val };
};

// once it captures the action it will return another function
// when we call ageUp it will return another function
export const ageUp = val => {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(ageUpAsync(val));
        }, 5000)
    }
}

export const ageDown = (val) => {
    return { type: 'AGE_DOWN', payload: val };
};