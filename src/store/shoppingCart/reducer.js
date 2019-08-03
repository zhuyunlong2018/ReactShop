import * as cart from "./actionType"

let defaultState = {
    list: [], //购物车列表
}

//购物车信息
export const cartInfo = (state = defaultState, action = {}) => {
    switch (action.type) {
        case cart.GET_CART_LIST:
        case cart.UPDATE_CART_LIST:
            return { ...state, ...{ list: action.list } };
        default:
            return state;
    }
}