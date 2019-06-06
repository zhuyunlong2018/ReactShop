import React from 'react'
import { withRouter } from 'react-router-dom'


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
            <div>
                hello product
            </div>
        )
    }
}

export default withRouter(Product)