import * as user from './actionType';

// 保存用户信息
export const saveInfo = (obj) => {
  return {
    type: user.SAVE_INFO,
    obj,
  }
}