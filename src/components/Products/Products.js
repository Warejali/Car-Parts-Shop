import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://pacific-eyrie-12324.herokuapp.com/product').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-20'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    products.map(product => <Product product={product} refetch={refetch}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;