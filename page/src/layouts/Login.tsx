import { Navigate } from "react-router-dom";
import { UseContexto } from "../Context";
import { Formulario } from "../components/Formulario";
import { myRutes } from "../Rutas";


export function Login(){
    const {permisos} = UseContexto();
    if(permisos.permiso) return <Navigate to={myRutes.solves}/>
    return(
        <>
        <Formulario/>
        </>
    );
}