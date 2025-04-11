import Styles from './EstadoVisto.module.css'


const EstadoVisto = ({ estado, CantTiposGenero }) => {
    return (
        <div className={Styles.container_vistas}>
            <div>Vistas "N"</div>
            <div className={Styles.container_cant_vistas_generos}>
                <div>12 romance</div>
                <div>15 comedia</div>
            </div>
        </div>
    )
}

export default EstadoVisto;