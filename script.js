console.log("Integrantes del aula:");

fetch('datos.json')
    .then(response => {
        if(!response.ok){
            throw new Error('Error al cargar el JSON')
        }
        return response.json();
    })
    .then(personas => {
        //console.log(personas);
       //mostrarNombres(personas);
        //mostrarEdades(personas);
        //menoresDeEdad(personas);
        //mayoresDeEdad(personas);
        minDosHobbies(personas);
    });

function mostrarNombres(personas){
    console.log("Nombres de los(as) integrantes");
    personas.forEach(persona => console.log(persona.nombre));
}

function mostrarEdades(personas){
    console.log("Edades de los(as) integrantes");
    personas.forEach(persona => console.log(persona.edad));
}

function menoresDeEdad(personas){
    console.log("Menores de Edad:");
    const menorDeEdad = personas.filter(persona => persona.edad < 18);
    menorDeEdad.forEach(persona => console.log(persona.nombre))
}

function mayoresDeEdad(personas){
    console.log("Mayores de Edad:");
    const mayorDeEdad = personas.filter(persona => persona.edad >= 18);
    mayorDeEdad.forEach(persona => console.log(persona.nombre))
}

function minDosHobbies(personas){
    console.log("Personas con 2 hobbies o más")
    const hobbies = personas.filter(persona => persona.hobby.length >= 2);
    hobbies.forEach(persona => console.log(persona.nombre))
}