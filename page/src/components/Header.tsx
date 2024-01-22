import React from "react";
import { Link } from 'react-router-dom';
import { myRutes } from "../Rutas";
import { UseContexto } from "../Context";

export function Header({ mostrar }: { mostrar: boolean }) {
    const [titulo, setTitulo] = React.useState('Mi cronometro');
    const {cerrarSecion} = UseContexto();
    const cambiar = (texto: string) => {
        if (mostrar) {
            setTitulo(texto);
        }
    }
    
    return (
        <header className="w-full bg-[#691a1a] flex flex-col">
            <h1
                className=
                {`m-auto flex bg-red-900 justify-center mt-3 w-72 text-3xl font-bold text-[#f1d2d2] border-2 border-[#421717] px-5 py-2 rounded-lg ${mostrar && 'hover:bg-[#421717] cursor-pointer'}`}
                onMouseOver={() => cambiar('Resetear')}
                onMouseLeave={() => cambiar('Mi cronometro')}
            >{titulo}</h1>
            {mostrar &&
                <p
                    className="text-red-50 m-auto my-2 text-lg tracking-[0.5rem] w-full text-center bg-red-900"
                >D2 B U D L' U2 R' D2 B U B2 D' R2 L2 U' F2 B2 L2 U' F2 U</p>
            }
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
        </header>
    );
}