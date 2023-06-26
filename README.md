# Journal App

La Journal App es una aplicación de diario/agenda en línea que permite a los usuarios registrar sus pensamientos, actividades diarias y agregar fotos a cada registro. La aplicación está desarrollada en Vue 3 y utiliza Vuex para la gestión del estado. La información se guarda en Firebase utilizando la funcionalidad de datos en tiempo real que ofrece Firebase.

## Funcionalidades

- Registro de Pensamientos y Actividades: Los usuarios pueden agregar nuevos registros ingresando un título y una descripción en los campos correspondientes. También tienen la opción de adjuntar una foto al registro. Cada registro se guarda con la fecha actual del día en el que se realizó.

- Listado de Registros: Los registros se muestran en una lista en la parte izquierda de la aplicación. Los usuarios pueden ver los títulos de los registros, su descripción (reducida) y la fecha en que fueron creados.

- Edición de Registros: Los usuarios pueden editar los registros existentes. Pueden cambiar el título, la descripción y la foto del registro, sin embardo se cambiará la fecha al día en el que se edite el registro.

- Eliminación de Registros: Los usuarios tienen la opción de eliminar registros de la lista.

- Barra de Búsqueda: La aplicación incluye una search bar que permite filtrar el listado de registros. Los usuarios pueden buscar registros por titulo, fecha o descripción del registro.

