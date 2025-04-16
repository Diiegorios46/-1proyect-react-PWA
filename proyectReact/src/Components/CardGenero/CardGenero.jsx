import Style from '../CardGenero/cardGenero.module.css'

const CardGenero = ({ genero, cant }) => {
    let styleCardParam = Style.containerCard; // valor por defecto

    if (genero === "Accion") {
        styleCardParam = Style.accion;
    } else if (genero === "Aventura") {
        styleCardParam = Style.aventura;
    } else if (genero === "Ciencia Ficcion") {
        styleCardParam = Style.cienciaFiccion;  
    } else if (genero === "Comedia") {
        styleCardParam = Style.comedia;
    } else if (genero === "Crimen") {
        styleCardParam = Style.crimen;
    } else if (genero === "Drama") {
        styleCardParam = Style.drama;
    } else if (genero === "Fantasia") {
        styleCardParam = Style.fantasia;
    } else if (genero === "Romance") {
        styleCardParam = Style.romance;
    } else if (genero === "Terror") {
        styleCardParam = Style.terror;
    }

    return (
        <div className={styleCardParam}>
            {cant} {genero}
        </div>
    )
}

export default CardGenero;

  