/// <reference types="vite/client" />


type Children = {
    children: JSX.Element | JSX.Element[]
}

type TiposLados = '2x2'|'3x3';

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
    vaciarResLocal():void,
    mandar():void,
    cambiarLados(lado:TiposLados):void,
    tipoLados:TiposLados
}

interface ResolucioneFormat {
    algoritmo: string;
    tiempo: number;
    tipo: string;
}

interface ResolucionesRequest{
    resolucion:ResolucioneFormat[]
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

interface GraficaResultado{
    avo5: number,
	fecha: string,
	tipo:string;
}