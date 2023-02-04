import {client} from "./db";


const _products = [{id: 1, title: 'tomato'}, {id: 2, title: 'apple'}]


export type ProductType = {
    id: number
    title: string
}

export const productsRepository = {
    async findProducts(title: string | undefined): Promise<ProductType[]> {
        if (title) {
           return  client.db('shop').collection<ProductType>('products').find({title: {$regex: title}}).toArray()
        } else {
            return  client.db('shop').collection<ProductType>('products').find({}).toArray()
        }
    },
    async getProductById(id: string) {
        return await client.db('shop').collection<ProductType>('products').findOne({id: +id})
    },
    async createProduct(title: string) {
        const newProduct = {
            id: +(new Date()),
            title: title
        }
        await client.db('shop').collection<ProductType>('products').insertOne(newProduct)
        return newProduct
    },
    async updateProduct(id: number, title: string) {
        const result = await client.db('shop').collection<ProductType>('products').updateOne({id: id}, {$set: {title: title}})
        return result.matchedCount === 1
    },
    async deleteProduct(id: number) {
      const result =  await client.db('shop').collection<ProductType>('products').deleteOne({id})
        return result.deletedCount
    }
}