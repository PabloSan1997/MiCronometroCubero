import { convertirFecha } from "../utilities/convertirFecha";
import { convertir } from "../utilities/convertirMilis";
import { TiempoYAlgo } from "./TiempoYAlgo";

export function Resultados({ avo5, media, mejor, peor, resoluciones, fecha, id_prom, setIdProm }: ResultadoElementInterface) {
    
    const borrar = () => {
        if (confirm('Seguro que desea borrar este resultado')) {
            setIdProm(id_prom);
            
        }
    }
    const tipo = resoluciones[0].tipo?resoluciones[0].tipo:'';
    return (
        <div
            className="w-[95%] m-auto p-2 mb-3"
        >
            <div className="flex mb-2">
                <h3 className="text-white">Fecha del solve: {convertirFecha(fecha)} | <span
                className="font-bold"
                >Tipo: {tipo}</span></h3>
                
                <button
                    onClick={borrar}
                    className="ml-5 border-2 border-blue-800 px-4 text-blue-50 bg-blue-950 hover:bg-blue-800"
                >Quitar</button>
            </div>
            <div className="w-full flex">
                <table
                    className='border-collapse bg-[#103b0e] border-2 border-green-300 w-1/6'
                >
                    <tbody className="text-xl">
                        <tr className="border-b-green-300 border-b-[1px]">
                            <th
                                className="bg-green-950 p-2 text-green-200"
                            >Avo5</th>
                            <td className="p-2 text-center text-green-100">{convertir(avo5)}</td>
                        </tr>
                        <tr className="border-b-green-300 border-b-[1px]">
                            <th
                                className="bg-green-950 p-2 text-green-200"
                            >Media</th>
                            <td className="p-2 text-center text-green-100">{convertir(media)}</td>
                        </tr>
                        <tr className="border-b-green-300 border-b-[1px]">
                            <th
                                className="bg-green-950 p-2 text-green-200"
                            >Mejor</th>
                            <td className="p-2 text-center text-green-100">{convertir(mejor)}</td>
                        </tr>
                        <tr className="border-b-green-300 border-b-[1px]">
                            <th
                                className="bg-green-950 p-2 text-green-200"
                            >Peor</th>
                            <td className="p-2 text-center text-green-100">{convertir(peor)}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="border-collapse ml-8 bg-red-800 border-2 border-red-500 w-[60%] text-center">
                    <tbody className="text-xl">
                        <tr className="bg-red-950">
                            <th className="p-2 text-red-50">Tipo</th>
                            <th className="p-2 text-red-50">Tiempo</th>
                            <th className="p-2 text-red-50">Algoritmo</th>
                        </tr>
                        {resoluciones.map(r => (
                            <TiempoYAlgo key={r.id_res} {...r} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

