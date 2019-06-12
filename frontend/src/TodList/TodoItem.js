import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";

class TodoItem extends Component {
    render() {
        return (
            <div className="todo-item collection-item">
                <Link to={`/${this.props.id}`}>
                    {this.props.todo.content}
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        todo: state.todos.find(item => item.id === props.id)
    }
}

export default connect(mapStateToProps)(TodoItem)
