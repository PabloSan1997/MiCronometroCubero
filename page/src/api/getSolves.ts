import { dataApi } from "./apiData";


export async function getSolves(authorization:string):Promise<PromedioInterface[]>{
    const ft = await fetch(`${dataApi.url_base}/prom`,{
        method:'GET',
        headers:dataApi.headers.getSolves(authorization)
    });
    const data =await ft.json();
    return data;
}