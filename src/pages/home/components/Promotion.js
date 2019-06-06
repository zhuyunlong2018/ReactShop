import React from 'react'
import PromotionUI from './PromotionUI'
import { getPromotion } from 'SRC/api/home'

/**
 * 促销栏目
 */
class Promotion extends React.Component {
    state = {
        data: [],
        imgHeight: "3.2rem",
    }

    getPromotion() {
        //获取促销商品列表
        getPromotion().then(response => {
            this.setState({
                data: response
            })
        }).catch(error => {})
    }

    componentDidMount() {
        this.getPromotion()
    }
    
    render() {
        return (
            <PromotionUI data={this.state.data}
                imgHeight={this.state.imgHeight}
                setState={this.setState.bind(this)}
                showProduct={this.props.showProduct} />
        );
    }
}

export default Promotion;