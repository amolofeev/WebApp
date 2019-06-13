import React, {Component} from 'react'
import {connect} from "react-redux";


class Button extends Component{
    render(){
        return <button onClick={()=>this.props.btnPressed(this.props.name)}>{this.props.name}</button>
    }
}

const events = (dispatch) => {
    return {
        btnPressed: (name) => dispatch({type: 'btn', name:name})
    }
}

export default connect(null, events)(Button)