import Styles from "./Home.module.css";
import Card from "../../Components/Cards/Card";
import EstadoVisto from "../../Components/EstadoVisto/EstadoVisto";
import {ArrayPelisSeries , generos } from '../../Constant/bd';

import { useState , useEffect } from "react";


const Home = () => {

    const [arrayModPelis, setArrayModPelis] = useState(ArrayPelisSeries);

    const [nuevaPeliSerie, setNuevaPeliSerie] = useState({
        titulo: '',
        director: '',
        genero: '',
        rating: '',
        visto: false,
        id: Date.now()
    });

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

    function handleInput(e) {
        const { name, value } = e.target;
        setNuevaPeliSerie({
            ...nuevaPeliSerie,
            [name]: value
        })
        console.log(nuevaPeliSerie)
    }

    const agregarPelicula = () => {
        setArrayModPelis(prev => [...prev,{...nuevaPeliSerie, id: arrayModPelis.length }])
        setNuevaPeliSerie({
            titulo: '',
            director: '',
            genero: '',
            rating: '',
            visto: false,
            id: arrayModPelis.length
        })
        setButtonAddpeli(false)
    }

    const filtrarXgenero = () => {

    }


    useEffect(() => {
        console.log(arrayModPelis)
    }, [arrayModPelis])


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
                                <input type="text" name="titulo" id="titulo" onChange={handleInput}/>

                                <label htmlFor="director">Director</label>
                                <input type="text" name="director" id="director" onChange={handleInput}/>

                                <label htmlFor="genero">Género</label>
                                <select name="genero" id="genero" onChange={handleInput} >
                                    <option value="">-- Selecciona un género --</option>
                                    <option value="accion">Acción</option>
                                    <option value="aventura">Aventura</option>
                                    <option value="ciencia-ficcion">Ciencia Ficción</option>
                                    <option value="comedia">Comedia</option>
                                    <option value="crimen">Crimen</option>
                                    <option value="drama">Drama</option>
                                    <option value="fantasia">Fantasía</option>
                                    <option value="romance">Romance</option>
                                    <option value="terror">Terror</option>
                                </select>

                                <label htmlFor="rating">Rating</label>
                                <input type="text" name="rating" id="rating" onChange={handleInput}/>

                                <button type="button" onClick={agregarPelicula}>Agregar</button>
                            </form>

                        </div>
                    </div>
                )}


                <section className={Styles.container_filtros}>
                    <div className={Styles.filtros}>
                        <span className={Styles.tittle_filtros}>Filtros</span>
                        <span>Generos : </span>

                        <select name="genero" id="genero" className={Styles.select_filtros}>
                            <option value="">-- Selecciona un género --</option>
                            <option value="accion">Acción</option>
                            <option value="aventura">Aventura</option>
                            <option value="ciencia-ficcion">Ciencia Ficción</option>
                            <option value="comedia">Comedia</option>
                            <option value="crimen">Crimen</option>
                            <option value="drama">Drama</option>
                            <option value="fantasia">Fantasía</option>
                            <option value="romance">Romance</option>
                            <option value="terror">Terror</option>
                        </select>

                        <label htmlFor="">Ingrese el Rating:</label>
                        <input type="text" name="" id="" className={Styles.input}/>

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
                <div className={Styles.container_inputBusqueda}>
                    <input type="text" className={Styles.inputBusquedaPeli}/>
                </div>

                {/* Agregar pelicula/serie  */}
                <div className={Styles.container_buttonAgregarPeli}>
                    <button className={Styles.buttonAgregarPeli} onClick={() => setButtonAddpeli(true)}>Agregar Pelicula/Serie</button>
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