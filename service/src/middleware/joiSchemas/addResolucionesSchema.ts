import joi from 'joi';


const algoritmo = joi.string().min(1).max(70);
const tiempo = joi.number().min(1).required();
const tipo = joi.string().min(1).max(5);
const resolucion = joi.array().items(joi.object({algoritmo, tiempo, tipo}));
const id_prom = joi.string().uuid().required();


export const addResolucionJoi = joi.object({resolucion});
export const idPromJoi = joi.object({id_prom});
