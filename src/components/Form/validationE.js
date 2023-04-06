
const ValidateEmail = (params) => {
  if(params.email===''){
    return 
  }else{
    if(!/\S+@\S+\.\S+/.test(params.email) || params.email.length>35){
      return true
      }else return false
    }
}
export default ValidateEmail
