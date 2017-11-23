console.log("Start")

var canvas = document.querySelector("canvas")
var context = canvas.getContext("2d")

// "Objekt" ehk andmestruktuur, kus hoiame praegust kasti asukohta ja suurust
var box = {
	x: 70,
	y: 30,
	width: 150,
	height: 70,
	vectorX: 0,
	vectorY: 0
}

// Kui ükskõik mis nuppu vajutatakse...
document.onkeydown = function(event) {
	if (event.key === "ArrowRight") {
		box.x = box.x + 10 // Lisa x asukohale 5 pikslit juurde
	} else if (event.key === "ArrowLeft") {
		box.x = box.x - 10
	} else if (event.key === "ArrowUp") {
		box.vectorY -= 25
	}
	console.log("Box.x", box.x) // Kuva praegune x pos
}

setInterval(function(){
	console.log("aeg")
	context.clearRect(0, 0, 800, 600) // Kustuta ekraan
	if (box.y < canvas.height - box.height) {
		box.vectorY += 1
	}
	if (box.y + box.height > canvas.height - box.vectorY) {
		box.y = canvas.height - box.height
		box.vectorY = box.vectorY * -0.8 // Põrkamine
	}
	box.y += box.vectorY
	context.fillRect(box.x, box.y, box.width, box.height) // joonista kast
}, 1000 / 60)
