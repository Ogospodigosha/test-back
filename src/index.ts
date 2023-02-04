import express  from 'express'
import bodyParser from 'body-parser'
import {productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/addresses-router";
import {rundDb} from "./repositories/db";
const app = express()
const port = 5000





const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use('/products', productsRouter)
// app.use('/addresses', addressesRouter)


const startApp = async () => {
    await rundDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
startApp()