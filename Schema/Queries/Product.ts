import { GraphQLList, GraphQLInt } from 'graphql';
import { Products } from '../../Entities/Products';
import { ProductType } from '../TypeDefs/ProductType';
import { GraphQLString } from 'graphql';
import { Pagination } from '../../globalType';


export const GET_ALL_PRODUCTS = {
	type: new GraphQLList(ProductType), // ProductType defined at TypeDefs/Product file
	args: {
		limit: {type: GraphQLInt},
		start: {type: GraphQLInt}
    },
	async resolve(parent: any, args:Pagination):Promise<Products[]>  {
		const {limit, start} = args

		return Products.find({
			take: limit || 10,
			skip: start || 0,
		})
	}
}

export const GET_PRODUCTS_BY_CATEGORY = {
	type: new GraphQLList(ProductType), // ProductType defined at TypeDefs/Product file
	args: {
		limit: {type: GraphQLInt},
		start: {type: GraphQLInt},
		productType: {type: GraphQLString}
    },
	async resolve(parent: any, args:Pagination):Promise<Products[]>  {
		const {limit, start, productType} = args
		
		return Products.find({
			where: {
				category: productType
			},
			take: limit || 10,
			skip: start || 0,
		})
	}
}
