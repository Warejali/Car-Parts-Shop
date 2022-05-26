import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://pacific-eyrie-12324.herokuapp.com/review', {
        method: "GET"
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review refetch={refetch} key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;