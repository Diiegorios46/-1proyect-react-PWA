import CardGenero from '../CardGenero/CardGenero';
import Styles from './EstadoVisto.module.css'

const EstadoVisto = ({ estado, cantVista , CantTiposGenero, mostrarVista , useStateArrayPelisSeries}) => {

    function conteoPorGenero(Array){
    return Array.reduce((acc, peli) => {
        acc[peli.genero] = (acc[peli.genero] || 0) + 1;
        return acc;
        }, {});
    } 
      
    const mostrarCardGenero = () => {
        if (mostrarVista){
            //En react el prefijo use esta reservado para hooks. Funciona pero no es semanticamente correcto
            let arrayAux = useStateArrayPelisSeries.filter((peli) => peli.visto)
            return Object.entries(conteoPorGenero(arrayAux)).map(([genero, cantidad]) => (
                <CardGenero key={genero} genero={genero} cant={cantidad} />
            ));
        }
        //Igual que arriba

        let arrayAux = useStateArrayPelisSeries.filter((peli) => !peli.visto)
        return Object.entries(conteoPorGenero(arrayAux)).map(([genero, cantidad]) => (
            <CardGenero key={genero} genero={genero} cant={cantidad} />
        ));    
    }
        
    return (
        <div className={Styles.container_vistas}>
            <div>
                {/* Si este select no esta seleccionando nada, entonces deberian ser textos planos.  */}
            <select className={Styles.selectEstadisticas}>
                <option>{estado}</option>
                <option>Cantidad Vistas {cantVista}</option>
                <option>Cantidad Géneros {CantTiposGenero}</option>
            </select>

            </div>
            <div className={Styles.container_cant_vistas_generos}>
                {mostrarCardGenero()}                
            </div>

        </div>
    )
}

export default EstadoVisto;