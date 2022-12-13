import { useState } from "react";

export const Textfield = (props) => {
    const [valor, setValor] = useState('');

    const whenTyped = (event) => {
        props.whenChanged(event.target.value);
    }

    return(
        <div className="textfield">
            <label>{props.label}</label>
            <input value={props.valor} type="text" placeholder={`${props.placeholder}...`} required={props.isRequired} onChange={whenTyped} />
        </div>        
    );
}