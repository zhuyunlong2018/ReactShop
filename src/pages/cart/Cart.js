import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartList, updateCartList } from 'SRC/store/shoppingCart/action'
import { changeNumber, deleteOne } from "SRC/api/shoppingCart"
import CartUI from './CartUI'

/**
 * 购物车栏
 */
class Cart extends React.Component {

    state = {
        willGoPay: [], //选中的购物车产品集合
    }

    static propTypes = {
        cartInfo: PropTypes.object.isRequired,//redux购物车内容
        userInfo: PropTypes.object.isRequired,//redux用户内容
        getCartList: PropTypes.func.isRequired,//获取购物车列表
        updateCartList: PropTypes.func.isRequired,//更新购物车列表
    }

    /**
     * 选中、取消选择一个产品
     * @param {object} e 
     * @param {object} cart 
     */
    selectOne(e, cart) {
        if (e.target.checked) {
            //选中产品
            this.setState({ willGoPay: [...this.state.willGoPay, cart] })
        } else {
            //取消选中产品
            this.setState({ willGoPay: this.state.willGoPay.filter(v => v.id !== cart.id) })
        }
    }

    /**
     * 全选，全不选
     */
    selectAll(checked) {
        if (checked) {
            //全部选择
            this.setState({ willGoPay: this.props.cartInfo.list })
        } else {
            //全部不选择
            this.setState({ willGoPay: [] })
        }
    }

    /**
     * 修改购物车某个商品数量
     * @param {Number} value 修改后值
     * @param {object} cart 修改的购物车对象
     */
    changeNumber(value, cart) {
        if (value) {
            //和后台交互
            if (this.props.userInfo.token !== "") {
                changeNumber({
                    id: cart.id,
                    number: value
                }).then(res => {
                    //todo something
                }).catch(error => { })
            }
            //更新redux state 数据
            cart.number = value
            this.props.updateCartList(this.props.cartInfo.list)
        }
    }


    /**
     * 删除购物车某个商品
     * @param {Number} id 购物车ID
     */
    deleteOne(id) {
        if (this.props.userInfo.token !== "") {
            deleteOne({ id }).then(res => {
                //show success msg
            }).catch(error => { })
        }
        //更新redux state数据
        this.props.updateCartList(this.props.cartInfo.list.filter(v => v.id !== id))
    }

    /**
     * 计算选中商品总价格
     */
    totalPrice() {
        let totalPrice = 0
        this.state.willGoPay.forEach(e => {
            totalPrice += e.number * e.productSku.price
        })
        return totalPrice
    }

    /**
     * 去结算
     */
    goPay() {
        console.log('go pay page')
    }

    componentWillMount() {
        //获取购物车信息
        if (this.props.userInfo.token !== "" && this.props.cartInfo.list.length === 0) {
            this.props.getCartList().finally(() => {
                // console.log(this.props.cartInfo.list)
            })
        }
    }

    /**
     * 进入商品详情页面
     * @param {Number} id 商品id
     */
    goToProduct(id) {
        this.props.history.push("/product/" + id)
    }

    render() {
        return (
            <CartUI cartList={this.props.cartInfo.list}
                willGoPay={this.state.willGoPay}
                selectOne={this.selectOne.bind(this)}
                selectAll={this.selectAll.bind(this)}
                totalPrice={this.totalPrice.bind(this)}
                goPay={this.goPay.bind(this)}
                goToProduct={this.goToProduct.bind(this)}
                changeNumber={this.changeNumber.bind(this)}
                deleteOne={this.deleteOne.bind(this)} />
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
    )(Cart)
)