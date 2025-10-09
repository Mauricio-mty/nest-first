import {IsString} from 'class-validator';

export class CreateUserDto{
    id:string
    
    @IsString()
    name:string;
} 