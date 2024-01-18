/* eslint-disable no-mixed-spaces-and-tabs */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Promedio } from './Promedios';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    	id_user: string;

    @Column({ unique: true, length: 100 })
    	username: string;

    @Column({ length: 100 })
    	nickname: string;

    @Column({ length: 5000 })
    	password: string;

    @OneToMany(()=> Promedio, promedio => promedio.resoluciones)
    	promedio:Promedio[];
}