import Styles from "./card.module.css";

const Card = ({ estadoVisto , titulo , director , genero , rating , Onclick , id }) => { 
    
    return (
        <div className={Styles.container_card}>
            {/* <img src="" alt="" /> */}
            <h2>{titulo}</h2>
            <p>Director : {director}</p>
            <p>Genero : {genero}</p>
            <p>Rating : {rating}</p>

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