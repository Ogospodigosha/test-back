import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-repository";


export const productsRouter = Router({})

productsRouter.get('/', async (req: Request, res: Response) => {
    const foundProducts = await productsRepository.findProducts(req.query.title?.toString())
    res.send(foundProducts)
})
productsRouter.get('/:id', async (req: Request, res: Response) => {
    const searchProduct = await productsRepository.getProductById(req.params.id)
    if (searchProduct) {
        res.send(searchProduct)
    } else {
        res.send(404)
    }
})
productsRouter.put('/:id', async (req: Request, res: Response) => {
    const isUpdate = await productsRepository.updateProduct(+req.params.id, req.body.title)
    if (isUpdate) {
        const updatedProduct = productsRepository.getProductById(req.params.id)
        res.send(updatedProduct)
    } else {
        res.send(404)
    }

})
productsRouter.post('/', async (req: Request, res: Response) => {
    const newProduct = await productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)
})
productsRouter.delete('/:id', async (req: Request, res: Response) => {
    const isDeleted = await productsRepository.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.send(204)
    }else {
        res.send(404)
    }
})