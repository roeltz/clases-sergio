const { readFileSync } = require("fs");

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mapeo = a.map(i => i * 1.19);
let mapeoObj = a.map(i => ({ id: i }));
let mapeoData = a.map(i => JSON.parse(readFileSync(`../data/${i}.json`, "utf-8")));

let ids = mapeoData.map(i => i.id);

console.log(mapeo);
console.log(mapeoObj);
console.log(mapeoData);
console.log(ids);

let sumatoria = a.reduce((result, i) => result + i, 0);
let mayoresA5 = a.reduce((result, i) => {
	if (i > 5) {
		result.push(i);
	}
	return result;
}, []);

console.log(sumatoria);
console.log(mayoresA5);

let mayoresA4 = a.filter(i => i > 4);

console.log(mayoresA4);

a.forEach(i => console.log("#", i));

for (let i = 0; i < 10; i++) {

}

let obj = {
	"id": 1,
	"name": "Sergio",
	"edad": 38
}

for (let k in obj) {
	console.log(k, obj[k]);
}

for (let i of a) {
	console.log("#", i);
}

for (let [k, i] of a.entries()) {
	console.log("#", `a[${k}] = ${i}`);
}