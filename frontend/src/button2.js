import React, {Component} from 'react'
import {connect} from "react-redux";


class Button2 extends Component{
    render(){
        return <button onClick={()=>this.props.btnPressed()}>b2</button>
    }
}

const events = (dispatch) => {
    return {
        btnPressed: () => dispatch({type: 'b2'})
    }
}

export default connect(null, events)(Button2)