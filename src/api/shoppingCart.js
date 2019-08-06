import http from "SRC/utils/http"

//添加商品到购物车中
export const addShoppingCart = params => http.put("shoppingCart/add", params)

//获取我的购物车列表
export const getShoppingCart = params => http.get("shoppingCart/list", params)

//修改购物车的某个商品数量
export const changeNumber = params => http.put("shoppingCart/changeNum", params)

//删除购物车某个商品
export const deleteOne = params => http.delete("shoppingCart/delete", params)