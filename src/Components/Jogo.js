import { useState } from "react"
import palavras from "../palavras"
import errou from "./errou";

export default function Jogo(){    
    let imagem = errou()
    const[escondida , setEscondida] = useState() 
    
    function addPalavra(){
        let  letra = []
        let tamanho = palavras.length
        let palavra_sorteada = palavras[(Math.random()*tamanho).toFixed(0)]
         
        for(let i=0;i<palavra_sorteada.length;i++){
            letra[i] = palavra_sorteada[i];
        }
        console.log(letra)
        let escondida = letra.map((l)=>" _ ")
        setEscondida(escondida)

}




    return(
        <div className="Jogo">
            <div className="esquerda">
                <img className="forca" src={imagem} alt={imagem}/>                
            </div>
            <div className="direita">
                <button onClick={addPalavra} className="buttonEscolherPalavra">Escolher palavra</button>
                <div class="escondida">{escondida}</div>
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