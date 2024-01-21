/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { loginApi } from "./api/loginApi";


const Contexto = React.createContext({});

export function ProviderContext({ children }: Children) {
    const [permisos, setPermisos] = React.useState<PermisoToken>({ permiso: false, token: '' });
    const [formularioLogin, setFormularioLogin] = React.useState<LoginInterface>({ username: '', password: '' });
    const [actualizar, setActualizar] = React.useState(false);
    const [formMessage, setFormMessage] = React.useState('');
    React.useEffect(() => {
        loginApi(formularioLogin)
            .then(data => {
                setPermisos(data);
                setFormMessage('');
            })
            .catch(error =>{
                const err = error as BoomErrorInterface;
                if(!!formularioLogin.username && !!formularioLogin.password){
                    setFormMessage(err.message);
                }
            });
    }, [actualizar]);

    const iniciar = (data: LoginInterface) => {
        setFormularioLogin(data);
        setActualizar(!actualizar);
    }

    return (
        <Contexto.Provider value={{
            permisos,
            iniciar,
            formMessage
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;