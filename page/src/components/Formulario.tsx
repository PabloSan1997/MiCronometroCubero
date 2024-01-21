import { UseContexto } from "../Context";
import React from "react";


export function Formulario() {
    const { iniciar } = UseContexto();
    const [login, setLogin] = React.useState<LoginInterface>({ username: '', password: '' });

    const escribirUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({ ...login, username: e.target.value });
    }
    const escribirPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({ ...login, password: e.target.value });
    }

    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        iniciar(login);
    }

    return (
        <form
            className='flex flex-col w-1/2 m-auto mt-20 bg-azul-900 p-3'
            onSubmit={subir}
        >
            <h2>Login</h2>
            <label>Username</label>
            <input
                type="text"
                placeholder="Escribir"
                value={login.username}
                onChange={escribirUsername}
            />
            <label>Password</label>
            <input
                type="text"
                placeholder="Escribir"
                value={login.password}
                onChange={escribirPassword}
            />
            <button
                type="submit"
            >Entrar</button>
        </form>
    );
}