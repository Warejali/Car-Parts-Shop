import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const { email, displayName } = user;
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/profile/${id}`;
        fetch(url, {
            method: "GET",
            headers: {
                authorization: ` Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [id])


    const goToUpdate = () => {
        navigate(`/dashboard/updateProfile`)
    }
    return (
        <div className=' lg:pt-20 z-19'>

            <div class="card w-96 bg-base-100 shadow-xl">

                <div class="avatar flex justify-center mt-3">
                    <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} alt="" />
                    </div>
                </div>

                <div class="card-body items-center text-center">
                    <h2 class="card-title">{displayName}</h2>
                    <p>{email}</p>
                    <p>{profile.phone}</p>
                    <p>{profile.education}</p>

                    <div class="card-actions">
                        <button onClick={() => goToUpdate(email)} class="btn btn-primary">Update Profile</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;