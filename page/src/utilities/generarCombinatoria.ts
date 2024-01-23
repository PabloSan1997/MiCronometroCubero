

export function generarCombinatoria(){
    const opciones = ['R', 'U', 'B', 'D', 'F', 'L'];
    const limite = 21;
    let inicial = 'A';
    const algoritmo = [];
    for(let i=0;i<limite;i++){
        let opcion = '';
        do{
            opcion = opciones[Math.floor(Math.random()*6)];
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

