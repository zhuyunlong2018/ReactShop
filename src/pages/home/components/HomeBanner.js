import React from 'react'
import { getBanner } from 'SRC/api/home'
import HomeBannerUI from './HomeBannerUI'
import { withRouter } from 'react-router-dom'

/**
 * 主页顶部轮播图
 */
class HomeBanner extends React.Component {

  constructor(props, ...args) {
    super(props, ...args)
    props.cacheLifecycles.didCache(this.componentDidCache)
    props.cacheLifecycles.didRecover(this.componentDidRecover)
  }

  state = {
    data: [],
  }

  getBannel() {
    //获取首页顶部bannel轮播图数据
    getBanner().then(response => {
      this.setState({
        data: response
      })
    }).catch(error => { })
  }

  componentDidRecover = () => {
    // router-cache强制更新
    this.forceUpdate();
  }

  componentDidMount() {
    this.getBannel()
  }

  render() {
    return (
      <HomeBannerUI data={this.state.data} />
    );
  }
}

export default withRouter(HomeBanner);