import { getProduct } from "@/lib/api";
import Products from "../ProductList";
import CreateNew from "@/app/components/ProductForm";

async function getProductData(nome){

    try{
        const response = await getProduct(nome)
        return response.data

    }catch(err){
        console.error(err)
        return null
    }
}

export default async function ProductPage( {params} ){
    const {nome} = await params;
    const product = await getProductData(nome);
    
    if(!product || product.Erro){
        return <p className="bg-red-500 text-white">O produto não foi encontrado</p>
       
    }

    return (
        <div className="bg-white rounded-3xl font-mono">
            <h2 className="text-2xl font-bold text-gray-400">Produto: {product.nome}</h2>
            

          <Products firstProduct={product}/>
        </div>
    )
} 
