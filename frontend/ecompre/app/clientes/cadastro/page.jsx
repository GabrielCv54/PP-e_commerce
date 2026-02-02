'use client'
import { useRouter } from "next/navigation";
import Cadastro from "@/app/components/ClientCadastro";
import { registerClients } from "@/lib/api";

export default function Register(){
    const router = useRouter();

    async function handleCreate(newClient){
        try{
        const response = await registerClients(newClient)
        if(response.status == 201 || response.status == 200){
            router.push('/clientes/login')

        }
    
    }catch(erro){
        console.error(`Erro no cadastro: ${erro}`)
    }
}

    return (
        <>
        <a href="/produtos"><img src="/logo_ecompre.png" alt="logo" className="w-50 h-50 border-solid border-black" /></a>
        <Cadastro clientRegister={handleCreate}/>
        </>
    )
}