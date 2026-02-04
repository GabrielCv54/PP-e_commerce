import { getProducts, putProduct, deleteProduct, postProducts, getProductId } from "@/lib/api";
import Products from "./ProductList";
import Login from "../components/ClientLogin";
import Cadastro from "../components/ClientCadastro";
import NavBar from "../components/NavBar";

export default async function Main(){
    try{
    const products = await getProducts()

async function handleCreate(data){
    try{
        const response = await postProducts()
    }catch(error){

    }
    } 


    return (
    <>
  
    <header>
    <div className="static left-0 md:justify-items-left">
        <a href="/produtos"><img src="/logo_ecompre.png" alt="logo" className="w-20 h-20 center md:w-40 md:h-30"/></a>
    </div>
    <NavBar />
            <nav className="font-mono flex space-x-3 border-solid border-2 border-b-blue-300">
                <a href="/sobre">Sobre</a>
                <a href="/contato">Contato</a>
                <a href="/parceiros">Parceiros</a>
            </nav>
    
    </header>
    <br /><br /><br />
    <main>
        <h1 className="font-extrabold text-5xl">Ecompre🛒, o e-commerce diferenciado no mercado brasileiro!!</h1>
         <h2 className="font-extrabold text-3xl">------ Conheça alguns de nossos produtos ------</h2>
        <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-4 md:justify-items-normal">
    
        {products.map(prod =>(
            <Products key={prod.id} firstProduct={prod} />
            
            )
            
        )
        
            }
            
            </div> <br /><br /><br /><br /><br />
            <article  className="bg-blue-800 md:max-w-full">
            <h3 className="font-bold text-4xl text-center">Categorias</h3>
            <div className="relative w-full justify-center md:flex gap-1  md:justify-items-center ">
    
                <a href="#"><img src="/categoria_eletronicos.webp" alt="eletronicos" id="categories" /></a>
                <a href="#"><img src="/categoria_musica_audio.webp" alt="musica_audio" id="categories"/></a>
                <a href="#"><img src="/receitas-de-uma-panela-so.jpg" alt="comida" id="categories"/></a>
                <a href="#"><img src="/categoria-livros.jpg" alt="livros" id="categories"/></a>
                <a href="#"><img src="/categoria_moda.webp" alt="moda" id="categories"/></a>
                <a href="#"><img src="/categoria_toys.jpg" alt="brinquedos" id="categories"/></a>
            </div>
            </article><br /><br />


            <div className="grid-cols-1 space-y-6 md:flex md:space-x-28 flex-wrap sm:items-center">
                <div className=' bg-black w-80 p-5'>
                     <h3 className="text-2xl font-bold">Em destaque em Moda</h3>
                    <article  id="cath" className=" gap-4">
                      <img src="/destaque_moda_listrada.jpg" alt="camisa_listrada" />
                      <img src="/destaque_moda_amarela.webp" alt="camisa_amarela" />
                      <img src="/destaque_moda_agasalho.jpg" alt="adidas" />
                    </article><br />
                </div>
                 <div className=" bg-black w-100 p-5" >
                    <h3 className="text-2xl font-bold">Em destaque em Alimentos</h3>
                    <article className="flex-wrap  gap-5" id="cath">
                        <img src="/destaque_alimentos_sucrilhos.png" alt="" />
                        <img src="/destaque_alimentos_coca.png" alt="" />
                        <img src="/destaque_alimentos_pringles.png" alt="" />
                    </article>
                </div>
                <div className=' bg-black w-100 p-5'>
                     <h3 className="text-2xl font-bold">Em destaque em Tecnologia</h3>
                    <article  id="cath" className=" gap-4">
                      <img src="/ps5.jpg" alt="ps5" />
                      <img src="/alexa.webp" alt="alexa" />
                      <img src="/pc_gamer_pichau.jpg" alt="pc" />
                    </article><br />
                </div>
                <div className="bg-black w-100 p-5">
                    <h3 className="text-2xl font-bold">Em destaque em Brinquedos</h3>
                    <article id='cath' className="gap-4">   
                        <img src="/liga_da_justiça.jpg" alt="liga_justica" />
                        <img src="/cubo_magico.webp" alt="cubo_magico" />
                        <img src="/nerf_36_dardos.jpg" alt="nerf" />
                    </article>
                </div>
            </div>
    </main><br />
    <footer className="bg-gray-700 max-w-12/12"><br /><br /><br />
    <a href="/sobre">Conheça-nos melhor</a>
    </footer>
    
   </> 
   );
}catch(err){
    console.error(`Erro ao carregar os produtos : ${err}`)
    return <div>
        Erro ao carregar produtos : {err} 
    </div>
    
}
}


