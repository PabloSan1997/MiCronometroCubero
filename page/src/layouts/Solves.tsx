import { Navigate } from "react-router-dom";
import { UseContexto } from "../Context";
import { myRutes } from "../Rutas";
import { Header } from "../components/Header";


export function Solves(){
    const {permisos} = UseContexto();
    if(!permisos.permiso) return <Navigate to={myRutes.login}/>
    
    return(
        <>
        <Header mostrar={false}/>
        <p>solves</p>
        </>
    );
}