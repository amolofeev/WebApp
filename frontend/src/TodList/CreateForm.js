import React, {Component} from 'react'

class CreateForm extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)

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
        this.props.createCallback(this.state)
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

export default CreateForm