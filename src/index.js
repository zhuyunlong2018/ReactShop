import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Utils from 'SRC/utils'
import './index.css'
import * as serviceWorker from './serviceWorker'

//计算css响应式rem单位
Utils.initRem()

ReactDOM.render(<App />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
