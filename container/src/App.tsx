import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
const AuthApp = React.lazy(() => import('auth/AuthApp'));
const CatalogApp = React.lazy(() => import('catalog/CatalogApp'));
const Header = React.lazy(() => import('common/Header'));
const Sidebar = React.lazy(() => import('common/Sidebar'));
const App = () => {

  useEffect(() => {
    if(window.location.pathname==="/"){
      <Link to="/auth/login"/>
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Suspense fallback={<p>Loading...</p>}>
        <div style={{display:"flex"}}>
                  <Sidebar  />
          <div style={{flex:1}}>
          <Header />
          <Routes>
            <Route path='/auth/*' element={<AuthApp  />} />
            <Route path='catalog/*' element={<CatalogApp />} />
          </Routes>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default App;
