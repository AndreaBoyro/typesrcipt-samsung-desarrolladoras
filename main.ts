import { Direccion } from "./Clases/Direccion";
import { Mail } from "./Clases/Mail";
import { Persona } from "./Clases/Persona";
import { Telefono } from "./Clases/Telefono";

let persona: Persona[] = [];

persona.push(
  new Persona(
    "Ana",
    "Vázquez",
    30,
    "54687548T",
    "15/05/1985",
    "azul",
    "M",
    new Direccion("Santa Eulalia", 6, 2, "a", 48750, "Kabiezes", "Vizcaya"),
    new Mail("Personal", "anavazquez@object.es"),
    new Telefono("Personal", 659895712),
    "Contactar preferiblemente via email"
  )
);

persona.push(
  new Persona(
    "Agurtzane",
    "Ibarra",
    35,
    "54686648T",
    "21/07/1995",
    "verde",
    "M",
    new Direccion("Autonomía", 7, 2, "a", 48750, "Kabiezes", "Vizcaya"),
    new Mail("Personal", "aibarra@object.es"),
    new Telefono("Personal", 668954214),
    "Conocida gimnasio"
  )
);

persona.push(
  new Persona(
    "Arantxa",
    "Santiago",
    32,
    "77687548T",
    "25/07/1992",
    "naranja",
    "M",
    new Direccion("Avda Bidebarrieta", 6, 2, "a", 48750, "Kabiezes", "Vizcaya"),
    new Mail("Personal", "arantxa@object.es"),
    new Telefono("Personal", 659895712),
    "Restaurante"
  )
);
//mostramos por consola el array de personas.
for (let i = 0; i < persona.length; i++) {
  console.log("Editado correctamente.");
  console.log("Lista de personas en la agenda:");
  console.log(persona[i]);
}
//obtenemos el primer resultado con el dni
let personaFiltroDni: Persona = persona.filter(
  (person) => person.dni == "77687548T"
)[0];
//editamos la direccion
let nuevaDireccion: Direccion = new Direccion(
  "Calle Sombra",
  98,
  2,
  "I",
  41987,
  "Sevilla",
  "Sevilla"
);
//guardamos la direccion
personaFiltroDni.direcciones.pop();
personaFiltroDni.direcciones.push(nuevaDireccion);
//editamos y guardamos email
let nuevoMail: Mail = new Mail("Trabajo", "fhierroj@talent.org");

personaFiltroDni.mails.pop();
personaFiltroDni.mails.push(nuevoMail);
//editamos y guardamos tlf
let nuevoTelefono: Telefono = new Telefono("Trabajo", 600987234);

personaFiltroDni.telefonos.pop();
personaFiltroDni.telefonos.push(nuevoTelefono);
//mostramos por consola el array de personas.
for (let i = 0; i < persona.length; i++) {
  console.log("Editado correctamente.");
  console.log("Lista de personas en la agenda:");
  console.log(persona[i]);
}
