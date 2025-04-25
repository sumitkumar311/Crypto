import React from "react";
import Crypto from './component/Crypto';
import { Link, Routes, Route } from "react-router-dom";
import CryptoTable from "./component/CryptoTable"; 

const App = () => {
  return (
    <div>
      <nav className="flex gap-20 font-semibold text-xl p-4 px-12 justify-center bg-gray-800 text-white">
        
        <Link to="/" className="hover:text-gray-400">
          Real Time Crypto
        </Link>
        <Link to="/api-crypto" className="hover:text-gray-400">
          API Crypto
        </Link>
      </nav>
      <Routes>
        
        <Route path="/" element={<Crypto />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/api-crypto" element={<CryptoTable />} /> 
      </Routes>
    </div>
  );
};

export default App;
