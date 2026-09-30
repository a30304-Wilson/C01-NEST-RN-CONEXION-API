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
