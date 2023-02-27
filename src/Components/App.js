import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import alfabeto from "../alfabeto"
import { useState } from "react"
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

const imagem = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
function App() {

  const[ativadas, setAtivadas] = useState(alfabeto)
  const[escondida , setEscondida] = useState()
  const[soletra, setSoletra] = useState([])
  const[ganhou, setGanhou] = useState("")
  const[perdeu, setPerdeu] = useState("")
  const[erros, setErros] = useState(0)

  return (
    <div className="App">
      <Jogo imagem={imagem} 
      erros={erros} setErros={setErros}
      escondida={escondida} setEscondida={setEscondida}
      soletra={soletra} setSoletra={setSoletra}
      setAtivadas={setAtivadas}
      ganhou={ganhou} setGanhou={setGanhou}
      perdeu={perdeu} setPerdeu={setPerdeu}/>
      
      <Letras
      alfabeto={alfabeto} ativadas={ativadas} setAtivadas={setAtivadas} 
      soletra={soletra}
      escondida={escondida} setEscondida={setEscondida}
      ganhou={ganhou} setGanhou={setGanhou}
      perdeu={perdeu} setPerdeu={setPerdeu}
      erros={erros} setErros={setErros}/>
    
    </div>
  );
}

export default App;

