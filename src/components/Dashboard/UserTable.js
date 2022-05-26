import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({ user, refetch }) => {
    const { email, role, photoURL } = user;
    const makeAdmin = () => {
        fetch(`https://pacific-eyrie-12324.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("You have not permission")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('make admin successfully')
                }
            })
    }


    const handleDelete = email => {
        fetch(`https://pacific-eyrie-12324.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('The user has been deleted')
                    refetch()
                }
                else {
                    toast.error("Something id wrong")
                }
            })

    }
    return (
        <tr>
            <td><img src={photoURL} alt="" /></td>
            <td>{user._id}</td>
            <td>{email}</td>

            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}
                {
                    role === 'admin' && <button className='uppercase'>{role}</button>
                }
            </td>
            <td>
                <button onClick={() => handleDelete(email)} class="btn btn-xs">Delete <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default UserTable;