import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from 'SRC/store'
import Pages from 'SRC/pages/Pages'
import 'antd-mobile/dist/antd-mobile.css'
import 'PUBLIC/css/normalize.css'
import 'SRC/App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route path='/' exact component={Pages}></Route>
          </div>
        </BrowserRouter>
      </Provider>
  
    );
  }
}

export default App;
