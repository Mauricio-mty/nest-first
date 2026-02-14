import { Injectable } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import { IdService } from '../utils/id/id.service';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class UsersService {
    //injeccion del provider del uuidn por medio del constructor
  /*  constructor(
        //agregando los providers
        private readonly idService:IdService,
        private readonly logger:LoggerService,
    ){} */

/*
    private users=[
        {id:'1',name:'Ana'},
        {id:'2',name:'Paola'},
    ];
*/
    findAll(){
        //implementacion de modulo dinamico
        this.logger.log(`Listando ${this.users.length} usuarios`);
        return this.users;
    }

    findOne(id:string){
        return this.users.find((data)=>data.id==id);
    }

    //se implementa undto para el formato 
    create(dto:CreateUserDto){
        const newUser = {id:this.idService.generate(),...dto};
        this.users.push(newUser);
         
        //implementacion de modulo dinamico
         this.logger.log(`Creando ususario ${newUser.id}`);

        return newUser;
    }
}
