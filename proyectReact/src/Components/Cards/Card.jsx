import Styles from "./card.module.css"

const Card = ({ EstadoVisto = false , titulo , director , genero , rating}) => { 

    return (
        <div className={Styles.container_card}>
            <img src="" alt="" />
            <h2>Titulo</h2>
            <p>Director</p>
            <p>Genero</p>
            <p>Rating</p>

            <div className={Styles.container_botones}>
                <div>
                    <button>Eliminar</button>
                    <button>Editar</button>
                </div>

                {EstadoVisto ? <div>❤️</div> : <div>🖤</div>}

            </div>


        </div> 
    )
}

export default Card