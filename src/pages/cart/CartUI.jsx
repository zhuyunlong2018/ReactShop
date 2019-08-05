import React from 'react'
import { List, Checkbox } from 'antd-mobile'
import style from './Cart.module.scss'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

/**
 * 购物车栏
 */
class CartUI extends React.Component {

    render() {
        const { cartList, willGoPay, selectOne, selectAll, totalPrice, goPay } = this.props

        const list = (
            <List renderHeader={() => ''}>
                {cartList.map(i => (
                    <div className={style.product} key={i.id}>
                        <CheckboxItem onChange={e => selectOne(e, i)}
                            checked={willGoPay.indexOf(i) > -1} />
                        <div className={style.right}>
                            <div className={style.image}><img src={i.productSkuEntity.images[0]} alt="" /></div>
                            <div>
                                <div>{i.productSkuTitle}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </List>
        )

        return (
            <div className={style.cart}>
                <div className={style.container}>
                    {list}
                </div>
                <div className={style.bottom}>
                    <CheckboxItem onChange={e => selectAll(e)}
                        checked={willGoPay.length > 0 && willGoPay.length === cartList.length}>
                        <div className={style.right}>
                            <div className={style.selectAll}>全选</div>
                            <div className={style.totalCount}>
                                <span className={style.desc}>总计：</span>
                                <span className={style.price}>{totalPrice()}</span>
                            </div>
                            <div className={style.goPay} onClick={goPay}>去结算</div>
                        </div>
                    </CheckboxItem>
                </div>
            </div>
        )
    }
}
export default CartUI;