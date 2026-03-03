import Link from "next/link";
import Products from "../ProductList";
import { getProducts } from "@/lib/api";

export default async function Books(){
    const products = await getProducts()


    return (
        <>
        <Link href="/produtos"><img src="/logo_ecompre.png" alt="" /></Link>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map(prod => {
            if(prod.setor === 'livro'){
                return <Products key={prod.id} firstProduct={prod}/>
            }

            return null
        })}    
        </article>        
        </>
    )

}