import { DynamicModule, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

//Creacion de modulo dinamico


@Module({})
export class LoggerModule {

    static register(prefix: string):DynamicModule{
        return{

            module:LoggerModule,
            providers:[
                {
                    provide:LoggerService,
                    //Pasando valor dinamico
                    useFactory:() => new LoggerService(prefix)
                },
            ],
            exports:[LoggerService],
        };
    }
}
