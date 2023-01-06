import React, { useState } from 'react';
import GroceryList from './containers/GroceryList';
import Form from './containers/Form';
import ShoppingCart from './containers/ShoppingCart';
import './App.css';

function App() {
      const [product, setProduct] = useState([{item: 'Peach',
                                               brand: 'Peachy Dream',
                                               units: 'ea',
                                               quantity: 100,
                                               isPurchased: 'true'}]);
     



 function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setProduct((prev) => [...prev, formJson]);
    document.querySelector('.form').reset();
}



  return(
    <div className='container'>
      <GroceryList items={product}/>
      <Form onSubmit={handleSubmit}/>
      <ShoppingCart items={product}/>
    </div>
  );

}

export default App;
