import Navegador from '../components/Navegador'

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
      <Navegador texto="JSX" destino="/jsx" cor="crimson" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="orange" />
      <Navegador texto="Navegação #02" destino="/cliente/sp/123" cor="blue" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="green" />
      <Navegador texto="Integração com API #01" destino="/integracao_1" cor="brown" />
      <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a" />
      <Navegador texto="Conteúdo Dinâmico" destino="/dinamico" cor="#99054a" />
    </div>
  )
}