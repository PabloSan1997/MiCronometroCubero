

export function convertirFecha(fechaHoraISO: string): string {
    const fechaHora = new Date(fechaHoraISO);
    let dia: number | string = fechaHora.getDate();
    let mes: number | string = fechaHora.getMonth() + 1;
    const año = fechaHora.getFullYear();
    let horas: number | string = fechaHora.getHours();
    let minutos: number | string = fechaHora.getMinutes();
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }
    if (horas < 10) {
        horas = '0' + horas;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    const resultado = dia + '/' + mes + '/' + año + ', ' + horas + ':' + minutos;
    return resultado;
}