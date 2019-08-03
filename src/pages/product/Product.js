import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartList, updateCartList } from 'SRC/store/shoppingCart/action'
import ProductUI from './ProductUI'
import { fetchById } from "SRC/api/product"
import { addShoppingCart } from 'SRC/api/shoppingCart'


/**
 * 商品、产品详情页
 */
class Product extends React.Component {

    static propTypes = {
        cartInfo: PropTypes.object.isRequired,
        userInfo: PropTypes.object.isRequired,
        getCartList: PropTypes.func.isRequired,
    }

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
        this.setState({ selectSku })
    }

    /**
     * 添加到购物车
     */
    addShoppingCart() {
        //TODO 添加完成有提示或动画？？
        addShoppingCart({
            productSkuId: this.state.selectSku.id,
            number: this.state.count
        }).then(res => {
            let newList = [...this.props.cartInfo.list]
            let index = -1
            this.props.cartInfo.list.forEach((e, i) => {
                if (e.productSkuId === this.state.selectSku.id) {
                    index = i
                }
            })
            if (index !== -1) {
                newList[index].number += this.state.count
            } else {
                //添加新配置，将产品配置product_sku加入购物车list的属性中
                res.productSkuEntity = this.state.selectSku
                newList.push(res)
            }
            //推送到redux中存储
            this.props.updateCartList(newList)

        }).catch(error => { })
    }

    /**
     * 立即购买
     */
    buyNow() {
        //TODO 跳转结算页面，未登录跳转登录页面
    }

    /**
     * 修改数量
     * @param {Number} count 
     */
    changeCount(count) {
        this.setState({ count })
    }

    componentWillMount() {
        //获取产品详情页信息
        this.getProduct()

        //获取购物车信息
        if (this.props.userInfo.token !== "" && this.props.cartInfo.list.length === 0) {
            //TODO 此处可以传入参数，判断是否登录来进行是否请求后台数据与本地数据进行融合
            this.props.getCartList().finally(() => {
                // console.log(this.props.cartInfo)
            })
        }
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
            .catch(error => { })
    }

    render() {
        const { product, selectSku } = this.state
        return (
            <ProductUI product={product}
                selectSku={selectSku}
                cartInfo={this.props.cartInfo}
                changeSelectSku={this.changeSelectSku.bind(this)}
                changeCount={this.changeCount.bind(this)}
                addShoppingCart={this.addShoppingCart.bind(this)}
                buyNow={this.buyNow.bind(this)} />
        )
    }
}

export default withRouter(
    connect(state => ({
        cartInfo: state.cartInfo,
        userInfo: state.userInfo
    }), {
            getCartList,
            updateCartList,
        }
    )(Product)
)