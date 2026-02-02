'use client'
import { useState } from "react"
import Link from "next/link"

export default function Login({ clientLogged }){
    const [client,setClient] = useState({"user":"","senha":""}) 

    function handleChange(e){
        const {name,value} = e.target

        setClient(prevData => ({
            ...prevData,
            [name]:value

        }))

    }

    function handleLoginRegister(e){
        e.preventDefault()

        clientLogged(client)
        
        //loginP(client.user)
        
        setClient({"user":"","senha":""})
    }

    
    return (
        <>
        <div className="">
           <form className="bg-gray-600 m-40 h-100  text-center" method="post" onSubmit={handleLoginRegister}>
                
                <h2 className="text-5xl font-bold text-center">Faça seu Login🛒</h2><br /><br />
                <label className="">Nome de usuário :</label><br />
                <input className="border-black border-solid border-3 p-1" type="text" name="user" id="user" onChange={handleChange} value={client.user}/><br />
                <label>Senha: </label><br />
                <input className="border-black border-solid border-3 p-1" type="password" name="senha" id="senha" onChange={handleChange} value={client.senha}/><br /><br />
                <button type="submit" className="bg-blue-600 w-50 p-4 rounded-lg hover:border-blue-300 hover:border-3 center" >Entrar</button><br /><br />
                Não tem conta?<Link href="/clientes/cadastro" className="bg-blue-600 rounded-lg w-25  hover:border-3 hover:border-blue-300">Cadastre-se</Link>
              </form>  
        </div>
        </>
    )
}