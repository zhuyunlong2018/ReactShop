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
    getBannel().then(response => {
      this.setState({
        data: response
      })
    }).catch(error => { })
  }

  componentDidRecover = () => {
    // 强制更新
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