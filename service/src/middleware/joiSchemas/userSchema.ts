import joi from 'joi';


const username = joi.string().min(1).max(100).required();
const nickname = joi.string().min(1).max(100).required();
const password = joi.string().min(1).max(5000).required();

export const addUserJoi = joi.object({username, nickname, password});
export const loginJoi = joi.object({username, password});
