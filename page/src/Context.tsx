/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { loginApi } from "./api/loginApi";
import { useCookies } from 'react-cookie';
import { deleteData } from "./api/deleteData";
import { generarCombinatoria } from "./utilities/generarCombinatoria";
import { addSolve } from "./api/addSolve";

const Contexto = React.createContext({});

export function ProviderContext({ children }: Children) {
    const [permisos, setPermisos] = React.useState<PermisoToken>({ permiso: false, token: '' });
    const [formularioLogin, setFormularioLogin] = React.useState<LoginInterface>({ username: '', password: '' });
    const [actualizar, setActualizar] = React.useState(false);
    const [formMessage, setFormMessage] = React.useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['data_user']);
    const [revoltura, setRevoltura] = React.useState('');
    const [activar, setActivar] = React.useState(false);
    const [resLocales, setResLocales] = React.useState<ResolucioneFormat[]>([]);
    const [mandar, setMandar] = React.useState(false);
    const [tipoLados, setTipoLados] = React.useState<TiposLados>('3x3');
    React.useEffect(() => {
        loginApi(formularioLogin)
            .then(data => {
                setPermisos(data);
                setFormMessage('');
                setCookie('data_user', data.token, { maxAge: 5000 });
            })
            .catch(error => {
                const err = error as BoomErrorInterface;
                if (!!formularioLogin.username && !!formularioLogin.password) {
                    setFormMessage(err.message);
                }
            });
    }, [actualizar]);

    React.useEffect(() => {
        if (mandar) {
            addSolve(cookies.data_user, { resolucion: resLocales })
                .then(() => {
                    setResLocales([]);
                    setMandar(false);
                });
        }
    }, [mandar]);

    const cambiarLados = (la: TiposLados) => {
        if (!activar) {
            setTipoLados(la);
            setResLocales([]);
        }
    }

    React.useEffect(() => {
        if (cookies.data_user) {
            setPermisos({ token: cookies.data_user, permiso: true });
        }
    }, []);
    const iniciar = (data: LoginInterface) => {
        setFormularioLogin(data);
        setActualizar(!actualizar);
    }
    const cerrarSecion = () => {
        setPermisos({ token: '', permiso: false });
        removeCookie('data_user');
    }
    const borrar = async (id_prom: string) => {
        await deleteData(id_prom, cookies.data_user);
    }
    const revolver = () => {
        setRevoltura(generarCombinatoria());
    }
    const agregarResLocak = (res: ResolucioneFormat) => {
        setResLocales([...resLocales, res]);
    }
    const vaciarResLocal = () => {
        setResLocales([]);
    }
    return (
        <Contexto.Provider value={{
            permisos,
            iniciar,
            formMessage,
            token: cookies.data_user,
            cerrarSecion,
            borrar,
            revoltura,
            revolver,
            activar,
            setActivar,
            agregarResLocak,
            resLocales,
            vaciarResLocal,
            mandar: () => setMandar(!mandar),
            cambiarLados,
            tipoLados
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;