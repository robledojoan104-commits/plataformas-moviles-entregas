var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};



/**
 * 01 - crearPersona
 * 
 * Recibe
 * - `nombre`: string, con el nombre.
 * - `apellido`: string, con el apellido.
 * - `edad`: numero entero, con la edad de la persona.
 * - `documento`: numero entero, con el documento de la persona.
 * 
 * Retorna: 
 * - un objeto, representando una persona, con los campos recibidos.
 * 
 * Ejemplos:
 * - crearPersona("Juan", "Pérez", 20, 123456)
 * {
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   edad: 20,
 *   documento: 123456,
 * }
 
function crearPersona(_nombre, apellido, edad, documento) {
    return{
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345   
    }
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));

*/

/*
 * 02 - agregarApodo
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * - `apodo`: string, con el apodo que agregarle a la persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un nuevo campo 'apodo'.
 


function agregarApodo(persona, apodo) {
    return{...persona,apodo}
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));

*/

/*
 * 03 - sinDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero sin el campo documento.
 
*/ 
/*
let persona={
    "nombre" : "any",
    "apellido" : "arguello",
    "edad": 23,
    "documento": 23232
};

function sinDocumento(persona) {
    let{documento, ...resultado}=persona;
    return{
        resultado
    }
}
console.log("resultado sinDocumento: ", sinDocumento(persona));
*/

/*
 * 04 - tieneDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si la propiedad 'documento' existe en el objeto recibido.
 
function tieneDocumento(persona) {
    let {...resultado} =persona; 
    return{
        persona
    }
}
console.log("resultado tieneDocumento: ", tieneDocumento(personaEjemplo));

/*
 * 05 - nombreCompletoDePersona
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un string, con el nombre completo de una persona. Asumimos que nombre completo tiene el formato "Apellido, Nombre". Por ejemplo para una persona con nombre "Juan" y apellido "Pérez", el nombre completo sería "Pérez, Juan".


let persona = {
    "nombre" : "judio",
    "apelldio" : "arroz",
}

function nombreCompletoDePersona(_persona) {
    return{persona}
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(persona));
*/

/*

 * 06 - felizCumpleaños
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un año más. 

let persona={
    "nombre" : "Peppa",
    "apellido" : "pig",
    "edad" : 12,
    "documento": 234234
}
function felizCumpleaños(persona) {
    
    // obteneredadAc 

    //calcular edad nueva 

    //Construir persona con edad nueva

    //Devolver el resultado
    return{...persona, edad:persona.edad+1}
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(persona));
*/
 
/*
 * 07 - sonLaMismaPersona
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si persona1 y persona2 son la misma persona.
 

persona1 = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};
persona2 = {
    "apellido": "Perz",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

function sonLaMismaPersona(persona1, persona2) {
if (persona1.documento==persona2.documento){
    return true;
} else {
    return false;
}
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(persona1,persona2));
*/

/**
 * 08 - personaMasGrande
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - el objeto de la persona con mayor edad. Si ambas tienen la misma edad, retorna cualquiera de las dos.

persona1 = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};
persona2 = {
    "apellido": "Perz",
    "nombre": "Juan",
    "edad": 222,
    "documento": 12345
};

function personaMasGrande(persona1, persona2) {
    if (persona1.edad>persona2.edad){
        return persona1;
    }else{
        return persona2;
    } 
}
console.log("resultado personaMasGrande: ", personaMasGrande(persona1,persona2));
 */
