'use client' // indica que faz parte do Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteProduct, putProduct } from "@/lib/api";
import addCart from '@/app/components/AddToCart'

export default function Products({ firstProduct}){
     const [product, setProduct] = useState(firstProduct)
     const router = useRouter();
     const [edit, setEdit] = useState(false)
     const [editError,setEditError] = useState(null)
    const [prod,setProd] = useState({'nome':"",'preco':'','img':""}) // dicionário que armazena cada produto
    const[cart,setCart] = useState([]) // O array do carrinho



    if(!product){
        return <div className="text-white">Não foi possível carregar os dados!!!</div>
    }

const handleChange = (e) => {
        const {name,value} = e.target;

        setProduct(prevData => ({
            ...prevData,
            [name]:value
        }))
}

const handleEdit = async(e) =>{
    if(e) e.preventDefault();
    try{   
        await putProduct(product.id, product);
        setEdit(false);
        router.refresh();
        setEditError(false);
        console.log("Produto atualizado com sucesso✅")

    }catch(err){
        console.error('Erro ao salvar',err)
        console.log("Erro durante a atualização❌")
        setEditError(true)
        
    }
}

const handleDelete = async() => {
    try{
        await deleteProduct(product.id);
        setEdit(true)
        router.refresh()
        setProduct(prevProduct =>{
            prevProduct.filter(product => product.id !=id)
        })
        alert(`Produto ${product.nome} deletado com sucesso✅`)

    }catch(error){
        console.error(`Erro durante a deleção: ${error}`)
        alert(error)
        setEditError(true)
    }
}

const addCart = () =>{
    try{
       const cart = JSON.parse(localStorage.getItem("produto")||'[]')
       cart.push(prod)
        localStorage.setItem("produto",JSON.stringify(cart))
        window.alert('Produto adicionado com sucesso!')
        
    }catch(err){
        console.error("Erro:",err)
        setCart({})
    }
}



if(product.length === 0){
    return <p className='bg-red-400'>Nenhum produto está cadastrado ainda!!!!</p>

}

if(edit){
   return (
    <form className="bg-blue-400 p-4" key={product.id} id="form" onSubmit={handleEdit}>
        <label>Produto:</label>
        <input type="text" name='nome' id='nome' onChange={handleChange} value={product.nome || product.produto}/><br />
        <label>Preço:</label>
        <input type="number" name="preco" id="preco" value={product.preco} onChange={handleChange}/><br />
        <label>Descrição:</label>
        <input type="text" name='descricao' id='descricao' value={product.descricao || product.descrição} onChange={handleChange}/><br />
        <label>Setor:</label>
        <input type="text"  name='setor' id='setor' value={product.setor || ''} onChange={handleChange}/><br />
        <label>Imagem:</label>
        <input type="text"  name="img" id="img" value={product.img} onChange={handleChange}/><br />
        <button type='submit' className="bg-green-500 p-2">Salvar✅</button>
        <button onClick={handleDelete} className="bg-red-800 p-2">Deletar❌</button>
    </form>
   ) 
}

return ( 
    <>
    <div className="bg-blue-500 shadow-lg rounded-4xl flex-row max-w-100%">
        
        <p name='produto'  className="text-2xl p-4 font-black w-100% md:w-150px">{product.nome || product.produto || ''}</p><br />
        <label>Preço: </label>
        <p name="preco" className="text-center sm:text-left"> {product.preço || product.preco || ''}</p><br />
        <label>Descrição:</label>
        <p name="descricao" >{product.descricao || product.descrição || ''}</p><br />
        <label>Setor:</label>
        <p id="setor" name="setor" >{product.setor}</p>
        <img src={product.img} alt="img_produto" name="img" className="p-7 rounded-lg"/><br />
        <div className="flex items-start gap-2 flex-wrap w-full p-2">
            <button onClick={() => setEdit(true)} className="bg-green-500 w-25 h-14 rounded-lg hover:border-green-800" id="update">
                Atualizar💾
            </button>
      
        <button onClick={(prod) => addCart(prod.id)} className="bg-blue-300  rounded-lg w-20 h-14 hover:border-solid hover:border-gray-700" id='cart'>
          Ad.Carrinho🛒
         </button>
        </div>
    </div>
    </>
)

}