import { useEffect, useState } from "react"
import Fashion from "../components/Fashion"

const ShopPage = () => {

    const [product, setProduct] = useState([])

    useEffect(()=> {
        fetch('https://dummyjson.com/products')
                    .then((res)=> res.json())
                    .then((data)=> setProduct(data.products))
                    .catch((error)=> {
                        console.log(error.message)
                    })
    }, [])

    
    return (
    <div>
      <Fashion products={product}/>
    </div>
  )
}

export default ShopPage
