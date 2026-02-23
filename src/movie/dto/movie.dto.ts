import {IsString} from 'class-validator';

export class MovieDto{

    @IsString()
    name:string;
    @IsString()
    lastName:String;
}