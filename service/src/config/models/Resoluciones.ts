/* eslint-disable no-mixed-spaces-and-tabs */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Promedio } from './Promedios';

@Entity()
export class Resoluciones {
    @PrimaryGeneratedColumn('uuid')
    	id_res: string;

    @Column({ length: 60 })
    	algoritmo: string;

    @Column('double precision')
    	tiempo: number;

    @Column({length:5})
    	tipo: string;

    @ManyToOne(()=>Promedio, promedio => promedio.resoluciones, {onDelete:'CASCADE'})
    	promedio:Promedio;
}