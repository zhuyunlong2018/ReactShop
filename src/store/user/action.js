import * as user from './actionType';

// 保存用户信息
export const saveInfo = (value, datatype) => {
  return {
    type: user.SAVE_INFO,
    value,
    datatype,
  }
}