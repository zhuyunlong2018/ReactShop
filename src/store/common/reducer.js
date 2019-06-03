import * as common from './actionType';

let defaultState = {
  hasLoading: false, //显示
}

// 加载动画开关
export const commonInfo = (state = defaultState, action = {}) => {
  switch (action.type) {
    case common.TOOGLE_LOADING:
      return { ...state, ...{ hasLoading: action.value } };
    default:
      return state;
  }
}