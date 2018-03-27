import * as production from './action-type'
import API from '../../api/api'

// 初始化商品数据, 保存至redux
export const getProData = () => {
    
}

export const clearSelected = () =>{
    return {
        type:production.CLEARSELECTED,
    }
}