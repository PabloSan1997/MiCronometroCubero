import { dataApi } from "./apiData";



export async function getPlotResults(authorization:string):Promise<GraficaResultado[]>{
    const ft = await fetch(`${dataApi.url_base}/prom/plot`,{
        method:'GET',
        headers:dataApi.headers.getSolves(authorization)
    });
    const data =await ft.json();
    return data;
}