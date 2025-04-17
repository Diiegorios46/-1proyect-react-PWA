import Style from './Tittle.module.css'

const Tittle = ({nombre}) => {
    return (
        <div className={Style.tittle}>{nombre}</div>
    )
} 

export default Tittle