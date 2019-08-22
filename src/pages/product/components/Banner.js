import React from 'react'
import { getBanners } from 'SRC/api/home'
import BannerUI from './BannerUI'
import { withRouter } from 'react-router-dom'


/**
 * 顶部轮播图
 */
class Banner extends React.Component {


  render() {
    const { images } = this.props
    return (
      <BannerUI data={images} />
    );
  }
}

export default withRouter(Banner);