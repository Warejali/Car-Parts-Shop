import { useEffect, useState } from "react";

const useProductDetails = id => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `https://pacific-eyrie-12324.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])

    return [products]
}

export default useProductDetails;