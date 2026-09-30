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
