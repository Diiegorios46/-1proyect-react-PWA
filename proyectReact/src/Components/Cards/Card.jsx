import Styles from "./card.module.css";

const Card = ({ estadoVisto , titulo , director , genero , rating , Onclick , id , anio , url}) => { 
    
    return (
        <div className={Styles.container_card}>

            <div className={Styles.imgCard}>
                <img src={url} alt="" className={Styles.img}/> 
            </div>
            
            <ul className={Styles.ul}>
                <li className={Styles.ContentTitulo}>{titulo}</li>
                <li className={Styles.ContentSubTitulo}>Director : {director}</li>
                <li className={Styles.ContentSubTitulo}>Genero : {genero}</li>
                <li className={Styles.ContentSubTitulo}>Rating : {rating}</li>
                <li className={Styles.ContentSubTitulo}>({anio})</li>
            </ul>

            <div className={Styles.container_botones}>
                <div>
                    <button className={Styles.buttonEditar}>Editar</button>
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