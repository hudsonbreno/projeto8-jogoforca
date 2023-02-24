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
                        ganhou = "Ganhou"
                        setGanhou(ganhou)
                        setAtivadas(alfabeto)
                    }
                }
                else{
                    erros = erros+1
                    setErros(erros)
                    if(erros > 5){
                        perdeu = "Perdeu"
                        setEscondida(soletra)
                        setPerdeu(perdeu)
                        setAtivadas(alfabeto)
                    }
                }
        }
    }

    return(
        <div className="letras">
            {alfabeto.map((letra) => 
                <button data-test="letter"
                    key={letra}
                    onClick={() => clicouLetra(letra, erros)} 
                    className={`buttonLetra
                    ${ativadas.includes(letra)?  "habilitada" : ""}
                    `}>{letra}
                </button>)}
        </div>
    );
}