import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TodoList from "./TodList";

const App = () => {
    return (
        <div className="app-container container">
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))