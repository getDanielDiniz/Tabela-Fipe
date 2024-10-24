import { useSelector } from "react-redux"
import { getState } from "../../redux/configSlice/slice"
import carro from "./assets/carro.png"
import moto from "./assets/moto.png"
import caminhao from "./assets/caminhao.png"
import "./carAnimation.scss"
import "./carAnimation_responsive.scss"
import { useEffect, useState } from "react"

const photosObject = {
    carros: carro,
    motos : moto,
    caminhões : caminhao
}



export const CarAnimation = ()=>{

    const options = useSelector(getState)
    const [positionIndex, setPositionIndex] = useState(1)
    const [photo, setPhoto] = useState(carro)
    const [valor, setValor] = useState()

    useEffect(()=>{
        for (let index = 0; index < options.length; index++) {
            const element = options[index];

            if (element.value == null){
                switch (element.name) {
                    case "veiculo":
                    return;
                    
                    case "marcas":
                        setPositionIndex(3);        
                    return;
                    
                    case "modelos":
                        setPositionIndex(-3);        
                    return;
                    
                    case "anos":
                        setPositionIndex(-1);        
                    return;
                    default:
                        break;
                }
            }else{
                if (element.name == "veiculo"){
                    setPhoto(photosObject[element.value])
                }
                if(element.name == "valor") { setValor(element.value)}
                else{
                    setValor(null)
                }
            }
            
        }
    },[options])
    
    return(
        <>
            <div className="carAnimation" style={{"--i":positionIndex}}>
                <img src={photo} />
            </div>
            <p>{valor&&valor}</p>
        </>
    )
}