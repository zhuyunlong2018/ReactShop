import React, { Component } from 'react';
import Pages from 'SRC/pages/Pages';
import 'antd-mobile/dist/antd-mobile.css'; 
import 'PUBLIC/css/normalize.css'
import 'SRC/App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Pages></Pages>
      </div>
    );
  }
}

export default App;
