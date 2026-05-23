import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage';
import CoBien from './pages/CoBien';
import ODau from './pages/ODau';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/co-bien" element={<CoBien />} />
        <Route path="/co-bien/" element={<CoBien />} />
        <Route path="/kham-pha/o-dau" element={<ODau />} />
        <Route path="/kham-pha/o-dau/" element={<ODau />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
