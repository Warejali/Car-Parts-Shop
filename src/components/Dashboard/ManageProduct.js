import React from 'react';
import { toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts';

const ManageProduct = ({ product, refetch }) => {
    const { name, price, quantity } = product;
    const [products, setProducts] = useProducts()



    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                    toast.success("Product has been deleted")
                    refetch()
                })
        }
    }
    return (

        <div className='lg:mx-12 grid grid-cols'>
            <div className='gap-5 grid lg:grid-cols-5 border'>
                <div className="flex justify-center items-center">
                    <img className='xs' src={product.img} alt="" />
                </div>
                <div className="flex justify-center items-center bg-green-50">
                    <h5>{name}</h5>
                </div>
                <div className="flex justify-center items-center bg-yellow-50">
                    <p>{price} USD</p>
                </div>
                <div className="flex justify-center items-center bg-green-50">
                    <h6>Quantity: {quantity}</h6>
                </div>
                <div className=" flex flex-col justify-center items-center bg-yellow-50">
                    <div className='mb-3'>
                        <button type="button" class="btn btn-xs btn-accent">shipping</button>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(product._id)} type="button" class="btn btn-xs btn-secondary">Delete X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;