//global variables
var updateLoop = window.setInterval(main_loop, 1000);
var isHoveredOver = false
var theTime = {hour: 0, minute: 0, second: 0}
var backgroundHex = {red: "", green: "", blue: ""}
var bgColorHex = ""	
var charSelector = 1

//listens for mouse over the time display element
var displayElement = document.querySelector(".displayTime")
displayElement.addEventListener("mouseover", mouseOverClock)
displayElement.addEventListener("mouseout", mouseOutClock)

function mouseOverClock() {

	isHoveredOver = true
	update_clock_text()

	}

function mouseOutClock() {

	isHoveredOver = false
	update_clock_text()

	}

//updates the time displayed on the clock, background color, character animations every second
function main_loop(){

	define_time()

	define_bg_color()

	update_clock_text()

	character_anim()

	}

//calculates and stores the current time
function define_time(){

	var dateAndTime = new Date();
    var timeArray = dateAndTime.toLocaleTimeString().split(/[ :]+/)
    theTime.hour = timeArray[0]
    theTime.minute = timeArray[1]
    theTime.second = timeArray[2]
      
	}

//upates the text on the clock display
function update_clock_text(){

	if (isHoveredOver === false){

		var timeElement =  document.querySelector(".displayTime")
		timeElement.innerHTML = theTime.hour + ":" + theTime.minute + ":" + theTime.second
	}

	else{

		document.querySelector(".displayTime").innerHTML = backgroundHex.red + ":" + backgroundHex.green + ":" + backgroundHex.blue
	}
	}

//generates a new background color every second
function define_bg_color(){
	
	//generate color
	var newRandomValue = Math.floor((Math.random() * 127) + 1) + Math.floor((Math.random() * 127) + 1)
	var bgColor = {r: newRandomValue, g: Number(theTime.second)*2, b: Math.floor((Math.random() * 255) + 1)}
	
	//assign color to r g b
	var red = (bgColor.r).toString(16)
	var green = (bgColor.g).toString(16) 
	var blue = (bgColor.b).toString(16) 

	//update global variables
	bgColorHex = "#" + red + green + blue
	backgroundHex.red = red
	backgroundHex.green = green
	backgroundHex.blue = blue

	//update page color to new color
	set_bg_color()

	}

//applies the new background color every second
function set_bg_color(){

	var page = document.getElementById("scene")
	page.style.background = bgColorHex
	page.style.transition = ".2s linear"

	}

//creates a character 
character_html()
function character_html(){	
	
	var charContainer = document.querySelector(".character")
	var character = document.createElement("img")
	character.id = "characterImg"
	charContainer.appendChild(character)

	}

//updates and animates the character every second
function character_anim(){

	//gathers the character dom elements
	var character = document.getElementById("characterImg")
	var charContainer = document.querySelector(".character")
	var charContainerStyle = window.getComputedStyle(charContainer)
	var url = "images/characters/"
	var characters = [url+"tmaster.gif", url+"happyGirl.gif", url+"dude.gif",url+"wolf.gif",url+"bulbasaur.gif", url+"dog.gif",url+"turtle.gif",url+"dove.gif",url+"masterChief.gif",url+"brian.gif"]

	//creates a toggle to switch out characters and move them towards the door 
	if (theTime.second % 2 === 0){

		if (charSelector === characters.length-1){
			charSelector = 0
		}
		else{
			charSelector = charSelector + 1
		}

		charContainer.style.transition = "none"
		character.src = characters[charSelector]
		charContainer.style.right = "-6%"
		
	}

	if (theTime.second % 2 != 0){

		charContainer.style.transition = "linear 1s"
		charContainer.style.right = "28%"
		
	}
	
	}

