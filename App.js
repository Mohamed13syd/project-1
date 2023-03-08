import './App.css';
import React from 'react';
import ThemeContext from './theme';
import Square from './square';
import NextPlayer from './next-player';
import ChangeTheme from './change-theme';
import finish from './finish';



function App() {
	const [themeState,setThemeState] = React.useState('light')
	
	const [gameState, setGameState] = React.useState({
			gameHistory : [{squares: Array(9).fill(null)}],
			xIsNext: true,
			stepNumber: 0
		})
	
return (
	<ThemeContext.Provider value={{themeState,setThemeState}}>
    <div className="container">
			<NextPlayer a={gameState.xIsNext} b={gameState} />
			<ChangeTheme/> 
			<div className="squares-container">{		 
		
				gameState.gameHistory[gameState.gameHistory.length-1].squares.map((part,y)=>{
				function forClick(test){
					const someOf = gameState.gameHistory.slice(0,gameState.stepNumber + 1)
					const someOne = finish(gameState.gameHistory[gameState.gameHistory.length-1].squares) 
					const newSquares = someOf[gameState.stepNumber].squares.slice()
					if(!newSquares[test] && !someOne ) {				
						newSquares[test]= gameState.xIsNext ? 'x' : 'o' 
							setGameState(
								{
									gameHistory: gameState.gameHistory.concat([{squares: newSquares}]),
									xIsNext: !gameState.xIsNext,
									stepNumber: gameState.stepNumber + 1
								}
						)		
								}
					}
					return	<Square key={y} inside={part} whenClick={ forClick } id={y}/>
					})}
			</div>
				{gameState.gameHistory.map((some,number)=>{
						function change(){
							const someOf = gameState.gameHistory.slice(0,number + 1)
							const newSquares = someOf[number].squares.slice()
									setGameState(
										{
											gameHistory: someOf,
											xIsNext:  number  % 2 === 0,
											stepNumber: number
										})}
						return (
						<button key={number} onClick={()=>change()}>{number}</button>
						)
					})} 
			</div>
			</ThemeContext.Provider>
  );
}

export default App;
