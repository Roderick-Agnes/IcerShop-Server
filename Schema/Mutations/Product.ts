import { ProductType } from "../TypeDefs/ProductType";
import { GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import { GraphQLFloat } from "graphql/type";
import { Products } from "../../Entities/Products";
import GraphQLJSON from 'graphql-type-json';

export const CREATE_PRODUCT = {
	type: ProductType,
	args: {
		title: {type: GraphQLString},
		category: {type: GraphQLString},
		brand_name: {type: GraphQLString},
		short_description: {type: GraphQLString},
        description: {type: GraphQLString},
        salePrice: {type: GraphQLInt},
        discount: {type: GraphQLInt},
        discountRate: {type: GraphQLInt},
        rootPrice: {type: GraphQLInt},
        quantitySold: {type: GraphQLJSON },
        thumbnails: {type: new GraphQLList(GraphQLString)},
        rating_average: {type: GraphQLFloat},
        review_count: {type: GraphQLInt},
        information: {type: GraphQLJSON }
    },
	async resolve(parent: any, args: any) {
		// object detructoring here to get all properties of table
		// const {name, username, password} = args;
        await Products.insert(args)
		return args;
	}
}
