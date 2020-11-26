export interface Product{
    id?: number         //  ? para dizer que é opcional, os produtos criados não irão precisar, obrigatoriamente, de um ID
    name: string
    price: number
}