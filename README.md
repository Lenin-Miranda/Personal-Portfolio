# Personal Portfolio

Portafolio de Lenin Miranda con React/Vite y un servicio Express para el formulario de contacto.

## Estructura

| Carpeta | Responsabilidad |
| --- | --- |
| [public/](public/) | Aplicación React, estilos y recursos |
| [server/](server/) | API de correo con Nodemailer |
| `public/dist/` | Resultado del build del frontend |

Aquí `public/` es la raíz de la aplicación frontend, no una simple carpeta de archivos estáticos.

## Instalación local

Necesitas Node.js y npm.

```bash
git clone https://github.com/Lenin-Miranda/Personal-Portfolio.git
cd Personal-Portfolio
npm install --prefix public
npm install --prefix server
```

Crea `server/.env` con tus propias credenciales:

```dotenv
PORT=3001
EMAIL_USER=tu-remitente@example.com
EMAIL_PASS=tu-password-de-aplicacion
```

Inicia cada servicio en una terminal distinta, desde la raíz:

```bash
npm run dev --prefix public
```

```bash
npm start --prefix server
```

Vite está configurado en [localhost:3000](http://localhost:3000); la API utiliza el puerto 3001.

## Formulario de contacto

[public/src/components/Contact.jsx](public/src/components/Contact.jsx) contiene una URL fija del backend alojado. Para usar la API local, configura allí `http://localhost:3001/send-email`. Iniciar el servidor local no cambia automáticamente el destino del formulario.

El servidor utiliza Gmail mediante Nodemailer; configura una cuenta compatible con contraseña de aplicación. Las pruebas del formulario pueden enviar mensajes reales.

## Comandos de verificación

```bash
npm run lint --prefix public
npm run build --prefix public
npm run preview --prefix public
```

El backend no tiene una suite funcional: su script `test` es un marcador que termina con error.

## Despliegue

Para el frontend, instala/compila desde `public/` y publica `public/dist/`. Para la API, instala desde `server/`, inicia con `npm start` y configura las variables de correo en el hosting.

Actualiza la URL del formulario y la lista CORS en [server/server.js](server/server.js) para que coincidan con los dominios elegidos. Revisa navegación, diseño móvil y estados del formulario antes de publicar.
