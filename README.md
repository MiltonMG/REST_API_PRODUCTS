# Notas sobre el API REST

**El proyecto contiene un API REST basado en clases.**

Llamando correctamente los endpoints podemos realizar acciones como:

* Obtener todo      -> GET:     urlRailway/product
* Obtener por id    -> GET:     urlRailway/product/id
* Crear             -> POST:    urlRailway/product
* Editar            -> PUT:     urlRailway/product/id
* Eliminar          -> DELETE:  urlRailway/product/id

**Tambien se han controlado cierto tipos errores como podria ser: id repetido, campos vacios, id erroneos, etc.**

**El sistema de archivos se ha separado para tener una mejor lectura del codigo, donde:**

* models: tiene la clase del servidor y el schema de products.
* routes: donde estan nuestros endpoints finales, middelwares para controlar errores y el llamamiento de las funciones que estos endpoints tienen que realizar.
* controllers: las funciones a realizar para ciertos endpoints.

en el app.js solo inicializamos nuestro server.
