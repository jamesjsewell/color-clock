var updateLoop = window.setInterval(main_loop, 1000);
var userInput = window.setInterval(user_input, 100)
var isHoveredOver = false
var theTime = {hour: 0, minute: 0, second: 0}
var backgroundHex = {red: "", green: "", blue: ""}
var charTransform = 0


function user_input(){
	
	var displayElement = document.querySelector(".displayTime")
	
	if(displayElement){

		displayElement.addEventListener("mouseover", mouseOverTime)
		displayElement.addEventListener("mouseout", mouseOutTime)
	}

	function mouseOverTime() {
		isHoveredOver = true
	}

	function mouseOutTime() {
		isHoveredOver = false
	}

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
	console.log(isHoveredOver)
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

	var character = document.querySelector("#characterImg")
	var charecterStyle = window.getComputedStyle(character)
	var charContainer = document.querySelector(".character")
	var charContainerStyle = window.getComputedStyle(charContainer)
	
	charTransform = charTransform + 1
	console.log(charTransform)
	charContainer.style.right = theTime.second*5+'px'

	if (theTime.second > 3){

		character.style.opacity = 1
		
	}

	if (theTime.second > 42){
		
		charContainer.style.right = "30%"
	}

	if (theTime.second > 43){

		character.style.opacity = 0
		character.style.right = "10%"

	}
}

