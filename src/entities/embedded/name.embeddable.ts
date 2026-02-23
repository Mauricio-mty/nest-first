import{Column} from "typeorm"

export class Name{
    @Column({name:'name',nullable:true})
    name:String;
    @Column({name:'lastName',nullable:true})
    lastName:String;

}