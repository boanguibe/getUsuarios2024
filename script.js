const UserModule = (() => {
    // Función asíncrona para obtener los usuarios de la API
    const getUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        console.log(data);
        return data.results; // Retorna los resultados de la API
      } catch (error) {
        console.log('Hay un error', error);
        return []; // Si ocurre un error, retornamos un arreglo vacío
      }
    };
  
    // Función asíncrona para mostrar los usuarios en el HTML
    const displayUsers = async () => {
      const users = await getUsers(); // Esperamos los usuarios de getUsers()
      const contenedor = document.getElementById('user-data'); // Seleccionamos el contenedor donde mostrar los datos
  
      // Iteramos sobre los usuarios y los mostramos
      users.forEach(user => {
        const div = document.createElement('div');
        div.style.width = '200px';
        div.style.height = 'auto';
        div.style.textAlign = 'center';
        div.style.border = '1px solid black';
        div.style.display = 'inline-block';
        div.style.padding = '10px';
        div.style.margin = '10px'; // Añadimos margen para un poco de separación entre los elementos
  
        // Llenamos el div con la información del usuario
        div.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}" style="width:100px; height:100px; border-radius:50%;"/>
          <h3>${user.name.first} ${user.name.last}</h3>
          <p style="font-size: 12px">Teléfono: ${user.phone}</p>
          <p style="font-size: 12px">Email: ${user.email}</p>
        `;
  
        // Añadimos el div al contenedor principal
        contenedor.appendChild(div);
      });
    };
  
    // Retornamos la función displayUsers para que sea accesible externamente
    return {
      displayUsers,
    };
  })();
  
  // Llamamos a displayUsers para mostrar los usuarios en la página
  UserModule.displayUsers();
  