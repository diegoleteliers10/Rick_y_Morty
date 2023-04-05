import style from './Card.module.css'
import { Link } from 'react-router-dom'
export default function Card(props) {
   return (
      <div className={style.carta}>
         <button className={style.close} onClick={props.onClose}>X</button>
         <img src={props.image} alt={props.name} className={style.imRick}/>

         <Link to={`/detail/${props.id}`}>
            <h2 className={style.nombre}>{props.name}</h2>
         </Link>
         
         <div className={style.gridConteiner}>
            <h2 className={style.status}>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2 className={style.gender}>{props.gender}</h2>
            <h2>{props.origin}</h2>
         </div>
      </div>
   )
}
