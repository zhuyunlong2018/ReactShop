import React from 'react'
import { Tabs, Badge } from 'antd-mobile'
import Bannel from './components/Bannel'
import style from "./Product.module.scss"


const tabs = [
    { title: <Badge>商品</Badge> },
    { title: <Badge >详情</Badge> },
    { title: <Badge>评论</Badge> },
];

class ProductUI extends React.Component {


    render() {
        return (
            <div className={style.product}>
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
                    </div>
                    <div className={style.tabsContainer}>
                        Content of second tab
                    </div>
                    <div className={style.tabsContainer}>
                        Content of third tab
                    </div>
                </Tabs>

                <ul className={style.bottom}>
                    <li>客服</li>
                    <li>进店</li>
                    <li>购物车</li>
                    <li>立即购买</li>
                </ul>
            </div>
        );
    }
}

export default ProductUI