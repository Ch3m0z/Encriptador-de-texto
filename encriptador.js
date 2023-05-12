function encriptar(){
	let text = input.value
	let conversionA= text.replaceAll('a', '1')
	let conversionE= conversionA.replaceAll('e', '2')
	let conversionI= conversionE.replaceAll('i', '3')
	let conversionO= conversionI.replaceAll('o', '4')
	let conversionU= conversionO.replaceAll('u', '5')
	let conversion1= conversionU.replaceAll('1', 'ai')
	let conversion2= conversion1.replaceAll('2', 'enter')
	let conversion3= conversion2.replaceAll('3', 'imes')
	let conversion4= conversion3.replaceAll('4', 'ober')
	let conversion5= conversion4.replaceAll('5', 'ufat')	
	console.log("Valor de entrada: "+text+". Valor de salida: "+conversion5)
}

function desencriptar(){
	let text = input.value
	let conversionA= text.replaceAll('ai', '1')
	let conversionE= conversionA.replaceAll('enter', '2')
	let conversionI= conversionE.replaceAll('imes', '3')
	let conversionO= conversionI.replaceAll('ober', '4')
	let conversionU= conversionO.replaceAll('ufat', '5')
	let conversion1= conversionU.replaceAll('1', 'a')
	let conversion2= conversion1.replaceAll('2', 'e')
	let conversion3= conversion2.replaceAll('3', 'i')
	let conversion4= conversion3.replaceAll('4', 'o')
	let conversion5= conversion4.replaceAll('5', 'u')
	console.log("Valor de entrada: "+text+". Valor de salida: "+conversion5)
}

let input=document.getElementById("cuadroInTxt")

let botonEncriptar = document.getElementById("btnEncriptar")
botonEncriptar.addEventListener("click", encriptar)

let botonDesencriptar = document.getElementById("btnDesencriptar")
botonDesencriptar.addEventListener("click", desencriptar)