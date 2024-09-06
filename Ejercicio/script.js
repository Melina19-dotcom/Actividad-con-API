
fetch('data.json') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el JSON');
        }
        return response.json(); 
    })
    .then(pokemones => {
        console.log(pokemones); 
        // Muestra el contenido del JSON en la consola

        //1. mostrar los nombres de los pokemon
        mostrarNombres(pokemones);

        //2. Pokemones con ataque mayor a 120
        pokemonesAtaqueMayorA120(pokemones);

        //3. Pokemones con defensa menor a 100
        pokemonesDefensaMenorA100(pokemones)

        //4. pokemones de tipo electrico (o fuego, volador, planta, agua, veneno, hielo... pueden elegir)
        //pokemonesTipoElectrico(pokemones)

        //5. pokemones que tengan minimo 2 tipos
        //minimo2tipos(pokemones)

        //6. pokemones ordenados segun (nombre, ataque o defensa) en orden (asc o desc)
        //ordenar(pokemones)

    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });

//mostrar los nombres de los pokemon
function mostrarNombres(pokemones) {
    console.log("Nombres de los Pokemones:");
    pokemones.forEach(pokemon => console.log(pokemon.nombre));
}


function pokemonesAtaqueMayorA120(pokemones) {
    console.log("Pokemones con ataque mayor a 120:");
    const AtaqueMayorA120 = pokemones.filter(pokemon => pokemon.ataque>120);
    AtaqueMayorA120.forEach(pokemon => console.log(pokemon.nombre))
}

function pokemonesDefensaMenorA100(pokemones) {
    console.log("Pokemones con defensa menor a 100:");
    const DefensaMenorA100 = pokemones.filter(pokemon => pokemon.defensa<100);
    DefensaMenorA100.forEach(pokemon => console.log(pokemon.nombre))
}

function pokemonesTipoElectrico(pokemones) {
    //Escribe tu codigo aqui

}

function minimo2tipos(pokemones) {
    //Escribe tu codigo aqui
}

function ordenar(pokemones) {
    //escribe tu codigo aqui
}







