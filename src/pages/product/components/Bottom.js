import React from 'react'
import style from './Components.module.scss'


/**
 * 底部栏
 */
class Bottom extends React.Component {


    render() {
        return (
            <ul className={style.bottom}>
                <li>
                    <img src={require("PUBLIC/images/customer_service.png")} alt="" />
                    <p>联系客服</p>
                </li>
                <li>
                    <img src={require("PUBLIC/images/shop.png")} alt="" />
                    <p>店铺</p>
                </li>
                <li>
                    <img src={require("PUBLIC/images/shopping_cart.png")} alt="" />
                    <p>购物车</p>
                </li>
                <li>
                    <div onClick={() => this.props.onOpenChange()}>加入购物车</div>
                </li>
                <li>
                    <div onClick={() => this.props.onOpenChange()}>立即购买</div>
                </li>
            </ul>
        )
    }
}

export default Bottom