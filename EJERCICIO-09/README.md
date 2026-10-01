# EJERCICIO 09

## Qué he aprendido

- URL dinámica
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta

Sigue el valor id desde React Native hasta @Param('id'). ¿Por dónde pasa?

### Respuesta

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

**main.ts**
- Mantuve `app.enableCors()` y el puerto fijo en `app.listen(3000)`.

**heroes.service.ts**
- Lo generé con `nest g service heroes`.
- Guardé los héroes en un array privado con `id`, `nombre`, `poder` y `universo`.
- Creé el método `findOne(id)`, que usa `find` para devolver el héroe cuyo `id` coincide con el recibido.

**heroes.controller.ts**
- Lo generé con `nest g controller heroes`.
- Definí la ruta `GET /heroes/:id` con `@Controller('heroes')` y `@Get(':id')`.
- Leí el parámetro de la URL con `@Param`, lo convertí a número con `ParseIntPipe` e inyecté `HeroesService` para llamar a `findOne`.

**app.module.ts**
- Al generar el controlador y el servicio con `nest g`, `HeroesController` y `HeroesService` se registraron en el módulo.

### Frontend

**App.tsx**
- Definí el tipo `Heroe` (`id`, `nombre`, `poder`, `universo`).
- Añadí el estado `id` (el texto del campo, inicialmente `'1'`) y el estado `heroe`, que empieza en `null` hasta que llega una respuesta.
- Usé un `TextInput` con `keyboardType="numeric"`, enlazado con `value={id}` y `onChangeText={setId}`, para escribir el id del héroe.
- Escribí `buscarHeroe`, que hace el `fetch` a `API_URL + '/heroes/' + id` y guarda la respuesta con `setHeroe`.
- Usé renderizado condicional (`{heroe && ...}`) para mostrar el resultado solo cuando hay un héroe.
- Envolví `SafeAreaView` en `SafeAreaProvider` para que funcione en la web.
- Definí `API_URL` con la IP local de mi ordenador.
- Creé los estilos `container`, `title`, `input` y `result`.

## Resultado

Al abrir la app aparece el título "🦸 Busca superhéroe", un campo con el valor `1` y el botón "Buscar". Al pulsarlo, la app hace una petición `GET /heroes/1` a NestJS y muestra debajo el nombre, el poder y el universo del héroe, por ejemplo "Nova · Poder 80 / Universo A". Si escribo otro id (2 o 3) y vuelvo a pulsar, se muestra el héroe correspondiente.