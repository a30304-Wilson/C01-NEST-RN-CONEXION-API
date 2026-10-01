# EJERCICIO 08

## Qué he aprendido

- FlatList · array
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta

¿Qué relación existe entre el array del Service y data={productos}?

### Respuesta

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

### Backend

**main.ts**
- Mantuve `app.enableCors()` y el puerto fijo en `app.listen(3000)`.

**productos.service.ts**
- Lo generé con `nest g service productos`.
- Guardé los productos en un array privado con `id`, `nombre`, `precio` y `emoji`, y creé el método `findAll()` que lo devuelve.

**productos.controller.ts**
- Lo generé con `nest g controller productos` y definí la ruta `GET /productos` con `@Controller('productos')` y `@Get()`.
- Inyecté `ProductosService` en el constructor y el método `findAll()` devuelve lo que le da el Service.

**app.module.ts**
- Al generar el controlador y el servicio con `nest g`, `ProductosController` y `ProductosService` se registraron en el módulo.

### Frontend

**App.tsx**
- Definí el tipo `Producto` (`id`, `nombre`, `precio`, `emoji`) y el estado `productos` con `useState<Producto[]>([])`.
- Escribí `cargarProductos`, que hace el `fetch` a `API_URL + '/productos'` y guarda el array recibido con `setProductos`.
- Usé `useEffect` con `[]` para cargar los productos automáticamente al abrir la pantalla.
- Usé `FlatList` con `data={productos}` y `keyExtractor` para pintar cada producto como una tarjeta (`View` con emoji, nombre y precio).
- Envolví `SafeAreaView` en `SafeAreaProvider` para que funcione en la web.
- Definí `API_URL` con la IP local de mi ordenador.
- Creé los estilos `container`, `title` y `card` (fondo azul claro, bordes redondeados y margen entre tarjetas).

## Resultado

Al abrir la app aparece el título "🍴 Food Lab" y, sin pulsar nada, la app hace una petición `GET /productos` a NestJS. Después se muestra una lista de tarjetas con los cuatro productos del backend, cada una con su emoji, su nombre y su precio en euros.