import Avatar from "../Components/Avatar"
import Habilidade from "../Components/Habilidade"
import Infojogador from "../Components/InfoJogador"



const CardJogador =  ({avatar,habilidades,nome,posicao}) => { 
    return(
        
        <div className="cardJogador">
            <Avatar avatar={avatar} />
            <Infojogador nome={nome} posicao={posicao}/>
            <Habilidade habilidades={habilidades}/>
        </div>
    )
}

export default CardJogador;