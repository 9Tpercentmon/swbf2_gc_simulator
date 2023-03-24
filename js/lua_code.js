//startLua, cwLua, generalFunctionLua


var startLua = 
`
REP = 1
CIS = 2
ALL = 1
IMP = 2


--------------------------------------

this = {
	planetValue = {},
	defenseValue = {},
	weightScale = {},
	turncount = 5,
	fleetscore = 15,
	enemyvaluescale = 0.5,
	threatscale = 0.5,
	aggression = 1.0
}

main_game = {
	planetDestination = {},
	planetValue = {},
	planetTeam = roundSettings.planetTeam,
	spaceValue = {},
	planetFleet = roundSettings.planetFleet,
	recentPlanets = roundSettings.recentPlanets,
	planetFullName = {}
}

main_game.spaceValue = {
	victory = 30, defeat = 10,
}

main_game.planetFullName = {
	['mus']='Mustafar',
	['fel']='Felucia',
	['cor']='Coruscant',
	['myg']='Mygeeto',
	['yav']='Yavin',
	['uta']='Utapau',
	['kas']='Kashyyyk',
	['nab']='Naboo',
	['end']='Endor',
	['hot']='Hoth',
	['tat']='Tatooine',
	['pol']='Polis Massa',
	['dag']='Dagobah',
	['geo'] = 'Geonosis',
	['kam'] = 'Kamino',

}

`


var cwLua = 
`
main_game.planetValue = {
	['cor'] = { victory = 60, defeat = 20, turn = 3 },
	['dag'] = { victory = 50, defeat = 20, turn = 3 },
	['fel'] = { victory = 50, defeat = 20, turn = 3 },
	['geo'] = { victory = 100, defeat = 35, turn = 10 },
	['kas'] = { victory = 50, defeat = 20, turn = 3 },
	['kam'] = { victory = 100, defeat = 35, turn = 10 },
	['mus'] = { victory = 60, defeat = 20, turn = 3 },
	['myg'] = { victory = 50, defeat = 20, turn = 3 },
	['nab'] = { victory = 60, defeat = 20, turn = 3 },
	['pol'] = { victory = 50, defeat = 20, turn = 3 },
	['tat'] = { victory = 50, defeat = 20, turn = 3 },
	['uta'] = { victory = 60, defeat = 20, turn = 3 },
	['yav'] = { victory = 50, defeat = 20, turn = 3 },
}

main_game.planetDestination = {
	['cor'] = { 'star20', 'myg', 'star17' },
	['dag'] = { 'star05', 'star06', 'nab' },
--	['end_star'] = { 'star20', 'star18' },
	['fel'] = { 'star13', 'yav'},
	['geo'] = { 'star07', 'tat' },
--	['hot_star'] = { 'star01', 'star02' },
	['kas'] = { 'star12', 'star13', 'star15', 'star17' },
	['kam'] = { 'star12', 'star13', 'tat' },
	['mus'] = { 'star02', 'star04', 'star05' },
	['myg'] = { 'star17', 'cor', 'star15' },
	['nab'] = { 'star07', 'star12', 'star17', 'dag' },
	['pol'] = { 'star04', 'star02' },
	['tat'] = { 'geo', 'kam' },
	['uta'] = { 'star04', 'star05', 'star06' },
	['yav'] = { 'star15', 'fel' },
--	['star01'] = { 'end_star', 'star02' },
	['star02'] = { 'mus', 'star20', 'pol' },
--	['star03'] = { 'hot_star', 'pol' },
	['star04'] = { 'mus', 'pol', 'uta' },
	['star05'] = { 'mus', 'uta', 'dag' },
	['star06'] = { 'uta', 'dag', 'star07' },
	['star07'] = { 'nab', 'geo', 'star06' },
--	['star08'] = { 'star06', 'geo' },
--	['star09'] = { 'tat', 'geo' },
--	['star10'] = { 'star12', 'geo', 'tat' },
--	['star11'] = { 'tat', 'kam' },
	['star12'] = { 'kam', 'nab', 'kas' },
	['star13'] = { 'kas', 'kam', 'fel' },
--	['star14'] = { 'fel', 'yav' },
	['star15'] = { 'kas', 'yav', 'myg' },
--	['star16'] = { 'yav', 'myg' },
	['star17'] = { 'cor', 'myg', 'kas', 'nab' },
--	['star18'] = { 'cor', 'myg' },
--	['star19'] = { 'end_star', 'star18' },
	['star20'] = { 'star02', 'cor' }
}
`

