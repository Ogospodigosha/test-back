import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-db-repository";
import {itemsRepository} from "../repositories/items-db-repository";


export const itemsRouter = Router({})

itemsRouter.get('/', async (req: Request, res: Response) => {
    const foundProducts = await itemsRepository.findProducts(req.query.title?.toString())
    res.send(foundProducts)
})

itemsRouter.post('/', async (req: Request, res: Response) => {
    const newProduct = await itemsRepository.createProduct()
    res.status(201).send(newProduct)
})
