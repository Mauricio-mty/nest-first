import { Controller,Get,Post,Body,Param } from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import { UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    //parameter 
    constructor(private readonly usersService:UsersService){}

    @Get()
    findAll():/*Promise<UserInterface[]>*/any{
        return this.usersService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id')id:string){
         return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() body:CreateUserDto){
        return this.usersService.create(body);
    }


}
