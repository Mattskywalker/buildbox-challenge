import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './routes';
import Header from './layouts/MainLayout/Header';
import MainLayout from './layouts/MainLayout';
import PostProvider from './Context/PostContext';


function App() {
  return (
    <>
      <PostProvider>
        <Router />
      </PostProvider>
    </>
  );
}

export default App;
