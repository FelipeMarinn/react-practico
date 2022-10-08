import { useEffect, useState } from "react"

const useGetProducts = (API) => {
    
    const [products, setProducts] = useState([])

	useEffect(() => {
	  fetch(API)
	    .then( res => res.json() )
		.then( data => setProducts(data) )
	}, [])

    return products
}

export default useGetProducts

