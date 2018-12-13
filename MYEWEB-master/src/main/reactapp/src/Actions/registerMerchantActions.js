import merchantActions from '../ActionTypes/registerMerchantActionTypes';
import axios from 'axios';


export function registeredMerchantAction(value)
{
   console.log("inside registered merchant actions")
   console.log(value)
   return (dispatch)=>{
      return axios.post(`http://localhost:9000/mye/registerBlogger`, value)
      .then(res=>{
       console.log("response data",res.data);
       dispatch( {type:merchantActions.REGISTERED_MERCHANTS,text:res.data});  
      }).catch(err=>{
         console.log(err);
      })
   }  
   
   
}