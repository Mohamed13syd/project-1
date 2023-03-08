export default	function finish(content){
			const numsLines = [
				[0,1,2],
				[3,4,5],
				[6,7,8],
				[0,3,6],
				[1,4,7],
				[2,5,8],
				[0,4,8],
				[2,4,6]
			
			]
			for(let z = 0; z < numsLines.length; z++){
				const [a,b,c] = numsLines[z]
				
				if(content[a] && content[a]===content[b] && content[a]===content[c]){
					return content[a]
				}
			}		
			return null
	}
