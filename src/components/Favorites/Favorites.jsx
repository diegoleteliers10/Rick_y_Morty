import { useSelector } from "react-redux";
import style from './favorites.module.css'
import { Link } from "react-router-dom";

const Favorites = (props)=>{
  const {myFavorites}= useSelector(state=> state)

  return (
    <div className={style.contenedor}>
      {
        myFavorites.map((characters)=>{
          return ( 
            <div className={style.carta}>
              {/* <button className={style.close} onClick={props.onClose}>
              X
              </button> */}
              <img src={characters.image} alt={characters.name} className={style.imRick} />

              <Link to={`/detail/${characters.id}`}>
                <h2 className={style.nombre}>{characters.name}</h2>
              </Link>

              <div className={style.gridConteiner}>
                <h2 className={style.status}>{characters.status}</h2>
                <h2>{characters.species}</h2>
                <h2 className={style.gender}>{characters.gender}</h2>
                <h2>{origin}</h2>
              </div>
            </div>
            )
        })
      }
    </div>
  )
}

export default Favorites

