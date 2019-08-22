import http from 'SRC/utils/http'

//获取首页轮播图
export const getBanner = params => http.get('ad/homeBanner', params)

//获取首页促销板块的内容
export const getPromotion = params => http.get('home/getPromotion', params)

//获取首页热销板块的内容
export const getSellWell = params => http.get('home/getSellWell', params)