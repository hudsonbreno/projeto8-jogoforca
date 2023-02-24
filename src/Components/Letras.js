import errou from "./errou";
import alfabeto from "../alfabeto"

export default function Letras({ativadas, setAtivadas, soletra, setSoletra, escondida, setEscondida}){
    errou()

    function clicouLetra(letra){
         if(!ativadas.includes(letra)){
            console.log("ativadas")
            setAtivadas([...ativadas, letra])
        }


        if(soletra.includes(letra)){
            console.log("acertou")
            for(let i =0; i<soletra.length; i++){
                let acertada = soletra.indexOf(letra,i)
                escondida[acertada] = letra
                console.log(escondida)
            }
        }

    }

    return(
        <div className="letras">
            {alfabeto.map((letra) => 
                <button key={letra}
                onClick={() => clicouLetra(letra)} 
                className={`buttonLetra
                ${ativadas.includes(letra)?  "habilitada" : ""}`}>{letra}</button>)}
        </div>
    );
}