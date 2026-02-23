import{ Entity,PrimaryGeneratedColumn,Column } from 'typeorm';
import {Name} from './embedded/name.embeddable';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    title:string;

    @Column(()=>Name)
    director:string;

}
