import { myRutes } from "../Rutas";



export const urlStorage = {
    gerUrl:()=>{
        if(!localStorage.secion){
            localStorage.secion = myRutes.timer
        }
        return localStorage.secion
    },
    setUrl(data:string){
        localStorage.secion = data
    }
}