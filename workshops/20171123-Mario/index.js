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

var world = [
	{
		x: 0,
		y: canvas.height - 50,
		width: canvas.width,
		height: 100,
		color: '#df5b1e'
	},
	{
		x: 300,
		y: 400,
		width: 300,
		height: 150,
		color: '#df5b1e'
	},
	{
		x: 300,
		y: 100,
		width: 300,
		height: 50,
		color: '#df5b1e'
	}
]

var keysDown = {
	up: false,
	down: false,
	left: false,
	right: false
}

// Kui ükskõik mis nuppu vajutatakse...
document.onkeydown = function(event) {
	if (event.key === "ArrowRight")
		keysDown.right = true
	else if (event.key === "ArrowLeft")
		keysDown.left = true
	else if (event.key === "ArrowUp" && keysDown.up !== 'blocked')
		keysDown.up = true
}
document.onkeyup = function(event) {
	if (event.key === "ArrowRight")
		keysDown.right = false
	else if (event.key === "ArrowLeft")
		keysDown.left = false
	else if (event.key === "ArrowUp")
		keysDown.up = false
}
function keysReact() {
	var accelX = 0.3
	var maxSpeed = 7
	
	if (keysDown.up === true && box.vectorY === 0) {
		keysDown.up = 'blocked'
		box.vectorY -= 25
	}

	if (keysDown.left)
		box.vectorX -= accelX
	else if (keysDown.right)
		box.vectorX += accelX
	else
		box.vectorX *= 0.7

	if (box.vectorX > maxSpeed)
		box.vectorX = maxSpeed
	if (box.vectorX < -maxSpeed)
		box.vectorX = -maxSpeed
}

function drawCharacter() {

	// Apply vectors
	box.vectorY += 1 // gravity
	box.y += box.vectorY
	box.x += box.vectorX

	// World collision
	world.forEach(item => {
		var collision = isColliding(item, box)
		if (collision === 'top') {
			box.vectorY = 0
			box.y = item.y + item.height
		} else if (collision === 'bottom') {
			box.vectorY = 0
			box.y = item.y - box.height
		} else if (collision === 'left') {
			box.vectorX = 0
			box.x = item.x + item.width
		} else if (collision === 'right') {
			box.vectorX = 0
			box.x = item.x - box.width
		} 

	})

	// Draw
	context.fillStyle = "black"
	context.fillRect(box.x, box.y, box.width, box.height) // joonista kast
}

function isColliding(a, b) {
	var collision = false

	if (a.x < b.x + b.width  && a.x + a.width  > b.x &&
		a.y < b.y + b.height && a.y + a.height > b.y)
		collision = true
	else
		return false

	var collWeights = [
		Math.abs((a.y + a.height) - b.y),
		Math.abs(a.x - (b.x + b.width)),
		Math.abs(a.y - (b.y + b.height)),
		Math.abs((a.x + a.width) - b.x),
	]

	var smallest = Number.MAX_SAFE_INTEGER
	for (var i = 0; i < collWeights.length; i++) {
		if (collWeights[i] < smallest)
			smallest = collWeights[i]
	}
	var index = collWeights.indexOf(smallest)

	switch(index) {
		case 0:
			return 'top'
		case 1:
			return 'right'
		case 2:
			return 'bottom'
		case 3:
			return 'left'
	}
}

function drawWorld() {
	world.forEach(item => {
		context.fillStyle = item.color;
		context.fillRect(item.x, item.y, item.width, item.height)
	})
}

setInterval(function(){
	context.clearRect(0, 0, 800, 600) // Kustuta ekraan
	keysReact()
	drawWorld()
	drawCharacter()
}, 1000 / 60)
