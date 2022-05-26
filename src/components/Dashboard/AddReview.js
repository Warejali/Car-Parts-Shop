
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './StarRating.css'
import { useStars } from "stars-rating-react-hooks";

const AddReview = () => {
    const [user] = useAuthState(auth);
    const name = user.displayName;
    const img = user.photoURL;

    const config = {
        totalStars: 5,
        initialSelectedValue: 2,
        renderFull: "★",
        renderEmpty: "☆"
    };

    const {
        stars,
        getStarProps,
        getStarWrapperProps,
        isSelecting,
        selectingValue,
        selectedValue
    } = useStars(config);

    console.log({ selectingValue, selectedValue });


    const reviewSubmit = (event) => {
        event.preventDefault();
        const userName = event.target.name.value;
        const text = event.target.text.value;
        const image = event.target.image.value;
        console.log(text);
        const review = {
            userName,
            image,
            text,
            star: selectingValue
        }

        fetch('https://pacific-eyrie-12324.herokuapp.com/review', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("done")
                data("")
            })
    }
    return (
        <div>
            <form onSubmit={reviewSubmit}>
                <div>
                    <input name='name' type="text" value={name} class="input input-bordered input-primary w-full max-w-xs my-5" />
                </div>
                <div>
                    <input name='image' type="url" value={img} class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <textarea name='text' class="textarea textarea-primary w-full max-w-xs my-4" placeholder="Type Your text"></textarea>
                </div>

                <div>
                    <h3>
                        {isSelecting ? "Selecting" : "Selected"} value: {selectingValue}
                    </h3>
                    <span
                        {...getStarWrapperProps({
                            style: {
                                cursor: "pointer"
                            }
                        })}
                    >
                        {stars?.map((star, i) => (
                            <span
                                key={i}
                                {...getStarProps(i, {
                                    style: {
                                        fontSize: "40px",
                                        color: "gold"
                                    },
                                })}
                            >
                                {star}
                            </span>
                        ))}
                    </span>
                </div>

                <div className='mt-3'>
                    <input className='btn btn-primary' type="submit" value="ADD REVIEW" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;