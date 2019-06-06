import http from 'SRC/utils/http'

//根据id获取商品的详情信息
export const detail = params => http.post('product/detail', params)