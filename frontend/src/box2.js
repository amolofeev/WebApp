import React, {Component} from 'react'
import {connect} from "react-redux";


class Box2 extends Component{
    render(){
        console.log(this.props.name, 'render()', this.props.b2)
        return (
            <div className='box'>
                <h3>{this.props.name}</h3>
                <p>{this.props.b2}</p>
            </div>
        )
    }
}

const income = (state) => {
    return {b2: state['b2']}
}

export default connect(income)(Box2)