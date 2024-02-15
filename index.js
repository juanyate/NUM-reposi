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
}