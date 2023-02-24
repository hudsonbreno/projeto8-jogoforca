import alfabeto from "../alfabeto"
import palavras from "../palavras"

export default function Jogo({escondida, setEscondida, ativadas, setAtivadas, soletra, setSoletra, ganhou, setGanhou, perdeu, setPerdeu, imagem, erros, setErros}){    
    
    console.log(ativadas)
    function addPalavra(){

        setGanhou("")
        setPerdeu("")
        setErros(0)

        //let batata = palavras.indexOf("lua")
        let tamanho = palavras.length
        let palavra_sorteada = palavras[(Math.random()*tamanho).toFixed(0)]

         
        for(let i=0;i<palavra_sorteada.length;i++){
            soletra[i] = palavra_sorteada[i];
        }
        console.log(soletra)
        setSoletra(soletra)

        let escondida = soletra.map(()=>" _ ")
        setEscondida(escondida)

        setAtivadas([])


    }


    return(
        <div className="Jogo">
            <div className="esquerda">
                <img data-test="game-image" className="forca" src={imagem[erros]} alt={imagem[erros]}/>                
            </div>
            <div className="direita">
                <button data-test="choose-word" onClick={addPalavra} className="buttonEscolherPalavra">Escolher palavra</button>
                <div data-test="word" className={`escondida
                    ${ganhou==="Ganhou"?  "ganhou" : ""}
                    ${perdeu==="Perdeu"? "perdeu": ""}
                `}>{escondida}</div>
            </div>
        </div>
    );
}