import Style from '../CardGenero/cardGenero.module.css'

const CardGenero = ({ genero, cant }) => {
    let styleCardParam = Style.containerCard; // valor por defecto

    switch (genero) {
        case "Accion":
            styleCardParam = Style.accion;
            break;
        case "Aventura":
            styleCardParam = Style.aventura;
            break;
        case "Ciencia Ficcion":
            styleCardParam = Style.cienciaFiccion;
            break;
        case "Comedia":
            styleCardParam = Style.comedia;
            break;
        case "Crimen":
            styleCardParam = Style.crimen;
            break;
        case "Drama":
            styleCardParam = Style.drama;
            break;
        case "Fantasia":
            styleCardParam = Style.fantasia;
            break;
        case "Romance":
            styleCardParam = Style.romance;
            break;
        case "Terror":
            styleCardParam = Style.terror;
            break;
        default:
            styleCardParam = Style.containerCard;
    }

    return (
        <div className={styleCardParam}>
            {cant} {genero}
        </div>
    );
}

export default CardGenero;

  