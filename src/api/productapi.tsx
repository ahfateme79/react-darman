import Api from "./index"

export const getProducts = () => Api('products','GET',null)
export const addProduct = (product:Object) => Api('products','POST',product)