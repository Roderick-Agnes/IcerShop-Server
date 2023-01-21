import { GraphQLObjectType, GraphQLString } from "graphql";

export const CategoryType = new GraphQLObjectType({
	name: "Category", // this is a table name
	fields: () => ({
		id: {type: GraphQLString}, // define properties and type of it
		title: {type: GraphQLString},
        thumbnail: {type: GraphQLString},
	})
})