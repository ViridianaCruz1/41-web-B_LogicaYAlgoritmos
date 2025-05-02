//LISTA DE SUPER
let listaDeCompras = [];

const agregarProducto = (producto) => listaDeCompras.push(producto);
const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1){
        listaDeCompras.splice(index, 1)
    }
    return listaDeCompras
};
const mostarLista = () => {
    const listaDeComprasSinRepetir = new Set (listaDeCompras)
    return console.log(listaDeComprasSinRepetir);
};

agregarProducto('Pan');
agregarProducto('Uvas');
agregarProducto('Carne');
agregarProducto('Queso');
agregarProducto('Chocolate');
agregarProducto('Queso');
agregarProducto('Queso');
agregarProducto('Leche');
agregarProducto('Huevos');
eliminarProducto('Uvas');
eliminarProducto('Leche');
eliminarProducto('Galletas');

mostarLista();