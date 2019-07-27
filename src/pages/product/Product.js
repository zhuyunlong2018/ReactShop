import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductUI from './ProductUI'


/**
 * 商品、产品详情页
 */
class Product extends React.Component {

    constructor(props, ...args) {
        super(props, ...args)
        console.log( this.props.match.params.id)
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <ProductUI />
        )
    }
}

export default withRouter(Product)