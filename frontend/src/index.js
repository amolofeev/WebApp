import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TodoList from "./TodList";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./reducer";

const store = createStore(rootReducer)

const App = () => {
    return (
        <div className="app-container container">
            <TodoList />
        </div>
    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))