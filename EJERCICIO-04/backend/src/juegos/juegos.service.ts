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
