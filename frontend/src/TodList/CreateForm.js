import React, {Component} from 'react'
import {connect} from "react-redux";

class CreateForm extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            content: ''
        }
    }

    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const pure_text = this.state.content.trim()
        if (pure_text) {
            this.props.createTodo(this.state.content)
        }
        this.setState({content: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        createTodo: (content) => dispatch({type: "CREATE_TODO", content: content})
    }
}

export default connect(null, mapDispatch)(CreateForm)