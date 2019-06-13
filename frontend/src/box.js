import React, {Component} from 'react'
import {connect} from "react-redux";


class Box1 extends Component{
    render(){
        console.log(this.props.name, 'render()', this.props.b1)
        return (
            <div className='box'>
                <h3>{this.props.name}</h3>
                <p>{this.props.b1}</p>
            </div>
        )
    }
}

const income = (state) => {
    return {b1: state['b1']}
}

export default connect(income)(Box1)