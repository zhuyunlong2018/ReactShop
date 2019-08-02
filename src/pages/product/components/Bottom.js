import React from 'react'
import { Badge } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import style from './Components.module.scss'


/**
 * 底部栏
 */
class Bottom extends React.Component {

    /**
     * 进入购物车
     */
    goShoppingCart() {
        this.props.history.push("/cart")
    }

    /**
     * 进入客服页面
     */
    goSerivice() {

    }

    /**
     * 返回上一页
     */
    goBack() {
        this.props.history.goBack()
    }

    render() {
        return (
            <ul className={style.bottom}>
                <li onClick={this.goBack.bind(this)}>
                    <img src={require("PUBLIC/images/return_icon.png")} alt="" />
                    <p>返回</p>
                </li>
                <li onClick={this.goSerivice.bind(this)}>
                    <Badge dot>
                        <img src={require("PUBLIC/images/customer_service.png")} alt="" />
                    </Badge>
                    <p>联系客服</p>
                </li>
                <li onClick={this.goShoppingCart.bind(this)}>
                    <Badge text={'3'}><img src={require("PUBLIC/images/shopping_cart.png")} alt="" /></Badge>
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

export default withRouter(Bottom)