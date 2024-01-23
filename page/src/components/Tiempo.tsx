import { convertirMilisegundos } from "../utilities/convertirMilis";



export function Tiempo({valor}:{valor:number}){
    const converzor = convertirMilisegundos(valor);
    const texto = `${converzor.minutos}:${converzor.segundos}.${converzor.centi<10?'0'+converzor.centi:converzor.centi}`;
    return(
        <div
        className="bg-black w-full h-40 flex justify-center items-center"
        >
            <span
            className='text-white text-9xl'
            >{texto}</span>
        </div>
    );
}