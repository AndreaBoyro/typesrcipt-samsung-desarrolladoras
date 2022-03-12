"use strict";
exports.__esModule = true;
var Direccion_1 = require("./Clases/Direccion");
var Mail_1 = require("./Clases/Mail");
var Persona_1 = require("./Clases/Persona");
var Telefono_1 = require("./Clases/Telefono");
var persona = [];
persona.push(new Persona_1.Persona("Ana", "Vázquez", 30, "54687548T", "15/05/1985", "azul", "M", new Direccion_1.Direccion("Santa Eulalia", 6, 2, "a", 48750, "Kabiezes", "Vizcaya"), new Mail_1.Mail("Personal", "anavazquez@object.es"), new Telefono_1.Telefono("Personal", 659895712), "Contactar preferiblemente via email"));
persona.push(new Persona_1.Persona("Agurtzane", "Ibarra", 35, "54686648T", "21/07/1995", "verde", "M", new Direccion_1.Direccion("Autonomía", 7, 2, "a", 48750, "Kabiezes", "Vizcaya"), new Mail_1.Mail("Personal", "aibarra@object.es"), new Telefono_1.Telefono("Personal", 668954214), "Conocida gimnasio"));
persona.push(new Persona_1.Persona("Arantxa", "Santiago", 32, "77687548T", "25/07/1992", "naranja", "M", new Direccion_1.Direccion("Avda Bidebarrieta", 6, 2, "a", 48750, "Kabiezes", "Vizcaya"), new Mail_1.Mail("Personal", "arantxa@object.es"), new Telefono_1.Telefono("Personal", 659895712), "Restaurante"));
//mostramos por consola el array de personas.
for (var i = 0; i < persona.length; i++) {
    console.log(persona[i]);
}
//obtenemos el primer resultado con el dni
var personaFiltroDni = persona.filter(function (person) { return person.dni == "77687548T"; })[0];
//editamos la direccion
var nuevaDireccion = new Direccion_1.Direccion("Calle Sombra", 98, 2, "I", 41987, "Sevilla", "Sevilla");
//guardamos la direccion
personaFiltroDni.direcciones.pop();
personaFiltroDni.direcciones.push(nuevaDireccion);
//editamos y guardamos email
var nuevoMail = new Mail_1.Mail("Trabajo", "fhierroj@talent.org");
personaFiltroDni.mails.pop();
personaFiltroDni.mails.push(nuevoMail);
//editamos y guardamos tlf
var nuevoTelefono = new Telefono_1.Telefono("Trabajo", 600987234);
personaFiltroDni.telefonos.pop();
personaFiltroDni.telefonos.push(nuevoTelefono);
//mostramos por consola el array de personas después de la.
for (var i = 0; i < persona.length; i++) {
    console.log(persona[i]);
}
