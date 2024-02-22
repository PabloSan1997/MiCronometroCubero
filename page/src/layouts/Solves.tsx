/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate } from "react-router-dom";
import { UseContexto } from "../Context";
import { myRutes } from "../Rutas";
import { Header } from "../components/Header";
import React from "react";
import { getSolves } from "../api/getSolves";
import { Resultados } from "../components/Resultados";
import { urlStorage } from "../storage/urlStorage";
import { getPlotResults } from "../api/getPlotResults";
import { Graficos } from "../components/Graficos";


export function Solves() {
    const { permisos, borrar } = UseContexto();
    const [promedios, setPromedios] = React.useState<PromedioInterface[]>([]);
    const [actualizarPromedio, setActualizarPromedio] = React.useState(false);
    const [id_prom, setIdProm] = React.useState('');
    const [datosGrafica, setDatosGrafica] = React.useState<GraficaResultado[]>([]);
    React.useEffect(() => {
        urlStorage.setUrl(myRutes.solves);
        getSolves(permisos.token)
            .then(data => { setPromedios(data) })
            .catch(() => { setPromedios([]) });
        getPlotResults(permisos.token)
        .then(data => setDatosGrafica(data))
        .catch(()=>setDatosGrafica([]))
    }, [actualizarPromedio]);

    React.useEffect(() => {
        if (id_prom) {
            borrar(id_prom)
                .then(() =>{ 
                    setActualizarPromedio(!actualizarPromedio);
                    setIdProm('');
                })
                .catch(() => alert('problemas para ejecutar accion'));
        }
    }, [id_prom]);

    if (!permisos.permiso) return <Navigate to={myRutes.login} />
    return (
        <>
            <Header mostrar={false} />
            <h2 className="text-white m-5 text-3xl">Mis tiempos {promedios.length}</h2>
            {promedios.map(p => (
                <Resultados key={p.id_prom} {...p} setIdProm={setIdProm}/>
            ))}
            <Graficos resultados={datosGrafica}/>
        </>
    );
}