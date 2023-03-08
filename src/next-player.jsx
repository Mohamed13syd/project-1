import finish from'./finish'

export default function NextPlayer(props){
	const z = finish(props.b.gameHistory[props.b.gameHistory.length-1].squares) 

	return z ? <p> player { z } takes a gold medal </p> : <p>player {props.a ? 'x' : 'o'}</p>


}
