
export function convertirMilisegundos(milisegundos:number) {
    const minutos = Math.floor(milisegundos / 60000);
    const segundos = Math.floor((milisegundos % 60000) / 1000);
    const milis = milisegundos % 1000;
    const ar = milis.toString().split('');
    ar.pop();
    return {
      minutos: minutos,
      segundos: segundos,
      centi: Number(ar.join(''))
    };
  }