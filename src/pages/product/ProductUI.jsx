import React from 'react'
import { Tabs, Badge, Drawer } from 'antd-mobile'
import Bannel from './components/Bannel'
import style from "./Product.module.scss"


const tabs = [
    { title: <Badge>商品</Badge> },
    { title: <Badge >详情</Badge> },
    { title: <Badge>评论</Badge> },
];

class ProductUI extends React.Component {

    state = {
        open: false,
    }

    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }


    render() {

        const actionDrawer = (
            <div className={style.selectSpk}>
                tabsContainer
            </div>
        );

        return (
            <div className={style.product}>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: "100vh" }}
                    position={"bottom"}
                    sidebar={actionDrawer}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                    <Tabs tabs={tabs}
                        initialPage={0}
                        swipeable={false}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div className={style.tabsContainer}>
                            <Bannel />
                            <div className="price">
                                <div >¥<em>5999</em>.00</div>
                            </div>
                            <div className="title">
                                华为HUAWEI MateBook 14 全面屏轻薄性能笔记本电脑(英特尔酷睿i5 8G 512G MX250 office 2K 一碰传)灰
                            <p>【华为笔记本MateBookD(i3版）新品上市】，护眼大屏，轻薄有质，首发低至3588元，8月1日0点准时开抢~ </p>
                            </div>
                            <div className="detail">
                                <img src="http://img30.360buyimg.com/sku/jfs/t1/41433/40/8831/687493/5d23f35aE9b83ecb9/71a9b57a4e6e73e1.jpg" alt="" />
                            </div>
                        </div>
                        <div className={style.tabsContainer}>
                            Content of second tab
                    </div>
                        <div className={style.tabsContainer}>
                            Content of third tab
                    </div>
                    </Tabs>
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
                            <div onClick={() => this.onOpenChange()}>加入购物车</div>
                        </li>
                        <li>
                            <div onClick={() => this.onOpenChange()}>立即购买</div>
                        </li>
                    </ul>
                </Drawer>
            </div>
        );
    }
}

export default ProductUI