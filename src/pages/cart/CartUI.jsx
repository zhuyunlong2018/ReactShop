import React from 'react'

import style from './Cart.module.scss'

/**
 * 购物车栏
 */
class CartUI extends React.Component {

    render() {
        const { cartList } = this.props

        const list = cartList.map((cart, index) =>
            <li key={cart.id}>
                {cart.productSkuTitle}
            </li>
        );

        return (
            <div className={style.cart}>
                <div className={style.container}>
                    {list}
                </div>
                <div className={style.bottom}>bottom</div>
            </div>
        )
    }
}
export default CartUI;