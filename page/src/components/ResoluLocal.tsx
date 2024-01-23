import { UseContexto } from "../Context";
import { convertir } from "../utilities/convertirMilis";


export function TablaLocal() {
    const { resLocales, mandar } = UseContexto();
    return (
        <>
            {resLocales.length>=5?
            <button
            onClick={mandar}
            className="border-2 border-blue-800 px-4 text-blue-50 bg-blue-950 hover:bg-blue-800 ml-8 mt-2"
            >Guardar tiempo</button>
            :null}
            <table className="border-collapse ml-8 bg-red-800 border-2 border-red-500 w-[60%] text-center mb-5 mt-2">
                <tbody className='text-base'>
                    <tr className="bg-red-950">
                        <th className="p-2 text-red-50">Tipo</th>
                        <th className="p-2 text-red-50">Tiempo</th>
                        <th className="p-2 text-red-50">Algoritmo</th>
                    </tr>
                    {resLocales.map(r => (
                        <ResoluLocal key={r.algoritmo} {...r} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export function ResoluLocal({ tiempo, tipo, algoritmo }: ResolucioneFormat) {
    return (
        <tr className="border-b-[1px] border-b-red-500 text-red-50">
            <td className="p-2 border-r-[1px] border-r-red-500 text-red-50">{tipo}</td>
            <td className="p-2 border-r-[1px] border-r-red-500 text-red-50">{convertir(tiempo)}</td>
            <td className="p-2 text-left "><span className="ml-3 w-fit">{algoritmo}</span></td>
        </tr>
    );
}