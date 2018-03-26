/*
* 全局配置文件
*/ 
let baseUrl; 
let imgUrl = '//cangdu.org:8001/img/';

if( process.env.NODE_ENV === 'development' ) {
    baseUrl = '//cangdu.org';
}{
    baseUrl = '//cangdu.org'
}

export default { baseUrl , imgUrl }