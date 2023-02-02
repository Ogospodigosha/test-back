import express, {Request, Response}  from 'express'
const app = express()
const port = 3000

const products = [{title: 'tomato'}, {title: 'apple'}]
const addresses = [{id: 1, value: 'Nachimova'}, {id: 2, value: 'Molodejnaya'}]

app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})
app.get('/products/:productTitle', (req: Request, res: Response) => {
    let product = products.find(el => el.title === req.params.productTitle)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }

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