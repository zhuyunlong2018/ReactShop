import React from 'react'
import { withRouter } from 'react-router-dom'
import HomeNavBarUI from './HomeNavBarUI'

/**
 * 首页顶部状态栏
 */
class HomeNavBar extends React.Component {

  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };


  render() {
    return (
      <HomeNavBarUI onSelect={this.onSelect}
        handleVisibleChange={this.handleVisibleChange}
        selected={this.state.selected}
        visible={this.state.visible} />
    )
  }
}

export default withRouter(HomeNavBar);
