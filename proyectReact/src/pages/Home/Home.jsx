import Styles from "./Home.module.css";
import Card from "../../Components/Cards/Card";
import EstadoVisto from "../../Components/EstadoVisto/EstadoVisto";
import {ArrayPelisSeries , generos } from '../../Constant/bd';
import { useState , useEffect } from "react";


const Home = () => {

    const [arrayModPelis, setArrayModPelis] = useState(() => {
        const storedData = localStorage.getItem("arrayPelisSeries");
        if (!storedData) {
        localStorage.setItem("arrayPelisSeries", JSON.stringify(ArrayPelisSeries));
        return ArrayPelisSeries;
        }
        return JSON.parse(storedData);
    });
    
    const [filtrarXGenero , setFiltrarXGenero] = useState("");
    const [buscarXPeliculaSerie , setBuscarXPeliculaSerie] = useState("");
    const [buscarXRating , setBuscarXRating] = useState(0);
    const [buttonAddpeli,setButtonAddpeli] = useState(false)
    
    const [nuevaPeliSerie, setNuevaPeliSerie] = useState({
        titulo: '',
        director: '',
        genero: '',
        rating: '',
        visto: false,
        id: Date.now()
    });
    
    const updateArrayModPelis = (newArray) => {
        setArrayModPelis(newArray);
        localStorage.setItem("arrayPelisSeries", JSON.stringify(newArray));
    };
    
    
    const contarVistas = () => {
        return arrayModPelis.filter(prev => prev.visto == true).length
    }

    const contarNoVistas = () => {
        return arrayModPelis.filter(prev => prev.visto == false).length
    }
    
   const handleChange = (id) => {
    const updatedArray = arrayModPelis.map((peli) =>
      peli.id === id ? { ...peli, visto: !peli.visto } : peli
    );
    updateArrayModPelis(updatedArray);
  };
    
 
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
        id: arrayModPelis.length + 1,
        };
        const updatedArray = [...arrayModPelis, nuevaPeli];
        updateArrayModPelis(updatedArray);

        setNuevaPeliSerie({
        titulo: "",
        director: "",
        genero: "",
        rating: "",
        visto: false,
        id: Date.now(),
        });
        setButtonAddpeli(false);
  };
    const handleRating = (e) =>  {
        setBuscarXRating(e.target.value)
    }

    const  buscarRating = (rating) => {
        let aux = 0;
        if (rating < 5 && rating >= 1) 
            aux = 1;
        else if (rating >= 5 && rating <= 8)
            aux = 2;
        else if (rating > 8)
            aux = 3;
        return aux
    }

    const handleFiltroXPeli = (e) => {
        setBuscarXPeliculaSerie(e.target.value)
    }
    
    const contenidoBuscado = () => {
        return (
            <div className={Styles.container_busqueda}>
                <h3>contenido Buscado:</h3>
                <div className={Styles.contenidoFiltrado}>
                {(() => {
                    const arrayAux = arrayModPelis.filter(
                        (content) =>
                            (buscarXRating == 0 || buscarRating(content.rating) == buscarXRating) &&
                            (content.titulo == buscarXPeliculaSerie || content.director == buscarXPeliculaSerie) && filtrarPorGenero(content.genero)
                    );
                    return arrayAux.length === 0 ? (
                        <h3>No hay resultados</h3>
                    ) : (
                        arrayAux.map((content) => (
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
                    );
                })()}
                    </div>
            </div>
        );
    };

    const contenidoVisto = () => {
            return(
                arrayModPelis
                    .filter((contenido) => !contenido.visto && filtrarPorGenero(contenido.genero) && (buscarXRating == 0 || buscarRating(contenido.rating) == buscarXRating))
                    .map((contenido) => (
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
           console.log(arrayModPelis)
           console.log( console.log("Guardado en localStorage:", localStorage.getItem("arrayPelisSeries")))
        }, [arrayModPelis],[localStorage]
    )

    const ordenamientoRating = (orden = "asc") => {
    if (arrayModPelis.length === 0) return;

    const sortedArray = [...arrayModPelis].sort((a, b) =>
      orden === "asc" ? a.rating - b.rating : b.rating - a.rating
    );
    updateArrayModPelis(sortedArray);
  };
    
    
    const ordenamientoAnio = (orden = "asc") => {
    if (arrayModPelis.length === 0) return;

    const sortedArray = [...arrayModPelis].sort((a, b) =>
      orden === "asc" ? a.anio - b.anio : b.anio - a.anio
    );
    updateArrayModPelis(sortedArray);
  };

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
                                <input type="text" name="rating" id="rating" onChange={handleInput}/>

                                <button type="button" onClick={agregarPelicula}>Agregar</button>
                            </form>

                        </div>
                    </div>
                )}

                {/* -----------------------------------------FILTROS--------------------------------------------------------------- */}
                <section className={Styles.container_filtros}>
                    <div className={Styles.filtros}>

                        <span className={Styles.tittle_filtros}>Filtros</span>
                        <span>Generos : </span>

                        <select name="genero" id="genero" className={Styles.select_filtros} onChange={handleInputGenero}>
                            <option value="">-- Selecciona un género --</option>
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

                        <h1 htmlFor="">Ordenar Rating</h1>
                        <label htmlFor=""> {"Todos"}
                            <input type="radio" name="rating" id="" className={Styles.input} onChange={handleRating} value={"0"} />
                        </label>
                        <label htmlFor=""> {" < 5"}
                            <input type="radio" name="rating" id="" className={Styles.input} onChange={handleRating} value={"1"}/>
                        </label>
                        <label htmlFor=""> {"5 a 8"} 
                            <input type="radio" name="rating" id="" className={Styles.input} onChange={handleRating} value={"2"}/>
                        </label>
                        <label htmlFor=""> {" > 8"}
                            <input type="radio" name="rating" id="" className={Styles.input} onChange={handleRating} value={"3"}/>
                        </label>
                        <label htmlFor="">Ascendente
                            <input type="radio" name="OrdenarFecha" id="" onClick={() => ordenamientoRating('asc')}/>
                        </label>
                        <label htmlFor=""> Descendente 
                            <input type="radio" name="OrdenarFecha" id="" onClick={() => ordenamientoRating('asc')}/>
                        </label>
                        <leyend> Ordenar Año </leyend>
                        <label htmlFor=""> Ascendente año
                            <input type="radio" name="OrdenarFecha2" id="" onClick={() => ordenamientoAnio('asc')}/>
                        </label>

                        <label htmlFor="">Descendente año
                            <input  type="radio" name="OrdenarFecha2" id="" onClick={() => ordenamientoAnio('desc')}/>
                        </label>
                        
                    </div>
                </section>

                <section className={Styles.container_peliculas}>

                {/* Titulo / director - Busqueda */}
                <div className={Styles.container_inputBusqueda}>
                    <input type="text" className={Styles.inputBusquedaPeli} placeholder="Titulo - Director" onBlur={handleFiltroXPeli}/>
                </div>

                {contenidoBuscado()}

                {/* Agregar pelicula/serie  */}
                <div className={Styles.container_buttonAgregarPeli}>
                    <button className={Styles.buttonAgregarPeli} onClick={() => setButtonAddpeli(true)}>Agregar Pelicula/Serie</button>
                </div>

                <EstadoVisto 
                    estado={"Vistas"}
                    cantVista={contarVistas()}
                    CantTiposGenero={contarGeneros()}
                    mostrarVista={true}
                    useStateArrayPelisSeries={arrayModPelis}
                />

                <div className={Styles.container_cards}>
                    {arrayModPelis
                        .filter((contenido) => contenido.visto == true)
                        .map((contenido) => (
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

                <div>
                    <EstadoVisto 
                        estado={"Ver"} 
                        cantVista={contarNoVistas()} 
                        CantTiposGenero={contarGeneros()} 
                        useStateArrayPelisSeries={arrayModPelis}
                    />
                </div>

                <div className={Styles.container_cards}>
                    {contenidoVisto()}
                </div>


            </section>
        </main>
    )
}

export default Home


