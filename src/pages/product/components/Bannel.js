import React from 'react'
import { getBannel } from 'SRC/api/home'
import BannelUI from './BannelUI'
import { withRouter } from 'react-router-dom'

const data = [
  {
    "id": 1,
    "name": "商品一",
    "image": "http://localhost:3000/images/home_bannel/bannel_1.jpg"
  },
  {
    "id": 2,
    "name": "商品二",
    "image": "http://localhost:3000/images/home_bannel/bannel_2.jpg"
  },
  {
    "id": 3,
    "name": "商品三",
    "image": "http://localhost:3000/images/home_bannel/bannel_3.jpg"
  },
  {
    "id": 4,
    "name": "商品四",
    "image": "http://localhost:3000/images/home_bannel/bannel_4.jpg"
  },
  {
    "id": 5,
    "name": "商品五",
    "image": "http://localhost:3000/images/home_bannel/bannel_5.jpg"
  },
  {
    "id": 6,
    "name": "商品六",
    "image": "http://localhost:3000/images/home_bannel/bannel_6.jpg"
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