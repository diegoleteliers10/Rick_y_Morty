

const {User} = require('../DB_connection')

 const postUser= async (req, res) => {
  const { id,email, password } = req.body;
  try {
    
    if(!email || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }

      const [user, created]  = await User.findOrCreate({
        where: {
          id,
          email,
          password
        },
        defaults: {
          id,
          email,
          password
        },
      });
      
      user 
      ? res.status(200).json(user)
      : res.status(200).json(created)

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
}

module.exports = postUser;