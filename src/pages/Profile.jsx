import React, { useContext } from 'react'
import { Context } from '../main';
import loader from '../components/loader';

const Profile = () => {
  const {isAuthenticated, loading, user} = useContext(Context);
  return (
    loading ? <loader /> : 
    <div>
    <h1>{user?.name}</h1>
    <p>{user?.email}</p>
    </div>
  )
}

export default Profile
