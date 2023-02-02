import express, {Request, Response}  from 'express'
const app = express()
const port = 3000

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'apple'}]
const addresses = [{id: 1, value: 'Nachimova'}, {id: 2, value: 'Molodejnaya'}]

app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})
app.get('/products/:id', (req: Request, res: Response) => {
    let product = products.find(el => el.id === +req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i=0; i<products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i,1)
            res.send(204)
            return
        }
    }
    res.send(404)
})
app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    let address = addresses.find(el => el.id === +req.params.id )
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})