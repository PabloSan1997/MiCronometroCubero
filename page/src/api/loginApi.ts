import { dataApi } from "./apiData";


export async function loginApi(data:LoginInterface):Promise<PermisoToken>{

    const ft = await fetch(`${dataApi.url_base}/user/login`, {
        method:'POST',
        headers:dataApi.headers.login,
        body:JSON.stringify(data)
    });
    const response = await ft.json();
    if(!ft.ok) throw response;
    return response;
}