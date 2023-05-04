# Notas sobre el API REST

**El proyecto contiene un API REST basado en clases.**

Llamando correctamente los endpoints podemos realizar acciones como:

* Obtener todo      -> GET:     urlRailway/product
* Obtener por id    -> GET:     urlRailway/product/id
* Crear             -> POST:    urlRailway/product
* Editar            -> PUT:     urlRailway/product/id
* Eliminar          -> DELETE:  urlRailway/product/id

-> **Al momento de crear un nuevo producto todos los campos son obligatorios hasta el id, a excepcion del "timestamps", ya q si no se proporciona este tomara la fecha actual**

-> **Ya que en la prueba tecnia no se habla sobre campos requeridos, ni sobre el tipo de datos para los campos, el id se tiene que proporcionar y este tiene que ser numerico, ademas no se puede repetir, el id siguiente tal y como esta el codigo tiene que ser el 20**

-> **Tambien se han controlado cierto tipos errores como podria ser: id repetido, campos vacios, id erroneos, etc.**

-> **Ademas me tome la libertar de agregar nuevos campos (Estos no son requeridos), son los siguientes:**
* product_category: String
* product_image: String (url a la imagen)
* provider: String

->**El sistema de archivos se ha separado para tener una mejor lectura del codigo, donde:**

* models: tiene la clase del servidor y el schema de products.
* routes: donde estan nuestros endpoints finales, middelwares para controlar errores y el llamamiento de las funciones que estos endpoints tienen que realizar.
* controllers: contiene las funciones a realizar para los endpoints.
* middlewares: contiene un middleware personalizado y algunas funciones de validacion

en el app.js solo inicializamos nuestro server.