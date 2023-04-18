import style from './Form.module.css'
import { useState } from 'react'
import ValidateEmail from './validationE';
import ValidatePassword from './validationPass';
import rickIm from './rick.jpg'
import backim from './proxy-removebg-preview.png'
import back2 from './proxy1-removebg-preview.png'

const Form = (props)=>{
  let [userData,setData]=useState({
    email:'',
    password:''
  })
  const handleChange= (event)=>{
    setData({
    ...userData,
    [event.target.name]:event.target.value
    });

  }

  let handleSubmit= (event)=>{
    event.preventDefault()
    props.prop(userData)
  }

  return (
    <>
    <img src={backim} alt="background" className={style.backima}/>
    <img src={back2} alt="background" className={style.back2}/>
    <form className={style.formCont}>
      
      <img className={style.imagenRick} src={rickIm} alt="RyMLogin" />
      <div className={style.divConEm}>
         <label className={style.email} htmlFor="email">E-mail:</label>
         <input className={style.Einputs} name="email" type="email" value={userData.email} onChange={handleChange} placeholder='Indique su mail'/>
         {ValidateEmail(userData) && <p className={style.pEinputs}>Su email no es valido</p>}
      </div>
      <div className={style.divConPass}>
        <label className={style.pass} htmlFor="password">Password:</label>
        <input className={style.Pinputs} name="password" type="password" value={userData.password} onChange={handleChange} placeholder='Indique su contraseña'/>
        {ValidatePassword(userData) && <p className={style.pPinputs}>Su contraseña no es valida</p>}
      </div>
      <button className={style.butForm} onClick={handleSubmit}>Submit</button>
      
      
    </form>
    </>
  )
}

export default Form