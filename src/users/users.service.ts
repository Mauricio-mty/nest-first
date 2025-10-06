import { Injectable } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users=[
        {id:1,name:'Ana'},
        {id:2,name:'Paola'},
    ];

    findAll(){
        return this.users;
    }

    findOne(id:number){
        return this.users.find((data)=>data.id==id);
    }

    //se implementa undto para el formato 
    create(dto:CreateUserDto){
        const newUser={id:Date.now(),...dto};
        this.users.push(newUser);
        return newUser;
    }
}
