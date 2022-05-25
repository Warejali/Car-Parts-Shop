import React from 'react';
import useStars from 'stars-rating-react-hooks';

const Review = ({ review, refetch }) => {
    const { userName, text, star, image } = review;

    const config = {
        totalStars: 5,
        initialSelectedValue: star,
        renderFull: "★",
        renderEmpty: "☆"
    };

    let {
        stars,

    } = useStars(config);



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={image} alt="" />
                    </div>
                </div>
                <h2 className="card-title">{userName}</h2>
                <p className='italic'>{text}</p>
                <p className='text-orange-400 text-2xl'> {stars} <span className='text-base font-semibold uppercase text-gray-500'>{star} Stars</span></p>
            </div>
        </div>
    );
};

export default Review;