import Styles from "./Home.module.css";
import Card from "../../Components/Cards/Card";
import EstadoVisto from "../../Components/EstadoVisto/EstadoVisto";
import {ArrayPelisSeries , generos } from '../../Constant/bd';
import { useState } from "react";


const Home = () => {

    const [arrayModPelis, setArrayModPelis] = useState(ArrayPelisSeries);
    const [arrayGuardarPeli, setArrayGuardarPeli] = useState([]);

    const [buttonAddpeli,setButtonAddpeli] = useState(false)
    

    const contarVistas = () => {
        return arrayModPelis.filter(prev => prev.visto == true).length
    }

    const contarNoVistas = () => {
        return arrayModPelis.filter(prev => prev.visto == false).length
    }
    
    function handleChange(id) {

        console.log(arrayModPelis)
        
        setArrayModPelis(prev =>
          prev.map(peli =>
            peli.id === id ? { ...peli, visto: peli.visto ? false : true } : peli
          )
        );

        console.log(arrayModPelis)
    }

    const contarGeneros = () => {
        let contador = 0;
        arrayModPelis.map((prev) => {
            generos.map((prev2) => {
                if (prev.genero == prev2.genero) {
                    contador++
                }
            })
        })
        return contador
    }


    return (
        <main className={Styles.container_main}>
            
            {/* Modal Agregar pelicula */}

            {buttonAddpeli && (
                <div className={Styles.modal}>
                    <div className={Styles.modal_container}>
                        <div className={Styles.modal_header}>
                            <h2>Agregar Pelicula/Serie</h2>
                            <button onClick={() => setButtonAddpeli(false)}>X</button>
                        </div>

                        <form action="" className={Styles.form_agregar}>

                            <label htmlFor="titulo">Título</label>
                            <input type="text" name="titulo" id="titulo"/>

                            <label htmlFor="director">Director</label>
                            <input type="text" name="director" id="director"/>

                            <label htmlFor="genero">Género</label>
                            <input type="text" name="genero" id="genero"/>

                            <label htmlFor="rating">Rating</label>
                            <input type="text" name="rating" id="rating"/>

                            <button type="button">Agregar</button>
                        </form>

                    </div>
                </div>
            )}

            <section className={Styles.container_filtros}>
                <div className={Styles.filtros}>
                    <span>Filtros</span>
                    <span>Generos : </span>

                    <select name="genero" id="genero">
                        <option value="">-- Selecciona un género --</option>
                        <option value="accion">Acción</option>
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
                    <button onClick={() => setButtonAddpeli(true)}>Agregar Pelicula/Serie</button>
                </div>

                {/* vistas */} 
                <EstadoVisto estado={"Vistas"} cantVista={contarVistas()} CantTiposGenero={contarGeneros()}/>

                {/* Container cards */}
                <div className={Styles.container_cards}>
                    {arrayModPelis
                        .filter((contenido) => contenido.visto == true) // solo los que tienen visto === true
                        .map((contenido) => (
                        <Card
                            key={contenido.id}
                            titulo={contenido.titulo}
                            director={contenido.director}
                            genero={contenido.genero}
                            rating={contenido.rating}
                            id={contenido.id}
                            estadoVisto={contenido.visto}
                            Onclick={handleChange}
                        />
                    ))}
                </div>

                {/* ver */}
                <div>
                    <EstadoVisto estado={"Ver"} cantVista={contarNoVistas()} CantTiposGenero={contarGeneros()}/>
                </div>

                <div className={Styles.container_cards}>
                    {arrayModPelis
                        .filter((contenido) => contenido.visto == false)
                          
                        .map((contenido) => (
                        <Card
                            key={contenido.id}
                            titulo={contenido.titulo}
                            director={contenido.director}
                            genero={contenido.genero}
                            rating={contenido.rating}
                            id={contenido.id}
                            estadoVisto={contenido.visto}
                            Onclick={handleChange}
                        />

                    ))}
                </div>


            </section>
        </main>
    )
}

export default Home