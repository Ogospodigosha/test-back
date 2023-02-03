const addresses = [{id: 1, value: 'Nachimova'}, {id: 2, value: 'Molodejnaya'}]
export const addressesRepository = {
    getAddresses() {
        return addresses
    },
    getAddressById(id: number) {
        let address = addresses.find(el => el.id === id)
        return address
    }
}
