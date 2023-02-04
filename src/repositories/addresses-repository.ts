const addresses = [{id: 1, value: 'Nachimova'}, {id: 2, value: 'Molodejnaya'}]
export const addressesRepository = {
    async getAddresses() {
        return addresses
    },
    async getAddressById(id: number) {
        let address = addresses.find(el => el.id === id)
        return address
    }
}
