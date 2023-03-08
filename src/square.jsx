import ThemeContext from './theme';
import React from 'react'
import useContext from 'react'
export default function Square(props) {
	
	
	const jump = React.useContext(ThemeContext)
	const jumpState = jump.themeState
	
	return <div className={`square ${jumpState}`}
				onClick={ ()=> props.whenClick(props.id)}	
	>	
			{props.inside}
			</div>

}
