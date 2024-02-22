import axios from 'axios'

export async function ProductData()
{
    const products = await axios.get("https://fakestoreapi.com/products");
    return products;
}