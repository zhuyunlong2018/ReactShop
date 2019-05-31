import React from 'react'
import PromotionUI from './PromotionUI'
const requireContext = require.context("PUBLIC/images/home_promotion", true, /^\.\/.*\.jpg$/);
const images = requireContext.keys().map(requireContext);
class Promotion extends React.Component {
    state = {
        data: [],
        imgHeight: 176,
      }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
            data: images,
            });
        }, 100);
    }
    render() {
        return (
            <PromotionUI data={ this.state.data }
            imgHeight={ this.state.imgHeight } />
        );
    }
}

export default Promotion;