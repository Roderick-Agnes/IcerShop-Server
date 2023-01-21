import { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import { GraphQLFloat } from "graphql/type";
import GraphQLJSON from 'graphql-type-json';

export interface information {
    code: string
    name: string
    value: string
}

export const ProductType = new GraphQLObjectType({
	name: "Product", // this is a table name
	fields: () => ({
		id: {type: GraphQLString}, // define properties and type of it
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
	})
})