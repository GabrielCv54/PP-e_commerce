'use client'
import { useRouter } from "next/navigation";
import { postProducts } from "@/lib/api";
import { useParams } from "next/navigation";
import CreateNew from "@/app/components/ProductForm";

export default function newProductPage(){
    const router = useRouter()

    async function handleCreate(newProduct){
        try{
            const response = await postProducts(newProduct)
            if (response.status === 200 || response.status === 201){
                router.push('/produtos')
                console.log('Produto criado')
            }

        }catch(erro){
            console.error(`Erro durante a criação do produto! ${erro}`)
            window.alert(`Não foi possivel criar o produto ${useParams.nome}`)
        }
    }

    return (
    <>
    <a href="/produtos"><img src="/logo_ecompre.png" alt="" className="w-35 h-30"/></a>
        <div className='bg-gray-400 p-4'>
            <h2 className="text-2xl font-mono bg-black">Cadastrar novo produto</h2>
            <CreateNew ProductCreated={handleCreate} />
        </div>

        <div className="grid-cols-1 md:flex md:flex-wrap">
            <img src="/shoper-pPbz6dFruuo-unsplash.jpg" alt="ecommerce" />
            <img src="/carrinho_caixa.jpg" alt="caixas_carrinho" />
            <img src="/login_image.jpg" alt="login_image" />
        </div>
   </>
    )
}