'use client'
import { useState } from "react" 

export default function About(){
    return (
        <>
        <header>
            <a href="/produtos"><img src="/logo_ecompre.png" alt="" className="w-20 h-20 center md:w-40 md:h-30"/></a>
            <h1 className="font-semibold text-7xl text-center">Sobre nós</h1>
        </header>
        <main>
        <h2 className="text-5xl">Nossa Historia</h2>
        <p>Em 2007, quando o nosso atual CEO, John Edgar, vivia em Chicago como estudante de Tecnologia e Investimentos, </p>
        </main>
        </>
    )
}