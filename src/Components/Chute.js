

export default function Chute({soletra, ganhou, setGanhou, perdeu, setPerdeu, erros, setErros, valor, setValor}){
    
    function daleBicuda(){
        
        setGanhou("Ganhou")
        console.log(soletra)
        if(valor === soletra){
            setGanhou("Ganhou")
            setErros(6)
        }
        else{
            setPerdeu("Perdeu")
        }
    }

    const handleChange = (event) => {
        setValor(event.target.value)
    }

    return(
        <div className="Chute">
            <h1>Já sei a palavra!</h1>
            <input type="text" value={valor} onChange={handleChange}/>
            <button onClick={daleBicuda} className="desabilitada">Chutar</button>
        </div>
    );
}