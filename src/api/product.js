import http from 'SRC/utils/http'

//根据id获取商品的详情信息
export const detail = params => http.post('product/detail', params)

//根据分类ID获取商品列表分页
export const fetchPageByCategory = params => http.get("product/fetchPageByCategory", params)