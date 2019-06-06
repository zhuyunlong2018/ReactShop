import React from 'react'
import SellWellUI from './SellWellUI'
import { getSellWell } from 'SRC/api/home'

/**
 * 热销商品栏
 */
class SellWell extends React.Component {

    state = {
        data: []
    }

    getSellWell() {
        //获取热销商品列表
        getSellWell().then(response => {
            this.setState({
                data: response
            })
        }).catch(error => {})
    }

    componentWillMount() {
        this.getSellWell()
    }

    render() {
        return (
            <SellWellUI data={this.state.data} />
        )
    }
}

export default SellWell;