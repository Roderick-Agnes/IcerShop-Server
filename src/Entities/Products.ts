import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products extends BaseEntity { // BaseEntity imported from typeorm library
	@PrimaryGeneratedColumn()
	id!: string;

	@Column()
	title!: string;

    @Column()
	category!: string;
    
    @Column()
	brand_name!: string;
    
    @Column()
	short_description!: string;
    
    @Column()
	description!: string;
    
    @Column()
	salePrice!: number;
    
    @Column()
	discount!: number;
    
    @Column()
	discountRate!: number;
    
    @Column()
	rootPrice!: number;
    
    @Column("simple-json", {nullable: true})
	quantitySold!: {
        text: string;
        value: number;
    };
    
    @Column()
	thumbnails!: string[];
    
    @Column()
	rating_average!: number;
    
    @Column()
	review_count!: number;
    
    @Column("simple-json", {nullable: true})
	information!:{
        code: string;
        name: string;
        value: string;
    }[];  

    // constructor(_title: string, _category:string, _brand_name: string, _short_description: string, _description: string, _salePrice: number, _discount: number, _discountRate: number, _rootPrice: number, _quantitySold: number, _thumbnails: string[], _rating_average: number, _review_count: number, _information: string[]) {
    //     super()
    //     this.title = _title
    //     this.category = _category
    //     this.brand_name = _brand_name
    //     this.short_description = _short_description
    //     this.description = _description
    //     this.salePrice = _salePrice
    //     this.discount = _discount
    //     this.discountRate = _discountRate
    //     this.rootPrice = _rootPrice
    //     this.quantitySold = _quantitySold
    //     this.thumbnails = _thumbnails
    //     this.rating_average = _rating_average
    //     this.review_count = _review_count
    //     this.information = _information
    // }
}