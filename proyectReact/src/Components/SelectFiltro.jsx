import Style from './selectFiltro.module.css';

const SelectFiltro = ({ nombreSelect, opciones, onChange, nombreOpcion, name, id }) => {
            return (
                <div className={Style.containerSelect}>
                    <label className={Style.labelSelect} htmlFor={id}>{nombreSelect}</label>
                    <select
                        className={Style.select}
                        onChange={onChange}
                        name={name}
                        id={id}
                    >
                        {
                            opciones.map((opcion, index) => (
                                <option key={index} value={opcion[nombreOpcion]}>
                                    {opcion[nombreOpcion] || "N/A"}
                                </option>
                            ))
                        }
                    </select>
                </div>
            );
}

export default SelectFiltro;