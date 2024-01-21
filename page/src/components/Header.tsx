

export function Header({mostrar}:{mostrar:boolean}){
    return(
        <header className="w-full h-28 bg-[#460404]">
            <h1>Mi cronometro</h1>
            {mostrar && <p>B' D' L2 F' B L' B U L D2 B2 L2 B R2 U2 F' D2 F R2</p>}
        </header>
    );
}