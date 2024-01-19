

export function calcularPromedio(datos: AddPromRes): AddPromedio {
	const { resolucion } = datos;
	const numeros = resolucion.map(r => r.tiempo);
	if (numeros.length === 5) {
		const ordenar = numeros.sort((a, b) => a - b);
		const clonar = [...ordenar];
		const media = Number((sumar(ordenar) / ordenar.length).toFixed(2));
		const mejor = clonar.shift() as number;
		const peor = clonar.pop() as number;
		const avo5 = Number((sumar(clonar) / clonar.length).toFixed(2));
		return { avo5, media, mejor, peor };
	}
	return {avo5:0, media:0, mejor:0, peor:0};
}

function sumar(data: number[]): number {
	let res: number = 0;
	for (let i = 0; i < data.length; i++) {
		res += data[i];
	}
	return res;
}