import React from 'react'
import './My.css'

class MyUI extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header-container">
                    <div className="icon">
                        <img src="" alt="" />
                    </div>
                    <div className="info">
                        <p>张三  会员等级：30级</p>
                        <p>积分: 808</p>
                    </div>
                </div>
                <ul className="tab">
                    <li>收藏夹</li>
                    <li>关注店铺</li>
                    <li>我的优惠券</li>
                </ul>
                <div className="order">
                    <p className="title">我的订单</p>
                    <ul className="type">
                        <li>
                            <img src={require("PUBLIC/images/my/fukuan.png")} alt="" />
                            <p>待付款</p>
                        </li>
                        <li>
                            <img src={require("PUBLIC/images/my/fahuo.png")} alt="" />
                            <p>待发货</p>
                        </li>
                        <li>
                            <img src={require("PUBLIC/images/my/shouhuoyanshou.png")} alt="" />
                            <p>待收货</p>
                        </li>
                        <li>
                            <img src={require("PUBLIC/images/my/daipingjia01.png")} alt="" />
                            <p>待评价</p>
                        </li>
                        <li>
                            <img src={require("PUBLIC/images/my/yiwancheng_2.png")} alt="" />
                            <p>已完成</p>
                        </li>
                    </ul>
                </div>
                <ul className="list">
                    <li>我的钱包</li>
                    <li>我的评价</li>
                    <li>地址管理</li>
                    <li onClick={this.props.logout} >退出登录</li>
                </ul>
            </div>
        )
    }
}

export default MyUI;