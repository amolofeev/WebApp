import React, {Component} from 'react'
import TodoItem from "./TodoItem";
import CreateForm from "./CreateForm";
import './index.css'


class TodoList extends Component{
    constructor(){
        super()

        this.deleteCallback = this.deleteCallback.bind(this)
        this.createCallback = this.createCallback.bind(this)

        this.state = {
            items: [
                {id:1, content: "Todo item one"},
                {id:2, content: "Todo item two"},
                {id:3, content: "Todo item three"},
            ]
        }
    }

    deleteCallback(id) {
        const items = this.state.items.filter(item => {
            return item.id !== id
        })
        this.setState({items})
    }

    createCallback(item){
        item.id = Math.random()
        const items = [...this.state.items, item]
        this.setState({items})
    }

    render(){
        const {items} = this.state
        const _component = items.length ? (
            items.map(item => <TodoItem item={item} deleteCallback={this.deleteCallback} key={item.id} />)
        ) : (
            <p className="center">
                <b>Your TodoList is empty!</b>
            </p>
        )


        return (
            <div className="todo-list collection">
                {_component}
                <CreateForm createCallback={this.createCallback}/>
            </div>
        )

    }
}

export default TodoList