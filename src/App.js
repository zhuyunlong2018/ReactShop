import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { CacheRoute, CacheSwitch } from 'react-router-cache-route'
import store from 'SRC/store'
import Pages from 'SRC/pages/Pages.jsx'
import Login from 'SRC/pages/login/Login'
import Search from 'SRC/pages/search/Search.jsx'
import NotFound from 'SRC/pages/NotFound'
import Product from 'SRC/pages/product/Product'
import Storage from 'SRC/utils/storage'
import { USER_KEY } from 'SRC/utils/keys'
import { saveInfo } from 'SRC/store/user/action'
import 'antd-mobile/dist/antd-mobile.css'
import 'PUBLIC/css/normalize.css'
import 'SRC/App.css'
import ProductsList from 'SRC/pages/productsList/ProductsList';

class App extends Component {

  state = {
    /**
     * basename 路由、网页根目录路劲
     */
    basename: process.env.REACT_APP_BASENAME
  };

  componentWillMount() {
    //读取本地存储是否有用户信息
    const userInfo = Storage.getStorage(USER_KEY)
    if (userInfo) {
      store.dispatch(saveInfo(userInfo))
    }
  }

  render() {
    return (
      /**
       * Provider 组装store
       * CacheRoute 缓存路由页面
       * Route 不缓存路由页面
       */
      <Provider store={store}>
        <BrowserRouter basename={this.state.basename}>
          <div className="App">
            <CacheSwitch>
              <CacheRoute path='/' exact component={Pages}></CacheRoute>
              <CacheRoute path='/search' exact component={Search}></CacheRoute>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/product/:id' exact component={Product}></Route>
              <Route path='/productsList/:id' exact component={ProductsList}></Route>
              <Route path="*" exact component={NotFound}></Route>
            </CacheSwitch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
