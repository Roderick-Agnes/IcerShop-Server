import { DataSource } from 'typeorm';
import dotenv from 'dotenv'


export const connectToDataSource = async ():Promise<void> => {
    dotenv.config();
    const MongoDbDataSource = new DataSource({
        type: "mongodb",
        url: process.env.MONGODB_URL,        
        useNewUrlParser: true,
        useUnifiedTopology: true,
        logging: true,
        synchronize: true, // create all table then change it to true to update in db
        entities: [
            "Entities/*.{ts,js}"
        ],
    })

    await MongoDbDataSource.initialize()
    .then(() => {
        console.log("MongoDB - Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
}
