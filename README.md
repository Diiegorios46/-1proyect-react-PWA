![image](https://github.com/user-attachments/assets/4494a05e-9cbf-47e1-b06f-5e297e9a0689)![image](https://github.com/user-attachments/assets/8334cf33-df1c-435a-971c-0ccc69ce5ce9)# 🎬✨ **React Movie Series PWA**  

¡Bienvenido a **React Movie Series PWA**! Una aplicación web progresiva (PWA) desarrollada con **React** para explorar películas y series de manera dinámica, interactiva y completamente **responsive**. 🌟

---

## 🚀 **Tecnologías utilizadas**

- ⚛️ **React**  
- ⚡ **Vite** (o Create React App, según corresponda)  
- 🎨 **CSS / Styled Components**  

---

## 👨‍💻 **Integrantes del equipo**  

💪 **THE BIG THREE** 👤👤👤  
- 🧑‍💻 **Diego Ríos** - FAI-4877  
- 🧑‍💻 **Valentín Bustos Villar** - FAI-4019  
- 🧑‍💻 **Juan Cruz Geslowski** - FAI-4881  

---

## 📌 **Características principales**

✅ **Búsqueda de películas y series**.  
✅ **Interfaz adaptativa (responsive)**.  
✅ **Filtros avanzados** por género, tipo, calificación y más.  
✅ **Modal interactivo** para agregar o editar contenido.  

---

## 📷 **Capturas de pantalla**  

🎥 **Vista principal**  
![image](https://github.com/user-attachments/assets/5e97c971-bec5-4311-bd8f-55d4c7e0fa48)

🔍 **Búsqueda y filtros**  
![image](https://github.com/user-attachments/assets/ab80dbf0-8c2f-47fa-8037-1223cae77be1)

🖼️ **Modal para agregar contenido**  
![image](https://github.com/user-attachments/assets/d21cb18c-1445-4216-9500-bd2b992e0c3e)

🖼️ **Modal para modificar contenido**  
![image](https://github.com/user-attachments/assets/6d69b147-f970-422b-97ed-534d41c9cc3a)

---

## 🗂️ **Estructura de archivos principales**


# Documentación del archivo `Home.jsx`

Este archivo implementa la página principal de la aplicación React, donde se gestionan y visualizan películas y series. A continuación, se detalla la funcionalidad de cada sección del archivo.


## **Importaciones**
El archivo importa los siguientes módulos y componentes:
- **`Styles`**: Importa los estilos CSS específicos para la página desde `Home.module.css`.
- **`Card`**: Componente para mostrar la información de una película o serie.
- **`EstadoVisto`**: Componente que muestra estadísticas de contenido visto/no visto.
- **`useState` y `useEffect`**: Hooks de React para manejar el estado y efectos secundarios.
- **`Tittle`**: Componente para mostrar el título principal de la página.
- **`library`, `generos`, `buscarRating`**: Constantes y funciones importadas desde `constant.jsx`.
- **`SelectFiltro`**: Componente para manejar filtros de selección.


## **Estado inicial**
El componente utiliza varios estados para manejar la lógica de la página:
1. **`moviesAndSeries`**: Lista de películas y series almacenadas en `localStorage`. Si no existe, se inicializa con los datos de `library`.
2. **Filtros**:
   - `filtrarXGenero`: Filtro por género.
   - `filtrarXTipo`: Filtro por tipo de contenido (película o serie).
   - `buscarXPeliculaSerie`: Filtro por título o director.
   - `buscarXRating`: Filtro por rango de calificación.
3. **Modal**:
   - `openModalButton`: Controla si el modal para agregar/modificar contenido está abierto.
   - `idState`: Identifica el contenido que se está editando.
   - `estadoModalModify`: Indica si el modal está en modo de edición.
4. **Otros**:
   - `mensajeLike`: Mensaje temporal para indicar cambios en el estado de "visto".
   - `nuevaPeliSerie`: Objeto que almacena los datos del contenido que se está agregando o editando.

## **Funciones principales**
### **1. `updateArrayModPelis`**
Actualiza el estado de `moviesAndSeries` y sincroniza los cambios con `localStorage`.

### **2. `handleChange`**
Cambia el estado de "visto" de una película o serie y muestra un mensaje temporal indicando el cambio.

### **3. `contarGeneros`**
Cuenta la cantidad de géneros únicos presentes en la lista de películas y series.

### **4. `handleInput`**
Actualiza los valores del formulario para agregar o editar contenido.

### **5. `handleInputGenero` y `handleInputTipo`**
Actualizan los filtros de género y tipo de contenido.

### **6. `filtrarPorTipo` y `filtrarPorGenero`**
Funciones auxiliares para filtrar contenido por tipo o género.

### **7. `openModal`**
Abre el modal para agregar o editar contenido, configurando el estado correspondiente.

### **8. `guardarPelicula`**
Guarda o actualiza una película o serie en la lista. Si el contenido ya existe, lo actualiza; de lo contrario, lo agrega como nuevo.

### **9. `ordenamientoRating` y `ordenamientoAnio`**
Ordenan la lista de películas y series por calificación o año, en orden ascendente o descendente.

### **10. `filtroNombre`**
Filtra el contenido por coincidencias en el título o director.

### **11. `renderContentFilterForWord`**
Renderiza el contenido filtrado por título o director.

### **12. `renderContentView` y `renderContentNotView`**
Renderizan las listas de contenido visto y no visto, respectivamente.

### **13. `renderMensajeLike`**
Muestra un mensaje temporal cuando se cambia el estado de "visto" de un contenido.

## **Renderizado principal**
El componente retorna un `main` que contiene las siguientes secciones:

### **1. Modal**
Un formulario modal para agregar o editar películas y series. Incluye campos como título, director, género, calificación, año y URL de la imagen.

### **2. Filtros**
Un conjunto de filtros para buscar y ordenar contenido:
- Filtro por género.
- Filtro por tipo de contenido.
- Filtro por rango de calificación.
- Ordenamiento por calificación y año.

### **3. Contenido**
Secciones para mostrar:
- Contenido buscado por título o director.
- Botón para agregar nuevas películas o series.
- Estadísticas de contenido visto y no visto.
- Listas de contenido visto y no visto.

## **Estilos**
Los estilos se importan desde `Home.module.css` y se aplican a través de la propiedad `className`.

## **Dependencias**
Este archivo depende de los siguientes componentes y constantes:
- **Componentes**: `Card`, `EstadoVisto`, `Tittle`, `SelectFiltro`.
- **Constantes**: `library`, `generos`, `buscarRating`.


# Documentación del archivo `Home.module.css`

Este archivo contiene los estilos CSS utilizados en la página principal del componente `Home.jsx`. A continuación, se describe la funcionalidad de cada clase y cómo se aplica en la interfaz.

---

## **Clases principales**

### **1. `.contenidoFiltrado`**
- Define el ancho y altura del contenedor de contenido filtrado.
- Margen izquierdo del 2%.

---

### **2. `.container_busqueda`**
- Contenedor para la sección de búsqueda.
- Estilo de diseño flexible con dirección de columna.

---

### **3. `.container_filtros`**
- Contenedor para los filtros.
- Centra los elementos y aplica un fondo oscuro (`#242424`).

---

### **4. `.container_peliculas`**
- Contenedor para las películas y series.
- Utiliza un diseño de cuadrícula con varias filas.
- Margen izquierdo de 20px y margen inferior de 30px.

---

### **5. `.contentBuscado`**
- Centra horizontalmente el contenido buscado.
- Ocupa el 100% del ancho.

---

### **6. `.container_vistas`**
- Contenedor para las estadísticas de contenido visto.
- Altura fija de 50px.

---

### **7. `.container_main`**
- Contenedor principal de la página.
- Diseño de cuadrícula con dos columnas: una para los filtros y otra para el contenido principal.

---

### **8. `.filtros`**
- Contenedor para los filtros.
- Diseño flexible con dirección de columna.
- Fondo oscuro y posición fija.

---

### **9. `.container_ascendenteDescendente`**
- Contenedor para los controles de ordenamiento (ascendente/descendente).
- Diseño flexible con dirección de columna.

---

### **10. `.inputFiltros`**
- Contenedor para los filtros de entrada.
- Diseño flexible con dirección de columna.

---

### **11. `.tittle_filtros` y `.subTittle_filtros`**
- Estilos para los títulos y subtítulos de los filtros.
- Tamaño de fuente grande y márgenes definidos.

---

### **12. `.selects`**
- Contenedor para los selectores de filtros.
- Diseño flexible con dirección de fila y espacio entre elementos.

---

### **13. `.select_filtros`**
- Estilo para los elementos `<select>` de los filtros.
- Fondo oscuro, bordes redondeados y transición suave al interactuar.

---

### **14. `.Inputs`**
- Estilo para los elementos de entrada.
- Márgenes definidos y tamaño de fuente grande.

---

### **15. `.input`**
- Estilo para los campos de entrada.
- Bordes redondeados y padding interno.

---

### **16. `.container_inputBusqueda`**
- Contenedor para el campo de búsqueda.
- Centra los elementos y aplica un margen superior del 3%.
- Posición fija para mantener el campo visible.

---

### **17. `.container_buttonAgregarPeli`**
- Contenedor para el botón de agregar películas/series.
- Espaciado entre elementos.

---

### **18. `.buttonAgregarPeli`**
- Botón para agregar contenido.
- Fondo oscuro, texto blanco, bordes redondeados y sombra.
- Transición suave al interactuar.

---

### **19. `.inputBusquedaPeli`**
- Campo de entrada para buscar películas o series.
- Fondo con una imagen de lupa, bordes redondeados y padding interno.

---

### **20. `.container_cards`**
- Contenedor para las tarjetas de películas/series.
- Diseño de cuadrícula con cuatro columnas y espacio entre elementos.

---

### **21. `.containerEstadoVisto`**
- Contenedor para las estadísticas de contenido visto/no visto.
- Tamaño de fuente grande y diseño flexible.

---

### **22. `.modal`**
- Estilo para el modal de agregar/editar contenido.
- Fondo semitransparente, posición fija y centrado en la pantalla.

---

### **23. `.modal_container`**
- Contenedor interno del modal.
- Fondo blanco, bordes redondeados y diseño flexible.

---

### **24. `.form_agregar`**
- Estilo para el formulario dentro del modal.
- Diseño flexible con dirección de columna y espacio entre elementos.

---

### **25. `.modal_header`**
- Encabezado del modal.
- Espaciado entre el título y el botón de cerrar.

---

### **26. `.button`**
- Botón genérico con fondo azul, texto blanco y bordes redondeados.
- Transición suave al interactuar.

---

### **27. `.inputForm`**
- Estilo para los campos de entrada en el formulario.
- Bordes redondeados, fondo claro y sombra.

---

### **28. `.select`**
- Estilo para los elementos `<select>` en el formulario.
- Bordes redondeados, fondo claro y transición suave.

---

### **29. `.inputNumber`**
- Estilo para los campos de entrada numérica.
- Similar a `.select` pero con un ancho fijo.

---

### **30. `.btnCerrar`**
- Botón para cerrar el modal.
- Fondo transparente, texto rojo y transición suave al interactuar.

---

### **31. `.container_rating`**
- Contenedor para los filtros de calificación.
- Diseño flexible con dirección de columna.

---

### **32. `.container_tittle_favicon`**
- Contenedor para el título y el ícono de favoritos.
- Diseño flexible con dirección de fila.

---

### **33. `.favIcon`**
- Estilo para el ícono de favoritos.
- Tamaño fijo y visibilidad controlada.

---

### **34. `.toast`**
- Estilo para el mensaje emergente (toast).
- Posición fija, fondo oscuro, texto blanco y animación de aparición/desaparición.

---

## **Animaciones**

### **1. `@keyframes aparecerDesaparecer`**
- Define la animación para el mensaje emergente (toast).
- Cambia la opacidad y el tamaño durante 1.5 segundos.

---

## **Media Queries**

### **1. `@media (max-width: 1470px)`**
- Ajusta el diseño para pantallas más pequeñas:
  - Cambia el diseño de cuadrícula a una sola columna.
  - Modifica la dirección de los filtros y otros contenedores a columna.
  - Hace visible el ícono de favoritos.

---

# Documentación del archivo `main.jsx`

Este archivo es el punto de entrada principal de la aplicación React. Su propósito es inicializar y renderizar la aplicación en el DOM del navegador.

---

## **Importaciones**

1. **`StrictMode`** (de React):
   - Es un componente que activa verificaciones adicionales y advertencias en el desarrollo.
   - Ayuda a identificar problemas potenciales en la aplicación, como el uso de APIs obsoletas.

2. **`createRoot`** (de `react-dom/client`):
   - Método para inicializar la aplicación React en el DOM.
   - Es parte de la API de React 18, que introduce el modo concurrente.

3. **`./index.css`**:
   - Archivo de estilos globales para la aplicación.

4. **`App`**:
   - Componente principal de la aplicación, importado desde `App.jsx`.

---

## **Renderizado**

### **`createRoot`**
- Se utiliza para seleccionar el elemento raíz del DOM donde se montará la aplicación. En este caso:
  ```jsx
  document.getElementById('root')


# Documentación del archivo `package.json`

El archivo `package.json` es un archivo de configuración clave para el proyecto React. Define las dependencias, scripts y metadatos del proyecto.

---

## **Metadatos del proyecto**

- **`name`**: `"proyectreact"`  
  Nombre del proyecto.

- **`private`**: `true`  
  Indica que el proyecto es privado y no se puede publicar en el registro de npm.

- **`version`**: `"0.0.0"`  
  Versión inicial del proyecto.

- **`type`**: `"module"`  
  Especifica que el proyecto utiliza módulos ES (ECMAScript).

---

## **Scripts**

Los scripts definidos en la sección `"scripts"` permiten ejecutar tareas comunes en el proyecto:

1. **`dev`**:  
   ```bash
   vite


Cada archivo tiene una función específica en la aplicación. A continuación, se describen sus responsabilidades principales:  

### 🏠 **`Home.jsx`**  
Este archivo implementa la página principal de la aplicación. Aquí se gestionan las películas y series, los filtros y el modal interactivo.  

### 🎨 **`Home.module.css`**  
Contiene los estilos CSS para la página principal. Incluye clases para el diseño responsive, animaciones y más.  

### 🚀 **`main.jsx`**  
Punto de entrada de la aplicación. Renderiza el componente principal (`App`) en el DOM.  

### 📦 **`package.json`**  
Archivo de configuración del proyecto. Define las dependencias, scripts y metadatos del proyecto.  

---

## 🛠️ **Instalación**

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:  

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/react-movie-series-pwa.git

# Ingresa al directorio del proyecto
cd proyectReact

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```


¡Gracias por visitar nuestro proyecto! 🎉  
