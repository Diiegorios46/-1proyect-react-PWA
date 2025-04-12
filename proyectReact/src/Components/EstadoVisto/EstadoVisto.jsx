import CardGenero from '../CardGenero/CardGenero';
import Styles from './EstadoVisto.module.css'

const EstadoVisto = ({ estado, cantVista , CantTiposGenero }) => {
    return (
        <div className={Styles.container_vistas}>
            <div> {estado} {cantVista} {CantTiposGenero} </div>
            
            <div className={Styles.container_cant_vistas_generos}>
                
                <CardGenero genero={"Accion"} cant={12} />
                <CardGenero genero={"Drama"} cant={12} />

            </div>

        </div>
    )
}

export default EstadoVisto;