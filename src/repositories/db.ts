import {MongoClient} from 'mongodb'


const mongoUri =  "mongodb://0.0.0.0:27017"

export const client = new MongoClient(mongoUri)

export async function rundDb() {
    try {
        await client.connect();
        await client.db('products').command({ping: 1})
    } catch {
        await client.close();
    }
}