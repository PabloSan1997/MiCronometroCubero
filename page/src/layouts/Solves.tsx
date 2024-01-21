import { Navigate } from "react-router-dom";
import { UseContexto } from "../Context";
import { myRutes } from "../Rutas";


export function Solves(){
    const {permisos} = UseContexto();
    if(!permisos.permiso) return <Navigate to={myRutes.login}/>
    
    return(
        <>
        <p>solves</p>
        </>
    );
}