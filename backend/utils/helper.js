export const jsonnGenerate = (statusCode,message,data=null)=>{
    return{
     status:statusCode,
     message:message,
     data:data
    }
 }