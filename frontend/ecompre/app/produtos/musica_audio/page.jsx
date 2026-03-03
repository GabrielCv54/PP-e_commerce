import Link from "next/link";
import Products from "../ProductList";
import { getProducts } from "@/lib/api";

export default async function audio(){
    const products = await getProducts()

    return (
        <>
        <Link href='/produtos'><img src="/logo_ecompre.png" alt="logo" className="h-25 w-50"/></Link>
        <article className="grid grid-cols-1 md:grid-cols-4 gap-12 ">
            {products.map( prod=>{
           if( prod.setor === 'aúdio e música'){
            return <Products key={prod.id} firstProduct={prod}/>
        }
            return null
        })}
        </article>
        </>
    )
}