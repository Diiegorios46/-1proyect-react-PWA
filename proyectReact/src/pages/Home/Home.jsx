import Styles from "./Home.module.css"
import Card from "../../Components/Cards/Card"
import EstadoVisto from "../../Components/EstadoVisto/EstadoVisto"

const Home = () => {
    return (
        <main className={Styles.container_main}>

            <section className={Styles.container_filtros}>

                <div className={Styles.filtros}>
                    <span>Filtros</span>
                    <span>Generos : </span>

                    <select name="genero" id="genero">
                        <option value="">-- Selecciona un género --</option>
                        <option value="accion">Acción</option>
                        <option value="aventura">Aventura</option>
                        <option value="animacion">Animación</option>
                        <option value="ciencia-ficcion">Ciencia Ficción</option>
                        <option value="comedia">Comedia</option>
                        <option value="crimen">Crimen</option>
                        <option value="documental">Documental</option>
                        <option value="drama">Drama</option>
                        <option value="fantasia">Fantasía</option>
                        <option value="historico">Histórico</option>
                        <option value="musical">Musical</option>
                        <option value="misterio">Misterio</option>
                        <option value="romance">Romance</option>
                        <option value="suspenso">Suspenso</option>
                        <option value="terror">Terror</option>
                        <option value="infantil">Infantil</option>
                        <option value="deporte">Deporte</option>
                    </select>

                    <label htmlFor="">Ingrese el Rating</label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">Ascendente
                        <input type="checkbox" name="" id="" />
                    </label>
                    

                    <label htmlFor="">Descendente
                        <input type="checkbox" name="" id="" />
                    </label>
                    

                </div>
            </section>

            <section className={Styles.container_peliculas}>

                {/* Titulo / director - Busqueda */}
                <div>
                    <input type="text" value={"Titulo/director"}/>
                </div>

                {/* Agregar pelicula/serie  */}
                <div>
                    <button>Agregar Pelicula/Serie</button>
                </div>

                {/* vistas */}
                <EstadoVisto estado={"Vistas"} CantTiposGenero={"10"}/>

                {/* Container cards */}
                <div className={Styles.container_cards}>
                    <Card EstadoVisto={true}/>
                    <Card EstadoVisto={true}/>
                    <Card EstadoVisto={true}/>
                    <Card EstadoVisto={true}/>
                    <Card EstadoVisto={true}/>
                    <Card EstadoVisto={true}/>
                    <Card EstadoVisto={true}/>
                    <Card EstadoVisto={true}/>
                </div>

                {/* ver */}
                <div>
                    <EstadoVisto estado={"Ver"} CantTiposGenero={"10"}/>
                </div>

                {/* container cards */}
                <div className={Styles.container_cards}>
                    <Card EstadoVisto={false}/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </section>
        </main>
    )
}

export default Home