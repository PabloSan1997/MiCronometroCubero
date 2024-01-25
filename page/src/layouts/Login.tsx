import { Navigate } from "react-router-dom";
import { UseContexto } from "../Context";
import { Formulario } from "../components/Formulario";
import { urlStorage } from "../storage/urlStorage";


export function Login(){
    const {permisos} = UseContexto();
    if(permisos.permiso) return <Navigate to={urlStorage.gerUrl()}/>
    return(
        <>
        <Formulario/>
        </>
    );
}