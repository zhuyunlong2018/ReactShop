import React from 'react'
import { getBannel } from 'SRC/api/home'
import HomeBannelUI from './HomeBannelUI'
import { withRouter } from 'react-router-dom'
class HomeBannel extends React.Component {

  constructor(props, ...args) {
    super(props, ...args)
    props.cacheLifecycles.didCache(this.componentDidCache)
    props.cacheLifecycles.didRecover(this.componentDidRecover)
  }

  state = {
    data: [],
    imgHeight: 176,
  }

  getBannel() {
    //获取首页顶部bannel轮播图数据
    getBannel().then(response => {
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
      <HomeBannelUI data={this.state.data}
        imgHeight={this.state.imgHeight} />
    );
  }
}

export default withRouter(HomeBannel);