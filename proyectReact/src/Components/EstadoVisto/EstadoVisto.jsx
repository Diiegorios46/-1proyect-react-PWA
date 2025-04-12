import CardGenero from '../CardGenero/CardGenero';
import Styles from './EstadoVisto.module.css'

import {ArrayPelisSeries} from '../../Constant/bd';

const EstadoVisto = ({ estado, cantVista , CantTiposGenero, mostrarVista , useStateArrayPelisSeries}) => {
    
    // const conteoPorGenero = ArrayPelisSeries.reduce((acc, peli) => {
    //     acc[peli.genero] = (acc[peli.genero] || 0) + 1;
    //     return acc;
    //   }, {});

      function conteoPorGenero(Array){
        return Array.reduce((acc, peli) => {
            acc[peli.genero] = (acc[peli.genero] || 0) + 1;
            return acc;
          }, {});
    } 
      
    //   console.log(conteoPorGenero);

    // const mostrarCardGenero = () => {
    //     return Object.entries(conteoPorGenero).map(([genero, cantidad]) => (
    //         <CardGenero key={genero} genero={genero} cant={cantidad} />
    //       ));
    // };

    const mostrarCardGenero = () => {
        if (mostrarVista) {
            let arrayAux = useStateArrayPelisSeries.filter((peli) => peli.visto)
            return Object.entries(conteoPorGenero(arrayAux)).map(([genero, cantidad]) => (
                <CardGenero key={genero} genero={genero} cant={cantidad} />
            )); 
        }else{
            let arrayAux = useStateArrayPelisSeries.filter((peli) => !peli.visto)
            return Object.entries(conteoPorGenero(arrayAux)).map(([genero, cantidad]) => (
                <CardGenero key={genero} genero={genero} cant={cantidad} />
            ));  
        }
    }
        
    return (
        <div className={Styles.container_vistas}>
            
            <div>{estado} {cantVista} {CantTiposGenero} </div>
            
            <div className={Styles.container_cant_vistas_generos}>
                {mostrarCardGenero()}                
            </div>

        </div>
    )
}

export default EstadoVisto;