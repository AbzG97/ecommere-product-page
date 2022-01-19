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
import {v4 as uuid} from 'uuid';
import image_product_1 from './images/image-product-1.jpg'



function App() {
  const [item_in_cart, setItem_in_cart] = React.useState([]);
  const [items, setItems] = React.useState([
    {
      "id": uuid(),
      "product_title": "Fall Limited Edition Sneakers",
      "product_price_after_sale": 125.00,
      "image": image_product_1
   },
   {
    "id": uuid(),
    "product_title": "Fall Limited Edition Sneakers",
    "product_price_after_sale": 125.00,
    "image": image_product_1
 },
 {
  "id": uuid(),
  "product_title": "Fall Limited Edition Sneakers",
  "product_price_after_sale": 125.00,
  "image": image_product_1
},
  ])

  return (
    <div className="App">
      <Navbar item_in_cart={item_in_cart} setItem_in_cart={setItem_in_cart}/>
      <Routes>
        <Route path="/" element={<Item item_in_cart={item_in_cart} setItem_in_cart={setItem_in_cart}/>}/>
        <Route path="/collections" element={ <CollectionsPage items={items}/>}/>
        <Route path="/men" element={ <MenPage/>}/>
        <Route path="/women" element={ <WomenPage/>}/>
        <Route path="/about" element={ <AboutPage/>}/>
        <Route path="/contact" element={ <ContactPage/>}/>
      </Routes>
    
      
    </div>
  );
}

export default App;
