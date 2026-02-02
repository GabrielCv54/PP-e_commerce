
export default function Contact(){

    return (
        <>
        <a href="/produtos"><img src="/logo_ecompre.png" alt="logo" className="h-30 w-40"/></a>
        <div className="m-20 grid  gap-9 font-bold md:grid-cols-3 border-6 border-gray-700 p-8" id="contacts">
            <article>
                <h2 className="text-4xl">Email</h2>
                <p>contatoEcompre@gmail.com</p>
            </article>
            <article>
                <h2 className="text-4xl">Telefone</h2>
                <p> (11)96334-2110 </p>
            </article>
            <article>
                <h2 className="text-4xl">Perguntas</h2>
                <label>Seu nome:</label>
                <input type="text" /><br />
                <label>Seu email: </label>
                <input type="email" /><br />

                <label>Digite aqui sua mensagem</label>
                <input type="text"></input>
            </article>
        </div>
        </>
    )
}