let myFavorites = []

function postFav(req, res) {
  const character = req.body;
  myFavorites.push(character);
  return res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const {id} = req.params;
  newFavorites = myFavorites.filter(character => character.id !== parseInt(id));
  return res.status(200).json(newFavorites);
}

module.exports= {
  postFav,
  deleteFav
}