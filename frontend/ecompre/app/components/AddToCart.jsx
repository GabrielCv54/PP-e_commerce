'use client'
import { useEffect, useState } from "react"
import { getProductId } from "@/lib/api"
import { useRouter } from "next/navigation"

export default function Cart({productsAdded}){
    const [product,setProduct] = useState({'nome':"",'preco':'','img':""}) // dicionário que armazena cada produto
    const [isFinish,setIsFinish] = useState(false)
    const router = useRouter()
    const[cart,setCart] = useState([]) // O array do carrinho

    function handleChange(e){
        const {name,value} = e.target;

        setProduct(prev =>({
            ...prev,
            [name]: value
        }))

    }

    {  /*const handleProductsAdd = async() => { 
       const response =  await getProductId(product.id)
    }*/}

    function handleFinishBuy(){
       setIsFinish(true)
       window.alert("Compra indo para o pagamento")
       router.push('/produtos')

    }

    function handleDeleteProdCart(){
       // para retirar o produto do carrinho

    }

    
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('produto') || '[]')
    setCart(cartItems)
  },[])

    return(
        <>
         <table className="bg-cyan-300">
            <tbody>
                <tr className="space-x-6" key={product.id}>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Imagem do produto</th>
                </tr>
             { cart.length >= 0 ?
             cart.map((item) => (
        
                <tr key={item.id}>
                    <td>{item.nome}</td>
                    <td>{item.preco}</td>
                    <td><img src={item.img} alt="img"></img></td>
                </tr> ))
                :
               
                <tr className="flex self-center">
                    <td>Nenhum produto selecionado ainda!</td>
                </tr>
              
              
                }

         
         </tbody>
         
         </table>

    
           {isFinish ? (
            <form className="bg-white text-gray-700">
                <label>Valor do produto</label><br />
                <label>Qual forma de pagamento</label><br />
                <select name="" id="">
                    <option value="Cartão">Cartão(crédito/débito)</option>
                    <option value="Pix">Pix</option>
                    <option value="Cheque">Cheque</option>
                </select>

                <button className="">Finalizar</button>
            </form>
        ) : (
             <button className="bg-blue-500 p-3 hover:border-solid hover:border-blue-950" onClick={handleFinishBuy}>Concluir compra</button>
        )}       
         </>
    )
}
