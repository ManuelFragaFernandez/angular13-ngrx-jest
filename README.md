#angular13-NgRX-JestUnitTesting- Despliegue

Este proyecto ha sido realizado en la versión 13.2.0 de Angular CLI.

Por lo tanto, para poder desplegarlo mediente el comando `ng serve` se debe disponer de, como mínimo, la versión
13.2.0 de Angular CLI (se puede actualizar usando `npm install -g @angular/cli`), así como una versión de Node.js
igual o superior a la 12.2 (`https://nodejs.org/es/`).

Antes de ejecutar el comando `ng serve` se debe usar `npm i`.


##Elección de endpoints:

- GetModelsForMake en vez de por ID, ya que ofrecen los mismo resultados pero así ocultamos el id, dejando verse la marca en la url.
- En el segundo caso usare el GetVehiclesTypesFoMake byId, por un tema de optimización, ya que da solo los resultados posibles, sin duplicados.
- //TODO Hacerlo con GetVehiclesTypesFoMake byId para añadir mas RxJs
