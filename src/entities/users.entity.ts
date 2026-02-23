import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import { Name } from "./embedded/name.embeddable";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column(()=>Name,{prefix:false})
    user:Name;
}