import React, {Component} from 'react'
import {connect} from "react-redux";

class TodoItemDetail extends Component {
    constructor(){
        super()
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        this.props.deleteTodo(this.props.match.params.id)
        this.props.history.push('/')
    }

    render(){
        return (
            <div className='todo-item-detail collection'>
                <div className='collection-item'>
                    <h5>Todo #{this.props.match.params.id}</h5>
                    <p>{this.props.todo.content}</p>
                    <p>
                        <button onClick={this.handleDelete}>Delete this todo</button>
                    </p>
                </div>
            </div>
        )
    }
}

const mapState = (state, props) => {
    return {
        todo: state.todos.find(item => item.id == props.match.params.id) // compare str and int. it's awful =)
    }
}

const mapDispatch = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch({type: "DELETE_TODO", id: id})
    }
}

export default connect(mapState, mapDispatch)(TodoItemDetail)