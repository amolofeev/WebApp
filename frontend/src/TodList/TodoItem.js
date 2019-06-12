import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";

class TodoItem extends Component {
    render() {
        return (
            <div className="todo-item collection-item" onClick={() => this.props.deleteTodo(this.props.id)}>
                <span>{this.props.todo.content}</span>
            </div>
        )

    }
}

const mapStateToProps = (state, props) => {
    return {
        todo: state.todos.find(item => item.id === props.id)
    }
}

const mapDispatch = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch({type: "DELETE_TODO", id: id})
    }
}

export default connect(mapStateToProps, mapDispatch)(TodoItem)
