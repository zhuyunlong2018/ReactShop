import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductsListUI from './ProductsListUI'

/**
 * 商品、产品列表
 */
class ProductsList extends React.Component {

    constructor(props, ...args) {
        super(props, ...args)

        //商品分类ID
        const categoryId = this.props.match.params.id
        this.state = {
            categoryId
        }
    }

    componentWillMount() {
        
    }

    /**
     * 返回上一页
     */
    goBackHistory() {
        this.props.history.goBack()
    }

    /**
     * 进入搜索页面
     */
    goSearchPage() {
        this.props.history.push("/search")
    }

    /**
     * 进入商品详情页
     * @param {*} id 
     */
    goProductDetail(id) {
        this.props.history.push("/product/"+id)
    }

    render() {
        return (
            <ProductsListUI 
            goProductDetail={this.goProductDetail.bind(this)}
            goBackHistory={this.goBackHistory.bind(this)}
            goSearchPage={this.goSearchPage.bind(this)} />
        )
    }
}

export default withRouter(ProductsList)