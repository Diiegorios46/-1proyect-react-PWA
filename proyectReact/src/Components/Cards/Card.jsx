import Styles from "./card.module.css";

const Card = ({ estadoVisto , titulo , director , genero , rating , Onclick , id , anio , url}) => { 
    
    return (
        <div className={Styles.container_card}>
            <div className={Styles.imgCard}>
                <img src={url} alt="" className={Styles.img}/> 
            </div>
            <h2>{titulo}</h2>
            <p>Director : {director}</p>
            <p>Genero : {genero}</p>
            <p>Rating : {rating}</p>
            <p>anio : {anio}</p>

            <div className={Styles.container_botones}>
                <div>
                    <button>Editar</button>
                </div>
                {estadoVisto ? 
                <div onClick={() => Onclick(id)}>❤️</div> 
                :
                <div onClick={() => Onclick(id)}>🖤</div>
                }

            </div>
        </div> 
    )
}

export default Card