import * as user from './actionType';

let defaultState = {
  userName: '', //用户名
  mobile: '', //手机号
  avatar: '', //头像
  token: '', //登录凭证
}
// 首页表单数据
export const formData = (state = defaultState , action = {}) => {
  switch(action.type){
    case user.SAVE_INFO:
      return {...state, ...{[action.datatype]: action.value}};
    default:
      return state;
  }
}
