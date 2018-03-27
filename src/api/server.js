import axios from 'axios';
import envConfig from '../envConfig/envConfig';

export default class Server {
    axios(method , url , params) {
       return new Promise( (resolve ,reject) => {
           if ( typeof params !== 'object' ) params = {};
           let _option = params;
           _option = {
               method,
               url,
               baseUrl:envConfig.baseUrl,
               timeout:30000,
               params:null,
               data:null,
               headers:null,
               withCredentials:true, //是否携带cookie
               validateStatus: (status) => {
                   return status >=200 && status < 300;;
               }
           }
           axios.request(_option).then( res => {
               resolve( typeof res.data === 'object' ? res.data : JSON.parse(res.data) )
           }, error => {
               if( error.response ) {
                   reject( error.response.data )
               }else {
                   reject(error)
               }
           } )
       } )
    }
}