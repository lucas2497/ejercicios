let personalDatos = {
    nombr: "lucas",
    apellifo: "fulano",
    edad: "49",
    altura: 1.70,
    desarrollador: false,
}
let edad = personalDatos.edad

let array = [personalDatos, { nombre: "david", edad:60, apellido: "mengao",}, {nombre: "laura", apellido: "pancho", edad:59}];

array.sort((a, b) => a.edad - b.edad);
