import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

let erro = 0;

export default function errou(){
  if(erro===0){erro++ 
    return forca0}
  if(erro===1){erro++
    return forca1}
  if(erro===2){erro++
    return forca2}
  if(erro===3){erro++
    return forca3}
  if(erro===4){erro++
    return forca4}
  if(erro===5){erro++
    return forca5}
  if(erro===6){
    //perdeu()
    return forca6
  }
}