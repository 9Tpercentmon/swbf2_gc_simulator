	function populateSelect(){
		var selectRecent1 = document.getElementById("recent1")
		var selectRecent2 = document.getElementById("recent2")
		var selectRecent3 = document.getElementById("recent3")
		
		//clears selects
		selectRecent1.length = 0;
		selectRecent2.length = 0;
		selectRecent3.length = 0;
		
		//creates blank option
		var opt1 = document.createElement('option');
			opt1.value = "";
			opt1.innerHTML = "--Select--";
			selectRecent1.appendChild(opt1)
			
		var opt2 = document.createElement('option');
			opt2.value = "";
			opt2.innerHTML = "--Select--";
			selectRecent2.appendChild(opt2)
			
		var opt3 = document.createElement('option');
			opt3.value = "";
			opt3.innerHTML = "--Select--";
			selectRecent3.appendChild(opt3)
		
		for (var key in planetTeamJS){
			var opt1 = document.createElement('option');
			opt1.value = key;
			opt1.innerHTML = key;
			
			var opt2 = document.createElement('option');
			opt2.value = key;
			opt2.innerHTML = key;
			
			
			var opt3 = document.createElement('option');
			opt3.value = key;
			opt3.innerHTML = key;
			
			selectRecent1.appendChild(opt1)
			selectRecent2.appendChild(opt2)
			selectRecent3.appendChild(opt3)
		}
	}
	
	function populateSelectFleetBuilt(){
		var selectJustBuild = document.getElementById("justBuilt")
		selectJustBuild.length = 0;
		
		var opt = document.createElement('option');
		opt.value = "";
		opt.innerHTML = "--Select a planet--";
		selectJustBuild.appendChild(opt)
		
		for (var key in planetFleetJS){
			if(planetFleetJS[key] != null && planetTeamJS[key] == botTeam){
				var opt1 = document.createElement('option');
				opt1.value = key;
				opt1.innerHTML = key;
				selectJustBuild.appendChild(opt1)
			}
			
		}
	}
	
	function changeColor(planet,color){
		
		if(planet == "all" || planet == "reset"){
			for (var key in planetTeamJS) {
			  var planetDot = document.getElementById(key);
			  
				if(planetDot != null)
					planetDot.className = colors[planetTeamJS[key]]
	
			}
			var blackYellow = document.getElementsByClassName("dot_black_yellow") //stars filled with black wtih yellow border 
			
			while(blackYellow.length>0){
				blackYellow[0].className = colors[0]
			}
			
			return //avoid infite loop  
		}
		else if (color == 3){
			var planetDot = document.getElementById(planet);
				  
			if(planetDot != null){
					if(planetTeamJS[planet] != undefined) //if its not a star
						planetDot.className = colors[planetTeamJS[planet]+3] //change to the yellow border image
					
					else 
						planetDot.className = colors[3] //black with yellow border 
			}
			return //avoid recalling printLua again
		}
				
		
			
		
		else{
			var planetDot = document.getElementById(planet)
			if(planetDot != null){
				planetDot.className = colors[color]
					
				}

		}
		
		printLua()
		
	}
	
	
	function planetClick(planet){
		clearError()
		var curOpt = document.getElementById("curOpt"); //get the current tool being used
		console.log(curOpt)
		
			
		if (curOpt.value == "switch")
			switchPlanet(planet)
		else if(curOpt.value == "addFFleet")
			addFleet(planet,myTeam)
		else if(curOpt.value == "addEFleet")
			addFleet(planet,botTeam)
		
		console.log(planet)
		printLua()
	}
	
	function starClick(planet){
		clearError()
		var curOpt = document.getElementById("curOpt"); //get the current tool being used
		console.log(curOpt)
		
		if(curOpt.value == "addFFleet")
			addFleet(planet,myTeam)
		else if(curOpt.value == "addEFleet")
			addFleet(planet,botTeam)
		
		console.log(planet)
		printLua()
	}
	
	function switchPlanet(planet){
	
		if(portPlanet[planet] != null){ //if it's a port planet
			if(planetTeamJS[planet] != 0){ //and there is a team controlling it, change to neutral
				planetTeamJS[planet] = 0
				changeColor(planet,planetTeamJS[planet])
			}
			else{ 
				changeColor(planet,portPlanet[planet])
				planetTeamJS[planet] = portPlanet[planet] //get the port planet owner
			}
		}
		else{
				
			planetTeamJS[planet] = 3-planetTeamJS[planet] //hack to switch team
			changeColor(planet,planetTeamJS[planet])
		}
		printLua()
	}
	
	function addFleetImg(planet,team){
		var planetStyleTop = document.getElementById(planet).style.top
		var planetStyleLeft = document.getElementById(planet).style.left
			
		var fleetStyleTop = parseInt(planetStyleTop)
		var fleetStyleLeft = parseInt(planetStyleLeft)
		var colorSuffix
			if(team == myTeam)
				colorSuffix = "B"
			else
				colorSuffix = "R"
		
		var strokeHtml = `
				<img id = '${strokeName[team]}${countFleet}' 
				name='${planet}' class='${strokeName[team]}${colorSuffix} blink' 
				onClick='removeFleet(this.name)' 
				style='position:absolute;top: ${fleetStyleTop}px; left: ${fleetStyleLeft}px;'> 
				`
			
		var fleetHtml = `
				<img id = '${fleetName[team]}${countFleet}' 
				name='${planet}' class='${fleetName[team]} blink' 
				onClick='removeFleet(this.name)' 
				style='position:absolute;top: ${fleetStyleTop}px; left: ${fleetStyleLeft}px;'>
				`
		
		document.getElementById("imgs").insertAdjacentHTML("beforeend",strokeHtml)	
		document.getElementById("imgs").insertAdjacentHTML("beforeend",fleetHtml)
			
		countFleet++
	}
	
	function addFleet(planet,team,extra){
		clearError()
		extra = typeof extra !== 'undefined' ? extra : null; //define default value if no extra value is passed
		
		if (window.event.ctrlKey){
			console.log("Ctrl held!")
			team = 3 - team //change team
		}
		console.log(`addFleet running with planet = ${planet} // team = ${team}`)
		
		if (planetFleetJS[planet] != null){ //There is a fleet already there
			if(planetFleetJS[planet] == team){ //if same team, remove it
				removeFleet(planet)
			}
			else
				document.getElementById("error").innerHTML = "Can't add a fleet where there is already one! If it's an enemy fleet, please remove it first.";
		}
		else{ //if there are no fleets, build one
			console.log(`Building fleet at ${planet}`)
			planetFleetJS[planet] = team
			
			addFleetImg(planet,team)
			
			if(planetTeamJS[planet] == 3 - team){ //if its controlled by the enemy
				switchPlanet(planet)
				if(planetTeamJS[planet] != 0){ //if it's a port planet, the value is set to 0 on "switchPlanet" function and should NOT be added in recent list 
					if(document.getElementById("recentCb").checked == true){
						recent1 = document.getElementById("recent1")
						recent2 = document.getElementById("recent2")
						recent3 = document.getElementById("recent3")
						
						recentPlanetsJS[0] = planet
						recentPlanetsJS[1] = recent1.value
						recentPlanetsJS[2] = recent2.value
						
						recent1.value = recentPlanetsJS[0]
						recent2.value = recentPlanetsJS[1]
						recent3.value = recentPlanetsJS[2]
					}
				}
			}
			if(team == botTeam) 
				populateSelectFleetBuilt()
		}
		printLua()
			
		
	}
	
	
	function removeFleet(planet){
		clearError()
		delete planetFleetJS[planet]
		document.getElementsByName(planet)[1].remove();
		document.getElementsByName(planet)[0].remove();
		printLua()
		populateSelectFleetBuilt()
	}
	
	
	//currently not being used 
	//used to print which function was being used (addfleet, remove fleet, etc) and show it on the html
	function optSelected(optionButton){
		clearError()
		var curOpt = document.getElementById("curOpt");
		var curOptLabel = document.getElementById("curOptLabel");
		
		curOpt.value = optionButton
		curOptLabel.innerHTML = "<b>Selected mode: </b>"
		curOptLabel.innerHTML = curOptLabel.innerHTML + optLabels[optionButton]["label"]
		curOptLabel.innerHTML = curOptLabel.innerHTML + "<br>"+optLabels[optionButton]["desc"]
		
	}
	
	//prints all info under the map, including the percentages
	function printMapInfo(){
		var mapInfo = document.getElementById("mapInfo");
		var fleetsIngame = document.getElementById("fleetsIngame"); //special place to add the fleet images under the map
		var br = document.createElement("br");
		//Fleet info//
		var team1Fleets = ""
		var team2Fleets = ""
		var countTeam1Fleets = 0
		var countTeam2Fleets = 0
		var fleetInfoTeam1 = []
		var fleetInfoTeam2 = []
		
		var loopCountTeam1 = 0
		var loopCountTeam2 = 0
		for(var key in planetFleetJS){
			if(planetFleetJS[key] == 1){
				if(countTeam1Fleets > 0)
					team1Fleets = team1Fleets + ", " //every planet after the first one must have a comma on the left
				team1Fleets = team1Fleets + key
				countTeam1Fleets++
				fleetInfoTeam1[loopCountTeam1] = key
				loopCountTeam1++
			}
			else if(planetFleetJS[key] == 2){
				if(countTeam2Fleets > 0)
					team2Fleets = team2Fleets + ", " //every planet after the first one must have a comma on the left
				team2Fleets = team2Fleets + key
				countTeam2Fleets++
				fleetInfoTeam2[loopCountTeam2] = key
				loopCountTeam2++
			}
		}
		
		
		var myTeamFleets = countTeam1Fleets
		var botFleets = countTeam2Fleets
		var fleetInfoMyTeam
		var fleetInfoBotTeam
		if(myTeam == 1){
			myTeamFleets = countTeam1Fleets
			botFleets = countTeam2Fleets
			fleetInfoMyTeam = fleetInfoTeam1
			fleetInfoBotTeam = fleetInfoTeam2
		}
		
		else{
			var fleetTeamTemp = fleetInfoTeam1
			fleetInfoTeam1 = fleetInfoTeam2
			fleetInfoTeam2 = fleetTeamTemp
			
			myTeamFleets = countTeam2Fleets
			botFleets = countTeam1Fleets	
		}
		
		//add mini image of amount of fleets
		var fleetHtmlMyTeam = ""
		var fleetHtmlBotTeam = ""
		//var strokeHtmlBotTeam = ""
		//var strokeHtmlMyTeam = ""
		
		
		for (var i = 0; i<myTeamFleets ; i++){
			fleetHtmlMyTeam = `${fleetHtmlMyTeam} <img title='${fleetInfoTeam1[i]}' name='info_${fleetName[myTeam]}_${i}' class='${fleetName[myTeam]} smallFleet'>`				
		}
		for (var j = 0; j<botFleets ; j++){
			fleetHtmlBotTeam = `${fleetHtmlBotTeam} <img title='${fleetInfoTeam2[j]}' name='info_${fleetName[botTeam]}_${j}' class='${fleetName[botTeam]} smallFleet'>`
						
		}

		fleetsIngame.innerHTML = fleetHtmlMyTeam+fleetHtmlBotTeam	
		
		//team1Fleets = currentFactionVars.orderedTeams[0]+" fleets("+countTeam1Fleets+"): " + team1Fleets
		//team2Fleets = currentFactionVars.orderedTeams[1]+" fleets("+countTeam2Fleets+"): " + team2Fleets
		
		
		//Planets Info//
		var team1Planets = ""
		var team2Planets = ""
		var countTeam1Planets = 0
		var countTeam2Planets = 0
		var myTeamPlanets = ""
		var botPlanets = ""
		

		for(var key in planetTeamJS){
			if(planetTeamJS[key] == 1){
				if(countTeam1Planets > 0)
					team1Planets = `${team1Planets}, ` //add comma starting on the second fleet added
				var formatKey = key
				console.log("look me here:",key,planetFleetJS[key])
				if(planetFleetJS[key] != undefined)
					formatKey = `<b>${key}</b>`
				team1Planets = team1Planets + formatKey
				countTeam1Planets++
			}
			else if(planetTeamJS[key] == 2){
				if(countTeam2Planets > 0)
					team2Planets = `${team2Planets}, ` //add comma starting on the second fleet added
				var formatKey = key
				if(planetFleetJS[key] != undefined)
					formatKey = `<b>${key}</b>`
				team2Planets = team2Planets + formatKey
				countTeam2Planets++
			}
		}
				
		team1Planets = `<b>${currentFactionVars.orderedTeams[0]} planets</b>(${countTeam1Planets}): ${team1Planets}`
		team2Planets = `<b>${currentFactionVars.orderedTeams[1]} planets</b>(${countTeam2Planets}): ${team2Planets}`
		
		
		
		myTeamPlanets = myTeam == 1 ? team1Planets : team2Planets
		botPlanets = botTeam == 1 ? team1Planets : team2Planets
		
		
		//var html = team1Fleets	+ "<br>" + team1Planets + "<br><br>" + team2Fleets + "<br>" + team2Planets + "
		
		
		var methodPercent = document.querySelector('input[name="typeRng"]:checked').value
				
		console.log(
		`
			\\\\\\\\\\\\\\\\\\\\\\\\\\
			\\\\\\\\\NEW SIM\\\\
			\\\\\\\\\\\\\\\\\\\\\\\\\\
		`
		)
		
		var builtFleet = document.getElementById("justBuilt").value
		
		// Returns 'simulation':probDestSimPercent,'math':probDestMathPercent,'totalSim': totalSim, 'planetsWeight':thisVar.planetValue
		var propReturn = CalculateMoveFleet(CalculateWeights(InitVarsMove(thisVar,currentEra,planetTeamJS,planetFleetJS,recentPlanetsJS,builtFleet), botTeam), methodPercent)
		
		var percentSimHtml = ""
		var percentMathHtml = ""
		var max = {'destination': [], 'chance':0}
		//var loopCount = 0
		var fromToListSource = {}
		if(methodPercent == 'sim' || methodPercent == 'both'){
			fromToListSource = propReturn.simulation
			percentSimHtml=`<br><b>Based on ${propReturn.totalSim.toLocaleString('pt')} simulations (may vary on every update):</b>`
			for (var move in propReturn.simulation) {
				var movement=move.split("___");
				var prob = propReturn.simulation[move]
				percentSimHtml = `${percentSimHtml}<br>${movement[0]}-->${movement[1]}:&emsp;${prob.toFixed(3)}%`
				
				if(methodPercent == 'sim'){ //case 'both' is selected, uses the math method
					if(prob > max.chance){
						max.destination = [] //makes sure to empty it in case of ties
						max.destination[0] = movement[1]
						max.chance = prob
						
					}
					else if(prob == max.chance){
						max.destination[max.destination.length] = movement[1]
						max.chance = prob
					}
				}	
				
			}
			
			
		}
		if(methodPercent == 'math' || methodPercent == 'both'){
			fromToListSource = propReturn.math
			if(methodPercent == 'both') //add an extra line if already added the 'math' method
				percentMathHtml="<br>"
			//if percentMathHtml is empty just before the next line, it will have an empty string before doing printing this text. if it isn't, then it will add the <br> set above
			percentMathHtml=`
							${percentMathHtml}
							<br><b>Based on custom formula (more reliable)</b>`
			var i = 0 //to count how many interation had
			for (var move in propReturn.math) {
				var movement=move.split("___");
				var prob = propReturn.math[move]
				percentMathHtml = `
							${percentMathHtml}
							<br>${movement[0]}-->${movement[1]}:&emsp;${prob.toFixed(3)}%`
				var propRounded = Math.round(prob * 1000)/1000
				if(propRounded > max.chance){
					max.destination = [] //makes sure to empty it in case of ties
					max.destination[0] = movement[1]
					max.chance = propRounded
					
				}
				else if(propRounded == max.chance){
					max.destination[max.destination.length] = movement[1]
					max.chance = propRounded
				}
				
							  
			}
		}
		changeColor('reset') //removes all yellow-borders before starting adding again
		for(var i = 0; i < max.destination.length; i++){
			changeColor(max.destination[i],3)
		}
		
		//var html = team1Fleets	+ "<br>" + team1Planets + "<br><br>" + team2Fleets + "<br>" + team2Planets + "<br><br><b>AI Movements</b>" + percentSimHtml + percentMathHtml
		var html = `
					$(myTeamPlanets)
					<br>${botPlanets}
					<br>${percentSimHtml} ${percentMathHtml}`
		mapInfo.innerHTML = html
		
		//changes title of planets/stars to the weight when mouse hovering
		var fromTo = Array.from( Object.keys(fromToListSource)) //convert the from to keys in an array
		
		var fromPlanet = []
		var toPlanet = []
		
		for (var i = 0; i < fromTo.length; i++) {
			var split = fromTo[i].split("___"); 
			fromPlanet.push(split[0]);
			toPlanet.push(split[1]);
		}
		
		for(var planet in propReturn.planetsWeight){
			var imgPlanet = document.getElementById(planet)
			var imgFleets = document.getElementsByName(planet)[1] //index 0 is the stroke
			//var actualImgTag = imgFleets == undefined ? imgFleets : imgPlanet //if there is a fleet, use it as its always in front of the image
			
			var titleImgPlanet = planet
			var titleImgFleet = `Fleet over ${planet}`
			
			var subtitleImg = `\nPlanet Weight: ${propReturn.planetsWeight[planet]}.toFixed(2)`
			var extraTitleTo = ""
			var extraTitleFrom = ""
			
			
			if(toPlanet.includes(planet)){
				extraTitleTo = "\n" + "Movement to here: "
				for(var i = 0; i < toPlanet.length; i++){
					if(planet == toPlanet[i]){
						var prob = fromToListSource[fromPlanet[i]+"___"+toPlanet[i]].toFixed(3)
						extraTitleTo = extraTitleTo + "\n"+fromPlanet[i] + "-->"+ toPlanet[i] +": "+ prob+"%"
					}
				}
			}
			if(fromPlanet.includes(planet)){
				
				extraTitleFrom = "\n" + "Movement from here: "
				for(var i = 0; i < fromPlanet.length; i++){
					if(planet == fromPlanet[i]){
						var prob = fromToListSource[fromPlanet[i]+"___"+toPlanet[i]].toFixed(3)
						extraTitleFrom = extraTitleFrom + "\n"+fromPlanet[i] + "-->"+ toPlanet[i] +": "+ prob+"%"
					}
				}
			}
			
			imgPlanet.title = titleImgPlanet+subtitleImg+extraTitleTo+extraTitleFrom
			
			if(imgFleets != undefined)
				imgFleets.title = titleImgFleet+subtitleImg+extraTitleTo+extraTitleFrom
		}
	}
	
	function clearError(){
		document.getElementById("error").innerHTML = "";
		document.getElementById("copySucess").innerHTML = "";
	}
	
	function printLua(){
		
		var recent1 = document.getElementById("recent1")
		var recent2 = document.getElementById("recent2")
		var recent3 = document.getElementById("recent3")
					
		recentPlanetsJS[0] = recent1.value
		recentPlanetsJS[1] = recent2.value
		recentPlanetsJS[2] = recent3.value
		
		printMapInfo()
		
		var builtFleet = document.getElementById("justBuilt").value
		
		var buildFleetFormated = "" //to use in the external lua code
		
		if(builtFleet != ""){
			buildFleetFormated = "['"+builtFleet+"'] = true"
		}
		
		
		
		var codeTag = document.getElementById("luaCode")
		
		codeTag.innerHTML = "built_this_round = {"+buildFleetFormated+"}"
		codeTag.append("\nroundSettings = {planetTeam = {},planetFleet = {},recentPlanets = {}}	")
		codeTag.append("\nroundSettings.planetTeam = {")
		for(key in planetTeamJS){
			codeTag.append("\n['"+key+"'] = "+planetTeamJS[key]+",")
		}
		codeTag.append("}")
	
		codeTag.append("\n\nroundSettings.planetFleet = {")
		for(key in planetFleetJS){
			codeTag.append("\n['"+key+"'] = "+planetFleetJS[key]+",")
		}
		codeTag.append("}")
		codeTag.append("\n\nroundSettings.recentPlanets = {")
		for(var i = 0; i < recentPlanetsJS.length; i++){
			if(recentPlanetsJS[i] != '')
				codeTag.append("\n'"+recentPlanetsJS[i]+"',")
		}
		codeTag.append("}\n")
		codeTag.append("botTeam = "+botTeam+" \n")
		codeTag.append(startLua)
		if(currentEra == "cw")
			codeTag.append(cwLua)
		else
			codeTag.append(gcwLua)
		codeTag.append(generalFunctionLua)
		
		var typeRng = document.querySelector('input[name="typeRng"]:checked').value
		codeTag.append("CalculateMoveFleet(CalculateWeights(Init(this),botTeam),'"+typeRng+"')")
		
		
	}
	
	//https://www.arclab.com/en/kb/htmlcss/how-to-copy-text-from-html-element-to-clipboard.html
	function copyLuaCode()
	{
		clearError()
		printLua()
		
		var r = document.createRange();
		r.selectNode(document.getElementById("luaCode"));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(r);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		
		document.getElementById("copySucess").innerHTML = "Succesfully copied! Now paste the code at <a href='https://replit.com/languages/lua' target='_blank'> https://replit.com/languages/lua </a> to see the probabilities!"
	}
	
	
	//https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript
	var getJSON = function(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
		  var status = xhr.status;
		  if (status === 200) {
			callback(null, xhr.response);
		  } else {
			callback(status, xhr.response);
		  }
		};
		xhr.send();
	};