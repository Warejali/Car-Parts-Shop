import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const navigate = useNavigate()

    const onSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const education = event.target.education.value;
        const about = event.target.about.value;
        const city = event.target.city.value;
        const phone = event.target.phone.value;
        const LinkedIn = event.target.linkedIn.value;
        const country = event.target.country.value;
        const updateUser = { name, email, education, about, city, phone, LinkedIn, country };

        const url = `https://pacific-eyrie-12324.herokuapp.com/users/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success('Profile has been updated');
                event.target.reset()
                navigate("/dashboard")
            })
    }
    return (
        <div class="hero min-h-screen bg-base-200">

            <div class="card w-full max-w-3xl shadow-2xl bg-base-100 ">
                <form onSubmit={onSubmit} class="card-body">
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" name='orderQuantity' value={displayName} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" name='email' value={email} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input type="number" name='phone' class="input input-bordered" placeholder='Type Your Phone number' />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">About me</span>
                            </label>
                            <input type="text" name='about' placeholder='Type Yourself' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Education</span>
                            </label>
                            <input type="text" name='education' placeholder='Type Your Education' class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">City</span>
                            </label>
                            <input type="text" name='city' placeholder='City' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Country</span>
                            </label>
                            <input type="text" name='country' placeholder='Country' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">LinkedIn</span>
                            </label>
                            <input type="link" name='linkedIn' placeholder='Country' class="input input-bordered" />
                        </div>

                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Check Out</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;