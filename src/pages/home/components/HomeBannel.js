import React from 'react'
import { getBannel } from 'SRC/api/home'
import HomeBannelUI from './HomeBannelUI'

class HomeBannel extends React.Component {
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

export default HomeBannel;