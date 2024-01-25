/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate } from "react-router-dom";
import { UseContexto } from "../Context";
import { myRutes } from "../Rutas";
import { Header } from "../components/Header";
import { Tiempo } from "../components/Tiempo";
import React from "react";
import { TablaLocal } from "../components/ResoluLocal";
import { urlStorage } from "../storage/urlStorage";

export function Cronometro() {
    const { permisos, revolver, activar, setActivar, agregarResLocak, revoltura, resLocales, tipoLados } = UseContexto();
    const [conteo, setConteo] = React.useState(0);
    const [horaInicial, setHoraInicial] = React.useState<Date>(new Date());
    const milisegundos = 50;
    const [agregar, setAgregar] = React.useState(false);

    React.useEffect(() => {
        if (activar && resLocales.length < 5) {
            setTimeout(() => {
                const actual = new Date();
                const tim = actual.getTime() - horaInicial.getTime();
                setConteo(tim);
            }, milisegundos);
        } else if (!activar && agregar && resLocales.length < 5) {
            agregarResLocak({ algoritmo: revoltura, tiempo: conteo, tipo: tipoLados });
            setAgregar(false);
        }
    }, [conteo, activar]);



    const empezar = (e: KeyboardEvent) => {
        const url = window.location.href.split('/#')[1];
        if (e.key == ' ' && url === myRutes.timer) {
            setHoraInicial(new Date());
            setActivar(true);
            window.removeEventListener('keyup', empezar);
            window.addEventListener('keypress', pausar);
        }
    }
    const pausar = () => {
        setActivar(false);
        setAgregar(true);
        setTimeout(() => {
            window.addEventListener('keyup', empezar);
            revolver();
            setConteo(0);
        }, 800);
        window.removeEventListener('keypress', pausar);
    }
    React.useEffect(() => {
        setActivar(false);
        window.addEventListener('keyup', empezar);
        revolver();
        urlStorage.setUrl(myRutes.timer);
    }, []);

    if (!permisos.permiso) return <Navigate to={myRutes.login} />
    return (
        <>
            <Header mostrar={true} />
            <Tiempo valor={conteo} />
            <TablaLocal />
        </>
    );
}