import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  const [menuItems,setMenuItems]=useState(items)
  const [categories,setCategories]=useState(['all',... new Set(items.map(item=>item.category))])
 
  const filterCategory=(category)=>{
    if(category==='all'){
      setMenuItems(items)
    }
    else{
      const newItems=items.filter(item=>item.category===category)
      setMenuItems(newItems)
    }
  }
  
  return <section className="menu section">
    <div className="title">
      <h2>our menu</h2>
      <div className="underline"></div>
      <Categories categories={categories} filterCategory={filterCategory} />
      <Menu items={menuItems} />
    </div>
  </section>;
}

export default App;
