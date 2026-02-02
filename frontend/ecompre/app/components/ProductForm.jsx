'use client'
import { useState } from "react";

export default function CreateNew({ProductCreated}){

const [data,setData] = useState({"nome":"","preco":"",'descricao':'','setor':'',"img":""})

function handleChange(e){
    const {name,value} = e.target;

    setData(prevData =>({
        ...prevData,
        [name]:value
    }))

}

function handleSubmit(e){
        e.preventDefault();

        ProductCreated(data)

        setData({'nome':'','preco':'','descricao':'','setor':'','img':''})

}
    return (
        <>
        <form onSubmit={handleSubmit} className="bg-blue-600 text-2xl font-extralight align-items-center" method="post">
            <label>Produto: </label>
            <input className="border-solid border-gray-700" type="text" id='nome' name='nome' onChange={handleChange}/><br />
            <label>Preço:</label>
            <input type="number"  id='preco' name='preco' onChange={handleChange}/><br />
            <label>Descrição: </label>
            <input type="text" id='descricao' name='descricao' onChange={handleChange}/><br />
            <label>Setor: </label>
            <input type="text"  name='setor' onChange={handleChange}/><br />
            <label>Imagem: </label>
            <input type="text" id='img' name='img' onChange={handleChange}/><br />
            <button type='submit' className="bg-green-600 p-3 text-shadow-neutral-950 hover:border-emerald-900 hover:border-solid">Cadastrar✅</button>
            </form>
        </>
    )

}