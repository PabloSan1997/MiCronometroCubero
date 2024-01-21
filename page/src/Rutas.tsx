import {useRoutes} from 'react-router-dom';
import { Login } from './layouts/Login';
import { Cronometro } from './layouts/Cronometro';
import { Solves } from './layouts/Solves';
import { Redirec } from './components/Redirec';

// eslint-disable-next-line react-refresh/only-export-components
export const myRutes = {
    login:'/login',
    timer:'/timer',
    solves:'/solves'
}

export const Rutas =()=>useRoutes([
    {
        path:myRutes.login,
        element:<Login/>
    },
    {
        path:myRutes.timer,
        element:<Cronometro/>
    },
    {
        path:myRutes.solves,
        element:<Solves/>
    },
    {
        path:'/',
        element:<Redirec/>
    }
]);