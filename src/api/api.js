import Server from './server'

class API extends Server {
    async uploadImg(params = {}) {
        try {
            let result  = await this.axios('post','http://cangdu.org:8001/v1/addimg/shop',params);
            if( result && result.status === 1 ) {
                return result;
            }else {
                let err = {
                    tip:'图片长传失败',
                    response:result,
                    data:params,
                    url:'http:cangdu.org:8001/v1/addimg/shop'
                }
                throw err;
            }
        } catch (err) {
            throw err ;
        }
    }
}