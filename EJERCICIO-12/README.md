# EJERCICIO 12

## Qué he aprendido

- Integración Full Stack
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta

¿Podrías explicar el viaje completo de un dato sin mirar el código?

### Respuesta

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

### Backend

**main.ts**
- Mantuve `app.enableCors()` y el puerto fijo en `app.listen(3000)`. El CORS por defecto permite `GET` y `PATCH`, que son los métodos de este ejercicio.

**criaturas.service.ts**
- Lo generé con `nest g service criaturas`.
- Guardé las criaturas en un array privado con `id`, `nombre`, `nivel`, `poder`, `likes` y `emoji` (Draco, Foxy y Panda-X).
- Creé `findAll()`, que devuelve todas las criaturas.
- Creé `findOne(id)`, que usa `find` para devolver la criatura con ese `id`.
- Creé `darLike(id)`, que reutiliza `findOne`, suma un like con `likes++` y devuelve la criatura actualizada. Si no existe, devuelve `undefined`.

**criaturas.controller.ts**
- Lo generé con `nest g controller criaturas`.
- Definí tres rutas con `@Controller('criaturas')`: `GET /criaturas` con `@Get()`, `GET /criaturas/:id` con `@Get(':id')` y `PATCH /criaturas/:id/like` con `@Patch(':id/like')`.
- Leí el `id` de la URL con `@Param` y lo convertí a número con `Number(id)`.
- Inyecté `CriaturasService` en el constructor.

**app.module.ts**
- Al generar el controlador y el servicio con `nest g`, `CriaturasController` y `CriaturasService` se registraron en el módulo.

### Frontend

**App.tsx**
- Definí el tipo `Criatura` (`id`, `nombre`, `nivel`, `poder`, `likes`, `emoji`).
- Añadí los estados `criaturas` (la lista) y `seleccionada` (la criatura elegida, que empieza en `null`).
- Escribí `cargarCriaturas`, que hace un `fetch` `GET /criaturas` y guarda la lista con `setCriaturas`.
- Escribí `seleccionar(id)`, que hace un `fetch` `GET /criaturas/:id` y guarda la respuesta en `seleccionada`.
- Escribí `darLike`, que hace un `fetch` `PATCH /criaturas/:id/like`, actualiza `seleccionada` con la respuesta y vuelve a llamar a `cargarCriaturas` para que la lista también esté al día.
- Usé `useEffect` con `[]` para cargar la lista al abrir la pantalla.
- Usé una `FlatList` horizontal con `Pressable` para mostrar cada criatura como una tarjeta pulsable que llama a `seleccionar`.
- Usé renderizado condicional (`{seleccionada && ...}`) para mostrar el detalle (emoji, nombre, nivel, poder, likes y botón "Me gusta") solo cuando hay una criatura seleccionada.
- Envolví `SafeAreaView` en `SafeAreaProvider` para que funcione en la web.
- Definí `API_URL` con la IP local de mi ordenador.
- Creé los estilos `container`, `title`, `hero`, `emoji`, `name`, `item` e `itemEmoji`.

## Resultado

Al abrir la app aparece "🧪 Creature Lab" y, sin pulsar nada, una fila horizontal con las tres criaturas (🐲 Draco, 🦊 Foxy y 🐼 Panda-X). Al pulsar una, la app hace un `GET /criaturas/:id` y muestra encima una tarjeta con su emoji, nombre, nivel, poder y likes. Si pulso "❤️ Me gusta", la app envía un `PATCH /criaturas/:id/like` a NestJS, que suma un like y devuelve la criatura actualizada, y el contador de la tarjeta sube en cada pulsación.