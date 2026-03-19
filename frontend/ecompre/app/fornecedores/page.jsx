import { getSuppliers } from "@/lib/api"
import Suppliers from "../components/SuppliersList"

export default async function PageSuppliers(){
    try{
    const suppliers = await getSuppliers()

    return (
        <>
        <a href="/produtos"><img src="/logo_ecompre.png" alt="" className="w-50 h-40"/></a>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {suppliers.map(supp => (
                <Suppliers key={supp.id} suppliers={supp}/>
            ))}
            
        </div>
        </>
    )

}catch(erro){
    console.error(`Erro ao mostrar os parceiros: ${erro.message}`)
    return <div>
        Erro ao retornar os produto
    </div>
}
}