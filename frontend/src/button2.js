import React from 'react'
import {connect} from "react-redux";


const Button2 = ({_, btnPressed}) => {
    return <button onClick={btnPressed}>button 2</button>
}

const events = (dispatch) => {
    return {
        btnPressed: () => dispatch({type: 'b2'})
    }
}

export default connect(null, events)(Button2)