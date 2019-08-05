import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartList, updateCartList } from 'SRC/store/shoppingCart/action'
import CartUI from './CartUI'

/**
 * 购物车栏
 */
class Cart extends React.Component {

    state = {
        willGoPay: [], //选中的产品集合
    }

    static propTypes = {
        cartInfo: PropTypes.object.isRequired,//redux购物车内容
        userInfo: PropTypes.object.isRequired,//redux用户内容
        getCartList: PropTypes.func.isRequired,
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
            this.setState({ willGoPay: this.state.willGoPay.filter(v => v.id !== cart.id)})
        }
    }

    /**
     * 全选，全不选
     */
    selectAll(e) {
        if (e.target.checked) {
            this.setState({ willGoPay: this.props.cartInfo.list })
        } else {
            this.setState({ willGoPay: [] })
        }
    }

    changeNumber() {

    }


    deleteOne() {
        
    }

    /**
     * 计算选中商品总价格
     */
    totalPrice() {
        let totalPrice = 0
        this.state.willGoPay.forEach(e => {
            totalPrice += e.number * e.productSkuEntity.price
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

    render() {
        return (
            <CartUI cartList={this.props.cartInfo.list}
                willGoPay={this.state.willGoPay}
                selectOne={this.selectOne.bind(this)}
                selectAll={this.selectAll.bind(this)}
                totalPrice={this.totalPrice.bind(this)}
                goPay={this.goPay.bind(this)} />
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