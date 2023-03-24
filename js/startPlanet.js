//Don't touch the following 4 lines
var REP = 1
var CIS = 2
var ALL = 1
var IMP = 2

//Republic can start in one of these: "cor", "kam", "nab"
//CIS can start in one of these: "geo", "uta", "mus"
//Alliance can start in one of these: "hot", "yav", "dag"
//Empire can start in one of these: "end", "cor", "mus"
//However you can pick the planet you want, as long as you know their 3 digits name

//Only switch the planet name below. Don't change anything else



function getStartPlanet(faction){
	switch (faction) {
		//For the CIS campaign
		case 'cis': return({"cor": REP,"mus": CIS})	
		
		//For the Republic campaign
		case 'rep': return({"cor": REP,"mus": CIS})	
		
		//For the Alliance campaign
		case 'all': return({"yav": ALL,"cor": IMP}) 
		
		//For the Empire campaign
		case 'imp': return({"yav": ALL,"mus": IMP}) 
	  
	default: {}
    
	}
}
