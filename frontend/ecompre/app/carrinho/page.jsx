import Cart from '../components/AddToCart'
import Link from 'next/link'

export default async function CartPage(){
    try{
       // const cartProducts = localStorage.getItem('produtos' || '[]')

    return (
    <>
        <Link href="/produtos"><img src="/logo_ecompre.png" alt="" className='w-45 h-40'/></Link>
        
        <Cart />
    </>
    )
}catch(err){
    return (
        <>
        <Link href='/produtos'><img src="/logo_ecompre.png" alt="logo" className='w-45 h-40' /></Link>
        <p className='font-extrabold text-red-700'>❌❌❌Erro durante o carregamento do carrinho!! ❌❌❌</p>
        </>
    )
}
}