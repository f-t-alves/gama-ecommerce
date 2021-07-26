export type clientType = {
    id: number,
    name: string,
    email: string,
    address: string,
    phone: string
}

export type productType = {
    id: number,
    name: string,
    description: string,
    imageURL: string,
    price: number
}

export type orderType = {
    id: number,
    products: productType[],
    client: clientType,
    orderDate: Date,
    status: string
}