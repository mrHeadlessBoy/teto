import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/sections/Home';
import HomeContent from './components/sections/HomeContent';
import Chatchawan from './components/sections/Chatchawan';
import Project from './components/sections/Project';
import Hollow from './components/sections/Hollow';
import NotFound from './components/sections/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeContent />} />
          <Route path="greetings" element={<HomeContent />} />
          <Route path="chatchawan" element={<Chatchawan />} />
          <Route path="project" element={<Project />} />
          <Route path="hollow" element={<Hollow />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
