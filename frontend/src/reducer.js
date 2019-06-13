const initialState = {
    b1: 0,
    b2: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'b1': return {...state, ['b1']: state['b1']+1};
        case 'b2': return {...state, ['b2']: state['b2']+1};
        default:
            return state
    }
}

export default rootReducer