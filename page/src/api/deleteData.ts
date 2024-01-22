import { dataApi } from "./apiData";


export async function deleteData(id_prom:string, token:string):Promise<void>{
    console.log(token);
    const ft = await fetch(`${dataApi.url_base}/prom/${id_prom}`,{
        method:'DELETE',
        headers:dataApi.headers.getSolves(token)
    });
    if(!ft.ok){
        throw await ft.json();
    }
}