interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void

}

export default function Botao(props: BotaoProps) {
    const cor = props.cor === 'green' ? 'bg-green-500' : props.cor === 'blue' ? 'bg-blue-500' : 'bg-gray-500'
    return (
        <button onClick={props.onClick} className={`
            ${cor}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}