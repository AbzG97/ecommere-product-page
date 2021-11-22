import React from 'react';
import './App.css';
import Item from './Components/Item';
import Navbar from './Components/Navbar';
import { v4 as uuid } from 'uuid';



function App() {
  const [item_in_cart, setItem_in_cart] = React.useState([]);

  return (
    <div className="App">
      <Navbar item_in_cart={item_in_cart} setItem_in_cart={setItem_in_cart}/>
      <Item item_in_cart={item_in_cart} setItem_in_cart={setItem_in_cart}/>
    </div>
  );
}

export default App;
