import { getProducts } from "@/lib/api";
import Link from "next/link";
import Products from "../ProductList";

export default async function Mode(){
    const products = await getProducts()

    return (
        <>
        <Link href="/produtos"><img src="/logo_ecompre.png" alt="logo" className="h-25 w-50"/></Link>
        <article className="grid grid-cols-1 flex-wrap gap-12 md:grid-cols-4">
        {products.map(prod => {
           if( prod.setor === 'moda') {
            return <Products firstProduct={prod} key={prod.id}/>
           }
            return null
        })}</article>
        </>
    )

}