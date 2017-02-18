var updateLoop = window.setInterval(main_loop, 1000);
//var userInput = window.setInterval(user_input, 100)
var isHoveredOver = false
var theTime = {hour: 0, minute: 0, second: 0}
var backgroundHex = {red: "", green: "", blue: ""}
var charTransform = 0	

var displayElement = document.querySelector(".displayTime")
displayElement.addEventListener("mouseover", mouseOverTime)
displayElement.addEventListener("mouseout", mouseOutTime)

function mouseOverTime() {

	isHoveredOver = true

}

function mouseOutTime() {

	var timeElement =  document.querySelector(".displayTime")
	timeElement.innerHTML = theTime.hour + ":" + theTime.minute + ":" + theTime.second
	isHoveredOver = false

}

function main_loop(){

	define_time()

	var bgColor = define_bg_color()

	display_time()

	club_goer_anim()

}

function define_time(){

	var dateAndTime = new Date();
    var timeArray = dateAndTime.toLocaleTimeString().split(/[ :]+/)
    theTime.hour = timeArray[0]
    theTime.minute = timeArray[1]
    theTime.second = timeArray[2]
      
}

function define_bg_color(){
	
	var newRandomValue = Math.floor((Math.random() * 127) + 1) + Math.floor((Math.random() * 127) + 1)
	var bgColor = {r: Number(theTime.second*4) , g: "00", b: newRandomValue}
	var bgColorHex = "#" + (bgColor.r).toString(16) + '00' + (bgColor.b).toString(16)
	backgroundHex.red = (bgColor.r).toString(16)
	backgroundHex.green = '00'
	backgroundHex.blue = (bgColor.b).toString(16)
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
}

club_goer()

function club_goer(){
	
	var charContainer = document.querySelector(".character")
	var character = document.createElement("img")
	character.src = "images/tmaster.gif"
	character.id = "characterImg"
	charContainer.appendChild(character)

}

function club_goer_anim(){

	var charContainer = document.querySelector(".character")
	var charContainerStyle = window.getComputedStyle(charContainer)

	if (theTime.second % 2 === 0){

		charContainer.style.transition = "none"
		charContainer.style.right = "-6%"
		charContainer.style.opacity = 1
		charContainer.style.width = "3vw"
		charContainer.style.width = "5vh"
		
	}

	if (theTime.second % 2 != 0){

		charContainer.style.transition = "linear 1s"
		charContainer.style.opacity = 1
		charContainer.style.right = "30%"
		charContainer.style.width = "1.8vw"
		charContainer.style.width = "3vh"
		
	}
}

