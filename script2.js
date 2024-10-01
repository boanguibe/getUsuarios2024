// Módulo patrón con IIFE
const UserModule = (() => {

  // Función asíncrona para obtener datos de la API
  async function obtenerUsuarios() {
    try {
      // Hacemos la petición a la API usando async/await
      const response = await fetch('https://randomuser.me/api/?results=10');
      
      // Verificamos si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud a la API');
      }
      
      // Convertimos la respuesta a formato JSON
      const data = await response.json();
      
      // Llamamos a la función para mostrar los datos en el HTML
      mostrarUsuarios(data.results);
      
    } catch (error) {
      // Manejo de errores
      console.error('Ocurrió un error: ', error.message);
      document.getElementById('user-data').innerHTML = `<p>Error al cargar los datos de usuarios.</p>`;
    }
  }

  // Función para mostrar los datos en el HTML (Imagen, Nombre y Correo)
  function mostrarUsuarios(usuarios) {
    const userContainer = document.getElementById('user-data');
    
    // Limpiamos el contenedor antes de mostrar los datos
    userContainer.innerHTML = '';

    // Iteramos sobre los usuarios y creamos un bloque para cada uno
    usuarios.forEach(usuario => {
      // Creamos un contenedor div para cada usuario
      const userDiv = document.createElement('div');
      userDiv.style.marginBottom = '20px'; // Espacio entre cada usuario

      // Creamos un elemento de imagen
      const userImage = document.createElement('img');
      userImage.src = usuario.picture.medium; // Obtenemos la imagen de perfil del usuario
      userImage.alt = `Imagen de ${usuario.name.first} ${usuario.name.last}`;
      userImage.style.borderRadius = '50%'; // Hacemos la imagen circular
      userImage.style.width = '100px'; // Ajustamos el tamaño de la imagen
      userImage.style.height = '100px';

      // Creamos un párrafo para el nombre completo
      const userName = document.createElement('p');
      userName.textContent = `Nombre: ${usuario.name.first} ${usuario.name.last}`;

      // Creamos un párrafo para el correo
      const userEmail = document.createElement('p');
      userEmail.textContent = `Email: ${usuario.email}`;

      // Creamos un párrafo para el numero de celular
      const userCell = document.createElement('p');
      userCell.textContent = `Celular: ${usuario.cell}`;

      // Agregamos la imagen, el nombre y el correo al div del usuario
      userDiv.appendChild(userImage);
      userDiv.appendChild(userName);
      userDiv.appendChild(userEmail);
      userDiv.appendChild(userCell);

      // Finalmente, agregamos este div al contenedor principal
      userContainer.appendChild(userDiv);
    });
  }

  // Retornamos la función pública que se invoca al cargar la página
  return {
    init: obtenerUsuarios
  };

})();

// Invocamos la función del módulo al cargar la página
UserModule.init();
