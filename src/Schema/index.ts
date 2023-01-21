import { GraphQLObjectType, GraphQLSchema } from "graphql/type"
import { CREATE_PRODUCT } from "./Mutations/Product"
import { GET_ALL_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from "./Queries/Product"
import { GET_ALL_CATEGORIES } from './Queries/Category';

const RootQuery = new GraphQLObjectType({
	name: "RootQuery",
	fields: {
        getAllProducts: GET_ALL_PRODUCTS,
		getProductsByCategory: GET_PRODUCTS_BY_CATEGORY,
		getAllCategories: GET_ALL_CATEGORIES
    },
})
const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
        createItem: CREATE_PRODUCT,
    },
})
export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
})
