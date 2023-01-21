import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categories extends BaseEntity { // BaseEntity imported from typeorm library
	@PrimaryGeneratedColumn()
	id!: string;

	@Column()
	title!: string;
    
    @Column()
	thumbnail!: string;
    
}