var gcwLua = 
`
main_game.planetValue = {
			['cor'] = { victory = 60, defeat = 20, turn = 3 },
			['dag'] = { victory = 60, defeat = 20, turn = 3 },
			['end'] = { victory = 100, defeat = 35, turn = 10 },
			['hot'] = { victory = 100, defeat = 35, turn = 10 },
			['fel'] = { victory = 50, defeat = 20, turn = 3 },
			['kas'] = { victory = 50, defeat = 20, turn = 3 },
			['mus'] = { victory = 60, defeat = 20, turn = 3 },
			['myg'] = { victory = 50, defeat = 20, turn = 3 },
			['nab'] = { victory = 50, defeat = 20, turn = 3 },
			['pol'] = { victory = 50, defeat = 20, turn = 3 },
			['tat'] = { victory = 50, defeat = 20, turn = 3 },
			['uta'] = { victory = 50, defeat = 20, turn = 3 },
			['yav'] = { victory = 60, defeat = 20, turn = 3 },
}


main_game.planetDestination = {
	['cor'] = { 'star20', 'star18', 'star17' },
	['dag'] = { 'star05', 'star06', 'nab' },
	['end'] = { 'star20', 'star18' },
	['fel'] = { 'star13', 'yav' },
--	['geo_star'] = { 'star07', 'star10' },
	['hot'] = { 'star02', 'star03' },
	['kas'] = { 'star12', 'star13', 'star15', 'star17' },
	['kam_star'] = { 'tat', 'star12', 'star13' },
	['mus'] = { 'star02', 'star04', 'star05' },
	['myg'] = { 'star18', 'star17', 'star15' },
	['nab'] = { 'star07', 'star12', 'star17', 'dag' },
	['pol'] = { 'star04', 'star03' },
	['tat'] = { 'star10', 'kam_star' },
	['uta'] = { 'star04', 'star05', 'star06' },
	['yav'] = { 'star15', 'fel'},
--	['star01'] = { 'hot', 'end', 'star02' },
	['star02'] = { 'hot', 'mus' },
	['star03'] = { 'hot', 'pol' },
	['star04'] = { 'mus', 'pol', 'uta' },
	['star05'] = { 'mus', 'uta', 'dag' },
	['star06'] = { 'uta', 'dag', 'star07' },
	['star07'] = { 'nab', 'star06', 'star10' },
--	['star08'] = { 'star06', 'geo_star' },
--	['star09'] = { 'tat', 'geo_star' },
	['star10'] = { 'star12', 'tat', 'star07' },
--	['star11'] = { 'tat', 'kam_star' },
	['star12'] = { 'star10', 'kam_star', 'nab', 'kas' },
	['star13'] = { 'kas', 'kam_star', 'fel' },
--	['star14'] = { 'fel', 'yav' },
	['star15'] = { 'kas', 'yav', 'myg' },
--	['star16'] = { 'yav', 'myg' },
	['star17'] = { 'cor', 'kas', 'myg', 'nab' },
	['star18'] = { 'cor', 'myg', 'end'},
--	['star19'] = { 'end', 'star18' },
	['star20'] = { 'end', 'cor' }
}
`

