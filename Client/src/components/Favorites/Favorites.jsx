import { useSelector } from "react-redux";
import style from './favorites.module.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = (props)=>{

  const {myFavorites}= useSelector(state=> state)
  const [aux,setAux]=useState(false);
  const dispatch = useDispatch()

  const handleOrder=(event)=>{
    setAux(!aux)
    dispatch(orderCards(event.target.value))
  }

  const handleFilter = (event)=>{
    dispatch(filterCards(event.target.value))
  }
  return (
  <div>
    <div className={style.contSelec}>
      <select className={style.select} onChange={handleOrder}>
        <option value="Ordenar" disabled='disabled'>Ordered By</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendiente</option>
      </select>
      <select className={style.select1} onChange={handleFilter}>
        <option value="Filtrar" disabled='disabled'>Filtered By</option>  
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
    <div className={style.contenedor}>
      {
        myFavorites.map((characters)=>{
          return ( 
            <div className={style.carta1}>
              {/* <button className={style.close1} onClick={props.onClose}>
              X
              </button> */}
              <img src={characters.image} alt={characters.name} className={style.imRick1} />

              <Link className={style.Hylinks1} to={`/detail/${characters.id}`}>
                <h2 className={style.nombre1}>{characters.name}</h2>
              </Link>

              <div className={style.gridConteiner1}>
                <h2 className={style.status1}>{characters.status}</h2>
                <h2 className={style.species1}>{characters.species}</h2>
                <h2 className={style.gender1}>{characters.gender}</h2>
                <h2 className={style.origin1}>{origin}</h2>
              </div>
            </div>
            )
        })
      }
    </div>
  </div>
  )
}

export default Favorites

