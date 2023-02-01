import { useEffect, useState } from "react"
import Layout from "src/components/Layout"

export async function getStaticProps() {
    
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random()*10 + 1)}`)
    const clientes = await resp.json()
    
    return {
        props: {
            clientes,
        }
    }
}

export default function Dinamico({ clientes }) {
    
    return (
        <Layout titulo="Conteúdo Dinâmico">
            <div>
                <p>Dev: {clientes.title}</p>
            </div>
        </Layout>
    )
}