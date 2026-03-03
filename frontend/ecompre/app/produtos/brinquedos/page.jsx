import Link from "next/link";
import Products from "../ProductList";
import { getProducts } from "@/lib/api";

export default async function Toys(){
    const products = await getProducts()

    return (
       
        <div>
             <Link href="/produtos"><img src="/logo_ecompre.png" alt="logo" className="h-50 w-45"/></Link>
            <article className="grid grid-cols-1  md:grid-cols-4 md:w-full gap-12 ">
            {products
            .filter(prod => prod.setor === 'brinquedo')
            .map(prod => <Products firstProduct={prod} key={prod.id}/>)}
            </article>
        </div>
    )

}