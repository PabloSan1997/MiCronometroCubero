import React from "react";
import { Link } from 'react-router-dom';
import { myRutes } from "../Rutas";
import { UseContexto } from "../Context";

export function Header({ mostrar }: { mostrar: boolean }) {
    const [titulo, setTitulo] = React.useState('Mi cronometro');
    const { cerrarSecion, revoltura, activar, vaciarResLocal, tipoLados, cambiarLados } = UseContexto();
    const cambiar = (texto: string) => {
        if (mostrar) {
            setTitulo(texto);
        }
    }
    const resetear = () => {
        if (mostrar && !activar) {
            vaciarResLocal();
        }
    }
    const selecionarLado = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const data = e.target.value as TiposLados;
        cambiarLados(data);
    }
    return (
        <header className="w-full bg-[#691a1a] flex flex-col">
            <h1
                className=
                {`m-auto flex bg-red-900 select-none justify-center mt-3 w-72 text-2xl font-bold text-[#f1d2d2] border-2 border-[#421717] px-5 py-2 rounded-lg ${mostrar && 'hover:bg-[#421717] cursor-pointer'}`}
                onMouseOver={() => cambiar('Resetear')}
                onMouseLeave={() => cambiar('Mi cronometro')}
                onClick={resetear}
            >{titulo}</h1>
            {mostrar &&
                <p
                    className="text-red-50 m-auto my-2 text-lg tracking-[0.5rem] w-full text-center bg-red-900"
                >{revoltura}</p>
            }
            <div className="flex w-full mb-3">
                {!activar && mostrar && (
                    <select
                        value={tipoLados}
                        className="m-auto ml-5 bg-red-800 outline-none text-red-50 px-2 after:bg-red-500"
                        onChange={selecionarLado}
                    >
                        <option value="2x2">2x2</option>
                        <option value="3x3">3x3</option>
                    </select>
                )}
                <div className="mr-5 ml-auto">
                    <span
                        className="text-red-50 hover:underline select-none cursor-pointer"
                        onClick={cerrarSecion}
                    >Logout</span>
                    <Link
                        className="ml-5 text-red-50 hover:underline select-none cursor-pointer"
                        to={mostrar ? myRutes.solves : myRutes.timer}
                    >{mostrar ? 'Ver Solves' : 'Cronometro'}</Link>
                </div>
            </div>
        </header>
    );
}