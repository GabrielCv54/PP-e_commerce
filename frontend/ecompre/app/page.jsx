import Link from "next/link"

export default function Home(){

    return (
        <div className="items-center m-60">
        <h1 className="text-8xl font-bold">Ecompre</h1>
        <p className="items-center">Venha conhecer mais do nosso grande ecossistema do e-commerce</p><br />
        <Link href="/produtos" className="bg-blue-400 hover:bg-blue-700 p-4 flex items-center w-60 rounded-lg border-2 border-black">Conheça nosso site!</Link>
        <div>
            
        </div>
        </div>
    )
}