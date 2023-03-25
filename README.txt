GC probability simulator (by Montuano / 9Tpercentmon)

This is as close as a friendly UI I can make with my terrible front end / design skills hahah

To use the sim, simple open the file main.html and follow the instructions there


#####################
##    FEATURES     ##
#####################

- Shows the probability below the map
- Shows the probability and extra info when mousovering the planet/star
- Indicates with a yellow border the most probable target
- Quick add/remove fleets from any planet/star
- Easy swap between factions
- Autogenerates the lua code to run the simulation or the math to get the probabilities
- Quick copy the text to run the code on an external source
- Set up the gamefield as you want
- Github automatic version check
- Avaiable for all factions!



#####################
##    CHANGELOG    ##
#####################

v1.6.1 	- Made a better support for version check
		- Fixed a few spelling errors
		- Fixed fleets above the map showing the wrong planet name when mouseovering it
	 

v1.6 - Fixed highlight planet being target not being fully cleared on ties
     - Fixed highlight planet changing enemies planet color to blue when being target (visual bug only)
     - Changed the layout of the select-option and input-radio
     - Added version check with github
 

v1.5 - Made several changes on the layout to make it more appealing. Must be using the internet to get these changes
     - Fixed bug where the name of the faction under the map wouldn't correctly change
     - Changed the default method to 'math' instead of 'both'
     - Added lots of 'title' attributes to the elements so it can show a help text when mouseovering

v1.4 - Added Golden border on the planet/star most likely to be attacked 
     - Now when you mouseover a planet/star, it shows its name and other things:
	-- Weight in the current round (it is how 'strong' a planet is given the current condition. It scales down with distance based on the fleet, so distant planets may see some lower number than they actually have. It's the same number as the combined weight you see in the log
	-- If there is fleet, shows the probability of all destinations from there
	-- If there is a fleet connected to it, shows the probability of it being targeted
     - Added images of fleets below the map indicating how many fleets are there and their factions
	-- Mouseovering it shows which planet they are

v1.3 - It now also shows the percentages in the page

v1.2.1 - Hotfix for a minor bug when removing a fleet due to the new stroke feature

v1.2 - UI tweeks to minimize chance of error when setting things
	- Fleets now have a stroke with the same color as their team (blue = you // red = enemy)
        - Added a blink effect on the fleets
        - Under the map now there are infos about the current game
     - Added Alliance and Empire

v1.1 - Fixed minor bugs
	- Recent planets not separated by comma on the lua code 
	- Fleet being considerated while weighting the world on the same round it was bought
	- Port planet being considered as a recent planet
     - Tweeks on the UI, getting it a bit cleaner.
     - CIS added
     - Created layouts to make it easier to add the next 2 campaigns
     - Added a select box for indicating the planet with an enemy fleet just built
      
 
v1.0 - Created