import { Paciente } from './Paciente.js';

// Escuchar el btnRegistro:
document.addEventListener('DOMContentLoaded', () => {
    const btnRegistrar = document.getElementById('btnRegistrar');
    mostrarPacientes();

    if ( btnRegistrar ) {
        btnRegistrar.addEventListener('click', generarRegistro);
    }
});

const generarRegistro = function() {
    const nombre = document.getElementById('nombreP').value.trim();
    const oxigeno = document.getElementById('oxigenoP').value.trim();
    const ritmo = document.getElementById('ritmoP').value.trim();

    if (nombre === "" || oxigeno === "" || ritmo === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        generarPaciente(nombre, Number(ritmo), Number(oxigeno));
    }
}

function generarPaciente(n, r, o) {
    const nuevoPaciente = new Paciente(n, r, o);

    // Traer el array actual del LocalStorage
    let lista = JSON.parse(localStorage.getItem("pacientes")) || [];

    // Agregar el nuevo paciente al array
    lista.push(nuevoPaciente);

    // Guardar el array actualizado en LocalStorage (convertido a texto)
    localStorage.setItem("pacientes", JSON.stringify(lista));

    // Volver a pintar la tabla para que se vea el cambio
    mostrarPacientes();

    // Limpiar los inputs del formulario
    document.getElementById("nombreP").value = "";
    document.getElementById("oxigenoP").value = "";
    document.getElementById("ritmoP").value = "";
}

function mostrarPacientes() {
    const tbody = document.getElementById("listaPacientes");
    tbody.innerHTML = ""; 
    let lista = JSON.parse(localStorage.getItem("pacientes")) || [];

    lista.forEach(paciente => {
        tbody.innerHTML += generarFilaTabla(paciente);
    });
}

function generarFilaTabla(paciente) {
    var color = "";
    switch (paciente.nivelDeRiesgo){
        case "Estable":
            color = "#56EB34";
            break;
        case "Urgente":
            color = "#EBD334";
            break;
        case "Critico":
            color = "#EB3434";
            break;
        default:
            color = "#FFFFFF";
    }

    return `
        <tr>
            <td>${paciente.nombre}</td>
            <td>${paciente.oxigenacion} (%)</td>
            <td>${paciente.ritmoCardiaco} lpm</td>
            <td style="background-color: ${color};">${paciente.nivelDeRiesgo}</td>
        </tr>
    `;
}
