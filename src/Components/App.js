import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import alfabeto from "../alfabeto"
import errou from "./errou.js"
import { useState } from "react"

let imagem = errou()

function App() {

  const[ativadas, setAtivadas] = useState(alfabeto)
  const[escondida , setEscondida] = useState()
  const[soletra, setSoletra] = useState([])

  return (
    <div className="App">
      <Jogo imagem={imagem} escondida={escondida} setEscondida={setEscondida}
      soletra={soletra} setSoletra={setSoletra}
      ativadas={ativadas} setAtivadas={setAtivadas}/>
      
      <Letras alfabeto={alfabeto} ativadas={ativadas} setAtivadas={setAtivadas} 
      soletra={soletra} setSoletra={setSoletra}
      escondida={escondida} setEscondida={setEscondida}/>
    
    </div>
  );
}

export default App;

