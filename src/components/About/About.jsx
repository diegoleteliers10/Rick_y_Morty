
import image from './76727770_313151599838959_7537087677308027734_n.jpg'
import style from './About.module.css'

const About= ()=>{
  return (
    <div className={style.AboutMe}>
      
      <section >
        <section className={style.mycontainer}>
          <div className={style.textCont}>
            <h2 className={style.thisH2}>Resumen:</h2>
            <p className={style.myInfo}>Alumno de Henry, con ganas de aprender y de llevar a otro nivel sus habilidades de programación, ademas de buscar el exito y demostrar que no se necesita un titulo para ser alguien en la vida. Apasionado por el futbol y la musica, y por supuesto la programacion. Espero que este proyecto quede plasmado en github como un inicio de la era tecnológica de mi vida. Y siguiendo el modelo de Rick y Morty:  </p>
          </div>
          
          <div className={style.myDetail}>
            <h2 className={style.thisH2}>STATUS| NOT EXTINCT</h2>
            <h2 className={style.thisH2}>GENDER| MEN</h2>
            <h2 className={style.thisH2}>SPECIE| HUMAN</h2>
            <h2 className={style.thisH2}>ORIGIN| CHILEAN</h2>
          </div>
        </section>
      </section>
      <section className={style.secPart}>
        <img className={style.myImage} src={image} alt="spiderman" />
        <h2 className={style.myName}>DIEGO LETELIER</h2>
      </section>
    </div>
  )
}

export default About