import React from 'react'

/**
 * 加入购物车、立即购买操作弹窗
 */
class BuyDrawer extends React.Component {

    render() {
        const { product, selectSku } = this.props
        return (
            <div>
                {
                    product && selectSku &&
                    < div >
                        <img src={selectSku.images[0]} />
                    </div>
                }
            </div>
        )
    }
}

export default BuyDrawer