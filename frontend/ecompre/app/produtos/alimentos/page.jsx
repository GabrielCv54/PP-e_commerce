import { getProducts } from "@/lib/api"
import Products from "../ProductList"
import Link from "next/link"

export default async function Foods(){
    const products = await getProducts()

    return(
        <>
        <Link href='/produtos'><img src="/logo_ecompre.png" alt="logo"  className="h-25 w-50"/></Link>
        <article className="grid grid-cols-1 flex-wrap gap-12 md:grid-cols-3 " id='foods'>
        {products.map(prod => {
            if(prod.setor === "alimentos"){
                return <Products key={prod.id} firstProduct={prod} className="h-160"/>
             }
                return null
 
        })}
    </article>   
        
     </> 
     )
}
