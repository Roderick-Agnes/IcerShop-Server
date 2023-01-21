import express, { Request, Response } from "express";
import cors from "cors";
import { connectToDataSource } from './app-data-source';
import dotenv from 'dotenv'
import { graphqlHTTP } from "express-graphql";
import {schema} from "./Schema"

const main = async () => {
	// connect to mysql database
	await connectToDataSource()

	// create and setup express app
	dotenv.config();
	const app = express();
	
	// use middleware
	app.use(cors());
	app.use(express.json());

	app.use("/graphql", graphqlHTTP({schema, graphiql: true}));

	app.listen(process.env.PORT || 8000 , () => {
		console.log(`Server running at http://localhost:${process.env.PORT}`);
	})

	// register routes
	app.get("/users", (req: Request, res: Response) =>  {
		// here we will have logic to return all users
		res.status(200).json('ok good');
	})
}
main().catch(err => {
	console.log(err)
}) 
