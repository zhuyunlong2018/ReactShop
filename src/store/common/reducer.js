import * as common from './actionType';

let commonInfo = {
    hasLoading: false, //显示
  }
  
// 加载动画开关
export const commonInfo = (state = commonInfo , action = {}) => {
switch(action.type){
    case common.TOOGLE_LOADING:
    return {...state, ...{[action.datatype]: action.value}};
    default:
    return state;
}
}