import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import alfabeto from "../alfabeto"
import errou from "./errou.js"

let imagem = errou()

function App() {

  return (
    <div className="App">
      <Jogo imagem={imagem}/>
      <Letras alfabeto={alfabeto}/>
    </div>
  );
}

export default App;

