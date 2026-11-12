// Clase Paciente
class Paciente {
    nombre = "";
    ritmoCardiaco = 0;
    oxigenacion = 0;
    nivelDeRiesgo = "";

    constructor(nombre, ritmoCardiaco, oxigenacion){
        this.nombre = nombre;
        this.ritmoCardiaco = ritmoCardiaco;
        this.oxigenacion = oxigenacion;

        this.calcNivelDeRiesgo();
    }

    calcNivelDeRiesgo() {
        if ( this.oxigenacion < 90 || this.ritmoCardiaco > 130 ) {
            this.nivelDeRiesgo = "Critico";
        } else if ( this.oxigenacion >= 90 && this.oxigenacion <= 94 ){
            this.nivelDeRiesgo = "Urgente";
        } else {
            this.nivelDeRiesgo = "Estable";
        }
    }
}
export { Paciente };
