import React, {Component} from 'react'
import TodoItem from "./TodoItem";
import CreateForm from "./CreateForm";
import './index.css'
import {connect} from "react-redux";


class TodoList extends Component {
    render() {
        const {todos} = this.props
        const _component = todos.length ? (
            todos.map(todo => <TodoItem id={todo.id} key={todo.id}/>)
        ) : (
            <p className="center">
                <b>Your TodoList is empty!</b>
            </p>
        )

        return (
            <div className="todo-list collection">
                {_component}
                <CreateForm/>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        todos: [...state.todos]
    }
}

export default connect(mapStateToProps)(TodoList)