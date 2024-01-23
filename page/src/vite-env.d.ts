/// <reference types="vite/client" />


type Children = {
    children: JSX.Element | JSX.Element[]
}

type Contexto = {
    permisos: { permiso: boolean, token: string },
    iniciar(a: LoginInterface): void,
    formMessage: string,
    token: string | undefined,
    cerrarSecion(): void,
    borrar(id_prom:string):Promise<void>,
    revoltura:string,
    revolver():void,
    activar:boolean, 
    setActivar(activar:boolean):void,
    agregarResLocak(res:ResolucioneFormat):void,
    resLocales:ResolucioneFormat[],
    vaciarResLocal():void
}

interface ResolucioneFormat {
    algoritmo: string;
    tiempo: number;
    tipo: string;
}

interface ResolucionesRequest{
    resolucion:ResolucioneFormat
}

interface ResolucionesInterface {
    id_res: string;
    algoritmo: string;
    tiempo: number;
    tipo: string;
}

interface PromedioInterface {
    id_prom: string;
    avo5: number;
    media: number;
    mejor: number;
    peor: number;
    fecha:string;
    resoluciones: ResolucionesInterface[]
}

interface LoginInterface {
    username: string;
    password: string;
}

interface PermisoToken {
    permiso: boolean;
    token: string;
}

interface BoomErrorInterface {
    statusCode: number;
    error: string;
    message: string;
}


interface ResultadoElementInterface extends PromedioInterface{
    setIdProm(a:string):void
}