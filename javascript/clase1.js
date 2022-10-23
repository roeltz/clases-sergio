function Persona(nombre, edad, superpoder) {
	this.nombre = nombre;
	this.edad = edad;
	this.superpoder = superpoder;
}

Persona.prototype.CONSTANTE = 123;

Persona.prototype.saludar = function() {
	console.log("Hola, soy " + this.nombre);
};

function Empleado(salario, cargo) {
	this.salario = salario;
	this.cargo = cargo;
}

function Persona2(nombre, edad, superpoder) {
	return {
		nombre,
		edad,
		superpoder
	};
}

class Persona3 {

	constructor(nombre, edad, superpoder) {
		this.nombre = nombre;
		this.edad = edad;
		this.superpoder = superpoder;
	}

	saludar() {
		console.log("Hola, soy " + this.nombre);
	}
}

let sergio = new Persona("Sergio", 39, "programar");
let sergio2 = new Persona2("Sergio", 39, "programar");
let sergio3 = new Persona3("Sergio", 39, "programar");

//Empleado.apply(sergio, [1000000, "web ui"]);

console.log(sergio);
console.log(sergio2);
console.log(sergio3);

sergio.saludar();
sergio3.saludar();