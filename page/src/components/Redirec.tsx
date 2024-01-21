import {Navigate} from 'react-router-dom';
import { myRutes } from '../Rutas';
import { UseContexto } from '../Context';

export function Redirec(){
    const {permisos} = UseContexto();
    if(permisos.permiso) return <Navigate to={myRutes.solves}/>
    return <Navigate to={myRutes.login}/>;
}