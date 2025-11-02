# Personal Portfolio

Un portafolio personal moderno construido con React, Vite y Tailwind CSS.

## 🚀 Despliegue en Render

### Frontend (Static Site)

1. Conecta tu repositorio de GitHub a Render
2. Crea un nuevo **Static Site**
3. Configuración:
   - **Build Command**: `cd public && npm install && npm run build`
   - **Publish Directory**: `public/dist`
   - **Environment**: Node 18+

### Backend (Web Service)

1. Crea un nuevo **Web Service** en Render
2. Configuración:
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Environment**: Node 18+

#### Variables de Entorno del Backend:

```
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
PORT=10000
```

## 🛠️ Desarrollo Local

### Frontend

```bash
cd public
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

## 📁 Estructura del Proyecto

```
├── public/          # Frontend React + Vite
│   ├── src/
│   ├── dist/        # Build output
│   └── package.json
├── server/          # Backend Express
│   ├── routes/
│   ├── .env
│   └── package.json
└── README.md
```

## 🔧 Tecnologías

### Frontend

- React 19
- Vite 6
- Tailwind CSS 4
- Framer Motion
- AOS (Animate On Scroll)
- Swiper
- TypeWriter Effect
- React Icons
- SweetAlert2

### Backend

- Node.js
- Express 5
- Nodemailer
- CORS
- dotenv

## 📧 Formulario de Contacto

El formulario de contacto utiliza Nodemailer para enviar emails a través de Gmail.

### Configuración de Gmail:

1. Habilita la verificación en dos pasos
2. Genera una contraseña de aplicación
3. Usa la contraseña de aplicación en `EMAIL_PASS`

## 🌐 URLs de Producción

- **Frontend**: Tu dominio de Render Static Site
- **Backend**: Tu dominio de Render Web Service

Asegúrate de actualizar la URL del backend en `src/components/Contact.jsx` con tu URL de producción de Render.
