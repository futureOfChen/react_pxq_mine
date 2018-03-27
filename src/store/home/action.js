import * as home from './action-type'

// 保存表单数据的指令
export const saveFormData = (value,dataType) => {
    return {
        type:home.SAVEFORMDATA,
        value,
        dataType,
    }
}

// 保存图片的指令
export const saveImg = (path) => {
    return {
        type:home.SAVEIMG,
        path,
    }
}

//  清空数据的指令
export const clearData = () => {
    return {
        type:home.CLEARDATA,
    }
}