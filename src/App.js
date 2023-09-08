import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/' element={<Home />} />


          <Route path='/search/:searchTerm' element={<> <div className='app-page'><Sidebar /> <SearchPage /></div>  </>} />



        </Routes>

      </BrowserRouter>





      {/* Header */}


      {/* Home = Sidebar + recomemded page */}


      {/* RecommendedVideo */}


    </div >
  );
}

export default App;
