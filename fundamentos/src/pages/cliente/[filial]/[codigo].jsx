import Layout from "../../../components/Layout"
import { useRouter } from 'next/router'
// import router from "next/router"
import { useEffect } from "react"

export default function ClientePorCodigo() {
    const router = useRouter()

    // useEffect(() => {
    //     console.log(router.query)
    //     console.log(router.query.codigo)
    // }, [])

    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}