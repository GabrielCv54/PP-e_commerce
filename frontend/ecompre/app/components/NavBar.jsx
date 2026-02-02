'use client'
import Link from 'next/link'
import { useState,useEffect } from "react"

export default function NavBar(){
    const [clientName, setClientName] = useState("login")

    useEffect(() => {
        const name = localStorage.getItem('nome de usuário');
        
        if(name){
            setClientName(name)
        }
    },[])

    function handleLogout(){
         localStorage.removeItem('nome de usuário')
         alert(` -- Encerrando sessão --`)
         setClientName("login")
        }

    return (
        <>
        <Link href="/carrinho">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
       </Link>
       <div className="right-0 static "><a href="/clientes/login" id="login" className="font-extralight text-cyan-200">{clientName =="login"? "Faça seu login": ` ${clientName}`} </a><br />{clientName !="login" &&<button onClick={handleLogout} className="bg-red-500 p-3 ml-227 rounde-lg font-bold" id="logout"> Sair</button> 
       } 
       </div></>
    )
}