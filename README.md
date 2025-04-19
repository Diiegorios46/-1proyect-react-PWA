# 🎬 React Movie Series PWA

Una Web RIA desarrollada con React que permite explorar películas y series de forma dinámica y responsive. Ideal para practicar conceptos de desarrollo moderno con React.

## 🚀 Tecnologías utilizadas

- ⚛️ React
- 📦 Vite (o Create React App, según corresponda)
- 💅 CSS / Styled Components (dependiendo de tu stack)

## 👨‍💻 Integrantes

- Diego Ríos - FAI-4877
- Valentín Bustos Villar - FAI-4019
- Juan Cruz Geslowski - FAI-4881

## 📌 Características

- Búsqueda de películas y series.
- Visualización de detalles individuales.
- Interfaz adaptativa (responsive).

## 📷 Capturas de pantalla

_Agregar aquí capturas si tienen, para mostrar la app en funcionamiento._

## 🧩 Estructura de archivos principales

A continuación se describen los archivos base del proyecto:

### 📁 `index.js`

Es el punto de entrada principal de la aplicación. Se encarga de renderizar el componente raíz (`App.js`) dentro del DOM, utilizando `ReactDOM`. También suele envolver la aplicación en otros componentes globales como el `BrowserRouter` o contextos.

````js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

## 🛠 Instalación

```bash
git clone https://github.com/tuusuario/react-movie-series-pwa.git
cd proyectReact
npm install
npm run dev


````
