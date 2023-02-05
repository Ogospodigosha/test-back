import {client} from "./db";





export type ItemType = {
    id: number
    img: string
    description: string
}

export const itemsRepository = {
    async findProducts(title: string | undefined): Promise<ItemType[]> {
        if (title) {
           return  client.db('items').collection<ItemType>('item').find({title: {$regex: title}}).toArray()
        } else {
            return  client.db('items').collection<ItemType>('item').find({}).toArray()
        }
    },
    async createProduct() {
        const newItem = {
            id: +(new Date()),
            img: '',
            description: 'dsdsfs'
        }
        await client.db('items').collection<ItemType>('item').insertOne(newItem)
        return newItem
    }
}