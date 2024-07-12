# Configuración de sparrest

Los datos con los que se pueden probar la web se encuentran en la carpeta sparrest-config. Hay que copiar la carpeta ```public``` y el fichero ```db.json``` a la raíz del proyecto de sparrest.

## Usuarios

 Los usuarios disponibles son 'user1' y 'user2', cuya contraseña es igual al nombre

### Corrección

Está comentado en el código y en la página de signup hay un texto que lo explica. Después de hacer ciertas peticiones, creo que en concreto las que modifican la base de datos, la página se recarga haga lo que haga por lo que hay un par de sitios en los que no pude hacer correctamente las redirecciones con el setTimeout. La cosa es que además, debugeando estos errores me di cuenta que sin ```debugger;``` y con setTimeout hace lo que comento de recargar la página cuando se ejecutan todas las funciones. En cambio si sí pongo ```debugger;```, se ve que le da tiempo al setTimeout de terminar de contar antes de que termine la ejecución, porque después el código sigue ejecutándose en las líneas que inyecta el navegador y llega hasta la parte en la que el socket hace reload, pero en este caso hace la redirección.
