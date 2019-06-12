import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {
    return (
        <div className="app-container">
            <div className="content">
                <h1>It Works!</h1>
                <p>Place your code here.</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))