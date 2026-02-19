import {IsString,Matches,MinLength} from 'class-validator';

export class UpdateUserDto{

    @IsString()
    @MinLength(3,{message:'Name must be at least 3 characters long'})
    @Matches(/^[a-zA-Z0-9_]+$/, {message:'Name can only contain letters, numbers and underscores'})
    name:string;
};