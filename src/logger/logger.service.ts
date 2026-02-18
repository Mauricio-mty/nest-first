import { Injectable } from '@nestjs/common';

//service para implementar en un modulo dinamico 
@Injectable()
export class LoggerService 
{    
    //encapsulamiento de una propiedad de tipo string
    private prefix: string;

    constructor(prefix: string){
        this.prefix=prefix;
    }


    log(message: string){
        console.log(`[${this.prefix}] ${message}`);
    }


}
