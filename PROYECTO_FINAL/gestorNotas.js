const fs = require("fs");

// Rutas de los archivo de notas
const filePath = "./notas.json";
const logPath = "./log.txt";

//Declara notas fuera, para usar la variable en ambas funciones
let notas = [];

///////////////////////////////////////////////////////////////////////////
//Agrega una nueva nota al archivo

function agregarNota(titulo, contenido, nombreUsuario) {
  if (fs.existsSync(filePath)) {
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
    const data = fs.readFileSync(filePath, "utf8");
    //Convierto el texto en objeto literal
    notas = JSON.parse(data);
  } else {
    //Si el archivo no esta creado, lo crea con un arr vacio como contenido
    fs.writeFileSync(filePath, "[]");
  }

  //Verifica si existe ya una nota con ese titulo
  const notaExiste = notas.find(
    (nota) => nota.titulo.toLowerCase() === titulo.toLowerCase()
  );

  //Si no existe la nota, la agrega al arreglo
  if (!notaExiste) {
    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);
    console.log("Nota agregada con éxito.");

    agregarAlLog(nombreUsuario);
  } else {
    console.log("Ya existe una nota con este título");
  }

  // COMPLETAR: Usa fs.writeFileSync para guardar las notas
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  //console.log(notas);
}

///////////////////////////////////////////////////////////////////////////
//  Elimina una nota por su título.

function eliminarNota(titulo, nombreUsuario) {
  if (fs.existsSync(filePath)) {
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
    const data = fs.readFileSync(filePath, "utf8");
    //Convierto el texto en objeto literal
    notas = JSON.parse(data);

    // Filtra las notas y elimina la que coincida con el título.
    notas = notas.filter((note) => note.titulo !== titulo);

    // Sobrescribe el archivo con las notas actualizadas.
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);

    agregarAlLog(nombreUsuario);
  } else {
    console.log("No hay notas para eliminar.");
  }
}

///////////////////////////////////////////////////////////////////////////
//  Archivo de logs.
//log => Registro

function agregarAlLog(nombreUsuario) {
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "");
  }

  const now = new Date();
  const date = now.toLocaleString();
  fs.appendFileSync(
    logPath,
    `[${date}] ${nombreUsuario} ingresó al sistema \n`
  );
}

///////////////////////////////////////////////////////////////////////////
//Agregamos notas
agregarNota("Compras", "Comprar leche y pan.", "Viridiana01");
agregarNota("Trabajo", "Terminar reporte semanal.", "Viridiana01");
agregarNota("Escuela", "Mandar tesis a sinodal.", "Viridiana01");
agregarNota("Fitness", "Ir a rodar 25km.", "Alberto23");
agregarNota("Pagos", "Pagar mensualidad gym", "Alberto23");

// agregarNota("Social", "Cumpleaños Dani", "Dani23");
// agregarNota("Salud", "Cita dentista", "Dani23");

// //Eliminar notas por titulo
// eliminarNota("Compras", "Karen06");
// eliminarNota("Escuela", "Luis27");
// eliminarNota("Salud", "Luis27");
