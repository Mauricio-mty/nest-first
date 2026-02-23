import {IsString,ValidateNested} from 'class-validator';
import { NameDto } from './name.dto';
import {Type} from 'class-transformer';

export class CreateUserDto{
    
    @ValidateNested()
    @Type(()=>NameDto)
    user:NameDto;;
} 