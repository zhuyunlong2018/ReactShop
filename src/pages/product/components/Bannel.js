import React from 'react'
import { getBannel } from 'SRC/api/home'
import BannelUI from './BannelUI'
import { withRouter } from 'react-router-dom'

/**
 * 主页顶部轮播图
 */
class Bannel extends React.Component {

  state = {
    data: [],
  }

  getBannel() {
    //获取首页顶部bannel轮播图数据
    getBannel().then(response => {
      this.setState({
        data: response
      })
    }).catch(error => { })
  }

  componentDidMount() {
    this.getBannel()
  }

  render() {
    return (
      <BannelUI data={this.state.data} />
    );
  }
}

export default withRouter(Bannel);