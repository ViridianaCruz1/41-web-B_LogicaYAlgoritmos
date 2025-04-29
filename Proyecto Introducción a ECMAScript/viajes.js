//Travel logic
import { destinosCostosInfo } from "./data.js";

let destinos = [];

const registrarDestino = (destino, fecha, transporte, numPasajeros) => {
    destinos.push({
        destino,
        fecha,
        transporte,
        numPasajeros,
        costo: calcularCosto(destino, transporte, numPasajeros)
    });
};

const calcularCosto = function(destino, transporte, numPasajeros) {
    let costoInicial = 0;

    const descuentoInfo = destinosCostosInfo[destino];

    if (!descuentoInfo) {
        return 'We cannot calculate the cost. The destination chosen is not in the system';
    }

    const { precio, minPasajerosDesc, descuento} = descuentoInfo;
    const aplicarDescuento = numPasajeros >= minPasajerosDesc;
    const costoDestino = precio * numPasajeros * (aplicarDescuento ? (1-descuento) : 1);

    costoInicial += costoDestino;

    if(transporte === 'airplane'){
        costoInicial += 50;
    }else if (transporte === 'jet'){
        costoInicial += 1500;
    }else{
        return 'We cannot calculate the cost. You cannot reach the destination with this transport option';
    }

    return costoInicial;
};

function mostrarItinerario() {
    destinos.forEach((viaje) => {
        console.log(`The destination is: ${viaje.destino} \nOn the date: ${viaje.fecha} \nYou selected this type of transport: ${viaje.transporte} \nFor a total price of: ${viaje.costo}\n ------------------------------`);
    })
};

export { registrarDestino, mostrarItinerario }