const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo", "Andy"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;
    

    while (siguiente < arr.length) {
        let inicial1 = arr[inicio][0]
        let inicial2 = arr[siguiente][0]
        if( inicial1 === inicial2 ){
            console.log(`Estos invitados pueden sentarse juntos: ${arr[inicio]}, ${arr[siguiente]}`);
            
        }
        inicio++;
        siguiente++;
    }
    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));