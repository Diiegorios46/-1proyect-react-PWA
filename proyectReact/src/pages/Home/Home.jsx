import Styles from "./Home.module.css";
import Card from "../../Components/Cards/Card";
import EstadoVisto from "../../Components/EstadoVisto/EstadoVisto";
import { useState , useEffect } from "react";
import Title from '../../Components/Tittle/Titte';
import {library , generos , buscarRating } from '../../Constant/constant';


const Home = () => {

    const [moviesAndSeries, setMoviesAndSeries] = useState(() => {
        const storedData = localStorage.getItem("library");
        if (!storedData) {
        localStorage.setItem("library", JSON.stringify(library));
        return library;
        }
        return JSON.parse(storedData);
    });
    
    const [filtrarXGenero , setFiltrarXGenero] = useState("");
    const [buscarXPeliculaSerie , setBuscarXPeliculaSerie] = useState("");
    const [buscarXRating , setBuscarXRating] = useState(0);
    const [openModalButton,setOpenModalButton] = useState(false)
    
    const [nuevaPeliSerie, setNuevaPeliSerie] = useState({
        titulo: '',
        director: '',
        genero: '',
        rating: '',
        visto: false,
        id: Date.now()
    });
    
    const updateArrayModPelis = (newArray) => {
        setMoviesAndSeries(newArray);
        localStorage.setItem("library", JSON.stringify(newArray));
    };
    
    
   const handleChange = (id) => {
    const updatedArray = moviesAndSeries.map((peli) =>
      peli.id === id ? { ...peli, visto: !peli.visto } : peli
    );
    updateArrayModPelis(updatedArray);
  };
    
    const contarGeneros = () => {
        let contador = 0;
        moviesAndSeries.map((prev) => {
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


    const handleInputGenero = (e) => {
        console.log(e.target.value)
        setFiltrarXGenero(e.target.value)
    }

    const filtrarPorGenero = (contenido) => {
        if (!filtrarXGenero) return true
        return contenido == filtrarXGenero
    }

    const agregarPelicula = () => {
        const nuevaPeli = {
        ...nuevaPeliSerie,
        id: moviesAndSeries.length + 1,
        };
        const updatedArray = [...moviesAndSeries, nuevaPeli];
        updateArrayModPelis(updatedArray);

        setNuevaPeliSerie({
        titulo: "",
        director: "",
        genero: "",
        rating: "",
        visto: false,
        id: Date.now(),
        });
        
        setOpenModalButton(false);
  };


    const handleRating = (e) =>  {
        setBuscarXRating(e.target.value)
    }

    const handleFiltroXPeli = (e) => {
        setBuscarXPeliculaSerie(e.target.value)
    }
    
    const countView = (seeMovie) => {
        if(seeMovie){
            return filterForContentView("view").length
        }else{
            return filterForContentView("noView").length
        }       
    }

    const filterForContentView = (view) => {
        return (view === "view") ? moviesAndSeries.filter((contenido) => contenido.visto) : moviesAndSeries.filter(prev => !prev.visto);
    }

    const filterForMovie = () => {
        const arrayAux = moviesAndSeries.filter(
            (content) =>
                (buscarXRating == 0 || buscarRating(content.rating) == buscarXRating) &&
                (content.titulo == buscarXPeliculaSerie || content.director == buscarXPeliculaSerie) && filtrarPorGenero(content.genero)
        );
        return arrayAux;
    }

    const renderContentFilterForWord = () => {
        const result = filterForMovie();

        if (result.length === 0) {
            return <h3>No hay resultados</h3>
        } else{
            return result.map((content) => (
                <Card
                    key={content.id}
                    titulo={content.titulo}
                    director={content.director}
                    genero={content.genero}
                    anio={content.anio}
                    rating={content.rating}
                    id={content.id}
                    url={content.url}
                    estadoVisto={content.visto}
                    Onclick={handleChange}
                />
            ))
        }   

    }

    const renderContentFind = () => {
        return (
            <div className={Styles.container_busqueda}>
                <h3 className={Styles.contentBuscado}>contenido Buscado:</h3>
                <div className={Styles.contenidoFiltrado}>
                {renderContentFilterForWord()}
                </div>
            </div>
        );
    };

    const filterxContentNotView = () => {
        return moviesAndSeries.filter((contenido) => !contenido.visto && filtrarPorGenero(contenido.genero) && (buscarXRating == 0 || buscarRating(contenido.rating) == buscarXRating))
    }

    const renderContentView = () => {
        const content = filterxContentNotView()
            return(
                content.map((contenido) => (
                    <Card
                        key={contenido.id}
                        titulo={contenido.titulo}
                        director={contenido.director}
                        genero={contenido.genero}
                        rating={contenido.rating}
                        id={contenido.id}
                        estadoVisto={contenido.visto}
                        anio={contenido.anio}
                        url={contenido.url}
                        Onclick={handleChange}
                    />
                ))
            )
    }


    useEffect(() => {
           console.log(moviesAndSeries)
           console.log( console.log("Guardado en localStorage:", localStorage.getItem("library")))
        }, [moviesAndSeries],[localStorage]
    )

    const ordenamientoRating = (orden = "asc") => {
    if (moviesAndSeries.length === 0) return;

    const sortedArray = [...moviesAndSeries].sort((a, b) =>
      orden === "asc" ? a.rating - b.rating : b.rating - a.rating
    );
    updateArrayModPelis(sortedArray);
  };
    
    
    const ordenamientoAnio = (orden = "asc") => {
    if (moviesAndSeries.length === 0) return;

    const sortedArray = [...moviesAndSeries].sort((a, b) =>
      orden === "asc" ? a.anio - b.anio : b.anio - a.anio
    );
    updateArrayModPelis(sortedArray);
  };

    return (
        <main className={Styles.container_main}>
            
            {/* Modal Agregar pelicula */}
                {openModalButton && (
                    <div className={Styles.modal}>
                        <div className={Styles.modal_container}>

                            <div className={Styles.modal_header}>
                                <h2>Agregar Pelicula/Serie</h2>
                                <button onClick={() => setOpenModalButton(false)} className={Styles.btnCerrar}>X</button>
                            </div> 


                            <form action="" className={Styles.form_agregar}>

                                <label htmlFor="titulo">Título</label>
                                <input type="text" name="titulo" id="titulo" onChange={handleInput} className={Styles.inputForm}/>

                                <label htmlFor="director">Director</label>
                                <input type="text" name="director" id="director" onChange={handleInput} className={Styles.inputForm}/>

                                <label htmlFor="genero">Género</label>
                                <select name="genero" id="genero" onChange={handleInput} className={Styles.select} >
                                    <option value="">Genero</option>
                                    <option value="Accion">Acción</option>
                                    <option value="Aventura">Aventura</option>
                                    <option value="Ciencia-Ficcion">Ciencia Ficción</option>
                                    <option value="Comedia">Comedia</option>
                                    <option value="Crimen">Crimen</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Fantasia">Fantasía</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Terror">Terror</option>
                                </select>

                                <label htmlFor="rating">Rating</label>
                                <input type="text" name="rating" id="rating" onChange={handleInput} className={Styles.inputForm} />

                                <button type="button" onClick={agregarPelicula} className={Styles.button}>Agregar</button>
                            </form>

                        </div>
                    </div>
                )}

                {/* -----------------------------------------FILTROS--------------------------------------------------------------- */}
                <section className={Styles.container_filtros}>
                    <div className={Styles.filtros}>

                        <Title/>
                        <span className={Styles.tittle_filtros}>Filtros</span>
                        <span className={Styles.subTittle_filtros}>Generos : </span>

                        <select name="genero" id="genero" className={Styles.select_filtros} onChange={handleInputGenero}>
                            <option value=""> Generos </option>
                            <option value="Accion">Acción</option>
                            <option value="Aventura">Aventura</option>
                            <option value="Ciencia Ficcion">Ciencia Ficción</option>
                            <option value="Comedia">Comedia</option>
                            <option value="Crimen">Crimen</option>
                            <option value="Drama">Drama</option>
                            <option value="Fantasia">Fantasía</option>
                            <option value="Romance">Romance</option>
                            <option value="Terror">Terror</option>
                        </select>

                        <h1 htmlFor="" className={Styles.subTittle_filtros}>Ordenar Rating</h1>
                        <label htmlFor="" className={Styles.Inputs}> {"Todos"}
                            <input type="radio" name="rating" id="" className={Styles.input} onChange={handleRating} value={"0"} />
                        </label>
                        <label htmlFor="" className={Styles.Inputs}> {" < 5"}
                            <input type="radio" name="rating" id="" className={Styles.input} onChange={handleRating} value={"1"}/>
                        </label>
                        <label htmlFor="" className={Styles.Inputs}> {"5 a 8"} 
                            <input type="radio" name="rating" id="" className={Styles.input} onChange={handleRating} value={"2"}/>
                        </label>
                        <label htmlFor="" className={Styles.Inputs}> {" > 8"}
                            <input type="radio" name="rating" id="" className={Styles.input} onChange={handleRating} value={"3"}/>
                        </label>
                        <label htmlFor="" className={Styles.Inputs}>Ascendente
                            <input type="radio" name="OrdenarFecha" id="" onClick={() => ordenamientoRating('asc')}/>
                        </label>
                        <label htmlFor="" className={Styles.Inputs}> Descendente 
                            <input type="radio" name="OrdenarFecha" id="" onClick={() => ordenamientoRating('asc')}/>
                        </label>
                        <legend className={Styles.subTittle_filtros}> Ordenar Año </legend>
                        <label htmlFor="" className={Styles.Inputs}> Ascendente año
                            <input type="radio" name="OrdenarFecha2" id="" onClick={() => ordenamientoAnio('asc')}/>
                        </label>

                        <label htmlFor="" className={Styles.Inputs}>Descendente año
                            <input  type="radio" name="OrdenarFecha2" id="" onClick={() => ordenamientoAnio('desc')}/>
                        </label>
                        
                    </div>
                </section>

                <section className={Styles.container_peliculas}>

                {/* Titulo / director - Busqueda */}
                <div className={Styles.container_inputBusqueda}>
                    <input type="text" className={Styles.inputBusquedaPeli} placeholder="Titulo - Director" onBlur={handleFiltroXPeli}/>
                </div>

                {renderContentFind()}

                {/* Agregar pelicula/serie  */}
                <div className={Styles.container_buttonAgregarPeli}>
                    <button className={Styles.buttonAgregarPeli} onClick={() => setOpenModalButton(true)}>Agregar Pelicula/Serie</button>
                </div>

                <EstadoVisto 
                    estado={"Peliculas / Series Vistas"}
                    cantVista={countView(true)}
                    CantTiposGenero={contarGeneros()}
                    mostrarVista={true}
                    useStateArrayPelisSeries={moviesAndSeries}
                />

                <div className={Styles.container_cards}>
                    {filterForContentView("view").map((contenido) => (
                        <Card
                            key={contenido.id}
                            titulo={contenido.titulo}
                            director={contenido.director}
                            genero={contenido.genero}
                            rating={contenido.rating}
                            id={contenido.id}
                            estadoVisto={contenido.visto}
                            anio={contenido.anio}
                            url={contenido.url}
                            Onclick={handleChange}
                        />
                    ))}
                </div>

                <div className={Styles.containerEstadoVisto}>
                    <EstadoVisto 
                        estado={"Peliculas - Series Por Ver"} 
                        cantVista={countView(false)} 
                        CantTiposGenero={contarGeneros()} 
                        useStateArrayPelisSeries={moviesAndSeries}
                    />
                </div>

                <div className={Styles.container_cards}>
                    {renderContentView()}
                </div>


            </section>
        </main>
    )
}

export default Home


