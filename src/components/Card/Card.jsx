import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Card.module.css'

const Card = (props) => {
  const [isFav, setIsFav] = useState(false)
  const dispatch= useDispatch()
  const myFavorites= useSelector(state => state.myFavorites)

  const handleFavorite = () => {
    if (isFav===false) {
      setIsFav(true)
      dispatch(addFav(props))
    } else {
      setIsFav(false)
      dispatch(removeFav(props.id))
    }
  }

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);

  const { image, name, id, status, species, gender, origin, onClose } = props

  return (
    <div className={style.carta}>
      {isFav ? (
        <button onClick={handleFavorite} className={style.heart}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={style.heart}>
          🤍
        </button>
      )}
      <img src={image} alt={name} className={style.imRick} />

      <Link className={style.Hylinks} to={`/detail/${id}`}>
        <h2 className={style.nombre}>{name}</h2>
      </Link>

      <div className={style.gridConteiner}>
        <h2 className={style.status}>{status}</h2>
        <h2 className={style.species}>{species}</h2>
        <h2 className={style.gender}>{gender}</h2>
        <h2 className={style.origin}>{origin}</h2>

      </div>
        <button className={style.close} onClick={() => { 
          handleFavorite();
          onClose();
          }}>
        X
        </button>
    </div>
  )
}

export default Card 
