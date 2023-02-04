const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'apple'}]

export const productsRepository = {
    async findProducts(title: string | undefined) {
        if (title) {
            let foundProducts = products.filter(el => el.title.indexOf(title) > -1)
            return foundProducts
        } else {
            return  products
        }
    },
    async getProductById(id: string) {
        const searchProduct = products.find(el => el.id === +id)
        return searchProduct
    },
   async createProduct  (title: string) {
        const newProduct = {
            id: +(new Date()),
            title: title
        }
        products.push(newProduct)
        return products
    },
   async updateProduct(id: number, title: string ) {
        let product = products.find(el => el.id === id)
        if (product) {
            product.title = title
            return true
        } else {
            return false
        }
    },
    async deleteProduct(id: number) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1)
                return true
            }
        }
        return false
    }

}