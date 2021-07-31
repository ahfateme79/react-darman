import TablePanel from "./table"
import { useState, useEffect } from 'react'


const arr = ['id', 'description', 'price']

const Products = () => {
    const [product, setProduct] = useState < { id: number, description: string, price: number }[] | undefined > ([])
    const [head, setHead] = useState < string[] > ([])
    const btns = [
        {
            title: 'delete',
            color: 'blue',
            rout: './delete'
        },
        {
            title: 'edit',
            color: 'red',
            rout: './edit'
        },

    ]
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(result => setProduct(result))
        setHead(arr)
    }, [])

    return (
        <div>
            <TablePanel data={product} heading={head} btns={btns}/>
        </div>
    )
}
export default Products