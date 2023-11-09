import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import SignInUp from './SignInUp';
import Movie from './Movie';
import Review from './Review';
import NotFound from './NotFound.js';

const App = () => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signinup" element={<SignInUp />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/review" element={<Review />} />
      <Route path="/review/:movie_id" element={<Review />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
    </Routes>
  </div>
);

export default App;

