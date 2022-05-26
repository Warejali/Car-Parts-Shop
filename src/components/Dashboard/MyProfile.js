import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div className=' lg:pt-20 z-19'>

            <div class="card w-96 bg-base-100 shadow-xl">

                <div class="avatar flex justify-center mt-3">
                    <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} alt="" />
                    </div>
                </div>

                <div class="card-body items-center text-center">
                    <h2 class="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Update Profile</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;