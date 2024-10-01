# 🚀 **Random User Data Display** 🌍

### 📋 **Descripción**
Este proyecto web consume la API de [RandomUser.me](https://randomuser.me/) para mostrar información sobre usuarios aleatorios, tales como la **imagen**, **nombre completo**, **correo electrónico** y **número de teléfono**. Utilizamos la tecnología de JavaScript moderno, implementando **async/await** para manejar las solicitudes a la API y el **patrón de módulo** para organizar el código.

### 🧠 **Características**
- **Consumo de API en tiempo real**: Cada vez que se carga la página, se hace una petición a la API para obtener 10 usuarios aleatorios.
- **Manejo de errores**: Si algo falla en la solicitud a la API, se muestra un mensaje de error en la consola, y no se interrumpe la experiencia del usuario.
- **Presentación visual atractiva**: Cada usuario se presenta dentro de un bloque estilizado, que incluye su foto de perfil, nombre completo, teléfono y correo electrónico.
- **Modularidad**: El código está encapsulado en un patrón de módulo, lo que facilita su mantenimiento y escalabilidad.

### 🔧 **Funcionalidades Técnicas**
1. **Función `getUsers()`**:
   - Esta función es asíncrona y utiliza `fetch` para solicitar datos de la API `https://randomuser.me/api/?results=10`.
   - Maneja posibles errores con un bloque `try/catch` y retorna un array de usuarios si la solicitud es exitosa.
   - En caso de error, retorna un array vacío y registra el error en la consola.

2. **Función `displayUsers()`**:
   - Es responsable de mostrar la información de los usuarios en la página.
   - Por cada usuario, se crea un bloque HTML que contiene su imagen de perfil, nombre, teléfono y correo electrónico.
   - Los bloques de usuario se añaden dinámicamente a un contenedor principal en el DOM.

### 🛠️ **Tecnologías Utilizadas**
- **HTML5**: Estructura básica de la página.
- **JavaScript (ES6+)**: Programación asíncrona y patrón de módulo.
- **CSS (en línea)**: Estilos aplicados dinámicamente para mejorar la visualización de los datos.
- **API**: Consumo de la API [RandomUser.me](https://randomuser.me/) para obtener los datos.

### 📂 **Estructura del Proyecto**
- ├── index.html # Archivo HTML principal que incluye el script 
- ├── script y alternativa script2.js # Archivo JavaScript donde está implementada la funcionalidad 
- └── README.md # Este archivo README con detalles del proyecto

### 🖥️ **Uso del Proyecto**

1. **Clona el repositorio** en tu máquina local.**
   ```bash
   git clone https://github.com/tu-repositorio/random-user-display.git

2. **Navega a la carpeta del proyecto:**
   ```bash
   cd random-user-display
3. **Abre el archivo index.html en tu navegador de preferencia para cargar la página.**

4. **Automáticamente, verás los datos de 10 usuarios aleatorios presentados en la página.**
   ### 🖥️ **Fragmento de Código - javascript**
   ```bash
   const UserModule = (() => {
     const getUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log('Hay un error', error);
      return [];
    }
     };

     const displayUsers = async () => {
    const users = await getUsers();
    const contenedor = document.getElementById('user-data');

    users.forEach(user => {
      const div = document.createElement('div');
      div.style.width = '200px';
      div.style.textAlign = 'center';
      div.style.border = '1px solid black';
      div.style.display = 'inline-block';
      div.style.padding = '10px';
      div.style.margin = '10px';

      div.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}" style="width:100px; height:100px; border-radius:50%;"/>
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>Teléfono: ${user.phone}</p>
        <p>Email: ${user.email}</p>
      `;
      contenedor.appendChild(div);
    });
     };

     return {
    displayUsers,
     };
   })();

   UserModule.displayUsers();

### 🎨 **Estilo y Diseño**
Cada bloque de usuario tiene un diseño limpio y minimalista, con una imagen de perfil circular, el nombre destacado y los detalles del usuario claramente visibles.
Las tarjetas están centradas y distribuidas en la pantalla con márgenes que añaden separación para mejorar la legibilidad.

### 🧪 **Posibles Mejoras**
Implementar paginación para cargar más usuarios dinámicamente.
Añadir un filtro para buscar usuarios por nombre o país.
Mejorar el estilo visual con CSS personalizado o frameworks como Bootstrap.

### 💬 **Comentarios**
Este proyecto es una excelente introducción al uso de APIs y a la creación de aplicaciones modulares utilizando JavaScript moderno. A medida que lo desarrollas, puedes agregar más funcionalidades y mejorar la interfaz de usuario.
