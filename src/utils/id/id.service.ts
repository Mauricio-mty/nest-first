import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class IdService {
    generate(){//Genera un uuid tipo cadena 
        return randomUUID();
    }
}
