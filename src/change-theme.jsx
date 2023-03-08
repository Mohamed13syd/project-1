import React from 'react';
import ThemeContext from './theme';
import useContext from 'react'

export default function ChangeTheme(){
		const jump = React.useContext(ThemeContext)
	return <button className="change-theme" onClick={()=> jump.setThemeState(jump.themeState ==="light" ? "dark" : "light" )}>change theme</button>
	
}
