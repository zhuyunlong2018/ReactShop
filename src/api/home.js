import http from 'SRC/utils/http'

//获取首页轮播图
export const getBannel = params => http.get('home/getBannel',params);