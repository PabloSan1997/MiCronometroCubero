/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { loginApi } from "./api/loginApi";
import {useCookies} from 'react-cookie';
import { deleteData } from "./api/deleteData";

const Contexto = React.createContext({});

export function ProviderContext({ children }: Children) {
    const [permisos, setPermisos] = React.useState<PermisoToken>({ permiso: false, token: '' });
    const [formularioLogin, setFormularioLogin] = React.useState<LoginInterface>({ username: '', password: '' });
    const [actualizar, setActualizar] = React.useState(false);
    const [formMessage, setFormMessage] = React.useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['data_user']);

    React.useEffect(() => {
        loginApi(formularioLogin)
            .then(data => {
                setPermisos(data);
                setFormMessage('');
                setCookie('data_user', data.token, {maxAge:5000});
            })
            .catch(error =>{
                const err = error as BoomErrorInterface;
                if(!!formularioLogin.username && !!formularioLogin.password){
                    setFormMessage(err.message);
                }
            });
    }, [actualizar]);
    
    React.useEffect(()=>{
        if(cookies.data_user){
            setPermisos({token:cookies.data_user, permiso:true});
        }
    },[]);
    const iniciar = (data: LoginInterface) => {
        setFormularioLogin(data);
        setActualizar(!actualizar);
    }
    const cerrarSecion=()=>{
        setPermisos({token:'', permiso:false});
        removeCookie('data_user');
    }
    const borrar = async(id_prom:string) =>{
        await deleteData(id_prom, cookies.data_user);
    }
    return (
        <Contexto.Provider value={{
            permisos,
            iniciar,
            formMessage,
            token:cookies.data_user,
            cerrarSecion,
            borrar
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;