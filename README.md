# Todos - NodeJS [BACK]

### Tecnologías

Todos - NodeJS [BACK] usa varios proyectos de código abierto para funcionar correctamente:

* [express](http://expressjs.com/) - Framework utilizado para el manejo de las rutas y middleware.
* [express-validator](https://www.npmjs.com/package/express-validator) - conjunto de middlewares express.js que envuelve las funciones validator.js validator y sanitizer.
* [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar opciones de conexión a la servidor (Su uso es opcional).
* [mongoose](https://mongoosejs.com/docs/index.html) - ORM para uso de consultas y crear colecciones en MongoDB
* [dotenv](https://www.npmjs.com/package/dotenv) - Módulo de dependencia cero que carga variables de entorno de un archivo .env en process.env. El almacenamiento de la configuración en el entorno separado del código se basa en la metodología de la aplicación The Twelve-Factor.
* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta de desarrollo reinicia automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.


### Instalación

Todos - NodeJS [BACK] requiere [Node.js](https://nodejs.org/) v10.4 + para ejecutarse.

Clonar Repositorio
```sh
$ git clone https://github.com/jgromero7/todos-nodejs-back.git
```

Copia el archivo `.env` en base al archivo `.env.example` y modifica los siguientes valores
```sh
    APP_PORT=3000
    DB_URI=mongodb://localhost/nodejs-todos
```

Instale las dependencias y devDependencies e inicie el servidor.
```sh
$ cd todos-nodejs-back
$ npm install 
$ npm run start
```
Iniciar servidor con con [nodemon](https://www.npmjs.com/package/nodemon)
```sh
$ npm install nodemon -D 
$ npm run start:dev
```
Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.
```sh
127.0.0.1:3000 || http://localhost:3000
```

### Información adicional

1 Obtener TODOS
```JOSN
    GET /todos/get
```
* Res: {status}: 400, 404, 500, 200

1.1 Respuesta
```JSON
    STATUS 200
    {
        "message": "Read Todos Successfuly",
        "data": [{
            "isCompleted": false,
            "_id": "5f82563dbfd1c42cfbcf7d2f",
            "task": "New Todo 1",
            "createdAt": "2020-10-11T00:47:57.648Z",
            "updatedAt": "2020-10-11T00:47:57.648Z"
        }]
    }
```

1 Obtener TODO por id
```JOSN
    GET /todos/todo-read/{id}
```
* Res: {status}: 400, 404, 500, 200

1.1 Respuesta
```JSON
    STATUS 200
    {
        "message": "Read Todos Successfuly",
        "data": {
            "isCompleted": false,
            "_id": "5f82563dbfd1c42cfbcf7d2f",
            "task": "New Todo 1",
            "createdAt": "2020-10-11T00:47:57.648Z",
            "updatedAt": "2020-10-11T00:47:57.648Z"
        }
    }
```
* Param: {id}: Debe ser tipo cadena

3 Crea un nuevo TODO
```JSON
    POST /todos/todo-create 
    {
        "task": "New Task 1"
    }
```
* Req: {task}: Debe ser tipo cadena

3.1 Respuesta
```JSON
    STATUS 200
    {
        "message": "Create todo successfuly",
        "data": {
            "isCompleted": false,
            "_id": "5f8281cbb080f434022672ba",
            "task": "New Task 4",
            "createdAt": "2020-10-11T03:53:47.511Z",
            "updatedAt": "2020-10-11T03:53:47.511Z"
        }
    }
```
* Res: {status}: 400, 422, 409, 500, 200

4 Actualizar TODO
```JSON
    PUT /todos/todo-update 
    {
        "id": "5f8281cbb080f434022672ba",
        "task": "New Task 1 Update"
    }
```
* Req: {id}: Debe ser tipo cadena
* Req: {task}: Debe ser tipo cadena

4.1 Respuesta
```JSON
    STATUS 200
    {
        "message": "Updated successfuly",
        "data": null
    }
```
* Res: {status}: 400, 422, 409, 500, 200

5 Completar TODO
```JSON
    PUT /todos/todo-complete 
    {
        "id": "5f8281cbb080f434022672ba",
        "isCompleted": true
    }
```
* Req: {id}: Debe ser tipo cadena
* Req: {isCompleted}: Debe ser tipo booleano

5.1 Respuesta
```JSON
    STATUS 200
    {
        "message": "Complete successfuly",
        "data": null
    }
```
* Res: {status}: 400, 422, 409, 500, 200

6 Eliminar TODO
```JSON
    DELETE /todos/todo-delete/{id}
```
* Req: {id}: Debe ser tipo cadena

6.1 Respuesta
```JSON
    STATUS 200
    {
        "message": "Deleted successfuly",
        "data": null
    }
```
* Res: {status}: 400, 422, 409, 500, 200

Autor: José Romero
----
**Software Libre!**