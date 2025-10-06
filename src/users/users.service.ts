import { Injectable } from '@nestjs/common';

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

    create(user:any){
        const newUser={id:Date.now(),...user};
        this.users.push(newUser);
        return newUser;
    }
}
