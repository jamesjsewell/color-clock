var updateLoop = window.setInterval(main_loop, 1000);
var userInput = window.setInterval(user_input, 100)
var isHoveredOver = false
var theTime = {hour: 0, minute: 0, second: 0}
var backgroundHex = {red: "", green: "", blue: ""}


function user_input(){
	
	var displayElement = document.querySelector(".displayTime")
	
	if(displayElement){

		displayElement.addEventListener("mouseover", mouseOverTime)
		displayElement.addEventListener("mouseout", mouseOutTime)
	}

}

function main_loop(){

	define_time()

	var bgColor = define_bg_color()

	display_time()

}

function define_time(){

	var dateAndTime = new Date();
    var timeArray = dateAndTime.toLocaleTimeString().split(/[ :]+/)
    theTime.hour = timeArray[0]
    theTime.minute = timeArray[1]
    theTime.second = timeArray[2]
    
    //console.log(timeArray)
      
}

function define_bg_color(){
	
	var newRandomValue = Math.floor((Math.random() * 127) + 1) + Math.floor((Math.random() * 127) + 1)
	var bgColor = {r: Number(theTime.second*4) , g: "00", b: newRandomValue}
	var bgColorHex = "#" + (bgColor.r).toString(16) + '00' + (bgColor.b).toString(16)
	//console.log(bgColorHex)
	backgroundHex.red = bgColorHex[1]+bgColorHex[2]
	backgroundHex.green = bgColorHex[3]+bgColorHex[4]
	backgroundHex.blue = bgColorHex[5]+bgColorHex[6]
	//console.log(backgroundHex)
	var page = document.getElementById("scene")
	page.style.background = bgColorHex

	return bgColorHex

}

function display_time(){
	if (isHoveredOver === false){
		var timeElement =  document.querySelector(".displayTime")
		timeElement.innerHTML = theTime.hour + ":" + theTime.minute + ":" + theTime.second
	}
	else{
		document.querySelector(".displayTime").innerHTML = backgroundHex.red + ":" + backgroundHex.green + ":" + backgroundHex.blue
	}
	console.log(isHoveredOver)
}



//var timeElout = document.querySelector(".displayTime").addEventListener("mouseout", mouseOutTime)

function mouseOverTime() {
	isHoveredOver = true
    //document.querySelector(".displayTime").innerHTML = backgroundHex.red + ":" + backgroundHex.green + ":" + backgroundHex.blue
}

function mouseOutTime() {
	isHoveredOver = false
    //document.querySelector(".displayTime").innerHTML = theTime.hour + ":" + theTime.minute + ":" + theTime.second
}

