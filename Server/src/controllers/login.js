const user= require('../utils/users')

const login=(req,res)=>{

  const {email,password} = req.query
  const userFound = user.find(users => users.email === email && users.password === password);

  return userFound
  ?res.status(200).json({ access: true })
  :res.status(200).json({ access: false })
}

module.exports = login;