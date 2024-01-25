import {Navigate} from 'react-router-dom';
import { myRutes } from '../Rutas';
import { urlStorage } from '../storage/urlStorage';
import {useCookies} from 'react-cookie';

export function Redirec(){
    const [cookies] = useCookies(['data_user']);

    if(cookies.data_user) return <Navigate to={urlStorage.gerUrl()}/>
    return <Navigate to={myRutes.login}/>;
}