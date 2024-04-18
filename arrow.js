const calculateAge = (year) => new Date().getFullYear() - year;

console.log(`AGE: ${calculateAge(1990)}`);

const h = Number(prompt("h:"));
const r = Number(prompt("r:"));

const volume = (r, h) => Math.PI * r * r * h;

console.log("VOLUME:", volume(r, h).toFixed(2));
console.log("VOLUME:", volume(r, h).toPrecision(5));
console.log("VOLUME:", volume(r, h).toExponential(5));
