'use client'
import { useState } from "react";

export default function Cadastro({ clientRegister }){
    
    const [cli,setCli] = useState({"nome":"","email":"","data_nasc":"","cep":"","user":"","senha":""})

    function handleChange(e){

        const {name,value} = e.target;

        setCli(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()

        clientRegister(cli)

        setCli({"nome":"","email":"","data_nasc":"","cep":"","user":"","senha":""})
    }
    

    return(
        <>
        <form className="bg-blue-400 m-30 p-30 rounded-lg w-150 max-w-full- text-3xl" onSubmit={handleSubmit} method="post" id="register">
            <label>Nome Completo:</label>
            <input type="text" id="nome" name="nome" onChange={handleChange} value={cli.nome}/><br />
            <label>Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={cli.email}/><br />
            <label>Data de nascimento: </label>
            <input type="date" name="data_nasc" id="data_nasc" onChange={handleChange} value={cli.data_nasc}/><br />
            <label>CEP:</label>
            <input type="number" name="cep" id="cep" onChange={handleChange} value={cli.cep}/><br />
            <label>Nome de usuário:</label>
            <input type="text" id="user" name="user" onChange={handleChange} value={cli.user}/><br />
            <label>Senha: </label>
            <input type="password" id="senha" name="senha" onChange={handleChange} value={cli.senha}/><br />
            <button type="submit" className="bg-green-500 m-15 hover:border-solid hover:border-green-950">Concluir Cadastro</button>
        </form>
        </>
    )
}