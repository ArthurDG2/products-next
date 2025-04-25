import { IProduct, IProductRequest } from "@/interfaces/product.interface"

const apiUrl = 'http://localhost:3000/products'

export async function getProducts(): Promise<IProduct[]>{
    const response = await fetch(apiUrl)
    const json = await response.json()

    return json
}

export async function createProduct(data: IProductRequest){
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers:{
            "Content-Type" : "aplication/json"
        },
        body: JSON.stringify(data)
    })

    if(response.status == 201){
        alert('Produto cadastrado com sucesso')
    }
}