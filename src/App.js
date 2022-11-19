import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/blog/BlogPage';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path="/" element={ <Navigate to="/"/> } />
      </Routes>
    </div>
  );
};

export default App;