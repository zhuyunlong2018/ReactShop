import * as cart from "./actionType"
import Storage from "SRC/utils/storage"
import { SHOPPING_CART_KEY } from "SRC/utils/keys"
import { getShoppingCart } from "SRC/api/shoppingCart"

//获取购物车列表
export const getCartList = () => {
    return dispatch => {
        //TODO 从localstorage中获取，并且与后台数据融合
        //Storage.getStorage(SHOPPING_CART_KEY)

        //异步从后台获取
        return getShoppingCart().then(res => {
            console.log(res)
            //将sku商品图片json解析为对象
            res.forEach(element => {
                element.productSkuEntity.images = JSON.parse(element.productSkuEntity.images)
            });
            dispatch({
                type: cart.GET_CART_LIST,
                list: res
            })
            //存储到storage中
            Storage.setStorage(SHOPPING_CART_KEY, res)
        }).catch(error => { })
    }
}

//更新购物车列表
export const updateCartList = list => {
    //TODO 同时更新存储storage
    Storage.setStorage(SHOPPING_CART_KEY, list)
    return {
        type: cart.UPDATE_CART_LIST,
        list
    }
}