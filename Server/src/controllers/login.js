const {User}= require('../DB_connection')

const login= async (req,res) => {
  const {email, password}= req.query;
  try {
    
    if(!email || !password){
      res.status(400).json({err: 'Faltan datos'})
    }else{
      const newUser = await User.
      findOne({
        where: {
          email
        }
      })

      if(newUser.password!==password){
        res.status(403).json({err:'Contraseña incorrecta'})
      }else{
        res.status(200).json({access:true})
      }
    }
  } catch (error) {
    res.status(500).json({message: error.message});
  }
  
}

module.exports= login;