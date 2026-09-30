# EJERCICIO 02

## Qué he aprendido

He aprendido:

- Service · array
- Cómo encaja en el recorrido Full Stack
- Cómo modificar un ejemplo funcional sin empezar desde cero

## Respuesta a la pregunta de comprensión

### Pregunta:

¿Por qué colocamos el array en el Service y no en el Controller?

### Respuesta:

Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir.

## Qué he modificado

Añadi una tercera pizza con emoji y precio, conservando la funcionalidad principal del ejemplo.

Pasamos del siguiente código:

- pizzas.controller.ts:

```
import { Controller, Get } from '@nestjs/common';
import { PizzasService } from './pizzas.service.js';

@Controller('pizzas')
export class PizzasController {
    constructor(private readonly pizzasService: PizzasService) {}

    @Get()
    findAll() {
        return this.pizzasService.findAll();
    }
}
```

- pizzas.service.ts:
```
import { Injectable } from '@nestjs/common';

@Injectable()
export class PizzasService {
    private pizzas = [
        { id: 1, nombre: 'Margarita', precio: 9 },
        { id: 2, nombre: 'Pepperoni', precio: 11 }
    ];
    findAll() { return this.pizzas; }
}
```

Y modifique el service terminando de la siguiente forma:

- pizzas.service.ts:

```
import { Injectable } from '@nestjs/common';

@Injectable()
export class PizzasService {
    private pizzas = [
        { id: 1, nombre: 'Margarita', precio: 9 },
        { id: 2, nombre: 'Pepperoni', precio: 11 },
        { id: 3, nombre: 'Cuatro Quesos', precio: 12 }
    ];
    findAll() { return this.pizzas; }
}
```

## Resultado.

Al entrar en `http://localhost:3000/pizzas?` se muestra el texto:

```
[{"id":1,"nombre":"Margarita","precio":9},{"id":2,"nombre":"Pepperoni","precio":11},{"id":3,"nombre":"Cuatro Quesos","precio":12}]
```