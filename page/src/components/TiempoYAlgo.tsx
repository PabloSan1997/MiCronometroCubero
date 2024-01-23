import { convertir } from "../utilities/convertirMilis";


export function TiempoYAlgo({ algoritmo, tiempo, tipo }: ResolucionesInterface) {

    return (
        <tr className="border-b-[1px] border-b-red-500 text-red-50">
            <td className="p-2 border-r-[1px] border-r-red-500 text-red-50">{tipo}</td>
            <td className="p-2 border-r-[1px] border-r-red-500 text-red-50">{convertir(tiempo)}</td>
            <td className="p-2 text-left "><span className="ml-3 w-fit">{algoritmo}</span></td>
        </tr>
    );
}