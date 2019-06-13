import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./reducer";
import Button from './button'
import Box from "./box";
import './index.css'

const store = createStore(rootReducer)


const App = () => {
    return (
        <div className="container">
            <p>Press F12</p>
            <br />
            <div>
                <Box name='box 1' />
                <Button name='btn 1'/>
            </div>

            <div>
                <Box name='box 2'/>
                <Button name='btn 2'/>
            </div>

        </div>
    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))