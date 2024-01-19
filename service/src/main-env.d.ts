
interface AddUserInterface {
    username: string;
    nickname: string;
    password: string;
}
interface LoginUserInterface {
    username: string;
    password: string;
}
interface UserInterface extends AddUserInterface {
    id_user: string;
}

interface PermisoInterface {
    id_user: string;
    nickname: string;
}

interface AddPromedio {
    avo5: number;
    media: number;
    mejor: number;
    peor: number;
}
interface PromedioInterface extends AddPromedio {
    id_prom: string;
    fecha:string;
}

interface AddResolucion {
    algoritmo:string;
    tiempo:number;
    tipo:string;
}
interface ResolucionesInterface extends AddResolucion{
    id_res:string;
}
interface AddPromRes{
    resolucion:AddResolucion[]
}