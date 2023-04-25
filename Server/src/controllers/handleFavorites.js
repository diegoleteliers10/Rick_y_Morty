let myFavorites = []

function postFav(req, res) {
  const character = req.body;
  myFavorites.push({...character});
  return res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const {id} = req.params;
  console.log(typeof(id))
  myFavorites = myFavorites.filter(character => character.id !== id);
  return res.status(200).json(myFavorites);
}

module.exports= {
  postFav,
  deleteFav
}