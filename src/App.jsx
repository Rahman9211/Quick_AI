import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import WriteArticle from './Pages/WriteArticle';
import BlogTitles from './Pages/BlogTitles';
import Layouts from './Pages/Layouts';
import GenerateImage from './Pages/GenerateImage';
import RemoveBackground from './Pages/RemoveBackground';
import RemoveObject from './Pages/RemoveObject';
import ReviewResume from './Pages/ReviewResume';
import Community from './Pages/Community';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/ai' element={<Layouts />}>
        <Route index element={<Dashboard />} />
        <Route path='write-article' element={<WriteArticle />} />
        <Route path='blog-titles' element={<BlogTitles />} />
        <Route path='generate-images' element={<GenerateImage />} />
        <Route path='remove-background' element={<RemoveBackground />} />
        <Route path='remove-object' element={<RemoveObject />} />
        <Route path='review-resume' element={<ReviewResume />} />
        <Route path='community' element={<Community />} />
      </Route>
    </Routes>
  );
};

export default App;
