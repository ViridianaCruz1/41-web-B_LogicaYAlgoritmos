'use strict'

//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Queso", precio: 200, categoria: "Alimentos" },
    { nombre: "Carne", precio: 400, categoria: "Alimentos" },
    { nombre: "Pan", precio: 80, categoria: "Alimentos" },
];

//filter()
const menos100 = productos.filter(arr => arr.precio < 100);
console.log(menos100);

//sort()
const alfabeticamente = productos.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    }
    return 0;
});
console.log(alfabeticamente);

//map()
const soloNombre = productos.map(array => array.nombre);
console.log(soloNombre);

//reduce()
const cuentaTotal = productos.reduce((acum, prod) => acum + prod.precio, 0);
console.log(cuentaTotal);