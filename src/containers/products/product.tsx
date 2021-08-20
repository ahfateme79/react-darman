import { useEffect, useState } from "react"
import Table from "../../components/table/table"
import styled from "styled-components";
import Loadinganimation from "../../components/loading/loading";


const Productstyle=styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    padding: 20px;
`


const Products:React.FC=()=>{
    const [product,setProduct]=useState<{id:number;title:string;price:number}[] | undefined>()
    const headers = ['id','title','price']
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(result=>{setProduct(result)})
    })
    return(
        <Productstyle>
            {
                product?<Table data={product} head={headers}/>:<Loadinganimation/>
            }
            
        </Productstyle>
    )
}

export default Products
