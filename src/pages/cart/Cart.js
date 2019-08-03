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

    static propTypes = {
        cartInfo: PropTypes.object.isRequired,
        userInfo: PropTypes.object.isRequired,
        getCartList: PropTypes.func.isRequired,
    }

    componentWillMount() {

        //获取购物车信息
        if (this.props.userInfo.token !== "" && this.props.cartInfo.list.length === 0) {
            //TODO 此处可以传入参数，判断是否登录来进行是否请求后台数据与本地数据进行融合
            this.props.getCartList().finally(() => {
                console.log(this.props.cartInfo)
            })
        }
    }

    render() {
        return (
            <CartUI cartList={this.props.cartInfo.list} />
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