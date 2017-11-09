// Siin on Javascript (ja see ei ole sama mis Java)

/*
	Selle koodi eesmärk on kuvada kasutaja kirjutatud
	nimi, kui "submit" nupule vajutatakse.
*/

// Esiteks selekteerime selle <form> elemendi HTMLi seest.
var formElement = document.querySelector('form')

// Siis ütleme talle mis juhtub, kui seda vajutatakse.
formElement.onsubmit = function(event) { // Function on lihtsalt koodi grupp

	// "event" on muutuja, mida "onsubmit" kaasa annab. Tal on kasulik käsk "preventDefault()", mis takistab refreshi.
	event.preventDefault()

	// Selekteerime õige inputi kasutades CSS selectorit.
	var usernameInputElement = document.querySelector("input[name=username]")

	// Kuvame selle konsooli (F12 või ctrl+shift+j)
	console.log("TERE, " + usernameInputElement.value) // value küsib välja inputi väärtuse.
}
