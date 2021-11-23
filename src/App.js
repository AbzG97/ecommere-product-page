import React from 'react';
import './App.css';
import Item from './Components/Item';
import Navbar from './Components/Navbar';
import {Routes, Route, Switch} from 'react-router-dom'
import CollectionsPage from './Components/CollectionsPage';
import MenPage from './Components/MenPage';
import WomenPage from './Components/WomenPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';



function App() {
  const [item_in_cart, setItem_in_cart] = React.useState([]);

  return (
    <div className="App">
      <Navbar item_in_cart={item_in_cart} setItem_in_cart={setItem_in_cart}/>
      <Routes>
        <Route path="/" element={<Item item_in_cart={item_in_cart} setItem_in_cart={setItem_in_cart}/>}/>
        <Route path="/collections" element={ <CollectionsPage/>}/>
        <Route path="/men" element={ <MenPage/>}/>
        <Route path="/women" element={ <WomenPage/>}/>
        <Route path="/about" element={ <AboutPage/>}/>
        <Route path="/contact" element={ <ContactPage/>}/>
      </Routes>
    
      
    </div>
  );
}

export default App;
