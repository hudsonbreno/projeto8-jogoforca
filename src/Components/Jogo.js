import palavras from "../palavras"

export default function Jogo({escondida, setEscondida, setAtivadas, soletra, setSoletra, ganhou, setGanhou, perdeu, setPerdeu, imagem, erros, setErros}){    
    
    function addPalavra(){

        //if(ganhou="ganhou" || perdeu="perdeu" ||)
        //let tamanho = palavras.length

        setGanhou("")
        setPerdeu("")
        setErros(0)

        let batata = palavras.indexOf("lua")
        let palavra_sorteada = palavras[batata]//(Math.random()*tamanho).toFixed(0)

         
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