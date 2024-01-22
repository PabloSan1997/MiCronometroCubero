import { Navigate } from "react-router-dom";
import { UseContexto } from "../Context";
import { myRutes } from "../Rutas";
import { Header } from "../components/Header";
import { Tiempo } from "../components/Tiempo";


export function Cronometro(){
    const {permisos} = UseContexto();
    if(!permisos.permiso) return <Navigate to={myRutes.login}/>
    return(
        <>
        <Header mostrar={true}/>
        <Tiempo valor={175598.31}/>
        </>
    );
}