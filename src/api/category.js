import http from 'SRC/utils/http'

//获取第一级的所有分类
export const getFirstCategories = params => http.get('categories/rootList', params)

//根据第一级分类id获取旗下所有分类信息
export const getChildren = params => http.get('categories/listWithChildren', params)