# EJERCICIO 07

## Qué he aprendido

He aprendido:

- useEffect
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta:

¿Qué diferencia hay entre llamar cargarMensaje desde un botón y desde useEffect?

### Respuesta:

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

**main.ts**
- Mantuve `app.enableCors()` y el puerto fijo en `app.listen(3000)`, como en la guía.

**mensaje.controller.ts**
- Generé el controlador con `nest g controller mensaje`.
- Definí la ruta `GET /mensaje` con `@Controller('mensaje')` y `@Get()`. El método `obtenerMensaje()` devuelve `{ texto: 'Backend disponible' }`.

**app.module.ts**
- Al generar el controlador con `nest g`, `MensajeController` se registró en el módulo. No generé ningún Service, porque este ejercicio no lo necesita.

### Frontend

**App.tsx**
- Añadí `useEffect` con un array de dependencias vacío (`[]`) para que `cargarMensaje()` se ejecute automáticamente una sola vez, al abrir la pantalla.
- Inicié el estado con `useState('Cargando...')`, que es lo que se ve mientras llega la respuesta.
- Conservé el botón "Recargar", que vuelve a llamar a `cargarMensaje` cuando lo pulso.
- Reutilicé `cargarMensaje`, que hace el `fetch` a `API_URL + '/mensaje'`, convierte la respuesta con `respuesta.json()` y guarda `'🟢 ' + datos.texto` con `setMensaje`.
- Envolví `SafeAreaView` en `SafeAreaProvider` para que funcione en la web.
- Definí `API_URL` con la IP local de mi ordenador.
- Mantuve los estilos `container`, `title` y `status`.

## Resultado

Al abrir la app aparece el título "Full Stack Status" y el texto `Cargando...`. Sin pulsar nada, la app hace la petición `GET /mensaje` a NestJS y el texto cambia a `🟢 Backend disponible`. Si pulso el botón "Recargar", vuelve a pedir el dato al backend y actualiza el texto.