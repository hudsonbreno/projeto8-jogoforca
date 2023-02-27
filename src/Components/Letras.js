import alfabeto from "../alfabeto"

export default function Letras({ativadas, setAtivadas, soletra, escondida, setEscondida, ganhou, setGanhou, perdeu, setPerdeu, erros, setErros}){

    function clicouLetra(letra, erros){

        if(!ativadas.includes(letra)){
            setAtivadas([...ativadas, letra])
                if(soletra.includes(letra)){
                    for(let i =0; i<soletra.length; i++){
                        let acertada = soletra.indexOf(letra,i)
                        if(acertada>=0){
                            escondida[acertada] = letra
                        }
                    }
                    
                    if(JSON.stringify(escondida) === JSON.stringify(soletra)){
                        setGanhou("Ganhou")
                        setAtivadas(alfabeto)
                    }
                }
                else{
                    erros = erros+1
                    setErros(erros)
                    if(erros > 5){
                        setEscondida(soletra)
                        setPerdeu("Perdeu")
                        setAtivadas(alfabeto)
                    }
                }
        }
    }

    return(
        <div className="letras">
            {alfabeto.map((letra) => 
                <button data-test="letter"
                    disabled={ativadas.includes(letra)}
                    key={letra}
                    onClick={() => clicouLetra(letra, erros)} 
                    className={`buttonLetra
                    ${ativadas.includes(letra)?  "habilitada" : "desabilitada"}
                    `}>{letra}
                </button>)}
        </div>
    );
}