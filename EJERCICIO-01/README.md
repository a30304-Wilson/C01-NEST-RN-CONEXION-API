# EJERCICIO 01

## Qué he aprendido

He aprendido:

- @Controller · @Get
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta de Comprensión: 

¿Qué función cumple @Get() en este Controller?

### Respuesta Seleccionada: 

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

Nos daban el siguiente código para el @Get del archivo `hola.controller.ts`:

```
@Get()
saludar() {
    return { mensaje: '¡Hola desde NestJS! 🚀' };
}
```

Y cambie lo que se devuelve en el return tal y como lo solicitan:

```
@Get()
saludar() {
    return { curso: 'DAM' };
}
```

## Resultado

Al entrar en `http://localhost:3000/hola?` se muestra el texto:

```
{"curso":"DAM"}
```