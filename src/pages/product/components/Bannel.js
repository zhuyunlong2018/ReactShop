import React from 'react'
import { getBannel } from 'SRC/api/home'
import BannelUI from './BannelUI'
import { withRouter } from 'react-router-dom'

const data = [
  {
    "id": 1,
    "name": "商品一",
    "image": "http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/31203/23/9994/197564/5cab210dE64e20358/d94e70571c1fd455.jpg!q80.dpg.webp"
  },
  {
    "id": 2,
    "name": "商品二",
    "image": "http://m.360buyimg.com/mobilecms/s720x720_jfs/t1/21894/26/13941/233728/5ca32877Ed8883d34/0255fe71d22f34fd.jpg!q70.dpg.webp"
  },
  {
    "id": 3,
    "name": "商品三",
    "image": "http:////m.360buyimg.com/mobilecms/s720x720_jfs/t1/31429/32/8937/58199/5ca3287dE09b1d420/ea0fbfb0cdb3e2b2.jpg!q70.dpg.webp"
  },
  {
    "id": 4,
    "name": "商品四",
    "image": "http:////m.360buyimg.com/mobilecms/s720x720_jfs/t1/17203/2/13687/144961/5ca32871E70ecb8c2/a3cbfd1a21b46597.jpg!q70.dpg.webp"
  },
  {
    "id": 5,
    "name": "商品五",
    "image": "http:////m.360buyimg.com/mobilecms/s720x720_jfs/t1/30680/18/9042/28577/5ca32887E6a8c213d/63c7ad7e6d725449.jpg!q70.dpg.webp"
  },
  {
    "id": 6,
    "name": "商品六",
    "image": "http:////m.360buyimg.com/mobilecms/s720x720_jfs/t1/16018/40/13941/131110/5ca3286cE7bbb1c23/2c0a1de00945af08.jpg!q70.dpg.webp"
  }
]


/**
 * 主页顶部轮播图
 */
class Bannel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: data,
    }
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