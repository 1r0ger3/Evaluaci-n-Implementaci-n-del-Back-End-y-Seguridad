# Plataforma de Comercio Electrónico — Back-End

Este proyecto es el Back-End de una aplicación de comercio electrónico simple, desarrollado con **Node.js**, **Express**, **Sequelize** y **MySQL**. Permite a los usuarios navegar productos, registrarse, iniciar sesión, agregar productos al carrito de compras y realizar pedidos. Incluye autenticación mediante **JWT** y medidas de seguridad contra ataques comunes.

---

## Características

- Gestión de productos desde una base de datos.
- Registro y autenticación de usuarios con JSON Web Tokens.
- Rutas protegidas para operaciones seguras.
- Carrito de compras gestionado desde el servidor.
- Protección contra vulnerabilidades como XSS, CSRF y SQL Injection.
- Integración con Front-End mediante API REST.
- Base de datos relacional estructurada con Sequelize.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MySQL
- Sequelize (ORM)
- JWT
- bcryptjs
- Helmet
- CORS
- Dotenv

---

## Estructura de Carpetas

/ecommerce-backend
├── config/
│   └── database.js
├── controllers/
├── models/
│   ├── Product.js
│   ├── User.js
│   └── Order.js
├── routes/
│   ├── products.js
│   └── auth.js
├── middleware/
├── .env
├── server.js
└── package.json
⚙️ Instalación y uso
1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/ecommerce-backend.git
cd ecommerce-backend
2️⃣ Instalar dependencias
npm install
3️⃣ Configurar variables de entorno
Crear un archivo .env con:
DB_NAME=ecommerce
DB_USER=root
DB_PASSWORD=tu_password
DB_HOST=localhost
SECRET_KEY=mi_clave_secreta
4️⃣ Crear base de datos en MySQL
CREATE DATABASE ecommerce;
5️⃣ Ejecutar el servidornode server.js
node server.js
Servidor disponible en http://localhost:3000
🔐 Seguridad implementada
JWT: Autenticación por tokens.

bcryptjs: Encriptación de contraseñas.

Helmet: Protección de cabeceras HTTP.

CORS: Control de acceso entre dominios.

Validación de entradas con express-validator.

Sanitización de datos para evitar inyecciones.

📈 Mejoras y extensiones futuras
Sistema de pedidos completo.

Panel de administración para productos.

Carrito persistente por usuario.

Integración con pasarela de pagos.

Front-End responsivo con React o Vue.

📌 Autor
Nombre: Roger Sneider Munevar Orjuela
Correo: rogermunevar.so@academia.umb.edu.co
GitHub: [https://github.com/tuusuario](https://github.com/1r0ger3)
