import SearchBar from '../Search/SearchBar';
import style from './Nav.module.css'
import img from './e1def57bc7258961e71d6cad4537315b-removebg-preview.png'
import { Link } from 'react-router-dom';


const Nav= (props)=>{
  return (
    <nav className={style.navbar}>

      <button className={style.imgLink}>
        <Link  to='/home'><img src={img} alt="rickymorty"/></Link>
      </button>
      <div className={style.contBut}>
        <button className={style.Home}>
          <Link className={style.links} to='/home'>Home</Link>
        </button>
        
        <button className={style.About}>
          <Link className={style.links} to='/about'>About</Link>
        </button>

        <button className={style.logOut} onClick={props.logOut}>Log Out</button>
        
        
      </div>
      <div className={style.searchBar}>
        <SearchBar characters= {props.characters} onSearch={props.onSearch} />
      </div>
    </nav>
  )
}

export default Nav