import React from 'react'
import { getBannel } from 'SRC/api/home'
import BannelUI from './BannelUI'
import { withRouter } from 'react-router-dom'


/**
 * 顶部轮播图
 */
class Bannel extends React.Component {


  render() {
    const { images } = this.props
    return (
      <BannelUI data={images} />
    );
  }
}

export default withRouter(Bannel);