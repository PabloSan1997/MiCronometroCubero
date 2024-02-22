
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { tiposCubos } from '../utilities/tipos';
import { convertirFecha } from '../utilities/convertirFecha';
import { generarColorRGB } from '../utilities/generarColor';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function Graficos({ resultados }: { resultados: GraficaResultado[] }) {
    const datos = tiposCubos.map(t => {
        const data = resultados.filter(p => p.tipo === t).map(d => d.avo5 / 1000);
        const fecha = resultados.filter(p => p.tipo === t).map(d => convertirFecha(d.fecha));
        return { data, fecha };
    });
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Media Avg [tiempo (s)]',
            },
        },
    };
    const datas = datos.map((d, i) => {
        const color = generarColorRGB();
        const data = {
            labels: d.fecha,
            datasets: [
                {
                    label: tiposCubos[i],
                    data: d.data,
                    backgroundColor: color,
                    borderColor:color
                    
                },
            ],
        };
        return { data, id: tiposCubos[i] };
    })

    return (
        <div className='grid w-[95%] m-auto grid-cols-2 gap-6 mb-5 bg-black'>
             {datas.map(p => (
                <div key={p.id} className= 'h-[50vh]'>
                    <Line options={options} data={p.data} className='h-full w-full'/>
                </div>
            ))}
        </div>
    );
}