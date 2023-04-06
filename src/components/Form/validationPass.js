const ValidatePassword = (params) => {
  if(params.password===''){
    return 
  }else{
    if(!/[0-9]/.test(params.password) || params.password.length<6 || params.password.length>10){
      return true
      }else return false
  }
}

export default ValidatePassword