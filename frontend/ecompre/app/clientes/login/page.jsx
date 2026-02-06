'use client'
import { useRouter } from "next/navigation";
import Login from "@/app/components/ClientLogin";
import { loginClients } from "@/lib/api";

export default function Sign(){
    const router =  useRouter();

    async function handleLogin(client){
        try{
            const login =  await loginClients(client);
            console.log(`Resposta: ${login}`)

            if(login.status == 200){
                window.alert("Direcionando para a página principal!!🛒");

                localStorage.setItem("nome de usuário",client.user);
                router.push('/produtos');
       }

    }catch(err){
         window.alert('Usuário ou senha inválidos')
        console.error(`Erro durante o login: ${err.message}`)
       }
    }
    return (
        <>
        <a href="/produtos"><img src="/logo_ecompre.png" alt="logo" className="h-40 w-30"/></a>
        <div className=""> 
            <Login clientLogged={handleLogin}/>
        </div>
        </>
    )
}