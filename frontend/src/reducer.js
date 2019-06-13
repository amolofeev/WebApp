const initialState = {
    b1: 0,
    b2: 0
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'b1'){
        return {...state, ['b1']: state['b1']+1}
    }
    if (action.type === 'b2'){
        return {...state, ['b2']: state['b2']+1}
    }
    return state
}

export default rootReducer