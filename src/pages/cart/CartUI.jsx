import React from 'react'
import { List, Checkbox, Stepper } from 'antd-mobile'
import style from './Cart.module.scss'

const CheckboxItem = Checkbox.CheckboxItem;


/**
 * 购物车栏
 */
class CartUI extends React.Component {

    render() {
        const {
            cartList,
            willGoPay,
            selectOne,
            selectAll,
            totalPrice,
            goPay,
            goToProduct,
            changeNumber,
            deleteOne
        } = this.props

        const list = (
            <List renderHeader={() => ''}>
                {cartList.map(i => (
                    <div className={style.product} key={i.id}>
                        <CheckboxItem onChange={e => selectOne(e, i)}
                            checked={willGoPay.indexOf(i) > -1} />
                        <div className={style.right}>
                            <div className={style.image}><img src={i.productSku.images[0]} alt="" /></div>
                            <div className={style.detail}>
                                <div className={style.title} onClick={() => goToProduct(i.productSku.productId)}>{i.productSkuTitle}</div>
                                <div className={style.count}>
                                    <span className={style.price}>{i.productSku.price}</span>
                                    <Stepper
                                        className={style.stepper}
                                        showNumber
                                        max={100}
                                        min={1}
                                        value={i.number}
                                        onChange={e => changeNumber(e, i)}
                                    />
                                </div>
                                <div className={style.detailBottom}>
                                    <span className={style.delete} onClick={() => deleteOne(i.id)}>删除</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </List>
        )

        const allChecked = willGoPay.length > 0 && willGoPay.length === cartList.length
        return (
            <div className={style.cart}>
                <div className={style.container}>
                    {list}
                </div>
                <div className={style.bottom}>
                    <CheckboxItem onChange={e => selectAll(e.target.checked)}
                        checked={allChecked}>
                        <div className={style.right}>
                            <div onClick={() => selectAll(!allChecked)} className={style.selectAll}>全选</div>
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