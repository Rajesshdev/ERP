import { CssBaseline, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebarr from './Sidebar/App';
import './Global.css'
const Sidebar: React.FC = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  const loginStatus = localStorage.getItem('login');
  const navigate = useNavigate();
  console.log(loginStatus, 'loginn');
  useEffect(() => {
    if (window.location.pathname !== '/auth/login') {
      if(localStorage.getItem("login")!=null){
      setSignedIn(true);
      }
      else{
        navigate("/auth/login")
      }
    } else {
      setSignedIn(false);
    }
  }, [navigate]);
  return (
    <>
      {isSignedIn && (
        <>
          <Sidebarr />
          <Divider orientation="vertical"  flexItem />
        </>
      )}
    </>
  );
};

export default Sidebar;
