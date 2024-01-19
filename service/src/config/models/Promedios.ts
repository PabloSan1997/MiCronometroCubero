/* eslint-disable no-mixed-spaces-and-tabs */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm';
import { Resoluciones } from './Resoluciones';
import { Usuario } from './Usuario';

@Entity()
export class Promedio {
    @PrimaryGeneratedColumn('uuid')
    	id_prom: string;

    @Column('double precision')
    	avo5: number;

    @Column('double precision')
    	media: number;

    @Column('double precision')
    	mejor: number;

    @Column('double precision')
    	peor: number;

    @CreateDateColumn()
    	fecha:string;

    @OneToMany(()=>Resoluciones, resoluciones => resoluciones.promedio)
    	resoluciones:Resoluciones[];

    @ManyToOne(()=>Usuario, usuario => usuario.promedio,{onDelete:'CASCADE'})
    	usuario:Usuario;
}