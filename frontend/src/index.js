import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./reducer";
import Button1 from './button'
import Button2 from './button2'
import Box1 from "./box";
import Box2 from "./box2";
import './index.css'

const store = createStore(rootReducer)


const App = () => {
    return (
        <div className="container">
            <div>
                <Box1 />
                <Button1 />
            </div>

            <div>
                <Box2 />
                <Button2 />
            </div>

        </div>
    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))