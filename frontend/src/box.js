import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";


class Box extends Component{
    render(){
        console.log(this.props.name, 'render()', this.props.event)
        return (
            <div className='box'>
                <h3>{this.props.name}</h3>
                <p>{this.props.event.name}</p>
            </div>
        )
    }
}

const income = (state) => {
    return {event: state}
}

export default connect(income)(Box)