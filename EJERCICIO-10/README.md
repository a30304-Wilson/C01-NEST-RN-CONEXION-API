# EJERCICIO 10

## Qué he aprendido

- PATCH
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta

¿Por qué los likes vuelven al valor inicial cuando reiniciamos NestJS?

### Respuesta

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

### Backend

**main.ts**
- Mantuve `app.enableCors()` y el puerto fijo en `app.listen(3000)`. El CORS por defecto ya permite el método `PATCH`, que es el que usa este ejercicio.

**mascotas.service.ts**
- Lo generé con `nest g service mascotas`.
- Guardé la mascota en un array privado con `id`, `nombre` y `likes` (Toby, con 14 likes).
- Creé el método `darLike(id)`, que busca la mascota con `find`, le suma un like con `likes++` y devuelve la mascota actualizada. Si no existe, devuelve `undefined`.

**mascotas.controller.ts**
- Lo generé con `nest g controller mascotas`.
- Definí la ruta `PATCH /mascotas/:id/like` con `@Controller('mascotas')` y `@Patch(':id/like')`.
- Leí el `id` de la URL con `@Param`, lo convertí a número con `Number(id)` e inyecté `MascotasService` para llamar a `darLike`.

**app.module.ts**
- Al generar el controlador y el servicio con `nest g`, `MascotasController` y `MascotasService` se registraron en el módulo.

### Frontend

**App.tsx**
- Añadí el estado `likes` con `useState(14)`, que es el número de likes que se muestra en pantalla.
- Escribí `darLike`, que hace un `fetch` a `API_URL + '/mascotas/1/like'` con `{ method: 'PATCH' }`, convierte la respuesta con `respuesta.json()` y actualiza el estado con `setLikes(mascota.likes)`.
- Mostré el nombre "🐶 Toby", el contador "❤️ {likes} likes" y un botón "❤️ Me gusta" conectado a `darLike`.
- Envolví `SafeAreaView` en `SafeAreaProvider` para que funcione en la web.
- Definí `API_URL` con la IP local de mi ordenador.
- Creé los estilos `container`, `title` y `likes`.

## Resultado

Al abrir la app aparece "🐶 Toby", el texto "❤️ 14 likes" y el botón "❤️ Me gusta". Al pulsar el botón, la app envía una petición `PATCH /mascotas/1/like` a NestJS, que suma un like a Toby y devuelve la mascota actualizada. La app guarda el nuevo valor en el estado y el contador pasa a 15, 16, 17... en cada pulsación.