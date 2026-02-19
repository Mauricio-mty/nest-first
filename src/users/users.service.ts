import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import { IdService } from '../utils/id/id.service';
import { LoggerService } from '../logger/logger.service';
import {User} from '../entities/users.entity';
import {UserInterface} from './interfaces/user.interface';
import {InjectRepository} from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    //injeccion del provider del uuidn por medio del constructor
    constructor(
        //agregando los providers
        private readonly idService:IdService,
        private readonly logger:LoggerService,
        //inyeccion del repositorio de la entidad user
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){} 
    

   async findAll():Promise<User[]>{
        this.logger.log(`Finding users: ${await this.userRepository.count()}`);
        return this.userRepository.find();
    }

    findOne(id:string){
        this.logger.log(`Finding user with id`);
        return this.userRepository.findOneBy({id:id});
    }

    async update(id:string,update:UpdateUserDto):Promise<User>{
        const user= await this.userRepository.findOneBy({id:id});
        if(!user){
            throw new Error('User not found');
        }
        const userUpdate= Object.assign(user,update);
        this.logger.log(`Updating user: ${id}`);
        return this.userRepository.save(userUpdate);

    }
    //se implementa undto para el formato 
    create(dto:CreateUserDto):Promise<User>{
    //Create instance a partir del dto
     const user = this.userRepository.create(dto);
     //save instance in db
     this.logger.log(`Creating user with id: ${user.id}`);
     return this.userRepository.save(user);
    }
}
