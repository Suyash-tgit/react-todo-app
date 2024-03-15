import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import './styles/app.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context, server } from './main';

function App() {
  const {setUser, setAuthenticated, setLoading} = useContext(Context)

  useEffect(() => {
    setLoading(true);
    axios.get(`${server}/users/me`,{
      withCredentials: true,
    }).then(res => {
      setUser(res.data.user);
      setAuthenticated(true);
      setLoading(false);
    }).catch((error)=> {
      setUser({})
      setAuthenticated(false);
      setLoading(false);
    })
  },[])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
