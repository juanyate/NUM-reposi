function getPetExerciseInfo() {
    function obtenerTipoMascota() {
        return prompt("Tipo de mascota (perro, gato, ave)");
    }
    
    function imprimirTipoMascota(tipo) {
        switch (tipo) {
            case "perro":
                console.log("Es un perro");
                break;
            case "gato":
                console.log("Es un gato");
                break;
            case "ave":
                console.log("Es un ave");
                break;
            default:
                console.log("Tipo de mascota no válido");
        }
    }

    function obtenerEdadMascota() {
        return Number(prompt("Edad de la mascota"));
    }

    function obtenerInfoEjercicioMascota(tipo, edad) {
        switch (tipo) {
            case "perro":
                if (edad <= 0) {
                    return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
                } else if (edad <= 7) {
                    return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
                } else {
                    return "Los perros mayores necesitan caminatas más cortas";
                }
            case "gato":
                if (edad <= 0) {
                    return "Los gatitos necesitan sesiones de juego interactivas y juguetes";
                } else if (edad <= 7) {
                    return "Los gatos jóvenes disfrutan de sesiones de juego y exploración";
                } else {
                    return "Los gatos mayores prefieren juegos más tranquilos y lugares cómodos";
                }
            case "ave":
                if (edad <= 0) {
                    return "Las aves jóvenes necesitan tiempo para jugar y explorar su entorno";
                } else if (edad <= 7) {
                    return "Las aves a esta edad necesitan tiempo fuera de la jaula para volar y jugar";
                } else {
                    return "Las aves mayores necesitan ejercicios suaves y estimulación mental";
                }
            default:
                return "Tipo de mascota no válido";
        }
    }

    let tipoMascota = obtenerTipoMascota();


imprimirTipoMascota(tipoMascota);


let edadMascota = obtenerEdadMascota();


let infoEjercicio = obtenerInfoEjercicioMascota(tipoMascota, edadMascota);

console.log(infoEjercicio);

}

getPetExerciseInfo();