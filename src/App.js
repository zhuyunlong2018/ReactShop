import React, { Component } from 'react';
import Pages from './pages/Pages';
import 'antd-mobile/dist/antd-mobile.css'; 
import './App.css';
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
