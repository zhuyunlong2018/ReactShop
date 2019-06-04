import React from 'react'
import PromotionUI from './PromotionUI'
import { getPromotion } from 'SRC/api/home'

class Promotion extends React.Component {
    state = {
        data: [],
        imgHeight: 176,
    }

    getPromotion() {
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
                imgHeight={this.state.imgHeight} />
        );
    }
}

export default Promotion;