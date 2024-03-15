import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../main';
import toast from "react-hot-toast";
import axios from 'axios';
import { server } from '../main';

const Login = () => {
  const {isAuthenticated, setAuthenticated,loading, setLoading} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
    console.log(email,password);
    const {data} = await axios.post(`${server}/users/login`, {
      email,password
    },{ 
      headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
    })
  toast.success(data.message);
  setAuthenticated(true);
  setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setAuthenticated(false);
      setLoading(false);
    }
  };
  if(isAuthenticated) return <Navigate to={"/"}/>
  return (
    <div className='login'>
      <section>
        <form onSubmit={submitHandler}>
        <input 
            type='email' 
            placeholder='Email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type='password' 
            placeholder='Password'
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
            <button disabled={loading} type='submit'>Login</button>
            <h4>Or</h4>
            <Link to={"/register"}>Sign Up</Link>
        </form>
      </section>
    </div>
  )
}

export default Login
