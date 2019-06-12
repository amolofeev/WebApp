import React, {Component} from 'react'

const TodoItem = ({item, deleteCallback}) => {
    return (
        <div className="todo-item collection-item" onClick={() => {deleteCallback(item.id)}}>
            <span>{item.content}</span>
        </div>
    )
}

export default TodoItem
