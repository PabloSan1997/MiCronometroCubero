/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { loginApi } from "./api/loginApi";


const Contexto = React.createContext({});

export function ProviderContext({ children }: Children) {
    const [permisos, setPermisos] = React.useState<PermisoToken>({ permiso: false, token: '' });
    const [formularioLogin, setFormularioLogin] = React.useState<LoginInterface>({ username: '', password: '' });
    const [actualizar, setActualizar] = React.useState(false);

    React.useEffect(() => {
        loginApi(formularioLogin)
            .then(data => setPermisos(data))
            .catch(error => console.log(error));
    }, [actualizar]);

    const iniciar = (data: LoginInterface) => {
        setFormularioLogin(data);
        setActualizar(!actualizar);
    }

    return (
        <Contexto.Provider value={{
            permisos,
            iniciar
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;