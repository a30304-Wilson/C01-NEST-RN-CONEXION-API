# EJERCICIO 03

## Qué he aprendido

He aprendido:

- @Param · find()
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta:

¿Por qué convertimos id con Number(id)?

### Respuesta:

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

Añadi máscotas al array `mascotas` que antes estaba vacio.

Quedando el código de `mascotas.service.ts` de la siguiente forma:

```
import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class MascotasService {
    mascotas = [
        { id: 1, nombre: 'Fido', tipo: 'Perro' },
        { id: 2, nombre: 'Miau', tipo: 'Gato' },
        { id: 3, nombre: 'Nemo', tipo: 'Pez' },
    ];

    findOne(id: number) {
        return this.mascotas.find(m => m.id === id);
    }
}
```

Y el de `mascotas.controller.ts`:

```
import { Controller, Get, Param } from '@nestjs/common';
import { MascotasService } from './mascotas.service.js';

@Controller('mascotas')
export class MascotasController {
    constructor(private readonly service: MascotasService) {}
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(Number(id));
    }
}
```

## Resultado.

Al entrar en `http://localhost:3000/mascotas/numero` se muestra el texto de la posición del array elegida.

Ejemplo con la posición 1 del array:

```
{"id":1,"nombre":"Fido","tipo":"Perro"}
```