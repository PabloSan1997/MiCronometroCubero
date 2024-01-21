import { UseContexto } from "../Context";
import React from "react";


export function Formulario() {
    const { iniciar, formMessage } = UseContexto();
    const [login, setLogin] = React.useState<LoginInterface>({ username: '', password: '' });
    const [errorLogin, setErrorLogin] = React.useState({ username: false, password: false });

    const escribirUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({ ...login, username: e.target.value });
    }
    const escribirPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({ ...login, password: e.target.value });
    }

    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!!login.password && !!login.username) {
            setErrorLogin({ username: false, password: false });
            iniciar(login);
        } else {
            setErrorLogin({
                username: !login.username,
                password: !login.password
            });
        }
    }

    return (
        <form
            className='flex flex-col w-1/2 m-auto mt-20 bg-azul-900 p-3 rounded-lg px-5'
            onSubmit={subir}
        >
            <h2
                className='text-azul-50 text-4xl font-bold mb-4'
            >Login</h2>
            <label
                className="text-azul-50 mb-1 text-2xl"
            >Username</label>
            {errorLogin.username && (
                <p
                    className="mb-1 text-red-200"
                >Escriba su usuario</p>
            )}
            <input
                type="text"
                className="mb-5 p-1 outline-none rounded-md text-xl"
                placeholder="Escribir"
                value={login.username}
                onChange={escribirUsername}
            />
            <label
                className="text-azul-50 mb-1 text-2xl"
            >Password</label>
            {errorLogin.password && (
                <p
                    className="mb-2 text-red-200"
                >Escriba su contraseña</p>
            )}
            <input
                type="password"
                className="p-1 outline-none rounded-md text-xl"
                placeholder="Escribir"
                value={login.password}
                onChange={escribirPassword}
            />
            <button
                type="submit"
                className=
                "mt-8 border-2 border-azul-950 bg-azul-200 w-fit m-auto py-1 px-4 rounded-lg text-2xl hover:text-azul-50 hover:bg-azul-950"
            >Entrar</button>
            {formMessage && (
                <p className="text-red-200 text-xl">{formMessage}</p>
            )}
        </form>
    );
}