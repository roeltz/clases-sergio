var estoEsUnaGlobal = 1;

function fn() {
	var estoEsUnaLocal = 2;
}

var v3 = 5;

// closure (cierre)

function fn1() {
	var v1 = "hola";
	var v2 = 12;

	console.log("v3", v3);

	const fn2 = () => console.log(v1);

	var v3 = 5;

	return fn2;
}

let fn22 = fn1();

fn22();


// Así es como se oculta información
function generarClaveEncriptacion() {
	// ésta variable sólo existe al ejeuctar la función del return
	let sal = "1234567892345678";

	return function(textoAEncriptar) {
		return sal + textoAEncriptar + Math.random();
	};
}

let generador = generarClaveEncriptacion();

let textoEncriptado = generador("hola mundo");

"Esto es una cadena";

function PersonaConSSN(nombre, edad, ssn) {
	this.nombre = nombre;
	this.edad = edad;

	this.generarDocumento = function() {
		console.log("Voy a hacer una peticion con el SSN", ssn);
	};
}

PersonaConSSN.prototype.saludar = function() {
	console.log("Hola, soy " + this.nombre);
};

let sergio = new PersonaConSSN("Sergio", 38, "1234567890");

const PI = 3.1415;
const LONGITUD_MAXIMA_NOMBRE = 30;

sergio.saludar();
sergio.generarDocumento();
console.log(sergio.ssn);


if (23456) {
	let i = 1;
}

{
	let a = 12;
	console.log(a);
}

// Va a fallar
console.log(a);