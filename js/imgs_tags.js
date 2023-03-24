var cwImage = `
	<img class='main' src='imgs/republic_gc2.png' title='Mouse over the planets/star/fleets to get extra info\nThe yellow border indicates their most probable destination'/>
	<img id = 'pol' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 185px;left: 60px;' onClick='planetClick(this.id)'>
	<img id = 'mus' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 158px;left: 208px;' onClick='planetClick(this.id)'>
	<img id = 'cor' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 72px;left: 325px;' onClick='planetClick(this.id)'>
	<img id = 'myg' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 52px;left: 438px;' onClick='planetClick(this.id)'>
	<img id = 'yav' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 68px;left: 580px;' onClick='planetClick(this.id)'>
	<img id = 'geo' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 211px;left: 514px;' onClick='planetClick(this.id)'>
	<img id = 'kas' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 105px;left: 555px;' onClick='planetClick(this.id)'>
	<img id = 'nab' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 167px;left: 428px;' onClick='planetClick(this.id)'>
	<img id = 'kam' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 153px;left: 640px;' onClick='planetClick(this.id)'>
	<img id = 'uta' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 213px;left: 193px;' onClick='planetClick(this.id)'>
	<img id = 'tat' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 200px;left: 641px;' onClick='planetClick(this.id)'>
	<img id = 'dag' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 182px;left: 326px;' onClick='planetClick(this.id)'>
	<img id = 'fel' class='dot_black' src='imgs/dot.png' style='position:absolute;top: 95px;left: 634px;' onClick='planetClick(this.id)'>
	
	<img id = 'star02' class='dot_black' style='position:absolute;top: 124px;left: 124px;' onClick='starClick(this.id)'>
	<img id = 'star04' class='dot_black' style='position:absolute;top: 175px;left: 144px;' onClick='starClick(this.id)'>
	<img id = 'star05' class='dot_black' style='position:absolute;top: 183px;left: 249px;' onClick='starClick(this.id)'>
	<img id = 'star06' class='dot_black' style='position:absolute;top: 244px;left: 348px;' onClick='starClick(this.id)'>
	<img id = 'star07' class='dot_black' style='position:absolute;top: 203px;left: 428px;' onClick='starClick(this.id)'>
	<img id = 'star12' class='dot_black' style='position:absolute;top: 148px;left: 542px;' onClick='starClick(this.id)'>
	<img id = 'star13' class='dot_black' style='position:absolute;top: 116px;left: 635px;' onClick='starClick(this.id)'>
	<img id = 'star15' class='dot_black' style='position:absolute;top: 82px;left: 527px;' onClick='starClick(this.id)'>
	<img id = 'star17' class='dot_black' style='position:absolute;top: 106px;left: 443px;' onClick='starClick(this.id)'>
	<img id = 'star20' class='dot_black' style='position:absolute;top: 81px;left: 247px;' onClick='starClick(this.id)'>`
	
var	gcwImgs = `
	<img class="main" id ="main" src="imgs/empire_gc3.png" title='Mouse over the planets/star/fleets to get extra info\nThe yellow border indicates their most probable destination'/>
	<img id = "pol" class="dot_black" style="position:absolute;top: 195px;left: 105px;" onClick="planetClick(this.id)">
	<img id = "mus" class="dot_black" style="position:absolute;top: 175px;left: 230px;" onClick="planetClick(this.id)">
	<img id = "cor" class="dot_black" style="position:absolute;top: 100px;left: 335px;" onClick="planetClick(this.id)">
	<img id = "myg" class="dot_black" style="position:absolute;top: 85px;left: 436px;" onClick="planetClick(this.id)">
	<img id = "yav" class="dot_black" style="position:absolute;top: 95px;left: 555px;" onClick="planetClick(this.id)">
	<img id = "end" class="dot_black"style="position:absolute;top: 83px;left: 230px;" onClick="planetClick(this.id)">
	<img id = "kas" class="dot_black" style="position:absolute;top: 130px;left: 536px;" onClick="planetClick(this.id)">
	<img id = "nab" class="dot_black" style="position:absolute;top: 180px;left: 424px;" onClick="planetClick(this.id)">
	<img id = "hot" class="dot_black"style="position:absolute;top: 160px;left: 68px;" onClick="planetClick(this.id)">
	<img id = "uta" class="dot_black" style="position:absolute;top: 217px;left: 222px;" onClick="planetClick(this.id)">
	<img id = "tat" class="dot_black" style="position:absolute;top: 210px;left: 608px;" onClick="planetClick(this.id)">
	<img id = "dag" class="dot_black" style="position:absolute;top: 197px;left: 338px;" onClick="planetClick(this.id)">
	<img id = "fel" class="dot_black" style="position:absolute;top: 120px;left: 604px;" onClick="planetClick(this.id)">
	
	<img id = "star02" class="dot_black"  style="position:absolute;top: 146px;left: 164px;" onClick="starClick(this.id)">
	<img id = "star03" class="dot_black"  style="position:absolute;top: 190px;left: 55px;" onClick="starClick(this.id)">
	<img id = "star04" class="dot_black"  style="position:absolute;top: 185px;left: 180px;" onClick="starClick(this.id)">
	<img id = "star05" class="dot_black"  style="position:absolute;left: 272px;top: 195px;" onClick="starClick(this.id)">
	<img id = "star06" class="dot_black"  style="position:absolute;top: 245px;left: 360px;" onClick="starClick(this.id)">
	<img id = "star07" class="dot_black"  style="position:absolute;top: 212px;left: 424px;" onClick="starClick(this.id)">
	<img id = "star10" class="dot_black"  style="position:absolute;top: 205px;left: 527px;" onClick="starClick(this.id)">
	<img id = "star12" class="dot_black"  style="position:absolute;top: 169px;left: 520px;" onClick="starClick(this.id)">
	<img id = "star13" class="dot_black"  style="position:absolute;top: 140px;left: 596px;" onClick="starClick(this.id)">
	<img id = "star15" class="dot_black"  style="position:absolute;top: 110px;left: 508px;" onClick="starClick(this.id)">
	<img id = "star17" class="dot_black"  style="position:absolute;top: 125px;left: 436px;" onClick="starClick(this.id)">
	<img id = "star18" class="dot_black"  style="position:absolute;top: 80px;left: 370px;" onClick="starClick(this.id)">
	<img id = "star20" class="dot_black"  style="position:absolute;top: 110px;left: 275px;" onClick="starClick(this.id)">
	<img id = "kam_star" class="dot_black"  style="position:absolute;top: 162px;left: 605px;" onClick="starClick(this.id)">
	
	`
	


	