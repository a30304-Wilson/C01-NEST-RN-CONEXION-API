# EJERCICIO 02

## Qué he aprendido

He aprendido:

- @Query · filter()
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta:

¿Cuándo usarías /juegos/3 y cuándo /juegos?genero=aventura?

### Respuesta:

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

Cree cuatro juegos y probe la ruta con y sin filtro de género, conservando la funcionalidad principal del ejemplo.

juegos.controller.ts:

```
import { Controller, Get, Query, Param } from '@nestjs/common';
import { JuegosService } from './juegos.service.js';

@Controller('juegos')
export class JuegosController {

    constructor(
        private readonly juegosService: JuegosService,
    ) {}

    @Get()
        findAll(@Query('genero') genero?: string) {
        return this.juegosService.findAll(genero);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.juegosService.findOne(Number(id));
    }
}
```

juegos.service.ts:

```
import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
    private juegos = [
        { id: 1, nombre: 'The Legend of Zelda: Breath of the Wild', genero: 'Aventura' },
        { id: 2, nombre: 'Super Mario Odyssey', genero: 'Plataforma' },
        { id: 3, nombre: 'The Witcher 3: Wild Hunt', genero: 'RPG' },
        { id: 4, nombre: 'Minecraft', genero: 'Sandbox' },
        { id: 5, nombre: 'Fortnite', genero: 'Battle Royale' },
    ];

    findAll(genero?: string) {
        if (!genero) return this.juegos;
        return this.juegos.filter(j => j.genero === genero);
    }

    findOne(id: number) {
        return this.juegos.find(j => j.id === id);
    }
}
```

## Resultado.

Al entrar sin filtro en `http://localhost:3000/pizzas?` se muestra el texto:

```
[{"id":1,"nombre":"The Legend of Zelda: Breath of the Wild","genero":"Aventura"},{"id":2,"nombre":"Super Mario Odyssey","genero":"Plataforma"},{"id":3,"nombre":"The Witcher 3: Wild Hunt","genero":"RPG"},{"id":4,"nombre":"Minecraft","genero":"Sandbox"},{"id":5,"nombre":"Fortnite","genero":"Battle Royale"}]
```

Al usar el filtro los resultados son los esperados.
Ejemplo, entrando en `http://localhost:3000/juegos?genero=RPG`:

```
[{"id":3,"nombre":"The Witcher 3: Wild Hunt","genero":"RPG"}]
```