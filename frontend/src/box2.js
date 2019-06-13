import React, {Component} from 'react'
import {connect} from "react-redux";


const Box2 = ({b2}) => {
    return (
        <div className='box'>
            <h3>Box 2</h3>
            <p>{b2}</p>
        </div>
    )
}

const income = (state) => {
    return {b2: state['b2']}
}

export default connect(income)(Box2)