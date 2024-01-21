import React from "react";


export function Header({ mostrar }: { mostrar: boolean }) {
    const [titulo, setTitulo] = React.useState('Mi cronometro');
    const cambiar=(texto:string)=>{
         if(mostrar){
            setTitulo(texto);
         }
    }
    return (
        <header className="w-full bg-[#691a1a] flex flex-col">
            <h1
            className=
            "m-auto flex justify-center mt-3 w-72 text-3xl font-bold text-[#f1d2d2] border-2 border-[#421717] px-5 py-2 rounded-lg cursor-pointer hover:bg-[#421717]"
            onMouseOver={()=>cambiar('Resetear')}  
            onMouseLeave={()=>cambiar('Mi cronometro')}       
            >{titulo}</h1>
            {mostrar &&
                <p
                className="text-red-50 m-auto my-2 text-lg tracking-[0.5rem] w-full text-center bg-red-900"
                >D2 B U D L' U2 R' D2 B U B2 D' R2 L2 U' F2 B2 L2 U' F2 U</p>
            }
            <span
            className="mr-5 ml-auto mb-2 text-red-50 hover:underline select-none cursor-pointer"
            >Logout</span>
        </header>
    );
}