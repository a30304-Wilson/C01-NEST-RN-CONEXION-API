# EJERCICIO 02

## Qué he aprendido

He aprendido:

- fetch · await · JSON
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta:

¿Por qué el móvil necesita conocer la IP del equipo donde se ejecuta NestJS?

### Respuesta:

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

### Backend

**main.ts**
- Añadí `app.enableCors()` para que el frontend pueda hacer peticiones al backend.
- Fijé el puerto en `app.listen(3000)`.

**mensaje.controller.ts**
- Generé el controlador con `nest g controller mensaje`.
- Definí la ruta con `@Controller('mensaje')` y escribí el método `obtenerMensaje()` con `@Get()`, que devuelve `{ texto: '¡Conexión conseguida! 🚀' }`.

**app.module.ts**
- Al generar el controlador y el servicio con `nest g`, `MensajeController` y `MensajeService` se registraron en el módulo.

**mensaje.service.ts**
- Lo generé con `nest g service mensaje`, tal y como indicaba la guía.

### Frontend

**App.tsx**
- Sustituí el contenido de la plantilla por mi propia pantalla: un título, un botón "Conectar con Nest" y la función `cargarMensaje`.
- Importé `SafeAreaView` desde `react-native-safe-area-context` y añadí `SafeAreaProvider` para que funcionara en la web.
- Añadí el estado `mensaje` con `useState` para guardar la respuesta.
- Escribí el `fetch` a `API_URL + '/mensaje'` con `await`, `respuesta.json()` y `datos.texto`.
- Añadí un `try/catch` para mostrar un mensaje si falla la conexión.
- Definí la constante `API_URL` con la IP de mi ordenador y corregí un `:` sobrante que tenía al final.
- Añadí un `<Text>` debajo del botón para mostrar el mensaje recibido.
- Creé mis propios estilos (`container` y `text`).

## Resultado.

Al pulsar el botón "Conectar con Nest", la app hace una petición `GET /mensaje` al backend y muestra en pantalla el texto `¡Conexión conseguida! 🚀`.
