import { dataApi } from "./apiData";


export async function addSolve(token:string, data:ResolucionesRequest):Promise<PromedioInterface>{
    const ft = await fetch(`${dataApi.url_base}/prom`, {
        method:'POST',
        headers:dataApi.headers.addSolve(token),
        body:JSON.stringify(data)
    });
    const res = await ft.json();
    return res;
}