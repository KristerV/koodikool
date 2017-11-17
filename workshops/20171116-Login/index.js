var dbUser = "mamangus"
var dbPass = "MinuRaskeParool"

document.querySelector("#minuvorm").onsubmit = function(event) {
	event.preventDefault()
	var nimi = document.querySelector('input[name=username]').value
	var pass = document.querySelector('input[name=password]').value
	console.log(nimi, pass)

	if (dbUser === nimi && dbPass === pass) {
		location.href = "sees.html"
	} else {
		console.log("Vale Parool, aff..")
	}
}
