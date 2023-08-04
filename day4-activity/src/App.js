import React from 'react';
import './App.css';
import {Home, About, Events, Contacts, Page404, CompanyHistory, Location} from './pages';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>

        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App;