
import './App.css'
import CardJogador from './views/CardJogador'
import avatar1 from './images/avatar1.jpg'
import avatar2 from './images/avatar2.jpg'
import avatar3 from './images/avatar3.jpg'



function App() {
 
  return (
    <div className='app'>
    
        <CardJogador nome='Lionel Messi' habilidades="drible, controle de bola, velocidade e finalização" posicao="Atacante" avatar={avatar1}/>
        <CardJogador nome='Yuri Alberto' habilidades="fintar e driblar" posicao="Centroavante" avatar={avatar2}/>
        <CardJogador nome='Cristiano Ronaldo' habilidades="Drible, dominio de bola, finalização" posicao="Ponta Esquerda" avatar={avatar3}/>

    </div>
  )
}

export default App;
