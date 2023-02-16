import { useState } from "react";
import errou from "./errou";
import alfabeto from "../alfabeto"

export default function Letras(props){
    errou()
    const[buttonLetra, setButtonLetra] = useState([])
    
    function addHabilitar(){

        setButtonLetra("habilitada")
    }

    function ButtonLetras(props){
        return(
            <div>
                <button onClick={() => desabilitar()} className={buttonLetra}>{props.props}</button>
            </div>
        )
    }

    return(
        <div className="letras">
            {alfabeto.map((letra) => <ButtonLetras key={letra} props={letra}/>)}
        </div>
    );
}