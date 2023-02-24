import palavras from "../palavras"
import errou from "./errou";

export default function Jogo({escondida, setEscondida, ativadas, setAtivadas, soletra, setSoletra}){    
    let imagem = errou()
    
    function addPalavra(){
        let tamanho = palavras.length
        let palavra_sorteada = palavras[(Math.random()*tamanho).toFixed(0)]
         
        for(let i=0;i<palavra_sorteada.length;i++){
            soletra[i] = palavra_sorteada[i];
        }
        console.log(soletra)
        setSoletra(soletra)
        
        let escondida = soletra.map((l)=>" _ ")
        setEscondida(escondida)

        setAtivadas([])

}




    return(
        <div className="Jogo">
            <div className="esquerda">
                <img className="forca" src={imagem} alt={imagem}/>                
            </div>
            <div className="direita">
                <button onClick={addPalavra} className="buttonEscolherPalavra">Escolher palavra</button>
                <div className="escondida">{escondida}</div>
            </div>
        </div>
    );
}



        // let acertou = False;
        // let morreu = False;
        
        // while(!(erros===6) && acertou)
        //     chute = Chute()
        //     if(chute in letrasPalavra){
        //         chuteCorreto(chute, palavra_sorteada, acertadas)
        //     } else {
        //         erros++
        //     }
        //     console.log(acertadas)