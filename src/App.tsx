import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Users from "./components/Users";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import Buy from "./components/Buy";


function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/user" element={ <Users/> }/>
            <Route path="/basket" element={ <Basket/> }/>
            <Route path="/favorite" element={ <Favorite/> } />
            <Route path="/buy" element={ <Buy/> }/>
        </Routes>
    </div>
  );
}

export default App;
