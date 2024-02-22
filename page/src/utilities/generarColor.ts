

export function generarColorRGB():string {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);

    return "rgb(" + rojo + ", " + verde + ", " + azul + ")";
}