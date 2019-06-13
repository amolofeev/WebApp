import React from 'react'
import {connect} from "react-redux";


const Box1 = ({b1}) => {
        return (
            <div className='box'>
                <h3>Box 1</h3>
                <p>{b1}</p>
            </div>
        )
    }

const income = (state) => {
    return {b1: state['b1']}
}

export default connect(income)(Box1)