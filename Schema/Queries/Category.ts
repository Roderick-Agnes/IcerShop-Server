import { GraphQLList, GraphQLInt } from 'graphql';
import { CategoryType } from '../TypeDefs/CategoryType';
import { Categories } from '../Entities/Categories';
import { Pagination } from '../../globalType';

export const GET_ALL_CATEGORIES = {
	type: new GraphQLList(CategoryType),
	args: {
		limit: {type: GraphQLInt},
		start: {type: GraphQLInt}
    },
	async resolve(parent: any, args:Pagination):Promise<Categories[]>  {
		const {limit, start} = args
		
		return Categories.find({
			take: limit || 5,
			skip: start || 0
		})
	}
}