import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductsListUI from './ProductsListUI'
import { fetchPageByCategory } from "SRC/api/product"

/**
 * 商品、产品列表
 */
class ProductsList extends React.Component {

    constructor(props, ...args) {
        super(props, ...args)

        //商品分类ID
        const categoryId = this.props.match.params.id
        this.state = {
            queryForm: {
                categoryId,
                page: 1,
                size: 10
            },
            products: [],
            pages: 0,
            total: 0,
        }
    }

    componentWillMount() {
        this.fetchList()
    }

    /**
     * 获取商品列表
     */
    fetchList() {
        return fetchPageByCategory(this.state.queryForm).then(res => {
            console.log(res)
            this.setState({
                products: this.state.products.concat(res.records),
                pages: res.pages,
                total: res.total
            })
        }).catch(error => { })
    }

    /**
     * 下拉获取下一页数据
     * @param {number} page 
     */
    changePage(page) {
        this.setState({
            queryForm: {...this.state.queryForm, page}
        })
        return this.fetchList()
    }

    /**
     * 上拉刷新页面
     */
    refresh() {
        this.setState({
            products: [],
            queryForm: {...this.state.queryForm, page: 1}
        })
        return this.fetchList()
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
     * @param {Number} id 
     */
    goProductDetail(id) {
        this.props.history.push("/product/" + id)
    }

    render() {
        return (
            <ProductsListUI
                products={this.state.products}
                pageNum={this.state.queryForm.page}
                pageSize={this.state.queryForm.size}
                totalPage={this.state.pages}
                changePage={this.changePage.bind(this)}
                refresh={this.refresh.bind(this)}
                goProductDetail={this.goProductDetail.bind(this)}
                goBackHistory={this.goBackHistory.bind(this)}
                goSearchPage={this.goSearchPage.bind(this)} />
        )
    }
}

export default withRouter(ProductsList)