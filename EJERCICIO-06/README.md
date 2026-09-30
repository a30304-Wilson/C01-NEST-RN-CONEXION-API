# EJERCICIO 06

## Qué he aprendido

He aprendido:

- useState
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta:

¿Qué aporta useState frente a una variable normal?

### Respuesta:

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

### Backend

**main.ts**
- Comprobé que tenía `app.enableCors()` para que el frontend pueda hacer peticiones al backend.
- Dejé el puerto fijo en `app.listen(3000)`.

**mensaje.controller.ts**
- Generé el controlador con `nest g controller mensaje`.
- Definí la ruta con `@Controller('mensaje')` y escribí el método `obtenerMensaje()` con `@Get()`, que devuelve `{ texto: '¡Conexión conseguida!' }`.

**app.module.ts**
- Al generar el controlador con `nest g`, `MensajeController` se registró en el módulo.
- No generé ningún Service, porque la guía indica que este ejercicio no lo necesita.

### Frontend

**App.tsx**
- Añadí el estado `mensaje` con `useState('🔴 Sin conectar')`, para mostrar 🔴 antes de conectar.
- En `cargarMensaje` hago el `fetch` a `API_URL + '/mensaje'`, convierto la respuesta con `respuesta.json()` y guardo `'🟢 ' + datos.texto` con `setMensaje`, para mostrar 🟢 cuando llega la respuesta.
- Añadí un `try/catch` que muestra `🔴 Error de conexión` si falla la petición.
- Usé `SafeAreaView` de `react-native-safe-area-context` y lo envolví en `SafeAreaProvider` para que funcione en la web.
- Definí `API_URL` con la IP local de mi ordenador. Corregí un error inicial: usaba `https` y tiene que ser `http`, porque Nest en local no tiene HTTPS.
- Añadí un título "Estado del backend", un `<Text>` que muestra el estado y un botón "Conectar".
- Creé mis propios estilos (`container`, `title` y `status`).

## Resultado.

Al abrir la app aparece "Estado del backend" y el texto `🔴 Sin conectar`. Al pulsar el botón "Conectar", la app hace una petición `GET /mensaje` a NestJS y el texto cambia a `🟢 ¡Conexión conseguida!`. Si el backend no responde, muestra `🔴 Error de conexión`.