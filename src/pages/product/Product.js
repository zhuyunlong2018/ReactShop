import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductUI from './ProductUI'
import { fetchById } from "SRC/api/product"


/**
 * 商品、产品详情页
 */
class Product extends React.Component {

    constructor(props, ...args) {
        super(props, ...args)
        //传递过来的商品ID
        const productId = this.props.match.params.id
        this.state = {
            queryForm: {
                id: productId
            },
            product: {},//存储商品详细信息
            selectSku: null,//选择的具体商品sku
            count: 1, //选择了数量
        }
    }

    /**
     * 修改选中的配置
     * @param {Object} selectSku 
     */
    changeSelectSku(selectSku) {
        console.log(selectSku)
        this.setState({ selectSku })
    }

    /**
     * 修改数量
     * @param {Number} count 
     */
    changeCount(count) {
        this.setState({ count })
    }

    componentWillMount() {
        this.getProduct()
    }

    /**
     * 获取商品信息
     */
    getProduct() {
        fetchById(this.state.queryForm).then(product => {
            //解析商品属性
            product.attributes.paramData = JSON.parse(product.attributes.paramData)
            if (product.sku) {
                //解析商品sku图片组
                product.sku.forEach(element => {
                    element.images = JSON.parse(element.images)
                });
                this.setState({
                    selectSku: product.sku[0]
                })
            }
            this.setState({
                product
            })
            // console.log(this.state.product)
        })
        .catch(error => {})
    }

    render() {
        const { product, selectSku } = this.state
        return (
            <ProductUI product={product}
                selectSku={selectSku}
                changeSelectSku={this.changeSelectSku.bind(this)}
                changeCount={this.changeCount.bind(this)} />
        )
    }
}

export default withRouter(Product)