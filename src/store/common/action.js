import * as common from './actionType';

// 切换加载动画开关
export const toggleLoading = value => {
  return {
    type: common.TOOGLE_LOADING,
    value
  }
}