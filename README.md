# useCotext

En este proyecto encontrarás una aplicación de Libros con sesión de usuarios perooo ¡Ups! en el frontend falta aplicar useContext para poder visualizar los libros


> Antes de nada deberás crear una base de datos con sql, te he dejado un archivo .env de ejemplo para que puedas rellenarlo con los datos necesarios

 ```
DB_PASSWORD = 
DB_DEV_NAME = books_api_ts
DB_TEST_NAME = books_api_ts_test
DB_USER = 
JWT_SECRET = 
PORT = 3000
```
Para poder hace uso de esta API debes poner en la terminal los siguientes comandos👇 

1️⃣ descarga el proyecto

```
git clone https://github.com/CeliaMi/usecontext-practice.git
cd server
```
2️⃣ Instala las **dependencias**:
```
npm i
```
3️⃣ levanta el **servidor** :
```
npm run dev
```
4️⃣ Puedes utilizar herramietas como postman para consular la API y llenarla de datos
```
https://www.postman.com/
```
POST en la ruta 
http://localhost:3000/api/register
```
{
  "name": "",
  "email": "",
  "password": ""
}
```
> Ojo no olvides copiar el token de las response y pasarsela a la siguiente petición post

POST en la ruta 
http://localhost:3000/api/books
```
{
  "title": "",
  "writer": "",
  "book_description": ""
}
```

Ahora que ya tenemos con datos nuestra base de datos, vamos a nuestro front

1️⃣ en una nueva terminal ve a la carpeta client

```
cd client
```

2️⃣ Instala las **dependencias**:
```
npm i
```
3️⃣ levanta el **servidor** :
```
npm run dev
```
 **y ahora**..... 
>  ¡a Codear🙋‍♀️!
