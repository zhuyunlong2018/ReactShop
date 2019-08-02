import React from 'react'
import style from './Components.module.scss'


/**
 * 加入购物车、立即购买操作弹窗
 */
class BuyDrawer extends React.Component {

    state = {
        count: 1,
    }

    /**
     * 输入数量
     * @param {*} e 
     */
    inputCount(e) {
        let count = e.target.value.replace(/[^\d]+/, '')
        if (count < 1) count = 1
        if (count > 100) count = 100
        this.setState({ count })
        this.props.changeCount(count)
    }

    /**
     * 增加或减少数量
     * @param {bool} type 
     */
    changeCount(type) {
        let count
        if (type) {
            count = this.state.count + 1
        } else {
            count = this.state.count - 1
        }
        if (count < 1) count = 1
        if (count > 100) count = 100
        this.setState({ count })
        this.props.changeCount(count)
    }

    render() {
        const { product, selectSku, changeSelectSku } = this.props

        return (
            <div className={style.myDrawer}>
                {
                    product && selectSku &&
                    <div>
                        <div className={style.topper}>
                            <img className={style.productImg} src={selectSku.images[0]} />
                            <div className={style.rightTitle}>
                                <p className={style.price}>￥{selectSku.price}</p>
                                <p className={style.title}>{selectSku.description}</p>
                            </div>
                            <img className={style.closeIcon} src={require("PUBLIC/images/close_icon.png")} alt=""
                                onClick={this.props.onOpenChange} />
                        </div>
                        <div className={style.container}>
                            <div className={style.group}>
                                <p className={style.title}>颜色</p>
                                <ul className={style.options}>
                                    {
                                        Object.keys(product).length > 0 &&
                                        product.sku.map(sku =>
                                            <li key={sku.id} onClick={() => changeSelectSku(sku)}
                                              className={sku.id===selectSku.id?style.selected:""} >
                                                {sku.description}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className={style.count}>
                                <span className={style.title}>数量</span>
                                <div className={style.input}>
                                    <div className={style.minus} onClick={this.changeCount.bind(this, false)}>
                                        <img src={require("PUBLIC/images/shopping_minus.png")} alt="" />
                                    </div>
                                    <input type="number" value={this.state.count} onChange={this.inputCount.bind(this)} />
                                    <div className={style.add} onClick={this.changeCount.bind(this, true)}>
                                        <img src={require("PUBLIC/images/shopping_add.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.bottom}>
                            <div className={style.confirm}>确认</div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default BuyDrawer