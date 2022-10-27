let objeto = {
	"id": 123,
	"name": "Sergio"
};

// Valores de cualquier tipo, duplicados si quieres
let arreglo = [1, 2, 3, 4, true, "Hola", new Date(), {a: "b"}, /hola/, []];
// Valores de cualquier tipo, sin duplicados
let conjunto = new Set([1, 2, 3, 4]);

let mapa = new Map();

mapa.set("id", 123);
mapa.set("name", "Sergio");
mapa.set(true, "No sé");

console.log(objeto);
console.log(mapa, mapa.get(true));

// Libera valores de la memoria que ya no se usan en el resto del programa
let mapaDebil = new WeakMap();

console.log(conjunto);

// Eliminar duplicados y obtener arreglo a partir de ésto
console.log([...new Set([1, 2, 3, 1, 3, 5, 10, 1]).values()]);
