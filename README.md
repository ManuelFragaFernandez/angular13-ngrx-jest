#angular13-ngrx-jest- Despliegue

- Este proyecto ha sido realizado en la versión 13.2.0 de Angular CLI.

Por lo tanto, para poder desplegarlo mediente el comando `ng serve` se debe disponer de, como mínimo, la versión
13.2.0 de Angular CLI (se puede actualizar usando `npm install -g @angular/cli`), así como una versión de Node.js
igual o superior a la 12.2 (`https://nodejs.org/es/`).

- Antes de ejecutar el comando `ng serve` se debe usar `npm i`.

##Elección de endpoints:

- En el caso de los tipos de vehículos se ha usado el GetVehiclesTypesFoMakeId, por un tema de optimización, ya que da solo los resultados posibles, sin duplicados, al contrario que GetVehicleTypesForMake.
- Para los modelos, ya que arrojan los mismos resultados, se hace también por id ya que es lo más adecuado a un caso real de uso