var generalFunctionLua = 
`
Init = function(this)
-- create planet value and weight scale tables
	this.planetValue = {}
	this.defenseValue = {}
	this.weightScale = {}
	for planet, _ in pairs(main_game.planetDestination) do
		this.planetValue[planet] = 0
		this.defenseValue[planet] = { [false] = 0, [true] = 0 }
		this.weightScale[planet] = SpreadWeightFromPlanet(planet, 1)
	end
	return this
end


CalculateWeights = function(this, botTeam)
	-- clear out planet weights
	for planet, _ in pairs(main_game.planetDestination) do
		this.planetValue[planet] = 0
		this.defenseValue[planet] = { [false] = 0, [true] = 0 }
	end

	-- for each planet...
	for planet, team in pairs(main_game.planetTeam) do
		local weight = 0
		local defense = false
		
		-- if the planet is not neutral...
		if team > 0 then
		-- use defense value if mine
		defense = team == botTeam

		-- get odds of planet victory
		-- (should calculate based on purchases)
		local planetwin = 0.5

		-- get planet value
		local value = main_game.planetValue[planet]

		-- win gets:
		-- planet victory value
		-- intrinsic value of the planet
		-- scaled value of any port
		local winvalue = value.victory + value.turn * this.turncount
		

		-- lose gets:
		-- planet defeat value
		-- negative value of my fleet
		local losevalue = value.defeat - this.fleetscore

		-- calculate conditional value
		weight = planetwin * winvalue + (1 - planetwin) * losevalue
			end
			
			-- if the planet has a fleet...
		fleet = main_game.planetFleet[planet]
		if fleet and not built_this_round[planet] then
		-- use defense value if mine
			defense = fleet == botTeam

			-- get odds of fleet victory
			-- (should calculate based on purchases)
			local fleetwin = 0.5

			-- get space value
			local value = main_game.spaceValue

			-- win gets:
			-- space victory value
			-- scaled value of enemy fleet
			-- underlying planet value
			local winvalue = value.victory + this.fleetscore * this.enemyvaluescale + weight

			-- lose gets:
			-- space defeat value
			-- negative value of my fleet
			local losevalue = value.defeat - this.fleetscore

			-- calculate conditional value
			weight = fleetwin * winvalue + (1 - fleetwin) * losevalue
		end

			-- scale weight by battle recency
			
		for i, p in ipairs(main_game.recentPlanets) do
			if p == planet then
				weight = weight * math.pow(2, i-4)-- 1/8, 1/4, 1/2
				break
			end
		end
			
			
			-- if the planet is worth anything...
		if weight > 0 then
		-- spread weight around
			for p, scale in pairs(this.weightScale[planet]) do
				this.defenseValue[p][defense] = this.defenseValue[p][defense] + weight * scale
			end
		end
	end

	-- for each fleet...
	local fleetThreat = { }

	for planet, fleet in pairs(main_game.planetFleet) do
		-- use defense value if mine
		local defense = fleet == botTeam
		
		-- calculate threat value
		-- (use the offensive value the fleet sees at that location)
		local threat = this.threatscale * this.defenseValue[planet][not defense]
		
		-- save fleet threat
		fleetThreat[planet] = { defense, threat }
	end

	-- for each fleet threat...
	for planet, values in pairs(fleetThreat) do
		local defense = values[1]
		local threat = values[2]
		
		-- spread weight around
		for p, scale in pairs(this.weightScale[planet]) do
			this.defenseValue[p][defense] = this.defenseValue[p][defense] + threat * scale
				end
	end

	-- create combined value
	for planet, value in pairs(this.defenseValue) do
		this.planetValue[planet] = value[false] * this.aggression + value[true] * (1-this.aggression)
		print('combined weight:',planet,this.planetValue[planet])
	end

	return this
end

	-- spread weight out from the specified planet	
	SpreadWeightFromPlanet = function(startplanet, startweight)
local closed = {}
local queue = {}
table.insert(queue, { startplanet, startweight })

repeat
	local next = table.remove(queue, 1)
	local planet = next[1]
	local weight = next[2]
	if not closed[planet] or weight > closed[planet] then
closed[planet] = weight
weight = weight / 2
for _, destination in ipairs(main_game.planetDestination[planet]) do
	if not closed[destination] or weight > closed[destination] then
table.insert(queue, { destination, weight })
	end
end
	end
until getTableSize(queue) == 0

return closed
	end

    function getTableSize(t)
        local count = 0
        for _, __ in pairs(t) do
            count = count + 1
        end
        return count
    end



CalculateMoveFleet = function(this,method) --method can be sim or math
	print('\\n--CalculateMoveFleet--')
	print('from','to','weight')

-- get weighted move values
	local moveWeight = {}
	local totalWeight = 0
	local decimals = 6
	for planet, team in pairs(main_game.planetFleet) do
		if team == botTeam then
			local reference = this.planetValue[planet]
			for _, destination in ipairs(main_game.planetDestination[planet]) do
				if main_game.planetFleet[destination] ~= botTeam then
					local weight = roundSO(math.pow(2, 0.2 * (this.planetValue[destination] - reference)),decimals)
					moveWeight[{planet, destination}] = weight
					print(planet, destination, weight)
					totalWeight = totalWeight + weight
				end
			end
		end
	end
	
    
	
	if method == 'sim' or method == 'both' then 
		print('\\n--Simulated Percent--')
		print('from','to','%')
		local totalSim = 10000000
		local probDest = {}
		for i = 1,totalSim do
			local randomWeight = math.random() * totalWeight
			
			for move, weight in pairs(moveWeight) do
				-- deduct the move's weight
				randomWeight = randomWeight - weight

				-- if this move is the selected one...
				if randomWeight <= 0 then
					-- get the start and next planets
					local start = move[1]
					local next = move[2]
					if probDest[start..next] then 
						probDest[start..next] = probDest[start..next]+1 
					else 
						probDest[start..next] = 1 
					end
					
					break
				end
			end
		end

		for move, weight in pairs(moveWeight) do
			print(move[1],move[2],probDest[move[1]..move[2]]/totalSim*100)
		end 
		print('Simulations ran: '..totalSim)
	end
	
	if method == 'math' or method == 'both' then 
		print('\\n--Math Percent--')
		print('from','to','%')
		local probDest = {}
		local runningSumWeight = 0 --sum of weights during the loop
		local runningSumChance = 0 --sum of the wasted chance
		for move, weight in pairs(moveWeight) do
			runningSumWeight = weight+runningSumWeight
			local chance = runningSumWeight/totalWeight - runningSumChance
			runningSumChance = runningSumChance+chance
			print(move[1],move[2],roundSO(chance*100,5))
		end
	end
	
end

--https://stackoverflow.com/questions/50079030/how-to-math-floor-to-a-decimal-in-lua
function roundSO(number, decimals)
    local power = 10^decimals
    return math.floor(number * power) / power
end

--https://www.lua.org/pil/19.3.html
--https://stackoverflow.com/questions/26160327/sorting-a-lua-table-by-key
local function pairsByKeys (t, f)
    local a = {}
    for n in pairs(t) do table.insert(a, n) end
    table.sort(a, f)
    local i = 0      -- iterator variable
    local iter = function ()   -- iterator function
        i = i + 1
        if a[i] == nil then return nil
        else return a[i], t[a[i]]
        end
    end
    return iter
end



math.randomseed(os.time())


--CalculateMoveFleet(CalculateWeights(Init(this),botTeam),'both')
`
