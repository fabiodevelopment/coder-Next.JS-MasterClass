import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})
    
    async function obterCliente() {
        const resp = await fetch(`http://wsl.localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
        
        // fetch(`http://wsl.localhost:3000/api/clientes/${codigo}`)
        // .then(resp => resp.json())
        // .then(dados => setCliente(dados))
    }

        // const [cliente, setCliente] = useState({})

    // EXEMPLO SEM PRECISAR CLICAR NO BTN
    // async function obterCliente() {
    //     const resp = await fetch('http://wsl.localhost:3000/api/clientes/123')
    //     const dados = await resp.json()
    //     setCliente(dados)
    // }
    
    // useEffect(() => {
    //     obterCliente()
    // }, [])


    return (
        <Layout titulo="Integração com API $01">
            <div>
                <input type="number" value={codigo} 
                onChange={e => setCodigo(e.target.value)} />
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}