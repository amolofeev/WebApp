import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from "./TodList";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./reducer";
import {BrowserRouter, Route } from 'react-router-dom'
import {Switch} from "react-router";
import TodoItemDetail from "./TodList/TodoItemDetail";

const store = createStore(rootReducer)

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-container container">
                <Switch>
                    <Route exact path='/' component={TodoList} />
                    <Route path='/:id' component={TodoItemDetail} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
