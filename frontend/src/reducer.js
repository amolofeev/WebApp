const initialState = {
    todos: [
        {id: 1, content: "Todo item one"},
        {id: 2, content: "Todo item two"},
        {id: 3, content: "Todo item three"}
    ]
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'DELETE_TODO'){
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id)
        }
    }
    if (action.type === 'CREATE_TODO'){
        return {
            ...state,
            todos: [...state.todos, {id: Math.random(), content: action.content}]
        }
    }
    return state
}

export default rootReducer