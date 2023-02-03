import {Request, Response, Router} from "express";

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'apple'}]
export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    res.send(products)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    let product = products.find(el => el.id === +req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.put('/:id', (req: Request, res: Response) => {
    let product = products.find(el => el.id === +req.params.id)
    if (product) {
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    }
    products.push(newProduct)
    res.status(201).send(newProduct)
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    for (let i=0; i<products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i,1)
            res.send(204)
            return
        }
    }
    res.send(404)
})