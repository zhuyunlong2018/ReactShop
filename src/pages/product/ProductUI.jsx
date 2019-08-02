import React from 'react'
import { Tabs, Drawer } from 'antd-mobile'
import Bannel from './components/Bannel'
import BuyDrawer from './components/BuyDrawer'
import Bottom from './components/Bottom'
import style from "./Product.module.scss"


class ProductUI extends React.Component {

    state = {
        open: false,//抽屉开关
    }

    /**
     * 打开下方 加入购物车、立即购买抽屉
     */
    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
    }

    render() {

        const { product, selectSku, changeSelectSku, changeCount } = this.props

        const tabs = [
            { title: "商品" },
            { title: "详情" },
            { title: "评论" },
        ];
        return (
            <div className={style.product}>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: "100vh" }}
                    position={"bottom"}
                    sidebar={
                        <div className={style.selectSpk}>
                            <BuyDrawer product={product}
                                selectSku={selectSku}
                                onOpenChange={this.onOpenChange}
                                changeSelectSku={changeSelectSku}
                                changeCount={changeCount} />
                        </div>
                    }
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                    {Object.keys(product).length > 0 ?
                        <Tabs tabs={tabs}
                            initialPage={0}
                            swipeable={false}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <div className={style.tabsContainer}>
                                {selectSku && <Bannel images={selectSku.images} />}
                                <div className="price">
                                    <div >¥<em>5999</em>.00</div>
                                </div>
                                <div className="title">
                                    {product.title}
                                    <p>{product.sellPoint}</p>
                                </div>
                                <div className="detail">

                                </div>
                            </div>
                            <div className={style.tabsContainer}
                                dangerouslySetInnerHTML={{ __html: product.desc.productDesc }}></div>
                            <div className={style.tabsContainer}>
                                暂无评论
                            </div>
                        </Tabs>
                        :
                        <div>我们没卖这个产品</div>}
                    <Bottom onOpenChange={this.onOpenChange.bind(this)} />
                </Drawer>
            </div>
        );
    }
}

export default ProductUI