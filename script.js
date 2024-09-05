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
        mostrarNombres(personas);
        mostrarEdades(personas);
    });

function mostrarNombres(personas){
    console.log("Nombres de los(as) integrantes");
    personas.forEach(persona => console.log(persona.nombre));
}

function mostrarEdades(personas){
    console.log("Edades de los(as) integrantes");
    personas.forEach(persona => console.log(persona.edad));
}