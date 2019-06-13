import React from 'react'
import {connect} from "react-redux";


const Button1 = ({_, btnPressed}) =>{
    return <button onClick={btnPressed}>button 1</button>
}

const events = (dispatch) => {
    return {
        btnPressed: () => dispatch({type: 'b1'})
    }
}

export default connect(null, events)(Button1)