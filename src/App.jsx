import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Nav } from './components';
import { Home, Pool } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 bg-[#09080C] min-h-screen flex flex-col">
      <Nav />

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto">
        <div className="items-center flex flex-col px-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pool" element={<Pool />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
