import { useState } from "react"

export const Selectbox = (props) => {
    const [time, setTime] = useState('');

    return(
        <div className="selectbox">
            <label>{props.label}</label>
            <select onChange={event => props.whenChanged(event.target.value)} value={props.valor} required={props.isRequired}>
                <option defaultValue={''} value={''}>Selecione</option>
                {props.itens.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    );
}