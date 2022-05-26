import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserTable from './UserTable';

const ManageUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: ` Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Total Users {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserTable key={user._id} user={user} refetch={refetch}></UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;