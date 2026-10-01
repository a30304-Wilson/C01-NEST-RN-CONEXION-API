# EJERCICIO 11

## Qué he aprendido

- POST · @Body
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta

¿Qué recorrido realiza el objeto hasta llegar a @Body()?

### Respuesta

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

### Backend

**main.ts**
- Mantuve `app.enableCors()` y el puerto fijo en `app.listen(3000)`. El CORS por defecto permite `POST` y la cabecera `Content-Type`, que usa este ejercicio.

**productos.service.ts**
- Lo generé con `nest g service productos`.
- Guardé los productos en un array privado con `id`, `nombre` y `precio` (Mochila y Auriculares).
- Creé `findAll()`, que devuelve el array.
- Creé `crear(producto)`, que genera un `id` nuevo, construye el producto con `...producto`, lo añade al array con `push` y lo devuelve.
- Definí el tipo `NuevoProducto` para los datos que llegan del frontend.

**productos.controller.ts**
- Lo generé con `nest g controller productos`.
- Definí `GET /productos` con `@Get()`, que devuelve la lista del Service.
- Definí `POST /productos` con `@Post()`, que lee el cuerpo de la petición con `@Body()` y llama a `crear`.
- Inyecté `ProductosService` en el constructor.

**app.module.ts**
- Al generar el controlador y el servicio con `nest g`, `ProductosController` y `ProductosService` se registraron en el módulo.

### Frontend

**App.tsx**
- Definí el tipo `Producto` (`id`, `nombre`, `precio`).
- Añadí los estados `productos`, `nombre` y `precio`. Los dos últimos guardan lo que escribo en los campos.
- Usé dos `TextInput` enlazados con `value` y `onChangeText`. El de precio lleva `keyboardType="numeric"`.
- Escribí `cargarProductos`, que hace un `fetch` `GET` y guarda la lista con `setProductos`.
- Escribí `crearProducto`, que hace un `fetch` con `method: 'POST'`, la cabecera `Content-Type: application/json` y el cuerpo `JSON.stringify({ nombre, precio: Number(precio) })`. Después vacía los campos y vuelve a llamar a `cargarProductos` para refrescar la lista.
- Usé `useEffect` con `[]` para cargar la lista al abrir la pantalla.
- Usé `FlatList` para mostrar cada producto como una tarjeta.
- Envolví `SafeAreaView` en `SafeAreaProvider` para que funcione en la web.
- Definí `API_URL` con la IP local de mi ordenador.
- Creé los estilos `container`, `title`, `input` y `card`.

## Resultado

Al abrir la app aparece "🛒 Mini tienda", dos campos (Nombre y Precio), el botón "Añadir producto" y la lista con Mochila (35 €) y Auriculares (49 €). Si escribo un nombre y un precio y pulso el botón, la app envía un `POST /productos` a NestJS, que guarda el producto y le asigna un id. Después la app vuelve a pedir la lista y el nuevo producto aparece como una tarjeta, con los campos vacíos otra vez.