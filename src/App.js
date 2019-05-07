import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from 'SRC/store'
import Pages from 'SRC/pages/Pages'
import Login from 'SRC/pages/login/Login'
import Search from 'SRC/pages/search/Search'
import 'antd-mobile/dist/antd-mobile.css'
import 'PUBLIC/css/normalize.css'
import 'SRC/App.css'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path='/' exact component={Pages}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/search' exact component={Search}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
  
    );
  }
}

export default App;
