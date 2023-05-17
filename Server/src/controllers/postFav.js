const {Favorite}= require('../DB_connection')

 const postFav= async (req,res) => {
  const {id,name, origin, status, image, species, gender}= req.body
  try {
    
    if(!name || !origin || !status || !image || !species || !gender){
      res.status(401).json({err:"Faltan datos"})
    }
    const [Fav, creatFav]= await Favorite.findOrCreate({
      where: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender
      },
      defaults: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender
      }
    })
    const allFav= await Favorite.findAll()
    res.status(200).json(allFav)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

module.exports= postFav;