import React, {Component} from 'react'
import {connect} from "react-redux";


class Button1 extends Component{
    render(){
        return <button onClick={()=>this.props.btnPressed()}>b1</button>
    }
}

const events = (dispatch) => {
    return {
        btnPressed: () => dispatch({type: 'b1'})
    }
}

export default connect(null, events)(Button1)