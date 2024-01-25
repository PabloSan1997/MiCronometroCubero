

export function generarCombinatoria(lados:TiposLados){
    let opciones = ['R', 'U', 'B', 'D', 'F', 'L'];
    let limite = 21;
    let inicial = 'A';
    const algoritmo = [];

    if(lados=='2x2'){
        opciones = ['R', 'U', 'F'];
        limite = 10;
    }

    for(let i=0;i<limite;i++){
        let opcion = '';
        do{
            opcion = opciones[Math.floor(Math.random()*opciones.length)];
        }while(opcion===inicial);
        inicial = opcion;
        const random = Math.floor(Math.random()*3);
        if(random===0){
            algoritmo.push(opcion);
        }else if(random===1){
            algoritmo.push(`${opcion}2`);
        }else{
            algoritmo.push(`${opcion}'`);
        }
        
    }
    return algoritmo.join(' ');
}

